import { Article } from '../types';

import { normalizeCategory } from './normalize-category';

import type {
  Maybe,
  SanityArticle,
  SanityCategory,
  SanityEmoji,
  SanitySlug,
  TransformableFigureFragment,
} from '~/../graphql-types';

type GraphQLData = Pick<SanityArticle, 'id' | 'publishedAt' | 'title' | '_rawBody'> & {
  categories: Array<
    Pick<SanityCategory, 'color' | 'description' | 'id' | 'title'> & {
      icon?: Maybe<Pick<SanityEmoji, 'native'>>;
      slug: Pick<SanitySlug, 'current'>;
    }
  >;
  mainImage?: Maybe<TransformableFigureFragment>;
};

export function normalizeArticle({
  _rawBody,
  categories,
  mainImage,
  publishedAt,
  ...rest
}: GraphQLData): Article {
  return {
    body: _rawBody,
    categories: categories.map((category) => normalizeCategory(category)),
    mainImage: mainImage?.asset
      ? {
          ...mainImage,
          asset: {
            ...mainImage.asset,
          },
        }
      : undefined,
    publishedAt: new Date(publishedAt),
    ...rest,
  };
}
