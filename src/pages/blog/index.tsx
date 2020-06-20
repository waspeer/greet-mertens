import React from 'react';
import { graphql } from 'gatsby';

import type { BlogPostPreview } from '~/lib/types';
import { BlogPostPreviewList } from '~/sections/blog-post-preview-list';

import type { BlogPageQuery } from '../../../graphql-types';

interface Props {
  data: BlogPageQuery;
}

const BlogPage = ({ data }: Props) => {
  const postPreviews: BlogPostPreview[] = data.posts.edges.map(
    ({ node: { mainImage, publishedAt, _rawExcerpt, slug, ...rest } }) => ({
      excerpt: _rawExcerpt,
      mainImage: mainImage
        ? {
            alt: mainImage.alt,
            fluid: mainImage.asset?.fluid,
          }
        : undefined,
      publishedAt: new Date(publishedAt),
      slug: slug.current,
      ...rest,
    }),
  );

  return <BlogPostPreviewList posts={postPreviews} />;
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
