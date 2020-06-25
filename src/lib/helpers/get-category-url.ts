interface Arguments {
  namespace: 'blog' | 'portfolio';
  slug: string;
}

export function getCategoryUrl({ namespace, slug }: Arguments) {
  return `/${namespace}/categories/${slug}`;
}
