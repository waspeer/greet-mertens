import { format } from 'date-fns';

interface Arguments {
  publishedAt: Date;
  slug: string;
}

export function createArticleUrl({ publishedAt, slug }: Arguments) {
  const dateSegment = format(publishedAt, 'yyyy/MM');

  return `/artikelen/${dateSegment}/${slug}/`;
}
