import React from 'react';
import { graphql } from 'gatsby';

import { normalizeProject } from '~/lib/helpers/normalize-project';
import { Project } from '~/sections/project';
import { normalizeArticlePreview } from '~/lib/helpers/normalize-article-preview';

import { ProjectPageQuery } from '~/../graphql-types';

interface Props {
  data: ProjectPageQuery;
}

const ProjectPage = ({ data }: Props) => {
  const project = normalizeProject(data.project!);
  const relatedArticlePreviews = data.relatedArticles.edges.map(({ node }) =>
    normalizeArticlePreview(node),
  );

  return <Project project={project} relatedArticlePreviews={relatedArticlePreviews} />;
};

export const query = graphql`
  query ProjectPage($id: String!) {
    project: sanityProject(id: { eq: $id }) {
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
      isCurrent
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

    relatedArticles: allSanityArticle(
      filter: {
        project: { id: { eq: $id } }
        slug: { current: { ne: null } }
        publishedAt: { ne: null }
      }
      sort: { fields: [publishedAt], order: DESC }
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

export default ProjectPage;
