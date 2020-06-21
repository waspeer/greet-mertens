import type { Category } from '../types';

import type { SanityCategory, Maybe, SanityEmoji, SanitySlug } from '~/../graphql-types';

type GraphQLData = Pick<SanityCategory, 'color' | 'id' | 'title'> & {
  icon?: Maybe<Pick<SanityEmoji, 'name' | 'native'>>;
  slug: Pick<SanitySlug, 'current'>;
};

export function normalizeCategory({ icon, slug, ...rest }: GraphQLData): Category {
  return {
    icon: icon && {
      description: icon.name!,
      icon: icon.native!,
    },
    slug: slug.current,
    ...rest,
  };
}
