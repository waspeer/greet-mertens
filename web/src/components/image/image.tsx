import * as React from "react";

import { getContrast } from "../../lib/helpers/get-contrast";
import { imageUrlBuilder } from "../../lib/sanity-image-url";
import type { ImageData } from "../../lib/types";

import styles from "./image.module.scss";

type ImageProps = ImageData & {
  maxHeight?: string;
  maxWidth?: string;
  width?: number;
};

export function Image({
  alt,
  aspectRatio,
  asset,
  dimensions,
  dominantColor,
  caption,
  crop,
  hotspot,
  maxHeight,
  maxWidth,
  width,
}: ImageProps) {
  const realAspectRatio =
    aspectRatio ??
    (crop
      ? (dimensions.width * (1 - crop.right - crop.left)) /
        (dimensions.height * (1 - crop.bottom - crop.top))
      : dimensions.aspectRatio);

  const aspectRatioPercentage = Math.round((1 / realAspectRatio) * 100);
  const imageUrl = imageUrlBuilder
    .image({ asset, crop, hotspot })
    .width(width)
    .auto("format")
    .url();

  return (
    <figure
      className={styles.image}
      style={
        {
          "--aspectRatio": `${aspectRatioPercentage}%`,
          "--captionColor": getContrast(dominantColor),
          "--hotspotX": `${(hotspot?.x ?? 0.5) * 100}%`,
          "--hotspotY": `${(hotspot?.y ?? 0.5) * 100}%`,
          "--dominantColor": dominantColor,
          "--maxHeight": maxHeight ?? "none",
          "--maxWidth": maxWidth ?? "none",
        } as any
      }
    >
      <img alt={alt} loading="lazy" src={imageUrl} />

      {caption && (
        <figcaption className="[ fs-300 ta-c ]">{caption}</figcaption>
      )}
    </figure>
  );
}
