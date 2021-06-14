/* eslint-env browser */

document.querySelectorAll('img').forEach((img) => {
  img.dataset.loaded = 'false';
  img.addEventListener('load', () => {
    img.dataset.loaded = 'true';
  });
});
