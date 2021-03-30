import type { ArticlePreviewFragment } from '~/../graphql-types';

import type { ArticlePreview } from '../types';

export function normalizeArticlePreview({
  mainImage,
  publishedAt,
  _rawExcerpt,
  slug,
  ...rest
}: ArticlePreviewFragment): ArticlePreview {
  return {
    excerpt: _rawExcerpt,
    mainImage: mainImage
      ? {
          alt: mainImage.alt,
          imageData: mainImage.asset?.gatsbyImageData,
        }
      : undefined,
    publishedAt: new Date(publishedAt),
    slug: slug.current,
    ...rest,
  };
}
