import { differenceInDays, format, formatDistanceToNow } from 'date-fns';
import { nl } from 'date-fns/locale';
import { graphql } from 'gatsby';
import React from 'react';

import type { Article as ArticleType } from '~/lib/types';

import './article.css';
import { ArticleBody, CategoryList, Figure } from './components';

interface Props {
  article: ArticleType;
}

export const Article = ({ article }: Props) => {
  const { body, categories, mainImage, publishedAt, title } = article;
  const formattedDate =
    differenceInDays(new Date(publishedAt), new Date()) > 3
      ? formatDistanceToNow(new Date(publishedAt), { locale: nl })
      : format(new Date(publishedAt), 'd MMMM yyyy', { locale: nl });

  return (
    <article>
      {mainImage && <Figure className="article__mainImage" image={mainImage} />}
      <div className="article__text container">
        <h1 className="article__title">{title}</h1>
        <div className="article__info">
          <div className="article__publishedAt">{formattedDate}</div>
          {categories[0] && <CategoryList categories={categories} />}
        </div>
        <div className="article__body">
          <ArticleBody body={body} />
        </div>
      </div>
    </article>
  );
};

export const query = graphql`
  fragment Article on SanityArticle {
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
`;
