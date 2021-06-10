const sanityClient = require('@sanity/client');

const projectId = process.env.SANITY_PROJECT;
const dataset = process.env.SANITY_DATASET;

const client = sanityClient({
  dataset,
  projectId,
  useCdn: process.env.NODE_ENV === 'development',
});

module.exports = { client };