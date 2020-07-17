import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import { graphql, Link } from 'gatsby';
import React from 'react';

import { ArticlePreviewList } from '~/lib/components/article-preview-list';
import { CategoryBadge } from '~/lib/components/category-badge/category-badge';
import { SanityBodyText } from '~/lib/components/sanity-body-text';
import { SanityFigure } from '~/lib/components/sanity-figure';
import { getCategoryUrl } from '~/lib/helpers/get-category-url';
import type { ArticlePreview as ArticlePreviewType, Project as ProjectType } from '~/lib/types';
import './project.css';

interface Props {
  project: ProjectType;
  relatedArticlePreviews: ArticlePreviewType[];
}

export const Project = ({ project, relatedArticlePreviews }: Props) => {
  const { body, categories, isCurrent, mainImage, publishedAt, title } = project;

  return (
    <article>
      {mainImage && <SanityFigure className="project__mainImage" image={mainImage} />}
      <div className="project__text container">
        <h1 className="project__title">{title}</h1>
        <div className="project__info">
          {isCurrent && <div className="project__currentBadge">Nog lopend project</div>}
          {!!publishedAt && (
            <div className="project__publishedAt">
              {format(new Date(publishedAt), 'MMMM yyyy', { locale: nl })}
            </div>
          )}
          {!!categories.length && (
            <ul className="project__categories">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link to={getCategoryUrl(category)}>
                    <CategoryBadge category={category} />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="project__body">
          <SanityBodyText body={body} />
        </div>
        {!!relatedArticlePreviews.length && (
          <div className="project__relatedArticles">
            <h2 className="gentleHeading">Gerelateerde artikelen</h2>

            <ArticlePreviewList articlePreviews={relatedArticlePreviews} />
          </div>
        )}
      </div>
    </article>
  );
};

export const query = graphql`
  fragment Project on SanityProject {
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
      ...TransformableFigure
    }
    publishedAt
    title
    _rawBody
  }
`;
