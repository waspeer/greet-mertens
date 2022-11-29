import createClient from 'picosanity';
import createImageUrlBuilder from '@sanity/image-url';
import type {
  SanityImageMetadata,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityImagePalette,
  Project,
  Category,
  Article,
} from './sanity.gen';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

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
  description: Category['description'];
  icon: IconFragment;
  slug: NonNullable<Category['slug']>['current'];
  title: Category['title'];
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

export type ImageFragment = Pick<SanityImageMetadata, 'dimensions'> & {
  _type: 'image';
  alt?: string;
  asset: SanityImageAsset;
  caption?: string;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
  dominantColor?: SanityImagePalette['dominant']['background'];
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
  publishedAt: NonNullable<Article['publishedAt']>;
  mainImage: ImageFragment;
  title: Article['title'];
  excerpt: Article['excerpt'];
  slug: NonNullable<Article['slug']>['current'];
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

export type ProjectPreviewFragment = Pick<Project, 'isCurrent' | 'title' | 'excerpt'> & {
  _id: string;
  isCurrent: Project['isCurrent'];
  title: Project['title'];
  excerpt: Project['excerpt'];
  slug: NonNullable<Project['slug']>['current'];
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
