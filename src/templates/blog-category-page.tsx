import React from 'react';
import { graphql } from 'gatsby';

import { BlogCategoryOverview } from '~/sections/blog-category-overview';
import { normalizePostPreview } from '~/lib/helpers/normalize-post-preview';
import { normalizeCategory } from '~/lib/helpers/normalize-category';

import type { BlogCategoryPageQuery } from '~/../graphql-types';

interface Props {
  data: BlogCategoryPageQuery;
}

const BlogCategoryPage = ({ data }: Props) => {
  const category = normalizeCategory(data.category!);
  const postPreviews = data.posts.nodes.map((node) => normalizePostPreview(node));

  return <BlogCategoryOverview category={category} postPreviews={postPreviews} />;
};

export const query = graphql`
  query BlogCategoryPage($id: String!) {
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

    posts: allSanityPost(
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

export default BlogCategoryPage;
