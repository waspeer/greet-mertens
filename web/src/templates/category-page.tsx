import { isFuture } from 'date-fns';
import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import React from 'react';

import { normalizeArticlePreview } from '~/lib/helpers/normalize-article-preview';
import { normalizeCategory } from '~/lib/helpers/normalize-category';
import { normalizeProjectPreview } from '~/lib/helpers/normalize-project-preview';
import { CategoryOverview } from '~/sections/category-overview';

import type { CategoryPageQuery } from '~/../graphql-types';

interface Props {
  data: CategoryPageQuery;
}

const CategoryPage = ({ data }: Props) => {
  const category = normalizeCategory(data.category!);
  const articlePreviews = data.articles.nodes.map((node) => normalizeArticlePreview(node));
  const projectPreviews = data.projects.nodes
    .filter(
      ({ isCurrent, publishedAt }) =>
        isCurrent || (publishedAt && !isFuture(new Date(publishedAt))),
    )
    .map((node) => normalizeProjectPreview(node));

  return (
    <>
      <GatsbySeo
        description={category.description ?? ''}
        title={category.title}
        openGraph={{
          description: category.description ?? '',
          title: category.title ?? '',
        }}
      />

      <CategoryOverview
        category={category}
        articlePreviews={articlePreviews}
        projectPreviews={projectPreviews}
      />
    </>
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
        ...ArticlePreview
      }
    }

    projects: allSanityProject(
      sort: { fields: [publishedAt], order: DESC }
      filter: { categories: { elemMatch: { id: { eq: $id } } }, slug: { current: { ne: null } } }
    ) {
      nodes {
        ...ProjectPreview
        publishedAt
      }
    }
  }
`;

export default CategoryPage;
