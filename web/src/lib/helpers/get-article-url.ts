import { format } from 'date-fns';

interface Arguments {
  publishedAt: Date;
  slug: string;
}

export function getArticleUrl({ publishedAt, slug }: Arguments) {
  const dateSegment = format(publishedAt, 'yyyy/MM');

  return `/artikelen/${dateSegment}/${slug}/`;
}
