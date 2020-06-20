import { graphql } from "gatsby";
import React from "react";
import { BlogPostPageQuery } from "../../graphql-types";
import { BlogPost } from "#components/blog-post";
import { BlogPost as BlogPostType } from "#lib/types";

interface Props {
  data: BlogPostPageQuery;
}

const BlogPostPage = ({ data }: Props) => {
  const postData = data.post!;
  const post: BlogPostType = (({
    _rawBody,
    categories,
    mainImage,
    publishedAt,
    ...rest
  }) => ({
    body: _rawBody,
    categories: categories.map(({ icon, ...category }) => ({
      icon: icon?.native,
      ...category,
    })),
    mainImage: mainImage
      ? {
          alt: mainImage.alt,
          caption: mainImage.caption,
          fluid: mainImage.asset?.fluid,
        }
      : undefined,
    publishedAt: new Date(publishedAt),
    ...rest,
  }))(postData);

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
        title
      }
      id
      mainImage {
        alt
        asset {
          fluid(maxWidth: 700) {
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
