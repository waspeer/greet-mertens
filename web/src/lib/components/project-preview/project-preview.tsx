import PortableText from '@sanity/block-content-to-react';
import { graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import React from 'react';

import type { ProjectPreview as ProjectPreviewType } from '~/lib/types';

import './project-preview.css';
import { CategoryBadge } from '../category-badge';

interface Props {
  projectPreview: Omit<ProjectPreviewType, 'slug'>;
  type?: 'normal' | 'slim';
}

export const ProjectPreview = ({ projectPreview, type = 'normal' }: Props) => {
  const { categories, isCurrent, mainImage, title, excerpt } = projectPreview;

  return (
    <div className="projectPreview">
      {isCurrent && <div className="projectPreview__currentBadge">nog lopend project</div>}
      <div className="projectPreview__image">
        {mainImage?.imageData && <GatsbyImage image={mainImage.imageData} alt={mainImage.alt} />}
      </div>
      {type === 'slim' && <div className="projectPreview__title--slim">{title}</div>}
      {type === 'normal' && (
        <div className="projectPreview__text">
          {!!categories.length && (
            <CategoryBadge category={categories[0]} className="projectPreview__category" />
          )}
          <h3>{title}</h3>
          <div className="projectPreview__excerpt">
            <PortableText blocks={excerpt} />
          </div>
        </div>
      )}
    </div>
  );
};

export const query = graphql`
  fragment ProjectPreview on SanityProject {
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
      asset {
        gatsbyImageData(width: 700)
      }
      alt
    }
    title
    _rawExcerpt
    slug {
      current
    }
  }
`;
