import { Link } from 'gatsby';
import React from 'react';

import type {
  Category as CategoryType,
  BlogPostPreview as BlogPostPreviewType,
  PortfolioProjectPreview as PortfolioProjectPreviewType,
} from '~/lib/types';
import { BlogPostPreviewList } from '~/lib/components/blog-post-preview-list';
import { PortfolioProjectPreviewList } from '~/lib/components/portfolio-project-preview-list';

import './category-overview.css';

interface Props {
  category: CategoryType;
  postPreviews: BlogPostPreviewType[];
  projectPreviews: PortfolioProjectPreviewType[];
}

export const CategoryOverview = ({ category, postPreviews, projectPreviews }: Props) => {
  const { color, description, icon, title } = category;
  const iconElement = icon && (
    <span className="category__icon" role="img" aria-label={icon.description}>
      {icon.icon}
    </span>
  );

  return (
    <div className="container">
      <div className="categoryOverview__navigation">
        <Link to="/categories">&lt; Naar alle categorieën</Link>
      </div>

      <div className="categoryOverview__info">
        <h2>
          {iconElement}
          {title}
        </h2>
        <div
          className="categoryOverview__categoryColor"
          style={{ backgroundColor: color || 'whitesmoke' }}
        />
        <p className="categoryOverview__description">{description}</p>
      </div>

      {!!projectPreviews.length && (
        <div className="categoryOverview__relatedContent">
          <h2 className="gentleHeading">Projecten in deze categorie</h2>
          <PortfolioProjectPreviewList projectPreviews={projectPreviews} />
        </div>
      )}

      {!!postPreviews.length && (
        <div className="categoryOverview__relatedContent">
          <h2 className="gentleHeading">Blog posts in deze categorie</h2>
          <BlogPostPreviewList postPreviews={postPreviews} />
        </div>
      )}

      {!projectPreviews.length && !postPreviews.length && (
        <div className="categoryOverview__noRelatedContent">
          Er zijn nog geen projecten of blog posts in deze categorie.
        </div>
      )}
    </div>
  );
};
