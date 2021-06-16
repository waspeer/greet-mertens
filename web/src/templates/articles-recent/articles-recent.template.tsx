import { h } from 'preact';

import { ArticlePreviewList } from '~/components/article-preview-list';
import type { Data } from '~/lib/data';

const ArticlesRecent = ({ articles }: Data.AllData) => {
  return (
    <main className="articlesRecent">
      <h1>Recente artikelen</h1>

      <ArticlePreviewList articles={articles} />

      {/* {hasMoreArticles && (
        <a className="articlesRecent__moreLink" href="/artikelen/archief">
          Meer artikelen »
        </a>
      )} */}
    </main>
  );
};

module.exports = {
  render: ArticlesRecent,
  data: {
    layout: 'default.11ty.js',
    permalink: 'artikelen/',
  },
};
