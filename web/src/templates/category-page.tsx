import React from 'react';
import { graphql } from 'gatsby';

import { CategoryOverview } from '~/sections/category-overview';
import { normalizeArticlePreview } from '~/lib/helpers/normalize-article-preview';
import { normalizeCategory } from '~/lib/helpers/normalize-category';
import { normalizeProjectPreview } from '~/lib/helpers/normalize-project-preview';

import type { CategoryPageQuery } from '~/../graphql-types';

interface Props {
  data: CategoryPageQuery;
}

const CategoryPage = ({ data }: Props) => {
  const category = normalizeCategory(data.category!);
  const articlePreviews = data.articles.nodes.map((node) => normalizeArticlePreview(node));
  const projectPreviews = data.projects.nodes.map((node) => normalizeProjectPreview(node));

  return (
    <CategoryOverview
      category={category}
      articlePreviews={articlePreviews}
      projectPreviews={projectPreviews}
    />
  );
};

export const query = graphql`
  query CategoryPage($id: String!) {
    category: sanityCategory(id: { eq: $id }) {
      color
      description
      icon {
        name
        native
      }
      id
      slug {
        current
      }
      title
    }

    articles: allSanityArticle(
      sort: { fields: [publishedAt], order: DESC }
      filter: {
        categories: { elemMatch: { id: { eq: $id } } }
        publishedAt: { ne: null }
        slug: { current: { ne: null } }
      }
    ) {
      nodes {
        _rawExcerpt
        id
        mainImage {
          asset {
            fluid(maxWidth: 600) {
              ...GatsbySanityImageFluid
            }
          }
          alt
        }
        publishedAt
        slug {
          current
        }
        title
      }
    }

    projects: allSanityProject(
      sort: { fields: [publishedAt], order: DESC }
      filter: {
        categories: { elemMatch: { id: { eq: $id } } }
        publishedAt: { ne: null }
        slug: { current: { ne: null } }
      }
    ) {
      nodes {
        _rawExcerpt
        id
        isCurrent
        mainImage {
          asset {
            fluid(maxWidth: 600) {
              ...GatsbySanityImageFluid
            }
          }
          alt
        }
        publishedAt
        slug {
          current
        }
        title
      }
    }
  }
`;

export default CategoryPage;
