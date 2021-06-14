import * as React from 'react';

import type { Data } from '../lib/data';
import { imageUrlBuilder } from '../lib/sanity-image-url';

type AvailableHtmlProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'>;

interface ImageProps extends AvailableHtmlProps {
  image: Data.Image;
}

export function Image({ image, ...rest }: ImageProps) {
  const { alt, aspectRatio, asset, dominantColor, crop, hotspot } = image;
  const imageUrl = imageUrlBuilder.image({ asset, crop, hotspot }).auto('format').url();
  const aspectRatioPercentage = Math.round((1 / aspectRatio) * 100);

  if (!imageUrl) return null;

  return (
    <figure
      className="image"
      style={
        {
          '--aspectRatio': `${aspectRatioPercentage}%`,
          '--color': dominantColor,
        } as any
      }
    >
      <img alt={alt} loading="lazy" src={imageUrl} {...rest} />
    </figure>
  );
}
