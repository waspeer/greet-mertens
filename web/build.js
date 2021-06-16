// @ts-check
const { promisify } = require('util');
const esbuild = require('esbuild');
const fs = require('fs');
const glob = require('tiny-glob');
const path = require('path');
const sass = require('sass');
const chokidar = require('chokidar');

const exists = promisify(fs.exists);
const mkdir = promisify(fs.mkdir);
const rimraf = promisify(require('rimraf'));
const unlink = promisify(fs.unlink);
const writeFile = promisify(fs.writeFile);

const INPUT_DIRECTORY = 'src';
const OUTPUT_DIRECTORY = '_build';
const STATIC_DIRECTORY = path.join(OUTPUT_DIRECTORY, 'static');

const DATA_DIRECTORY = path.join(OUTPUT_DIRECTORY, '_data');
const LAYOUTS_DIRECTORY = path.join(OUTPUT_DIRECTORY, '_includes');
const STYLES_DIRECTORY = path.join(STATIC_DIRECTORY, 'styles');
const JAVASCRIPT_DIRECTORY = path.join(STATIC_DIRECTORY, 'javascript');
const TEMPLATES_DIRECTORY = path.join(OUTPUT_DIRECTORY, 'templates');

/** @typedef {Partial<Omit<sass.Options, 'file'>>} SassPluginOptions */
/** @type {(options?: SassPluginOptions) => esbuild.Plugin} */
function sassPlugin(options = {}) {
  return ({
    name: 'sass',
    setup(build) {
      build.onResolve({ filter: /\.scss$/ }, args => ({
        path: path.resolve(args.resolveDir, args.path),
        namespace: 'sass'
      }));
      build.onLoad({ filter: /.*/, namespace: 'sass' }, args => {
        // renderSync is significantly faster than render
        const compiled = sass.renderSync({ ...options, file: args.path });
        return {
          contents: compiled.css.toString(),
          loader: 'css'
        };
      });
    }
  });
}

/** @type {esbuild.BuildOptions} */
const sharedBundleOptions = {
  bundle: true,
  outdir: OUTPUT_DIRECTORY,
  write: false,
}

/** @typedef {(entryPoints: string[], extendOptions?: Partial<esbuild.BuildOptions>)  => Promise<esbuild.BuildResult>} BundleFunction */
/** @type {BundleFunction} */
async function bundleServerSide(entryPoints, extendOptions = {}) {
  return await esbuild.build({
    ...sharedBundleOptions,
    entryPoints,
    format: 'cjs',
    platform: 'node',
    plugins: [sassPlugin({
      includePaths: [path.join(INPUT_DIRECTORY, 'styles')]
    })],
    ...extendOptions,
  });
}

/** @type {BundleFunction} */
async function bundleClientSide(entryPoints, extendOptions = {}) {
  return await esbuild.build({
    ...sharedBundleOptions,
    entryPoints,
    ...extendOptions,
  });
}

/** @type {(file: esbuild.OutputFile) => Promise<string | undefined>} */
async function handleFile(file) {
  const { fileName, type, extension } = file.path.match(
    /.*\/(?<fileName>[^.]+)\.(?<type>[^.]+)\.(?<extension>[a-z]+)$/i
  )?.groups ?? {};

  /** @type {string | undefined} */
  let outputPath;

  if (type === 'template' && extension === 'js') {
    outputPath = outputPath = path.join(TEMPLATES_DIRECTORY, `${fileName}.11ty.js`);
  }

  else if (type === 'layout' && extension === 'js') {
    outputPath = path.join(LAYOUTS_DIRECTORY, `${fileName}.11ty.js`);
  }

  else if (type === 'data' && extension === 'js') {
    outputPath = path.join(DATA_DIRECTORY, `${fileName}.js`);
  }

  else if (type === 'browser' && extension === 'js') {
    outputPath = path.join(JAVASCRIPT_DIRECTORY, `${fileName}.js`);
  }

  else if (extension === 'css') {
    outputPath = path.join(STYLES_DIRECTORY, 
      type === 'template' ? `${fileName}.css` : `${fileName}.${type}.css`,
    );
  }

  else if (/.*\/main.css$/i.test(file.path) === true) {
    outputPath = path.join(STYLES_DIRECTORY, 'main.css');
  };

  if (!outputPath) {
    console.warn('⚠ File ignored:', file.path);
    return;
  }

  await writeFile(outputPath, file.contents);
  return outputPath;
}

(async () => {
  async function clean() {
    await rimraf(OUTPUT_DIRECTORY);
    await Promise.all(
      [DATA_DIRECTORY, LAYOUTS_DIRECTORY, TEMPLATES_DIRECTORY, STYLES_DIRECTORY, JAVASCRIPT_DIRECTORY].map(
        async (directory) => mkdir(directory, { recursive: true })
      )
    )
  }

  /** @type {(result: esbuild.BuildResult) => Promise<string[] | undefined>} */
  async function handleBuildResult(result) {
    if (result.errors.length > 0) {
      console.error(...result.errors);
      return;
    }

    if (result.warnings.length > 0) {
      console.warn(...result.warnings);
    }

    if (!result.outputFiles) {
      console.log('No outputfiles');
      return;
    }

    const outputPaths = /** @type {string[]} */ (
      await Promise.all(result.outputFiles.map((outputFile) => handleFile(outputFile)))
    ).filter(Boolean);

    return outputPaths;
  }

  /** @type {(entryPoints: string[], bundleFunction: BundleFunction) => Promise<void>} */
  async function watchEntryPoints(entryPoints, bundleFunction) {   
    chokidar.watch(INPUT_DIRECTORY).on('all', async (event, inputPath) => {
      const inputPaths = (await Promise.all(entryPoints.map((entryPoint) => glob(entryPoint)))).flat();

      if (event === 'add' || event === 'change') {
        console.log('⚡️', inputPath);
      } else if (event === 'unlink') {
        console.log('💥', inputPath);
        await clean();
      }
      else return;
      
      await handleBuildResult(
        await bundleFunction(inputPaths)
      );
    })
  }

  await clean();
  
  const clientSideEntryPoints = [path.join(INPUT_DIRECTORY, '**/*.browser.ts')];
  const serverSideEntryPoints = [
    path.join(INPUT_DIRECTORY, '**/*.{data,template,layout}.{ts,tsx}'),
    path.join(INPUT_DIRECTORY, 'styles/main.scss'),
  ];
  
  const watch = process.argv.includes('--watch');
  
  if (watch) {
    console.info('👀 Watch Mode engaged');
    watchEntryPoints(clientSideEntryPoints, bundleClientSide);
    watchEntryPoints(serverSideEntryPoints, bundleServerSide);
  } else {
    console.info('⚡️ Bundling assets for Eleventy');

    const serverSideInputPaths = (await Promise.all(serverSideEntryPoints.map((entryPoint) => glob(entryPoint)))).flat();
    const clientSideInputPaths = (await Promise.all(clientSideEntryPoints.map((entryPoint) => glob(entryPoint)))).flat();

    const serverSideAssets = await handleBuildResult(await bundleServerSide(serverSideInputPaths));
    const clientSideAssets = await handleBuildResult(await bundleClientSide(clientSideInputPaths));

    const assetCount = (serverSideAssets?.length ?? 0) + (clientSideAssets?.length ?? 0);
    console.info(`⚡️ ${assetCount} assets built`);
  }
})()