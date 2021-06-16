import { h } from 'preact';

import { ArticlePreview } from '../article-preview';

import type { Data } from '~/lib/data';

interface ArticlePreviewListProps {
  articles: Data.Article[];
}

export const ArticlePreviewList = ({ articles }: ArticlePreviewListProps) => {
  return (
    <ul className="articlePreviewList">
      {articles.map((article) => (
        <li key={article.id}>
          <ArticlePreview article={article} />
        </li>
      ))}
    </ul>
  );
};
