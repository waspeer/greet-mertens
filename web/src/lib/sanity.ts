const projectId = import.meta.env.SNOWPACK_PUBLIC_SANITY_PROJECT;
const dataset = import.meta.env.SNOWPACK_PUBLIC_SANITY_DATASET;
const baseUrl = `https://${projectId}.api.sanity.io/v2021-09-03/data/query/${dataset}`;

const fragments = (() => {
  const category = /* groq */ `
    'id': _id,
    'color': color.value,
    description,
    'icon': icon {
      'description': name,
      'emoji': native,
    },
    'slug': slug.current,
    title,
  `;

  const image = /* groq */ `
    alt,
    asset,
    caption,
    crop,
    hotspot,
    ...asset-> {
      "aspectRatio": metadata.dimensions.aspectRatio,
      "dominantColor": metadata.palette.dominant.background,
    },
  `;

  const post = /* groq */ `
    'id': _id,
    body[] {
      ...,
      _type == 'pageLink' => {
        ... @.page -> {
          mainImage { ${image} },
          publishedAt,
          'slug': slug.current,
          title,
          'type': _type,
        },
      },
      markDefs[] {
        ...,
        _type == 'internalLink' => {
          ... @.reference -> {
            publishedAt,
            'slug': slug.current,
            'type': _type,
          },
        }
      }
    },
    categories[] -> { ${category} },
    excerpt,
    isCurrent,
    mainImage { ${image} },
    publishedAt,
    'slug': slug.current,
    title,
  `;

  const article = post;
  const project = `${post} isCurrent,`;

  return { article, category, image, project };
})();

const cache = new Map<string, any>();

async function query<TData = any>(
  query: string,
  params?: Record<string, any>
): Promise<TData> {
  const url = new URL(baseUrl);

  url.searchParams.append("query", query);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(`$${key}`, value);
    });
  }

  if (cache.has(url.toString())) {
    return cache.get(url.toString());
  }

  const result = await fetch(url.toString(), {
    method: "GET",
    headers: {
      Authorization: `Bearer ${import.meta.env.SNOWPACK_PUBLIC_SANITY_TOKEN}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.error) {
        console.error(response.error);
        throw new Error(response.error.description);
      }

      return response.result;
    });

  cache.set(url.toString(), result);

  return result;
}

export { fragments, query };
