import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import React from 'react';

import type { PortfolioProject as PortfolioProjectType } from '~/lib/types';

import { CategoryList, Figure, PortfolioProjectBody } from './components';
import './portfolio-project.css';

interface Props {
  project: PortfolioProjectType;
}

export const PortfolioProject = ({ project }: Props) => {
  const { body, categories, isCurrent, mainImage, publishedAt, title } = project;

  return (
    <article>
      {mainImage && <Figure className="portfolioProject__mainImage" image={mainImage} />}
      <div className="portfolioProject__text container">
        <h1 className="portfolioProject__title">{title}</h1>
        <div className="portfolioProject__info">
          {isCurrent && <div className="portfolioProject__currentBadge">Nog lopend project</div>}
          {!!publishedAt && (
            <div className="portfolioProject__publishedAt">
              {format(new Date(publishedAt), 'MMMM yyyy', { locale: nl })}
            </div>
          )}
          {categories[0] && <CategoryList categories={categories} />}
        </div>
        <div className="portfolioProject__body">
          <PortfolioProjectBody body={body} />
        </div>
      </div>
    </article>
  );
};
