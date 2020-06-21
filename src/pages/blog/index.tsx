import React from 'react';
import { graphql } from 'gatsby';

import type { BlogPostPreview } from '~/lib/types';
import { BlogRecentPostsList } from '~/sections/blog-recent-posts-list';
import { normalizePostPreview } from '~/lib/helpers/normalize-post-preview';

import type { BlogPageQuery } from '../../../graphql-types';

interface Props {
  data: BlogPageQuery;
}

const BlogPage = ({ data }: Props) => {
  const postPreviews: BlogPostPreview[] = data.posts.edges.map(({ node }) =>
    normalizePostPreview(node),
  );

  return <BlogRecentPostsList postPreviews={postPreviews} />;
};

export const query = graphql`
  query BlogPage {
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
    }
  }
`;

export default BlogPage;
