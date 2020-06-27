import React from 'react';

import { PortfolioProjectPreview } from '~/lib/types';
import { PortfolioProjectPreviewList } from '~/lib/components/portfolio-project-preview-list';

interface Props {
  projectPreviews: PortfolioProjectPreview[];
}

export const PortfolioOverview = ({ projectPreviews }: Props) => {
  return (
    <div className="container">
      <h2 className="gentleHeading">Projecten</h2>
      <PortfolioProjectPreviewList projectPreviews={projectPreviews} />
    </div>
  );
};
