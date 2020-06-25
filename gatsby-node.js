const { format, isFuture } = require('date-fns');

module.exports = {
  createPages: async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(/* GraphQL */ `
      query createPagesQuery {
        posts: allSanityPost(
          filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
        ) {
          nodes {
            id
            publishedAt
            slug {
              current
            }
          }
          usedCategories: distinct(field: categories___id)
        }

        projects: allSanityProject(
          filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
        ) {
          nodes {
            id
            publishedAt
            slug {
              current
            }
          }
          usedCategories: distinct(field: categories___id)
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

    const postsResult = result.data.posts || {};
    const postNodes = postsResult.nodes || [];
    const postCategories = postsResult.usedCategories || [];
    const projectsResult = result.data.projects || {};
    const projectNodes = projectsResult.nodes || [];
    const projectCategories = projectsResult.usedCategories || [];
    const categoryNodes = (result.data.categories || {}).nodes || [];

    /**
     * BLOG POSTS
     */

    postNodes
      .filter(({ publishedAt }) => !isFuture(new Date(publishedAt)))
      .forEach(({ id, slug, publishedAt }) => {
        const dateSegment = format(new Date(publishedAt), 'yyyy/MM');
        const path = `/blog/${dateSegment}/${slug.current}/`;

        createPage({
          path,
          component: require.resolve('./src/templates/blog-post-page.tsx'),
          context: { id },
        });
      });

    /**
     * BLOG CATEGORIES PAGE
     */

    createPage({
      path: '/blog/categories',
      component: require.resolve('./src/templates/blog-categories-page.tsx'),
      context: { ids: postCategories },
    });

    /**
     * BLOG CATEGORY PAGES
     */

    postCategories.forEach((id) => {
      const slug = categoryNodes.find((category) => category.id === id).slug.current;
      const path = `/blog/categories/${slug}`;

      createPage({
        path,
        component: require.resolve('./src/templates/blog-category-page.tsx'),
        context: { id },
      });
    });

    /**
     * PORTFOLIO PROJECTS
     */

    projectNodes
      .filter(({ publishedAt }) => !isFuture(new Date(publishedAt)))
      .forEach(({ id, slug }) => {
        const path = `/portfolio/project/${slug.current}/`;

        createPage({
          path,
          component: require.resolve('./src/templates/portfolio-project-page.tsx'),
          context: { id },
        });
      });

    /**
     * PORTFOLIO CATEGORY PAGES
     */

    projectCategories.forEach((id) => {
      const slug = categoryNodes.find((category) => category.id === id).slug.current;
      const path = `/portfolio/categories/${slug}`;

      createPage({
        path,
        component: require.resolve('./src/templates/portfolio-category-page.tsx'),
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

      type SanityPost implements Node {
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
    `;

    createTypes(typeDefs);
  },
};
