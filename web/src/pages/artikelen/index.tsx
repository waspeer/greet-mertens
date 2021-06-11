import { isFuture } from 'date-fns';
import React from 'react';
import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import { ArticleRecentList } from '~/sections/article-recent-list';
import { normalizeArticlePreview } from '~/lib/helpers/normalize-article-preview';

import type { ArticlesPageQuery } from '../../../graphql-types';

interface Props {
  data: ArticlesPageQuery;
}

const ArticlesPage = ({ data }: Props) => {
  const articlePreviews = data.articles.edges
    .filter(({ node }) => !isFuture(new Date(node.publishedAt)))
    .map(({ node }) => normalizeArticlePreview(node));

  return (
    <>
      <GatsbySeo title="Artikelen" openGraph={{ title: 'Artikelen' }} />

      <ArticleRecentList
        hasMoreArticles={data.articles.pageInfo.hasNextPage}
        articlePreviews={articlePreviews}
      />
    </>
  );
};

export const query = graphql`
  query ArticlesPage {
    articles: allSanityArticle(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null }, hidden: { ne: true } }
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
