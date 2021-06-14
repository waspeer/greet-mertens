// @ts-check
const { promisify } = require('util');
const esbuild = require('esbuild');
const fs = require('fs');
const glob = require('tiny-glob');
const path = require('path');
const sass = require('sass');
// const sassPlugin = require('esbuild-plugin-sass');

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
const sharedBuildOptions = {
  bundle: true,
  outdir: OUTPUT_DIRECTORY,
  write: false,
}

/** @type {(callback: (result: esbuild.BuildResult) => void) => Promise<void>} */
async function buildServerSide(callback) {
  const result = await esbuild.build({
    ...sharedBuildOptions,
    entryPoints: [
      ...(await glob(path.join(INPUT_DIRECTORY, '**/*.{data,template,layout}.{ts,tsx}'))),
      path.join(INPUT_DIRECTORY, 'styles/main.scss')
    ],
    format: 'cjs',
    platform: 'node',
    plugins: [sassPlugin({
      includePaths: [path.join(INPUT_DIRECTORY, 'styles')]
    })],
    watch: {
      onRebuild(error, result) {
        if (!error && result) return callback(result);
        console.error(error);
      },
    },
  });
  callback(result);
}

/** @type {(callback: (result: esbuild.BuildResult) => void) => Promise<void>} */
async function buildClientSide(callback) {
  const result = await esbuild.build({
    ...sharedBuildOptions,
    entryPoints: await glob(path.join(INPUT_DIRECTORY, '**/*.browser.ts')),
    watch: {
      onRebuild(error, result) {
        if (!error && result) return callback(result);
        console.error(error);
      },
    },
  });
  callback(result);
}

/** @type {(file: esbuild.OutputFile) => Promise<void>} */
async function handleFile(file) {
  await Promise.all([
    (async function handleTemplate(file) {
      const fileName = file.path.match(/.*\/(?<fileName>[^.]+)\.template\.js$/i)?.groups?.fileName;
      if(!fileName) return;
      await writeFile(path.join(TEMPLATES_DIRECTORY, `${fileName}.11ty.js`), file.contents);
    })(file),

    // --- //

    (async function handleLayout(file) {
      const fileName = file.path.match(/.*\/(?<fileName>[^.]+)\.layout\.js$/i)?.groups?.fileName;
      if(!fileName) return;
      await writeFile(path.join(LAYOUTS_DIRECTORY, `${fileName}.11ty.js`), file.contents);
    })(file),

    // --- //
    
    (async function handleStyles(file) {
      /** @type {string} */
      let newFileName;
      
      if (/.*\/main.css$/i.test(file.path) === true) {
        newFileName = 'main.css';
      } else {
        const {fileName, type} = file.path.match(/.*\/(?<fileName>[^.]+)\.(?<type>[^.]+)\.css$/i)?.groups ?? {};
        if(!(fileName && type)) return;
        newFileName = type === 'template' ? `${fileName}.css` : `${fileName}.${type}.css`;
      }
      
      await writeFile(path.join(STYLES_DIRECTORY, newFileName), file.contents);
    })(file),
    
    // --- //

    (async function handleData(file) {
      const {fileName} = file.path.match(/.*\/(?<fileName>[^.]+)\.data\.js$/i)?.groups ?? {};;
      if(!(fileName)) return;
      await writeFile(path.join(DATA_DIRECTORY, `${fileName}.js`), file.contents);
    })(file),
    
    // --- //

    (async function handleJavascript(file) {
      const {fileName} = file.path.match(/.*\/(?<fileName>[^.]+)\.browser\.js$/i)?.groups ?? {};;
      if(!(fileName)) return;
      await writeFile(path.join(JAVASCRIPT_DIRECTORY, `${fileName}.js`), file.contents);
    })(file)
  ])
}

(async () => {
  [DATA_DIRECTORY, LAYOUTS_DIRECTORY, TEMPLATES_DIRECTORY, STYLES_DIRECTORY, JAVASCRIPT_DIRECTORY].forEach((directory) => {
    if (fs.existsSync(directory)) return;
    fs.mkdirSync(directory, { recursive: true });
  });

  /** @type {(result: esbuild.BuildResult) => Promise<void>} */
  async function callback(result) {
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

    for (const file of result.outputFiles) {
      await handleFile(file)
    }
  }

  buildClientSide(callback);
  buildServerSide(callback);
})()