import imageUrlBuilder from '@sanity/image-url';

import { SanityImageAsset, SanityImageCrop, SanityImageHotspot } from '~/../graphql-types';

interface TransformableImage {
  asset: Pick<SanityImageAsset, '_id'>;
  crop?: SanityImageCrop | null;
  hotspot?: SanityImageHotspot | null;
}

const builder = imageUrlBuilder({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID!,
  dataset: process.env.GATSBY_SANITY_DATASET!,
});

export function sanityImageUrlBuilder(image: TransformableImage) {
  return builder.image(image);
}
