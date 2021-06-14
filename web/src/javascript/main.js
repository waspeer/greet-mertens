/* eslint-env browser */

document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
  img.addEventListener('load', () => {
    img.dataset.loaded = true
  })
});