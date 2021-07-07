import { Link } from 'gatsby';
import React from 'react';

import type {
  Category as CategoryType,
  ArticlePreview as ArticlePreviewType,
  ProjectPreview as ProjectPreviewType,
} from '~/lib/types';
import { ArticlePreviewList } from '~/lib/components/article-preview-list';
import { ProjectPreviewList } from '~/lib/components/project-preview-list';

import './category-overview.css';

interface Props {
  category: CategoryType;
  articlePreviews: ArticlePreviewType[];
  projectPreviews: ProjectPreviewType[];
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
        <Link to="/categorieen">&lt; Naar alle categorieën</Link>
      </div>

      <div className="categoryOverview__info">
        <h2>
          {iconElement}
          {title}
        </h2>
        <div
          className="categoryOverview__categoryColor"
          style={{ backgroundColor: color || 'whitesmoke' } as any}
        />
        <p className="categoryOverview__description">{description}</p>
      </div>

      {!!projectPreviews.length && (
        <div className="categoryOverview__relatedContent">
          <h2 className="gentleHeading">Projecten in deze categorie</h2>
          <ProjectPreviewList projectPreviews={projectPreviews} />
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
