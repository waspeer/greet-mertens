import React from 'react';
import { graphql } from 'gatsby';

import { BlogRecentPostsList } from '~/sections/blog-recent-posts-list';
import { normalizePostPreview } from '~/lib/helpers/normalize-post-preview';

import type { BlogRecentPageQuery } from '../../../graphql-types';

interface Props {
  data: BlogRecentPageQuery;
}

const BlogPage = ({ data }: Props) => {
  const postPreviews = data.posts.edges.map(({ node }) => normalizePostPreview(node));

  return (
    <BlogRecentPostsList
      hasMorePosts={data.posts.pageInfo.hasNextPage}
      postPreviews={postPreviews}
    />
  );
};

export const query = graphql`
  query BlogRecentPage {
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
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
      pageInfo {
        hasNextPage
      }
    }
  }
`;

export default BlogPage;
