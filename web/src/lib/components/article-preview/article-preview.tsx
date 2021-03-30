import PortableText from '@sanity/block-content-to-react';
import { format } from 'date-fns';
import { nl as locale } from 'date-fns/locale';
import { graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import React from 'react';

import type { ArticlePreview as ArticlePreviewType } from '~/lib/types';
import './article-preview.css';

interface Props {
  articlePreview: Pick<
    ArticlePreviewType,
    'excerpt' | 'id' | 'mainImage' | 'publishedAt' | 'title'
  >;
}

export const ArticlePreview = ({ articlePreview }: Props) => {
  const { mainImage, title, excerpt, publishedAt } = articlePreview;

  return (
    <div className="articlePreview">
      <div className="articlePreview__image">
        {mainImage?.imageData && <GatsbyImage image={mainImage.imageData} alt={mainImage.alt} />}
      </div>
      <div className="articlePreview__text">
        <div className="articlePreview__heading">{title}</div>
        <div className="articlePreview__excerpt">
          <PortableText blocks={excerpt} />
        </div>
        <div className="articlePreview__publishedAt">
          {format(publishedAt, 'd MMMM yyyy', { locale })}
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  fragment ArticlePreview on SanityArticle {
    id
    publishedAt
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
