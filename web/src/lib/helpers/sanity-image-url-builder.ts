import imageUrlBuilder from '@sanity/image-url';
import { SanityImageAsset } from '~/../graphql-types';

interface TransformableImage {
  asset: Pick<SanityImageAsset, '_id'>;
  crop?: any; // SanityImageCrop | null;
  hotspot?: any; // SanityImageHotspot | null;
}

const builder = imageUrlBuilder({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID!,
  dataset: process.env.GATSBY_SANITY_DATASET!,
});

export function sanityImageUrlBuilder(image: TransformableImage) {
  return builder.image(image);
}
