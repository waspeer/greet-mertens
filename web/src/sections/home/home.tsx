import Image from 'gatsby-image';
import React from 'react';

import { ProjectPreview } from '~/lib/types';
import './home.css';
import { ProjectPreviewList } from '~/lib/components/project-preview-list';

interface Props {
  email: string;
  portrait?: any;
  projectHighlights?: ProjectPreview[];
  tagline: string;
}

export const Home = ({ email, portrait, projectHighlights, tagline }: Props) => {
  return (
    <div className="home">
      <div className="home__portrait">
        <Image fluid={portrait} />
      </div>
      <div className="home__text">
        <h2>Greet Mertens</h2>
        <div>{tagline}</div>
        <a className="home__email" href={`mailto:${email}`}>
          {email}
        </a>
        {projectHighlights && (
          <div className="home__projectHighlights">
            <h3 className="gentleHeading">Uitgelichte Projecten</h3>
            <ProjectPreviewList projectPreviews={projectHighlights} type="slim" />
          </div>
        )}
      </div>
    </div>
  );
};
