import { graphql } from 'gatsby';
import React from 'react';

import { Article } from '~/sections/article';
import { normalizeArticle } from '~/lib/helpers/normalize-article';

import type { ArticlePageQuery } from '../../graphql-types';

interface Props {
  data: ArticlePageQuery;
}

const ArticlePage = ({ data }: Props) => {
  const article = normalizeArticle(data.article!);

  return <Article article={article} />;
};

export const query = graphql`
  query ArticlePage($id: String!) {
    article: sanityArticle(id: { eq: $id }) {
      categories {
        color
        description
        icon {
          native
        }
        id
        slug {
          current
        }
        title
      }
      id
      mainImage {
        alt
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
        caption
      }
      publishedAt
      title
      _rawBody
    }
  }
`;

export default ArticlePage;
