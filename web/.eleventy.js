require('dotenv').config();
const eleventyReact = require("eleventy-plugin-react");
const fs = require('fs');
const globImporter = require('node-sass-glob-importer');
const path = require('path');
const sass = require('sass');

const INPUT_DIRECTORY = 'src';
const OUTPUT_DIRECTORY = 'dist';
const STYLES_INPUT_FILE = path.resolve(__dirname, INPUT_DIRECTORY, 'styles/main.scss');
const STYLES_OUTPUT_FILE = path.resolve(__dirname, OUTPUT_DIRECTORY, 'main.css');

module.exports = function eleventy(config) {
  config.addPlugin(eleventyReact, {
    babelConfig({ isBrowser }) {
      return {
        presets: [
          ["@babel/preset-react"],
          ["@babel/preset-typescript"],
          [
            "@babel/preset-env",
            isBrowser
              ? {
                modules: false,
                targets: "> 0.25%, not dead",
              }
              : {
                modules: "commonjs",
                targets: {
                  node: process.versions.node,
                },
              },
          ],
        ],
      };
    },
    exts: ['tsx'],
    postProcess({ html, data }) {
      return `
        <!DOCTYPE html>
        <html lang="nl">
          <head>
            <title>${data.page.title}</title>
            <meta name="description" content=${data.page.description} />
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://unpkg.com/modern-css-reset/dist/reset.min.css" />
            <link rel="stylesheet" href="/main.css" />
          </head>
          <body>
            ${html}
          </body>
        </html>
      `;
    }
  })

  config.on('beforeBuild', () => {
    console.log('✨ Rendering styles...');

    const result = sass.renderSync({
      file: STYLES_INPUT_FILE,
      outFile: STYLES_OUTPUT_FILE,
      importer: globImporter(),
      includePaths: [path.join(__dirname, INPUT_DIRECTORY, 'styles')],
    });

    fs.writeFileSync(STYLES_OUTPUT_FILE, result.css);
  });

  config.addWatchTarget(path.join(__dirname, INPUT_DIRECTORY, '**/*.tsx?'));
  config.addWatchTarget(path.join(__dirname, INPUT_DIRECTORY, '**/*.scss'));

  return {
    dir: {
      data: 'data',
      input: INPUT_DIRECTORY,
      layouts: 'screens',
      output: OUTPUT_DIRECTORY,
    },
  };
}