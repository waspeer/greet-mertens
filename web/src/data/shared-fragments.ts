const IMAGE_FRAGMENT = /* groq */ `
  asset,
  crop,
  hotspot,
  ...asset-> {
    "aspectRatio": metadata.dimensions.aspectRatio,
    "dominantColor": metadata.palette.dominant.background,
  },
`;

export { IMAGE_FRAGMENT };
