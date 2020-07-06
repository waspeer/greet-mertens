import type { ArticlePreview } from '../types';

import type {
  SanityArticle,
  Maybe,
  SanityFigure,
  GatsbySanityImageFluidFragment,
  SanitySlug,
} from '~/../graphql-types';

type GraphQLData = Pick<SanityArticle, 'id' | 'publishedAt' | 'title' | '_rawExcerpt'> & {
  mainImage?: Maybe<
    Pick<SanityFigure, 'alt'> & {
      asset?: Maybe<{ fluid?: Maybe<GatsbySanityImageFluidFragment> }>;
    }
  >;
  slug: Pick<SanitySlug, 'current'>;
};

export function normalizeArticlePreview({
  mainImage,
  publishedAt,
  _rawExcerpt,
  slug,
  ...rest
}: GraphQLData): ArticlePreview {
  return {
    excerpt: _rawExcerpt,
    mainImage: mainImage
      ? {
          alt: mainImage.alt,
          fluid: mainImage.asset?.fluid,
        }
      : undefined,
    publishedAt: new Date(publishedAt),
    slug: slug.current,
    ...rest,
  };
}
