import React from 'react';
import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import { normalizeProjectPreview } from '~/lib/helpers/normalize-project-preview';
import { ProjectOverview } from '~/sections/project-overview/project-overview';

import type { ProjectsPageQuery } from '~/../graphql-types';

interface Props {
  data: ProjectsPageQuery;
}

const ProjectsPage = ({ data }: Props) => {
  const currentProjectPreviews = data.currentProjects.nodes.map(normalizeProjectPreview);
  const publishedProjectPreviews = data.publishedProjects.nodes.map(normalizeProjectPreview);

  return (
    <>
      <GatsbySeo title="Projecten" openGraph={{ title: 'Projecten' }} />

      <ProjectOverview projectPreviews={[...currentProjectPreviews, ...publishedProjectPreviews]} />
    </>
  );
};

export const query = graphql`
  query ProjectsPage {
    currentProjects: allSanityProject(
      filter: { slug: { current: { ne: null } }, isCurrent: { eq: true } }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        ...ProjectPreview
      }
    }

    publishedProjects: allSanityProject(
      filter: {
        slug: { current: { ne: null } }
        publishedAt: { ne: null }
        isCurrent: { ne: true }
      }
      sort: { fields: publishedAt, order: DESC }
    ) {
      nodes {
        ...ProjectPreview
      }
    }
  }
`;

export default ProjectsPage;
