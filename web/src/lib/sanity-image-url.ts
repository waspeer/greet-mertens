import createBuilder from '@sanity/image-url';

const projectId = import.meta.env.SNOWPACK_PUBLIC_SANITY_PROJECT;
const dataset = import.meta.env.SNOWPACK_PUBLIC_SANITY_DATASET;

export const imageUrlBuilder = createBuilder({
  projectId,
  dataset,
});
