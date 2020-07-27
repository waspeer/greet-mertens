import Flickity from 'react-flickity-component';
import React from 'react';
import 'flickity/css/flickity.css';

import type { ArticlePreview } from '~/lib/types';
import { ArticlePreviewList } from '~/lib/components/article-preview-list';

import './related-article-slider.css';

interface Props {
  articlePreviews: ArticlePreview[];
}

const PAGE_SIZE = 3;

export const RelatedArticleSlider = ({ articlePreviews }: Props) => {
  const pages = articlePreviews.reduce((acc, _, index) => {
    if (index % PAGE_SIZE === 0) {
      acc.push(articlePreviews.slice(index, index + PAGE_SIZE));
    }

    return acc;
  }, [] as ArticlePreview[][]);

  return (
    <Flickity static className="relatedArticleSlider">
      {pages.map((page) => (
        <ArticlePreviewList articlePreviews={page} />
      ))}
    </Flickity>
  );
};
