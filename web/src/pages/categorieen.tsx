import React from 'react';
import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import type { Category } from '~/lib/types';
import { CategoriesOverview } from '~/sections/categories-overview';

import type { CategoriesPageQuery } from '~/../graphql-types';

interface Props {
  data: CategoriesPageQuery;
}

const CategoriesPage = ({ data }: Props) => {
  const categories: Category[] = data.allSanityCategory.nodes.map(({ icon, slug, ...rest }) => ({
    icon: icon && { icon: icon.native!, description: icon.name! },
    slug: slug.current,
    ...rest,
  }));

  return (
    <>
      <GatsbySeo title="Categorieën" openGraph={{ title: 'Categorieën' }} />

      <CategoriesOverview categories={categories} />
    </>
  );
};

export const query = graphql`
  query CategoriesPage {
    allSanityCategory(sort: { fields: title, order: ASC }) {
      nodes {
        color {
          value
        }
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
    }
  }
`;

export default CategoriesPage;
