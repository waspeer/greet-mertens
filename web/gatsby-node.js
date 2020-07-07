const { format, isFuture } = require('date-fns');

module.exports = {
  createPages: async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(/* GraphQL */ `
      query createPagesQuery {
        articles: allSanityArticle(
          filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
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
      .filter(({ publishedAt }) => !isFuture(new Date(publishedAt) || !(isCurrent || publishedAt)))
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
      .filter(({ isCurrent, publishedAt }) => !isFuture(new Date(publishedAt)))
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
      type SanityCategory implements Node {
        title: String!
        slug: SanitySlug!
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
