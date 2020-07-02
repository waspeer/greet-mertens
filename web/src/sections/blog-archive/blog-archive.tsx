import React from 'react';

import type { BlogPostPreview as BlogPostPreviewType } from '~/lib/types';
import { BlogPostPreviewList } from '~/lib/components/blog-post-preview-list';

interface Props {
  postPreviews: BlogPostPreviewType[];
}

export const BlogArchive = ({ postPreviews }: Props) => {
  return (
    <div className="container">
      <h2 className="gentleHeading">Alle blog posts</h2>
      <BlogPostPreviewList postPreviews={postPreviews} />
    </div>
  );
};
