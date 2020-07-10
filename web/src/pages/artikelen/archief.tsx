import React from 'react';
import { graphql } from 'gatsby';

import { normalizeArticlePreview } from '~/lib/helpers/normalize-article-preview';
import { ArticleArchive } from '~/sections/article-archive';

import type { ArticleArchivePageQuery } from '~/../graphql-types';

interface Props {
  data: ArticleArchivePageQuery;
}

const Archive = ({ data }: Props) => {
  const articlePreviews = data.articles.edges.map(({ node }) => normalizeArticlePreview(node));

  return <ArticleArchive articlePreviews={articlePreviews} />;
};

export const query = graphql`
  query ArticleArchivePage {
    articles: allSanityArticle(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          ...ArticlePreview
        }
      }
    }
  }
`;

export default Archive;
