import type { ProjectPreview } from '../types';

import { normalizeCategory } from './normalize-category';

import type { ProjectPreviewFragment } from '~/../graphql-types';

type GraphQLData = ProjectPreviewFragment;

export function normalizeProjectPreview({
  _rawExcerpt,
  categories,
  isCurrent,
  mainImage,
  slug,
  ...rest
}: GraphQLData): ProjectPreview {
  return {
    categories: categories.map((category) => normalizeCategory(category)),
    excerpt: _rawExcerpt,
    isCurrent: !!isCurrent,
    mainImage: mainImage
      ? {
          alt: mainImage.alt,
          imageData: mainImage.asset?.gatsbyImageData,
        }
      : undefined,
    slug: slug.current,
    ...rest,
  };
}
