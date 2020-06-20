module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        body: "#272727",
      },
      container: {
        center: true,
        padding: "2rem",
      },
      fontFamily: {
        body: ['"Open Sans"', " sans-serif"],
        heading: ['"Libre Caslon Display"', "serif"],
      },
      fontSize: {
        display: "5rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
