import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import React from 'react';

import { normalizeArticle } from '~/lib/helpers/normalize-article';
import { sanityBlocksToPlainText } from '~/lib/helpers/sanity-blocks-to-plain-text';
import { Article } from '~/sections/article';
import { getSanityOpenGraphImage } from '~/lib/helpers/get-sanity-image-open-graph-url';

import type { ArticlePageQuery } from '../../graphql-types';

interface Props {
  data: ArticlePageQuery;
}

const ArticlePage = ({ data }: Props) => {
  const article = normalizeArticle(data.article!);
  const description = sanityBlocksToPlainText(data.article!._rawExcerpt);
  const { title } = article;

  return (
    <>
      <GatsbySeo
        description={description}
        title={title}
        openGraph={{
          article: {
            publishedTime: article.publishedAt.toISOString(),
            tags: article.categories.map((category) => category.title),
          },
          description,
          images: [
            getSanityOpenGraphImage(data.article?.mainImage, article.mainImage?.alt ?? title),
          ],
          title,
          type: 'article',
        }}
      />

      <Article article={article} />
    </>
  );
};

export const query = graphql`
  query ArticlePage($id: String!) {
    article: sanityArticle(id: { eq: $id }) {
      ...Article
      _rawExcerpt
    }
  }
`;

export default ArticlePage;
