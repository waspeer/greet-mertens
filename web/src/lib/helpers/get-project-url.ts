interface Arguments {
  slug: string;
}

export function getProjectUrl({ slug }: Arguments) {
  return `/portfolio/project/${slug}/`;
}
