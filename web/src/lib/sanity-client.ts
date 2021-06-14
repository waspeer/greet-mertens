import sanity from '@sanity/client';

const projectId = process.env.SANITY_PROJECT;
const dataset = process.env.SANITY_DATASET;

const sanityClient = sanity({
  dataset,
  projectId,
  useCdn: process.env.NODE_ENV === 'development',
});

export { sanityClient };
