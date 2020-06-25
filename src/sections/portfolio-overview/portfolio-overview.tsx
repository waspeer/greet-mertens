import React from 'react';

import { PortfolioProjectPreview } from '~/lib/types';
import { PortfolioProjectPreviewList } from '~/lib/components/portfolio-project-preview-list';

interface Props {
  projectPreviews: PortfolioProjectPreview[];
}

export const PortfolioOverview = ({ projectPreviews }: Props) => {
  return (
    <div className="container">
      <PortfolioProjectPreviewList projectPreviews={projectPreviews} />
    </div>
  );
};
