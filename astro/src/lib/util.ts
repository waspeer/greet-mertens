import type { SanityAsset } from './sanity.gen';
import { format } from 'date-fns';

const SANITY_CDN_BASE_URL = 'https://cdn.sanity.io/';
const SANITY_DATASET = import.meta.env.SANITY_DATASET;
const SANITY_PROJECT = import.meta.env.SANITY_PROJECT_ID;

export function articleUrl({ publishedAt, slug }: { publishedAt: string; slug: string }) {
  const dateSegment = format(new Date(publishedAt), 'yyyy/MM');
  return `/artikelen/${dateSegment}/${slug}/`;
}

export function categoryUrl({ slug }: { slug: string }) {
  return `/categorieen/${slug}`;
}

export function sanityFileDownloadUrl(asset: SanityAsset, name: string): string {
  const matches = asset._ref.match(/file-(?<id>\w+)-(?<extension>\w+)/);

  if (!matches) {
    throw new Error('Invalid file reference');
  }

  const { id, extension } = matches.groups;

  return new URL(
    `/files/${SANITY_PROJECT}/${SANITY_DATASET}/${id}.${extension}?dl=${name}.${extension}`,
    SANITY_CDN_BASE_URL,
  ).toString();
}

export function getContrast(colorString: string) {
  const hexColor = colorString.slice(0, 1) === '#' ? colorString.slice(1) : colorString;

  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 180 ? 'black' : 'white';
}

export function projectUrl({ slug }: { slug: string }) {
  return `/portfolio/project/${slug}/`;
}

const MAX_SKEW = 5;

export function randomBorderRadius() {
  const values = Array.from({ length: 2 }, () => Array.from({ length: 4 })) as [
    [number, number, number, number],
    [number, number, number, number],
  ];

  for (let i = 0; i < 4; i++) {
    const n: [number, number] = [Math.ceil(Math.random() * MAX_SKEW), 0];
    n[1] = 100 - n[0]!;

    if (i === 0) {
      values[0][0] = n[0];
      values[0][1] = n[1];
    }

    if (i === 1) {
      values[1][1] = n[0];
      values[1][2] = n[1];
    }

    if (i === 2) {
      values[0][2] = n[0];
      values[0][3] = n[1];
    }

    if (i === 3) {
      values[1][0] = n[1];
      values[1][3] = n[0];
    }
  }

  return `${values[0].join('% ')}% / ${values[1].join('% ')}%`;
}
