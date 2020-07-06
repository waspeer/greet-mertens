import { Link } from 'gatsby';
import React from 'react';

import type { ArticlePreview as ArticlePreviewType } from '~/lib/types';
import { ArticlePreviewList } from '~/lib/components/article-preview-list';

import './article-recent-list.css';

interface Props {
  hasMoreArticles: boolean;
  articlePreviews: ArticlePreviewType[];
}

export const ArticleRecentList = ({ hasMoreArticles, articlePreviews }: Props) => {
  return (
    <div className="container">
      <h2 className="gentleHeading">Recente artikelen</h2>
      <ArticlePreviewList articlePreviews={articlePreviews} />
      {hasMoreArticles && (
        <Link className="articleRecentList__moreLink" to="/artikelen/archive">
          Meer artikelen »
        </Link>
      )}
    </div>
  );
};
