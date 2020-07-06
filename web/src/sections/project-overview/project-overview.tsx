import React from 'react';

import { ProjectPreview } from '~/lib/types';
import { ProjectPreviewList } from '~/lib/components/project-preview-list';

interface Props {
  projectPreviews: ProjectPreview[];
}

export const ProjectOverview = ({ projectPreviews }: Props) => {
  return (
    <div className="container">
      <h2 className="gentleHeading">Projecten</h2>
      <ProjectPreviewList projectPreviews={projectPreviews} />
    </div>
  );
};
