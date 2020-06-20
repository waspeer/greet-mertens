import { format } from 'date-fns';
import Image from 'gatsby-image';
import React from 'react';

import type { BlogPostPreview as IBlogPostPreview } from '#lib/types';
import { PortableText } from '#components/portable-text';

import './blog-post-preview.css';

type Props = Pick<IBlogPostPreview, 'excerpt' | 'id' | 'mainImage' | 'publishedAt' | 'title'>;

export const BlogPostPreview = ({ mainImage, title, excerpt, publishedAt }: Props) => {
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
