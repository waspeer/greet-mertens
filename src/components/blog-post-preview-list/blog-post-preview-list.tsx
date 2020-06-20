import { Link } from 'gatsby';
import React from 'react';

import { getPostUrl } from '#lib/helpers/get-post-url';
import { BlogPostPreview as IBlogPostPreview } from '#lib/types';

import { BlogPostPreview } from './blog-post-preview/blog-post-preview';
import './blog-post-preview-list.css';

interface Props {
  posts: IBlogPostPreview[];
}

export const BlogPostPreviewList = ({ posts }: Props) => {
  return (
    <ul className="blogPostPreviewList">
      {posts.map(({ excerpt, id, mainImage, publishedAt, slug, title }) => (
        <li key={id}>
          <Link to={getPostUrl({ publishedAt, slug })}>
            <BlogPostPreview
              excerpt={excerpt}
              id={id}
              mainImage={mainImage}
              publishedAt={publishedAt}
              title={title}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
