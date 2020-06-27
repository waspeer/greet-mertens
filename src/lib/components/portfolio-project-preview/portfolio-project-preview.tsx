import Image from 'gatsby-image';
import React from 'react';
import PortableText from '@sanity/block-content-to-react';

import type { PortfolioProjectPreview as PortfolioProjectPreviewType } from '~/lib/types';

import './portfolio-project-preview.css';

interface Props {
  projectPreview: Omit<PortfolioProjectPreviewType, 'slug'>;
}

export const PortfolioProjectPreview = ({ projectPreview }: Props) => {
  const { isCurrent, mainImage, title, excerpt } = projectPreview;

  return (
    <div className="portfolioProjectPreview">
      {isCurrent && <div className="portfolioProjectPreview__currentBadge">nog lopend project</div>}
      <div className="portfolioProjectPreview__image">
        {mainImage && mainImage.fluid && <Image fluid={mainImage.fluid} alt={mainImage.alt} />}
      </div>
      <div className="portfolioProjectPreview__text">
        <h3>{title}</h3>
        <div className="portfolioProjectPreview__excerpt">
          <PortableText blocks={excerpt} />
        </div>
      </div>
    </div>
  );
};
