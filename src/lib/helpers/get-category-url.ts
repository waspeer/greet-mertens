// TODO implement

interface Arguments {
  slug: string;
}

export function getCategoryUrl({ slug }: Arguments) {
  return `/blog/categories/${slug}`;
}
