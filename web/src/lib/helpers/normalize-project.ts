import { Project } from '../types';

import { normalizeCategory } from './normalize-category';

import type {
  Maybe,
  SanityCategory,
  SanityEmoji,
  SanityProject,
  SanitySlug,
  TransformableFigureFragment,
} from '~/../graphql-types';

type GraphQLData = Pick<
  SanityProject,
  'id' | 'isCurrent' | 'publishedAt' | 'title' | '_rawBody'
> & {
  categories: Array<
    Pick<SanityCategory, 'color' | 'description' | 'id' | 'title'> & {
      icon?: Maybe<Pick<SanityEmoji, 'native'>>;
      slug: Pick<SanitySlug, 'current'>;
    }
  >;
  mainImage?: Maybe<TransformableFigureFragment>;
};

export function normalizeProject({
  _rawBody,
  categories,
  isCurrent,
  mainImage,
  publishedAt,
  ...rest
}: GraphQLData): Project {
  return {
    ...rest,
    body: _rawBody,
    categories: categories.map((category) => normalizeCategory(category)),
    isCurrent: !!isCurrent,
    mainImage: mainImage?.asset
      ? {
          ...mainImage,
          asset: {
            ...mainImage.asset,
          },
        }
      : undefined,
    publishedAt: publishedAt && new Date(publishedAt),
  };
}
