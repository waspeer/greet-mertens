import { IMAGE_FRAGMENT } from './shared-fragments';

import type { Data } from '~/lib/data';
import { sanityClient } from '~/lib/sanity-client';

const ARTICLES_QUERY = /* groq */ `
  *[_type == 'article'] {
    body,
    categories,
    excerpt,
    "id": _id,
    publishedAt,
    mainImage { ${IMAGE_FRAGMENT} },
    "slug": slug.current,
    title,
    "type": _type,
  }
`;

async function getArticles(): Promise<Data.Article[]> {
  const result = await sanityClient.fetch(ARTICLES_QUERY);

  return result.map((rawArticle: any) => ({
    ...rawArticle,
    publishedAt: new Date(rawArticle.publishedAt),
  }));
}

module.exports = getArticles;
