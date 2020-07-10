import React from 'react';
import { graphql } from 'gatsby';

import { ArticleRecentList } from '~/sections/article-recent-list';
import { normalizeArticlePreview } from '~/lib/helpers/normalize-article-preview';

import type { ArticlesPageQuery } from '../../../graphql-types';

interface Props {
  data: ArticlesPageQuery;
}

const ArticlesPage = ({ data }: Props) => {
  const articlePreviews = data.articles.edges.map(({ node }) => normalizeArticlePreview(node));

  return (
    <ArticleRecentList
      hasMoreArticles={data.articles.pageInfo.hasNextPage}
      articlePreviews={articlePreviews}
    />
  );
};

export const query = graphql`
  query ArticlesPage {
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
      pageInfo {
        hasNextPage
      }
    }
  }
`;

export default ArticlesPage;
