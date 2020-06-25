import { PortfolioProject } from '../types';

import { normalizeCategory } from './normalize-category';

import type {
  Maybe,
  SanityFigure,
  GatsbySanityImageFluidFragment,
  SanitySlug,
  SanityCategory,
  SanityEmoji,
  SanityProject,
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
  mainImage?: Maybe<
    Pick<SanityFigure, 'alt' | 'caption'> & {
      asset?: Maybe<{ fluid?: Maybe<GatsbySanityImageFluidFragment> }>;
    }
  >;
};

export function normalizeProject({
  _rawBody,
  categories,
  isCurrent,
  mainImage,
  publishedAt,
  ...rest
}: GraphQLData): PortfolioProject {
  return {
    body: _rawBody,
    categories: categories.map((category) => normalizeCategory(category)),
    isCurrent: !!isCurrent,
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
