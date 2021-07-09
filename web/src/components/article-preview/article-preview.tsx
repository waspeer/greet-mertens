import { format } from 'date-fns';
import locale from 'date-fns/locale/nl';
import { h } from 'preact';

import { BlockContent } from '../block-content/block-content';
import { Image } from '../image';

import { createArticleUrl } from '~/lib/create-article-url';
import type { Data } from '~/lib/data';
import './article-preview.scss';

interface ArticlePreviewProps {
  article: Data.Article;
}

export function ArticlePreview({ article }: ArticlePreviewProps) {
  const { mainImage, title, excerpt, publishedAt } = article;

  return (
    <section className="article-preview">
      <div className="article-preview__text">
        <h2>{title}</h2>
        <p>
          <BlockContent blocks={excerpt} />
        </p>
        <a href={createArticleUrl(article)}>Lees &lsquo;{title}&rsquo;</a>
        <time dateTime={publishedAt.toString()}>
          {format(publishedAt, 'd MMMM yyyy', { locale })}
        </time>
      </div>
      <div className="article-preview__image">{mainImage && <Image image={mainImage} />}</div>
    </section>
  );
}
