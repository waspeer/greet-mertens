import React from 'react';

import type { ArticlePreview as ArticlePreviewType } from '~/lib/types';
import { ArticlePreviewList } from '~/lib/components/article-preview-list';

interface Props {
  articlePreviews: ArticlePreviewType[];
}

export const ArticleArchive = ({ articlePreviews }: Props) => {
  return (
    <div className="container">
      <h2 className="gentleHeading">Alle artikelen</h2>
      <ArticlePreviewList articlePreviews={articlePreviews} />
    </div>
  );
};
