const { format, isFuture } = require('date-fns');

module.exports = {
  createPages: async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(/* GraphQL */ `
      query createPagesQuery {
        articles: allSanityArticle(
          filter: {
            slug: { current: { ne: null } }
            publishedAt: { ne: null }
            hidden: { ne: true }
          }
        ) {
          nodes {
            id
            publishedAt
            slug {
              current
            }
          }
        }

        projects: allSanityProject(filter: { slug: { current: { ne: null } } }) {
          nodes {
            id
            isCurrent
            publishedAt
            slug {
              current
            }
          }
        }

        categories: allSanityCategory(filter: { slug: { current: { ne: null } } }) {
          nodes {
            id
            slug {
              current
            }
          }
        }
      }
    `);

    if (result.errors) throw result.errors;

    const articlesResult = result.data.articles || {};
    const articleNodes = articlesResult.nodes || [];
    const projectsResult = result.data.projects || {};
    const projectNodes = projectsResult.nodes || [];
    const categoryNodes = (result.data.categories || {}).nodes || [];

    /**
     * ARTICLES
     */

    articleNodes
      .filter(({ publishedAt }) => publishedAt)
      .forEach(({ id, slug, publishedAt }) => {
        const dateSegment = format(new Date(publishedAt), 'yyyy/MM');
        const path = `/artikelen/${dateSegment}/${slug.current}/`;

        createPage({
          path,
          component: require.resolve('./src/templates/article-page.tsx'),
          context: { id },
        });
      });

    /**
     * PORTFOLIO PROJECTS
     */

    projectNodes
      .filter(({ isCurrent, publishedAt }) => isCurrent || publishedAt)
      .forEach(({ id, slug }) => {
        const path = `/portfolio/project/${slug.current}/`;

        createPage({
          path,
          component: require.resolve('./src/templates/project-page.tsx'),
          context: { id },
        });
      });

    /**
     * CATEGORY PAGES
     */
    categoryNodes.forEach(({ id, slug }) => {
      const path = `/categories/${slug.current}/`;

      createPage({
        path,
        component: require.resolve('./src/templates/category-page.tsx'),
        context: { id },
      });
    });
  },

  createSchemaCustomization: ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = /* GraphQL */ `
      # Hack to fix this issue: https://github.com/sanity-io/gatsby-source-sanity/issues/114
      type SanityImageFixed implements Node {
        base64: String
        width: String
        height: String
        src: String
        srcSet: String
        srcWebp: String
        srcSetWebp: String
      }

      type SanityImageFluid implements Node {
        base64: String
        aspectRatio: String
        src: String
        srcSet: String
        srcWebp: String
        srcSetWebp: String
        sizes: String
      }

      type SanityCategory implements Node {
        _id: String!
        title: String!
        slug: SanitySlug!
      }

      type SanityImageCrop implements Node {
        bottom: Float!
        left: Float!
        right: Float!
        top: Float!
      }

      type SanityImageHotspot implements Node {
        height: Float!
        width: Float!
        x: Float!
        y: Float!
      }

      type SanityImageMetadata implements Node {
        lqip: String!
      }

      type SanityImageAsset implements Node {
        _id: String!
        metadata: SanityImageMetadata!
      }

      type SanityFigure implements Node {
        alt: String!
        asset: SanityImageAsset
        caption: String
      }

      type SanitySlug implements Node {
        current: String!
      }

      type SanityArticle implements Node {
        _rawBody: JSON!
        _rawExcerpt: JSON!
        categories: [SanityCategory!]!
        mainImage: SanityFigure
        publishedAt: Date
        slug: SanitySlug!
        title: String!
      }

      type SanityProject implements Node {
        _rawBody: JSON!
        _rawExcerpt: JSON!
        categories: [SanityCategory!]!
        mainImage: SanityFigure
        publishedAt: Date
        slug: SanitySlug!
        title: String!
      }

      type SanityHighlight implements Node {
        projects: [SanityProject!]
      }
    `;

    createTypes(typeDefs);
  },
};
