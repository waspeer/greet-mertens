import React from 'react';
import { graphql } from 'gatsby';

import type { Category } from '~/lib/types';
import { BlogCategoryOverview } from '~/sections/blog-category-overview/blog-category-overview';

import type { CategoriesPageQuery } from '../../../graphql-types';

interface Props {
  data: CategoriesPageQuery;
}

const CategoriesPage = ({ data }: Props) => {
  const categories: Category[] = data.allSanityCategory.nodes.map(({ icon, slug, ...rest }) => ({
    icon: icon && { icon: icon.native!, description: icon.name! },
    slug: slug.current,
    ...rest,
  }));

  return <BlogCategoryOverview categories={categories} />;
};

export const query = graphql`
  query CategoriesPage {
    allSanityCategory {
      nodes {
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
    }
  }
`;

export default CategoriesPage;
