import classNames from '@sindresorhus/class-names';
import { graphql } from 'gatsby';
import React from 'react';

import { CaptionedMedia } from '~/lib/components/captioned-media';
import { sanityImageUrlBuilder } from '~/lib/helpers/sanity-image-url-builder';
import type { TransformableImage } from '~/lib/types';
import './sanity-figure.css';

interface Props {
  className?: string;
  image: TransformableImage;
}

const IMAGE_RATIO = 0.5625;
const IMAGE_SIZES = [200, 400, 800, 1200, 1600, 1970];

export const SanityFigure = ({ className, image }: Props) => {
  const urlBuilder = sanityImageUrlBuilder(image);
  const srcSet = IMAGE_SIZES.map(
    (size) =>
      `${urlBuilder
        .width(size)
        .height(size * IMAGE_RATIO)
        .url()} ${size}w`,
  ).join(',');
  const media = (
    <img
      alt={image.alt}
      loading="lazy"
      sizes="(max-width: 800px) 100vw, 800px"
      srcSet={srcSet}
      style={{ backgroundImage: `url(${image.asset.metadata.lqip})` }}
    />
  );

  return (
    <CaptionedMedia
      caption={image.caption}
      className={classNames('figure', className)}
      media={media}
    />
  );
};

export const query = graphql`
  fragment TransformableImage on SanityImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
      metadata {
        lqip
      }
    }
  }

  fragment TransformableFigure on SanityFigure {
    alt
    caption
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
      metadata {
        lqip
      }
    }
  }
`;
