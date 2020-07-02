import React from 'react';
import { graphql } from 'gatsby';

import { normalizePostPreview } from '~/lib/helpers/normalize-post-preview';
import { BlogArchive } from '~/sections/blog-archive';

import type { BlogArchivePageQuery } from '~/../graphql-types';

interface Props {
  data: BlogArchivePageQuery;
}

const Archive = ({ data }: Props) => {
  const postPreviews = data.posts.edges.map(({ node }) => normalizePostPreview(node));

  return <BlogArchive postPreviews={postPreviews} />;
};

export const query = graphql`
  query BlogArchivePage {
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

export default Archive;
