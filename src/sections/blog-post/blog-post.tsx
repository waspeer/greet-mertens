import { differenceInDays, format, formatDistanceToNow } from 'date-fns';
import { nl } from 'date-fns/locale';
import React from 'react';

import type { BlogPost as BlogPostType } from '~/lib/types';

import { CategoryList, Figure, BlogPostBody } from './components';
import './blog-post.css';

interface Props {
  post: BlogPostType;
}

export const BlogPost = ({ post }: Props) => {
  const { body, categories, mainImage, publishedAt, title } = post;
  const formattedDate =
    differenceInDays(new Date(publishedAt), new Date()) > 3
      ? formatDistanceToNow(new Date(publishedAt), { locale: nl })
      : format(new Date(publishedAt), 'd MMMM yyyy', { locale: nl });

  return (
    <article>
      {mainImage && <Figure className="blogPost__mainImage" image={mainImage} />}
      <div className="blogPost__text container">
        <h1 className="blogPost__title">{title}</h1>
        <div className="blogPost__info">
          <div className="blogPost__publishedAt">{formattedDate}</div>
          {categories[0] && <CategoryList categories={categories} />}
        </div>
        <div className="blogPost__body">
          <BlogPostBody body={body} />
        </div>
      </div>
    </article>
  );
};
