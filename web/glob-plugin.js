// @ts-check
const esbuild = require('esbuild');
const glob = require('tiny-glob');
const chokidar = require('chokidar');
const path = require('path');
const match = require('minimatch');
const fs = require('fs');

/** @type {() => esbuild.Plugin} */
function globPlugin() {
  return {
    name: 'glob',
    async setup(build) {
      if (!Array.isArray(build.initialOptions.entryPoints)) {
        throw new Error('GlobPlugin currently only support array entrypoints');
      }

      if (!!build.initialOptions.watch) {
        const entryGlobs = build.initialOptions.entryPoints;
        const watcher = chokidar.watch(entryGlobs);

        // AUGMENT OPTIONS
        // ---------------
        // Plugin takes care of running the build, so disable initial run by overriding entryPoints
        build.initialOptions.entryPoints = undefined;

        // Plugin takes care of watching fs, so disable esbuild watch
        const onRebuild = typeof build.initialOptions.watch === 'object'
          ? build.initialOptions.watch.onRebuild
          : undefined;
        build.initialOptions.watch = false;

        // Plugin relies on incremental and metafile options
        const sharedOptions = {
          ...build.initialOptions,
          incremental: true,
          metafile: true,
        };

        // MAPS
        // ----
        /** @type {Map<string, string[]>} */
        const entryToInputsMap = new Map();

        /** @type {Map<string, esbuild.BuildResult>} */
        const entryToBuildResultMap = new Map();

        /** @type {Map<string, string[]>} */
        const entryToOutputsMap = new Map();

        // UTILITY FUNCTIONS
        // -----------------
        /** @type {(filePath: string) => boolean} */
        function matchesGlobs(filePath) {
          return entryGlobs.some((glob) => match(filePath, glob));
        }

        /** @type {(entry: string, buildResult: esbuild.BuildResult) => Promise<void>}  */
        async function handleBuildResult(entry, buildResult) {
          invariant(buildResult.metafile);

          const outputs = Object.keys(buildResult.metafile.outputs);
          const inputs = Object.values(buildResult.metafile.outputs)
            .filter((output) => !!output.entryPoint)
            .flatMap((output) => Object.keys(output.inputs)
              .filter((input) => !input.includes('node_modules'))
              .map((input) => normalizePath(input))
            );

          watcher.add(inputs);

          entryToInputsMap.set(entry, inputs);
          entryToOutputsMap.set(entry, outputs);
          entryToBuildResultMap.set(entry, buildResult);

          onRebuild?.(null, buildResult);
        }

        /** @type {(input: string) => string[]} */
        function findEntriesByInput(input) {
          return [...entryToInputsMap.entries()]
            .filter(([_entry, inputs]) => inputs.includes(input))
            .map(([entry]) => entry);
        }

        // WATCH
        // -----
        watcher
          .on('add', async (addedPath) => {
            if (!matchesGlobs(addedPath)) return;

            console.log('[add]', addedPath);

            const buildResult = await esbuild.build({
              ...sharedOptions,
              entryPoints: [addedPath],
            });

            handleBuildResult(addedPath, buildResult);
          })
          .on('change', async (changedPath) => {
            const entries = findEntriesByInput(changedPath);

            entries.forEach(async (entry) => {
              console.log('[change]', entry);

              const oldResult = entryToBuildResultMap.get(entry);

              invariant(oldResult?.rebuild);
              const newResult = await oldResult.rebuild();

              handleBuildResult(entry, newResult);
            });
          })
          .on('unlink', async (unlinkedPath) => {
            if (!build.initialOptions.write) return;

            const outputPaths = entryToOutputsMap.get(unlinkedPath);

            if (outputPaths) {
              console.log('[unlink]', unlinkedPath);
              outputPaths.forEach((outputPath) => fs.unlinkSync(outputPath));
            }
          });
      } else {
        const resolvedEntryPoints = (await Promise.all(
          build.initialOptions.entryPoints.map((entryPoint) => glob(entryPoint))
        )).flat();
        build.initialOptions.entryPoints = resolvedEntryPoints;
      }
    }
  };
}

// UTILITIES
// ---------

/**
 * @type {<TValue>(value: TValue | null | undefined, message?: string) => asserts value is TValue}
 */
function invariant(value, message = 'Unexpected Error') {
  if (value === null || value === undefined) {
    throw new Error(message);
  }
}

/** 
 * @type {(filePath: string) => string} 
 */
function normalizePath(filePath) {
  return path.relative(__dirname, filePath.replace(/^(\w+\:)/, ''))
}

module.exports = globPlugin;