import React from 'react';
import { graphql } from 'gatsby';

import { BlogCategoryOverview } from '~/sections/blog-category-overview';
import { normalizeProjectPreview } from '~/lib/helpers/normalize-project-preview';
import { normalizeCategory } from '~/lib/helpers/normalize-category';

import type { PortfolioCategoryPageQuery } from '~/../graphql-types';

interface Props {
  data: PortfolioCategoryPageQuery;
}

const PortfolioCategoryPage = ({ data }: Props) => {
  const category = normalizeCategory(data.category!);
  const projectPreviews = data.projects.nodes.map((node) =>
    normalizeProjectPreview({ ...node, publishedAt: new Date() }),
  );

  return <BlogCategoryOverview category={category} postPreviews={projectPreviews as any} />;
};

export const query = graphql`
  query PortfolioCategoryPage($id: String!) {
    category: sanityCategory(id: { eq: $id }) {
      color
      description
      icon {
        name
        native
      }
      id
      slug {
        current
      }
      title
    }

    projects: allSanityProject(
      sort: { fields: [publishedAt], order: DESC }
      filter: {
        categories: { elemMatch: { id: { eq: $id } } }
        publishedAt: { ne: null }
        slug: { current: { ne: null } }
      }
    ) {
      nodes {
        _rawExcerpt
        id
        isCurrent
        mainImage {
          asset {
            fluid(maxWidth: 600) {
              ...GatsbySanityImageFluid
            }
          }
          alt
        }
        publishedAt
        slug {
          current
        }
        title
      }
    }
  }
`;

export default PortfolioCategoryPage;
