import { Link } from 'gatsby';
import React from 'react';

import type { Category as CategoryType, BlogPostPreview as BlogPostPreviewType } from '~/lib/types';
import { BlogPostPreviewList } from '~/lib/components/blog-post-preview-list';

import { CategoryInfo, NoPosts } from './components';

import './blog-category-overview.css';

interface Props {
  category: CategoryType;
  postPreviews: BlogPostPreviewType[];
}

export const BlogCategoryOverview = ({ category, postPreviews }: Props) => {
  return (
    <div className="container">
      <div className="blogCategoryOverview__navigation">
        <Link to="/blog/categories">&lt; Naar alle categorieën</Link>
      </div>
      <CategoryInfo category={category} />
      {postPreviews.length ? (
        <BlogPostPreviewList
          className="blogCategoryOverview__postPreviews"
          postPreviews={postPreviews}
        />
      ) : (
        <NoPosts className="blogCategoryOverview__postPreviews" />
      )}
    </div>
  );
};
