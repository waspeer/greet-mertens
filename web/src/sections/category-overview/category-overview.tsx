import { Link } from 'gatsby';
import React from 'react';

import type {
  Category as CategoryType,
  ArticlePreview as ArticlePreviewType,
  PortfolioProjectPreview as PortfolioProjectPreviewType,
} from '~/lib/types';
import { ArticlePreviewList } from '~/lib/components/article-preview-list';
import { PortfolioProjectPreviewList } from '~/lib/components/project-preview-list';

import './category-overview.css';

interface Props {
  category: CategoryType;
  articlePreviews: ArticlePreviewType[];
  projectPreviews: PortfolioProjectPreviewType[];
}

export const CategoryOverview = ({ category, articlePreviews, projectPreviews }: Props) => {
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

      {!!articlePreviews.length && (
        <div className="categoryOverview__relatedContent">
          <h2 className="gentleHeading">Artikelen in deze categorie</h2>
          <ArticlePreviewList articlePreviews={articlePreviews} />
        </div>
      )}

      {!projectPreviews.length && !articlePreviews.length && (
        <div className="categoryOverview__noRelatedContent">
          Er zijn nog geen projecten of artikelen in deze categorie.
        </div>
      )}
    </div>
  );
};
