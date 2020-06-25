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
  const { body, categories, mainImage, publishedAt, title } = project;
  const formattedDate = format(new Date(publishedAt), 'MMMM yyyy', { locale: nl });

  return (
    <article>
      {mainImage && <Figure className="portfolioProject__mainImage" image={mainImage} />}
      <div className="portfolioProject__text container">
        <h1 className="portfolioProject__title">{title}</h1>
        <div className="portfolioProject__info">
          <div className="portfolioProject__publishedAt">{formattedDate}</div>
          {categories[0] && <CategoryList categories={categories} />}
        </div>
        <div className="portfolioProject__body">
          <PortfolioProjectBody body={body} />
        </div>
      </div>
    </article>
  );
};
