import type { OpenGraphImages } from 'gatsby-plugin-next-seo';

import { sanityImageUrlBuilder } from './sanity-image-url-builder';

import type { TransformableImageFragment } from '~/../graphql-types';

const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 630;

export function getSanityOpenGraphImage(
  image: TransformableImageFragment | null | undefined,
  alt: string,
): OpenGraphImages {
  if (!image?.asset?._id) {
    return { url: '' };
  }

  const tranformableImage = {
    asset: {
      _id: image.asset._id,
    },
    crop: image.crop,
    hotspot: image.hotspot,
  };
  const url = sanityImageUrlBuilder(tranformableImage)
    .width(IMAGE_WIDTH)
    .height(IMAGE_HEIGHT)
    .url()!;

  return {
    url,
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    alt,
  };
}
