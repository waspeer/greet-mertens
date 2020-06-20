import classNames from '@sindresorhus/class-names';
import GatsbyImage from 'gatsby-image';
import React from 'react';

import { CaptionedMedia } from '~/lib/components/captioned-media';
import type { Image as ImageType } from '~/lib/types';

import './figure.css';

interface Props {
  className?: string;
  image: ImageType;
}

export const Figure = ({ className, image }: Props) => {
  const media = image.fluid && <GatsbyImage alt={image.alt} fluid={image.fluid} />;

  return (
    <CaptionedMedia
      caption={image.caption}
      className={classNames('figure', className)}
      media={media}
    />
  );
};
