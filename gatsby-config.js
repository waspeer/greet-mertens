require("dotenv").config();
const path = require("path");

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "#lib": path.join(__dirname, "src/lib"),
        "#components": path.join(__dirname, "src/components"),
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-graphql-codegen",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    "gatsby-plugin-layout",
  ],
};
