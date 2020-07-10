import PortableText from '@sanity/block-content-to-react';
import { format } from 'date-fns';
import { nl as locale } from 'date-fns/locale';
import Image from 'gatsby-image';
import React from 'react';

import type { ArticlePreview as ArticlePreviewType } from '~/lib/types';

import './article-preview.css';
import { graphql } from 'gatsby';

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
        {mainImage && mainImage.fluid && <Image fluid={mainImage.fluid} alt={mainImage.alt} />}
      </div>
      <div className="articlePreview__text">
        <h3>{title}</h3>
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
`;
