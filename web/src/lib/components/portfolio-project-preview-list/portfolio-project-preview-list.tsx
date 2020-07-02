import React from 'react';
import { Link } from 'gatsby';
import classNames from '@sindresorhus/class-names';

import type { PortfolioProjectPreview as PortfolioProjectPreviewType } from '~/lib/types';
import { getProjectUrl } from '~/lib/helpers/get-project-url';

import { PortfolioProjectPreview } from '../portfolio-project-preview';

import './portfolio-project-preview-list.css';

interface Props {
  className?: string;
  projectPreviews: PortfolioProjectPreviewType[];
}

export const PortfolioProjectPreviewList = ({ className, projectPreviews }: Props) => {
  return (
    <ul className={classNames('portfolioProjectPreviewList', 'focussedList', className)}>
      {projectPreviews.map((projectPreview) => (
        <li key={projectPreview.id}>
          <Link to={getProjectUrl(projectPreview)}>
            <PortfolioProjectPreview projectPreview={projectPreview} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
