import { Link } from 'gatsby';
import React from 'react';

import { getPostUrl } from '~/lib/helpers/get-post-url';
import type { BlogPostPreview as BlogPostPreviewType } from '~/lib/types';

import { BlogPostPreview } from './components';
import './blog-post-preview-list.css';

interface Props {
  posts: BlogPostPreviewType[];
}

export const BlogPostPreviewList = ({ posts }: Props) => {
  return (
    <div className="container">
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
    </div>
  );
};
