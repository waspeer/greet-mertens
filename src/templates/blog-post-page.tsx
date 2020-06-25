import { graphql } from 'gatsby';
import React from 'react';

import { BlogPost } from '~/sections/blog-post';
import { normalizePost } from '~/lib/helpers/normalize-post';

import type { BlogPostPageQuery } from '../../graphql-types';

interface Props {
  data: BlogPostPageQuery;
}

const BlogPostPage = ({ data }: Props) => {
  const post = normalizePost(data.post!);

  return <BlogPost post={post} />;
};

export const query = graphql`
  query BlogPostPage($id: String!) {
    post: sanityPost(id: { eq: $id }) {
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

export default BlogPostPage;
