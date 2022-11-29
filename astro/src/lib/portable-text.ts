import type { PortableTextTypeComponent } from '@portabletext/to-html';
import { sanityFileDownloadUrl } from './util';
import * as sanity from './sanity';

export const attachment: PortableTextTypeComponent = ({ value }) => {
  const { asset, name } = value ?? {};
  const fileUrl = sanityFileDownloadUrl(asset, name);

  return /* html */ `
    <a class="article__attachment" href="${fileUrl}">
      <span role="img" aria-hidden>
        📎
      </span>
      <span>${name}</span>
    </a>
  `;
};

export const figure: PortableTextTypeComponent = ({ value }) => {
  if (!value || !value.asset || !value.asset._ref) {
    return '';
  }

  const imageUrl = sanity.imageUrl(value).url();

  if (!imageUrl) return '';

  return /* html */ `
    <div class="figure with-media">
      <img src="${imageUrl}" />
    </div>
  `;
};

export const player: PortableTextTypeComponent = ({ value }) => {
  if (!value || !value.url) {
    return '';
  }

  console.log('value', value);

  return '';
};
