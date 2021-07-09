(() => {
  // src/javascript/images.ts
  document.querySelectorAll("img").forEach((img) => {
    img.dataset.loaded = "false";
    img.addEventListener("load", () => {
      img.dataset.loaded = "true";
    });
  });
})();
