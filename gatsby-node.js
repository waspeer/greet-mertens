const { format, isFuture } = require("date-fns");

module.exports = {
  createPages: async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(/* GraphQL */ `
      query createPagesQuery {
        allSanityPost(
          filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
        ) {
          edges {
            node {
              id
              publishedAt
              slug {
                current
              }
            }
          }
        }
      }
    `);

    if (result.errors) throw result.errors;

    const postEdges = (result.data.allSanityPost || {}).edges || [];

    postEdges
      .filter((edge) => !isFuture(new Date(edge.node.publishedAt)))
      .forEach((edge) => {
        const { id, slug = {}, publishedAt } = edge.node;
        const dateSegment = format(new Date(publishedAt), "yyyy/MM");
        const path = `/blog/${dateSegment}/${slug.current}/`;

        createPage({
          path,
          component: require.resolve("./src/templates/blog-post-page.tsx"),
          context: { id },
        });
      });
  },

  createSchemaCustomization: ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = /* GraphQL */ `
      type SanityCategory implements Node {
        title: String!
      }

      type SanityFigure implements Node {
        alt: String!
        asset: SanityImageAsset
        caption: String
      }

      type SanitySlug implements Node {
        current: String!
      }

      type SanityPost implements Node {
        _rawBody: JSON!
        _rawExcerpt: JSON!
        categories: [SanityCategory!]!
        mainImage: SanityFigure
        publishedAt: Date
        slug: SanitySlug!
        title: String!
      }
    `;

    createTypes(typeDefs);
  },
};
