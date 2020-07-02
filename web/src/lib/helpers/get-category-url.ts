interface Arguments {
  slug: string;
}

export function getCategoryUrl({ slug }: Arguments) {
  return `/categories/${slug}`;
}
