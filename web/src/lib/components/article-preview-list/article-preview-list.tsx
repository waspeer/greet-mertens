import React from 'react';
import { Link } from 'gatsby';
import classNames from '@sindresorhus/class-names';

import type { ArticlePreview as ArticlePreviewType } from '~/lib/types';
import { getArticleUrl } from '~/lib/helpers/get-article-url';

import { ArticlePreview } from '../article-preview';

import './article-preview-list.css';

interface Props {
  className?: string;
  articlePreviews: ArticlePreviewType[];
}

export const ArticlePreviewList = ({ className, articlePreviews }: Props) => {
  return (
    <ul className={classNames('articlePreviewList', 'focussedList', className)}>
      {articlePreviews.map((articlePreview) => (
        <li key={articlePreview.id}>
          <Link to={getArticleUrl(articlePreview)}>
            <ArticlePreview articlePreview={articlePreview} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
