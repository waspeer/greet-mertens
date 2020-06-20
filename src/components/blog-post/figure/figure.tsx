import classNames from '@sindresorhus/class-names';
import GatsbyImage from 'gatsby-image';
import React from 'react';

import { Image as ImageType } from '#lib/types';

import './figure.css';

interface Props {
  className?: string;
  image: ImageType;
}

export const Figure = ({ className, image }: Props) => {
  return (
    <div className={classNames('figure', className)}>
      {image.fluid && <GatsbyImage alt={image.alt} fluid={image.fluid} />}
      {image.caption && <div className="figure__caption">{image.caption}</div>}
    </div>
  );
};
