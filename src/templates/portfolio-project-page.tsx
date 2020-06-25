import React from 'react';
import { graphql } from 'gatsby';

import { normalizeProject } from '~/lib/helpers/normalize-project';
import { PortfolioProject } from '~/sections/portfolio-project';

import { PortfolioProjectPageQuery } from '~/../graphql-types';

interface Props {
  data: PortfolioProjectPageQuery;
}

const PortfolioProjectPage = ({ data }: Props) => {
  const project = normalizeProject(data.post!);

  return <PortfolioProject project={project} />;
};

export const query = graphql`
  query PortfolioProjectPage($id: String!) {
    post: sanityProject(id: { eq: $id }) {
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
