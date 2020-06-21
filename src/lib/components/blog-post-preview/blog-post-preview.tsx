import { format } from 'date-fns';
import Image from 'gatsby-image';
import React from 'react';
import PortableText from '@sanity/block-content-to-react';

import type { BlogPostPreview as BlogPostPreviewType } from '~/lib/types';

import './blog-post-preview.css';

interface Props {
  postPreview: Pick<BlogPostPreviewType, 'excerpt' | 'id' | 'mainImage' | 'publishedAt' | 'title'>;
}

export const BlogPostPreview = ({ postPreview }: Props) => {
  const { mainImage, title, excerpt, publishedAt } = postPreview;

  return (
    <div className="blogPostPreview">
      <div className="blogPostPreview__image">
        {mainImage && mainImage.fluid && <Image fluid={mainImage.fluid} alt={mainImage.alt} />}
      </div>
      <div className="blogPostPreview__text">
        <h3>{title}</h3>
        <div className="blogPostPreview__excerpt">
          <PortableText blocks={excerpt} />
        </div>
        <div className="blogPostPreview__publishedAt">{format(publishedAt, 'd MMMM yyyy')}</div>
      </div>
    </div>
  );
};
