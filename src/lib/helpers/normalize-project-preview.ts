import type { PortfolioProjectPreview } from '../types';

import type {
  Maybe,
  SanityFigure,
  GatsbySanityImageFluidFragment,
  SanitySlug,
  SanityProject,
} from '~/../graphql-types';

type GraphQLData = Pick<
  SanityProject,
  'id' | 'isCurrent' | 'publishedAt' | 'title' | '_rawExcerpt'
> & {
  mainImage?: Maybe<
    Pick<SanityFigure, 'alt'> & { asset?: Maybe<{ fluid?: Maybe<GatsbySanityImageFluidFragment> }> }
  >;
  slug: Pick<SanitySlug, 'current'>;
};

export function normalizeProjectPreview({
  _rawExcerpt,
  isCurrent,
  mainImage,
  slug,
  ...rest
}: GraphQLData): PortfolioProjectPreview {
  return {
    excerpt: _rawExcerpt,
    isCurrent: !!isCurrent,
    mainImage: mainImage
      ? {
          alt: mainImage.alt,
          fluid: mainImage.asset?.fluid,
        }
      : undefined,
    slug: slug.current,
    ...rest,
  };
}
