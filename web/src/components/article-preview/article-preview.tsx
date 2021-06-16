import { format } from 'date-fns';
import locale from 'date-fns/locale/nl';
import { h } from 'preact';

import { BlockContent } from '../block-content/block-content';
import { Image } from '../image';

import { createArticleUrl } from '~/lib/create-article-url';
import type { Data } from '~/lib/data';

interface ArticlePreviewProps {
  article: Data.Article;
}

export function ArticlePreview({ article }: ArticlePreviewProps) {
  const { mainImage, title, excerpt, publishedAt } = article;

  return (
    <section className="articlePreview">
      <div className="articlePreview__text">
        <h2>{title}</h2>
        <p>
          <BlockContent blocks={excerpt} />
        </p>
        <a href={createArticleUrl(article)}>Lees het hele artikel</a>
        <time dateTime={publishedAt.toString()}>
          {format(publishedAt, 'd MMMM yyyy', { locale })}
        </time>
      </div>
      <div className="articlePreview__image">{mainImage && <Image image={mainImage} />}</div>
    </section>
  );
}
