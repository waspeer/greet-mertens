import { differenceInDays, format, formatDistanceToNow } from 'date-fns';
import { nl } from 'date-fns/locale';
import React from 'react';

import type { Article as ArticleType } from '~/lib/types';

import { CategoryList, Figure, ArticleBody } from './components';
import './article.css';

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