import type { BlogPostPreview } from '../types';

import type {
  SanityPost,
  Maybe,
  SanityFigure,
  GatsbySanityImageFluidFragment,
  SanitySlug,
} from '~/../graphql-types';

type GraphQLData = Pick<SanityPost, 'id' | 'publishedAt' | 'title' | '_rawExcerpt'> & {
  mainImage?: Maybe<
    Pick<SanityFigure, 'alt'> & {
      asset?: Maybe<{ fluid?: Maybe<GatsbySanityImageFluidFragment> }>;
    }
  >;
  slug: Pick<SanitySlug, 'current'>;
};

export function normalizePostPreview({
  mainImage,
  publishedAt,
  _rawExcerpt,
  slug,
  ...rest
}: GraphQLData): BlogPostPreview {
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
