import createImageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import createClient from 'picosanity';

// CLIENT
// ------

export const client = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_DATASET,
  useCdn: import.meta.env.PROD,
});

// FRAGMENTS
// ---------

const ICON_FRAGMENT = /* groq */ `
  'description': name,
  'icon': native,
`;

export type IconFragment = {
  description: string;
  icon: string;
};

const CATEGORY_FRAGMENT = /* groq */ `
  _id,
  'color': color.value,
  description,
  icon { ${ICON_FRAGMENT} },
  'slug': slug.current,
  title,
`;

export type CategoryFragment = {
  _id: string;
  color: string;
  description: string;
  icon: IconFragment;
  slug: string;
  title: string;
};

const IMAGE_FRAGMENT = /* groq */ `
  alt,
  asset,
  caption,
  crop,
  hotspot,
  ...asset-> {
    'dimensions': metadata.dimensions,
    'dominantColor': metadata.palette.dominant.background,
  },
`;

export type ImageFragment = {
  _type: 'image';
  alt?: string;
  asset: {
    _ref: string;
  };
  caption?: string;
  crop?: {
    left: number;
    bottom: number;
    right: number;
    top: number;
  };
  hotspot?: {
    width: number;
    height: number;
    x: number;
    y: number;
  };
  dominantColor?: string;
  dimensions: {
    height: number;
    width: number;
    aspectRatio: number;
  };
};

const ARTICLE_PREVIEW_FRAGMENT = /* groq */ `
  _id,
  publishedAt,
  mainImage { ${IMAGE_FRAGMENT} },
  title,
  excerpt,
  'slug': slug.current,
  categories[]-> { ${CATEGORY_FRAGMENT} },
`;

export type ArticlePreviewFragment = {
  _id: string;
  publishedAt: string;
  mainImage: ImageFragment;
  title: string;
  excerpt: Array<{ _key: string; _type: string }>;
  slug: string;
  categories: CategoryFragment[];
};

const PROJECT_PREVIEW_FRAGMENT = /* groq */ `
  _id,
  categories[]-> { ${CATEGORY_FRAGMENT} },
  isCurrent,
  mainImage { ${IMAGE_FRAGMENT} },
  title,
  excerpt,
  'slug': slug.current,
`;

export type ProjectPreviewFragment = {
  isCurrent?: boolean;
  _id: string;
  title: string;
  excerpt: Array<{ _key: string; _type: string }>;
  slug: string;
  mainImage: ImageFragment;
  categories: Array<CategoryFragment>;
};

export const fragments = {
  articlePreview: ARTICLE_PREVIEW_FRAGMENT,
  category: CATEGORY_FRAGMENT,
  image: IMAGE_FRAGMENT,
  projectPreview: PROJECT_PREVIEW_FRAGMENT,
};

// IMAGE URL BUILDER
// -----------------

const imageUrlBuilder = createImageUrlBuilder({
  dataset: import.meta.env.SANITY_DATASET,
  projectId: import.meta.env.SANITY_PROJECT_ID,
});

export function imageUrl(source: SanityImageSource) {
  return imageUrlBuilder.image(source);
}
