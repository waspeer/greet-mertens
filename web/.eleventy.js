require('dotenv').config();

const { isValidElement } = require("preact");
const render = require('preact-render-to-string');

module.exports = function eleventy(config) {
  config.addTransform('jsx', (content) => isValidElement(content) ? `<!doctype html />${render(content)}` : content);
  config.addPassthroughCopy({'_build/static': '/'});

  return {
    dir: {
      input: '_build',
    }
  }
}