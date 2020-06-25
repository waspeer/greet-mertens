import React from 'react';
import { graphql } from 'gatsby';

import { normalizeProjectPreview } from '~/lib/helpers/normalize-project-preview';
import { PortfolioOverview } from '~/sections/portfolio-overview/portfolio-overview';

import type { PortfolioPageQuery } from '~/../graphql-types';

interface Props {
  data: PortfolioPageQuery;
}

const PortfolioPage = ({ data }: Props) => {
  const projectPreviews = data.projects.nodes.map(normalizeProjectPreview);

  return <PortfolioOverview projectPreviews={projectPreviews} />;
};

export const query = graphql`
  query PortfolioPage {
    projects: allSanityProject(
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      sort: { fields: publishedAt, order: DESC }
    ) {
      nodes {
        id
        isCurrent
        mainImage {
          asset {
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
          alt
        }
        title
        _rawExcerpt
        slug {
          current
        }
      }
    }
  }
`;

export default PortfolioPage;
