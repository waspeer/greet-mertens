import classNames from '@sindresorhus/class-names';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

import { CaptionedMedia } from '~/lib/components/captioned-media';
import type { Image as ImageType } from '~/lib/types';

import './gatsby-figure.css';

interface Props {
  className?: string;
  image: ImageType;
}

export const GatsbyFigure = ({ className, image }: Props) => {
  const media = image.imageData && <GatsbyImage alt={image.alt} image={image.imageData} />;

  return (
    <CaptionedMedia
      caption={image.caption}
      className={classNames('figure', className)}
      media={media}
    />
  );
};
