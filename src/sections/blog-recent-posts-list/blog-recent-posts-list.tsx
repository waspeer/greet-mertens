import { Link } from 'gatsby';
import React from 'react';

import type { BlogPostPreview as BlogPostPreviewType } from '~/lib/types';
import { BlogPostPreviewList } from '~/lib/components/blog-post-preview-list';

import './blog-recent-posts-list.css';

interface Props {
  hasMorePosts: boolean;
  postPreviews: BlogPostPreviewType[];
}

export const BlogRecentPostsList = ({ hasMorePosts, postPreviews }: Props) => {
  return (
    <div className="container">
      <h2 className="gentleHeading">Recente blog posts</h2>
      <BlogPostPreviewList postPreviews={postPreviews} />
      {hasMorePosts && (
        <Link className="blogRecentPostsList__moreLink" to="/blog/archive">
          Meer posts »
        </Link>
      )}
    </div>
  );
};
