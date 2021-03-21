import React from 'react';
import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import { normalizeArticlePreview } from '~/lib/helpers/normalize-article-preview';
import { ArticleArchive } from '~/sections/article-archive';

import type { ArticleArchivePageQuery } from '~/../graphql-types';

interface Props {
  data: ArticleArchivePageQuery;
}

const Archive = ({ data }: Props) => {
  const articlePreviews = data.articles.edges.map(({ node }) => normalizeArticlePreview(node));

  return (
    <>
      <GatsbySeo title="Archief" openGraph={{ title: 'Archief' }} />

      <ArticleArchive articlePreviews={articlePreviews} />
    </>
  );
};

export const query = graphql`
  query ArticleArchivePage {
    articles: allSanityArticle(
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
