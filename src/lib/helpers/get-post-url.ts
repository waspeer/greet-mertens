import { format } from 'date-fns';

interface Arguments {
  publishedAt: Date;
  slug: string;
}

export function getPostUrl({ publishedAt, slug }: Arguments) {
  const dateSegment = format(publishedAt, 'yyyy/MM');

  return `/blog/${dateSegment}/${slug}/`;
}
