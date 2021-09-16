import { format } from 'date-fns';
import { ArticleData } from '../types';

export function getArticleUrl({ publishedAt, slug }: ArticleData) {
  const dateSegment = format(new Date(publishedAt), 'yyyy/MM');

  return `/artikelen/${dateSegment}/${slug}/`;
}
