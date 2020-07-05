import { BlogPost } from '../types';

import { normalizeCategory } from './normalize-category';

import type {
  SanityPost,
  Maybe,
  SanityFigure,
  GatsbySanityImageFluidFragment,
  SanitySlug,
  SanityCategory,
  SanityEmoji,
} from '~/../graphql-types';

type GraphQLData = Pick<SanityPost, 'id' | 'publishedAt' | 'title' | '_rawBody'> & {
  categories: Array<
    Pick<SanityCategory, 'color' | 'description' | 'id' | 'title'> & {
      icon?: Maybe<Pick<SanityEmoji, 'native'>>;
      slug: Pick<SanitySlug, 'current'>;
    }
  >;
  mainImage?: Maybe<
    Pick<SanityFigure, 'alt' | 'caption'> & {
      asset?: Maybe<{ fluid?: Maybe<GatsbySanityImageFluidFragment> }>;
    }
  >;
};

export function normalizePost({
  _rawBody,
  categories,
  mainImage,
  publishedAt,
  ...rest
}: GraphQLData): BlogPost {
  return {
    body: _rawBody,
    categories: categories.map((category) => normalizeCategory(category)),
    mainImage: mainImage
      ? {
          alt: mainImage.alt,
          caption: mainImage.caption,
          fluid: mainImage.asset?.fluid,
        }
      : undefined,
    publishedAt: new Date(publishedAt),
    ...rest,
  };
}