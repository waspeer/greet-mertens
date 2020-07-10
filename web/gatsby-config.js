require('dotenv').config();
const path = require('path');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    'gatsby-plugin-graphql-codegen',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: path.join(__dirname, 'src/lib/layout'),
      },
    },
    'gatsby-plugin-next-seo',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: path.resolve(__dirname, 'src/icon.png'),
        name: 'Greet Mertens',
        short_name: 'Greet Mertens',
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#000',
        display: 'standalone',
      },
    },
  ],
};
