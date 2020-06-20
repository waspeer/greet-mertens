import React from 'react';
import { graphql } from 'gatsby';

import type { BlogCategoryPageQuery } from '~/../graphql-types';

interface Props {
  data: BlogCategoryPageQuery;
}

const BlogCategoryPage = ({ data }: Props) => {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export const query = graphql`
  query BlogCategoryPage($id: String!) {
    category: sanityCategory(id: { eq: $id }) {
      title
    }
  }
`;

export default BlogCategoryPage;
