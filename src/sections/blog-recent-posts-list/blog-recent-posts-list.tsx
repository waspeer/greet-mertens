import { Link } from 'gatsby';
import React from 'react';

import type { BlogPostPreview as BlogPostPreviewType } from '~/lib/types';
import { BlogPostPreviewList } from '~/lib/components/blog-post-preview-list';

import './blog-recent-posts-list.css';

interface Props {
  postPreviews: BlogPostPreviewType[];
}

export const BlogRecentPostsList = ({ postPreviews }: Props) => {
  return (
    <div className="container">
      <BlogPostPreviewList postPreviews={postPreviews} />
    </div>
  );
};
