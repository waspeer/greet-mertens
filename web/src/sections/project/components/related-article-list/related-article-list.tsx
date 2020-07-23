import React, { useState } from 'react';
import classNames from '@sindresorhus/class-names';

import { ArticlePreview } from '~/lib/types';
import { ArticlePreviewList } from '~/lib/components/article-preview-list';

import './related-article-list.css';

interface Props {
  articlePreviews: ArticlePreview[];
}

const VISIBLE_COUNT = 3;

export const RelatedArticleList = ({ articlePreviews }: Props) => {
  const [allVisible, setAllVisible] = useState(false);
  const visiblePreviews = articlePreviews.slice(0, VISIBLE_COUNT);
  const morePreviews = articlePreviews.slice(VISIBLE_COUNT);

  const toggleAllVisible = () => setAllVisible((prev) => !prev);

  return (
    <div className="mt-4">
      <ArticlePreviewList articlePreviews={visiblePreviews} />
      {articlePreviews.length ? (
        <div className={classNames('relatedArticleList__moreWrapper', { show: allVisible })}>
          <button
            className="relatedArticleList__moreToggle"
            onClick={toggleAllVisible}
            type="button"
          >
            Laat alle artikelen in deze lijst zien »
          </button>
          <ArticlePreviewList articlePreviews={morePreviews} />
        </div>
      ) : null}
    </div>
  );
};
