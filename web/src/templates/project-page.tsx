import React from 'react';
import { graphql } from 'gatsby';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import { normalizeProject } from '~/lib/helpers/normalize-project';
import { Project } from '~/sections/project';
import { normalizeArticlePreview } from '~/lib/helpers/normalize-article-preview';
import { sanityBlocksToPlainText } from '~/lib/helpers/sanity-blocks-to-plain-text';
import { getSanityOpenGraphImage } from '~/lib/helpers/get-sanity-image-open-graph-url';

import { ProjectPageQuery } from '~/../graphql-types';

interface Props {
  data: ProjectPageQuery;
}

const ProjectPage = ({ data }: Props) => {
  const project = normalizeProject(data.project!);
  const relatedArticlePreviews = data.relatedArticles.edges.map(({ node }) =>
    normalizeArticlePreview(node),
  );
  const description = sanityBlocksToPlainText(data.project!._rawExcerpt);

  return (
    <>
      <GatsbySeo
        description={description}
        title={project.title}
        openGraph={{
          description,
          title: project.title,
          images: [
            getSanityOpenGraphImage(
              data.project?.mainImage,
              project.mainImage?.alt ?? project.title,
            ),
          ],
        }}
      />

      <Project project={project} relatedArticlePreviews={relatedArticlePreviews} />
    </>
  );
};

export const query = graphql`
  query ProjectPage($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      ...Project
      _rawExcerpt
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
          ...ArticlePreview
        }
      }
    }
  }
`;

export default ProjectPage;
