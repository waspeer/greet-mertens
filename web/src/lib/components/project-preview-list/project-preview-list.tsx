import React from 'react';
import { Link } from 'gatsby';
import classNames from '@sindresorhus/class-names';

import type { ProjectPreview as ProjectPreviewType } from '~/lib/types';
import { getProjectUrl } from '~/lib/helpers/get-project-url';

import { ProjectPreview } from '../project-preview';

import './project-preview-list.css';

interface Props {
  className?: string;
  projectPreviews: ProjectPreviewType[];
}

export const ProjectPreviewList = ({ className, projectPreviews }: Props) => {
  return (
    <ul className={classNames('projectPreviewList', 'focussedList', className)}>
      {projectPreviews.map((projectPreview) => (
        <li key={projectPreview.id}>
          <Link to={getProjectUrl(projectPreview)}>
            <ProjectPreview projectPreview={projectPreview} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
