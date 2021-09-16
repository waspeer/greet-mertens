const SANITY_CDN_BASE_URL = 'https://cdn.sanity.io/';
const SANITY_DATASET = process.env.GATSBY_SANITY_DATASET;
const SANITY_PROJECT = process.env.GATSBY_SANITY_PROJECT_ID;

/**
 * Creates a download URL from a Sanity file reference
 *
 * @param {{
 *  _ref: string;
 *  _type: 'reference';
 * }} asset
 * @param {string} name
 * @returns {string}
 */

export function generateSanityFileDownloadUrl(asset: any, name: string): string {
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
