module.exports = {
  plugins: [
    require("tailwindcss"),
    require("postcss-preset-env")({
      autoprefixer: true,
      features: {
        "nesting-rules": true,
      },
    }),
  ],
};
