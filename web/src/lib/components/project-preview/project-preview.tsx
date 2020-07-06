import PortableText from '@sanity/block-content-to-react';
import Image from 'gatsby-image';
import React from 'react';

import type { ProjectPreview as ProjectPreviewType } from '~/lib/types';
import './project-preview.css';

interface Props {
  projectPreview: Omit<ProjectPreviewType, 'slug'>;
}

export const ProjectPreview = ({ projectPreview }: Props) => {
  const { isCurrent, mainImage, title, excerpt } = projectPreview;

  return (
    <div className="projectPreview">
      {isCurrent && <div className="projectPreview__currentBadge">nog lopend project</div>}
      <div className="projectPreview__image">
        {mainImage && mainImage.fluid && <Image fluid={mainImage.fluid} alt={mainImage.alt} />}
      </div>
      <div className="projectPreview__text">
        <h3>{title}</h3>
        <div className="projectPreview__excerpt">
          <PortableText blocks={excerpt} />
        </div>
      </div>
    </div>
  );
};
