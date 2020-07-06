import React from 'react';
import { graphql } from 'gatsby';

import { normalizeProject } from '~/lib/helpers/normalize-project';
import { PortfolioProject } from '~/sections/project';

import { PortfolioProjectPageQuery } from '~/../graphql-types';

interface Props {
  data: PortfolioProjectPageQuery;
}

const PortfolioProjectPage = ({ data }: Props) => {
  const project = normalizeProject(data.project!);

  return <PortfolioProject project={project} />;
};

export const query = graphql`
  query PortfolioProjectPage($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      categories {
        color
        description
        icon {
          native
        }
        id
        slug {
          current
        }
        title
      }
      id
      isCurrent
      mainImage {
        alt
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
        caption
      }
      publishedAt
      title
      _rawBody
    }
  }
`;

export default PortfolioProjectPage;
