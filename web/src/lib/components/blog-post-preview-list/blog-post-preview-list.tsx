import React from 'react';
import { Link } from 'gatsby';
import classNames from '@sindresorhus/class-names';

import type { BlogPostPreview as BlogPostPreviewType } from '~/lib/types';
import { getPostUrl } from '~/lib/helpers/get-post-url';

import { BlogPostPreview } from '../blog-post-preview';

interface Props {
  className?: string;
  postPreviews: BlogPostPreviewType[];
}

export const BlogPostPreviewList = ({ className, postPreviews }: Props) => {
  return (
    <ul className={classNames('focussedList', className)}>
      {postPreviews.map((postPreview) => (
        <li key={postPreview.id}>
          <Link to={getPostUrl(postPreview)}>
            <BlogPostPreview postPreview={postPreview} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
