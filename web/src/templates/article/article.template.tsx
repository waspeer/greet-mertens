import { differenceInDays, format, formatDistanceToNow } from 'date-fns';
import locale from 'date-fns/locale/nl';
import { h } from 'preact';

import { BlockContent } from '~/components/block-content/block-content';
import { Image } from '~/components/image';
import { createArticleUrl } from '~/lib/create-article-url';
import type { Data } from '~/lib/data';

import './article.scss';

interface ArticleProps {
  article: Data.Article;
}

function Article({ article }: ArticleProps) {
  const { body, categories, mainImage, publishedAt, title } = article;
  const formattedDate =
    differenceInDays(new Date(publishedAt), new Date()) > 3
      ? formatDistanceToNow(new Date(publishedAt), { locale })
      : format(new Date(publishedAt), 'd MMMM yyyy', { locale });

  return (
    <main className="article">
      <article>
        <h1>{title}</h1>

        {/* TODO: should be a figure component for captions */}
        {mainImage && <Image image={mainImage} />}

        <div className="article__info">
          <time dateTime={publishedAt.toString()}>{formattedDate}</time>
          {/* {!!categories.length && (
            <ul className="article__categories">
            {categories.map((category) => (
              <li key={category.id}>
              <Link to={getCategoryUrl(category)}>
              <CategoryBadge category={category} />
              </Link>
              </li>
              ))}
              </ul>
            )} */}
        </div>

        <div className="article__body">
          <BlockContent blocks={body} />
        </div>
      </article>
    </main>
  );
}

module.exports = {
  render: Article,
  data: {
    layout: 'default.11ty.js',
    pagination: {
      data: 'articles',
      size: 1,
      alias: 'article',
    },
    permalink: ({ article }: { article: Data.Article }) => createArticleUrl(article),
  },
};
