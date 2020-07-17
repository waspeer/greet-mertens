import { differenceInDays, format, formatDistanceToNow } from 'date-fns';
import { nl } from 'date-fns/locale';
import { graphql, Link } from 'gatsby';
import React from 'react';

import { CategoryBadge } from '~/lib/components/category-badge';
import { SanityFigure } from '~/lib/components/sanity-figure';
import { getCategoryUrl } from '~/lib/helpers/get-category-url';
import type { Article as ArticleType } from '~/lib/types';

import './article.css';
import { ArticleBody } from './components';

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
      {mainImage && <SanityFigure className="article__mainImage" image={mainImage} />}
      <div className="article__text container">
        <h1 className="article__title">{title}</h1>
        <div className="article__info">
          <div className="article__publishedAt">{formattedDate}</div>
          {!!categories.length && (
            <ul className="article__categories">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link to={getCategoryUrl(category)}>
                    <CategoryBadge category={category} />
                  </Link>
                </li>
              ))}
            </ul>
          )}
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
      ...TransformableFigure
    }
    publishedAt
    title
    _rawBody
  }
`;
