import type { PortableTextTypeComponent } from '@portabletext/to-html';
import { sanityFileDownloadUrl } from './util';
import * as sanity from './sanity';

// ATTACHMENT
// ---------

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

// FIGURE
// ------

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

// PLAYER
// ------

const MediaType = {
  youtube: 'youtube',
  vimeo: 'vimeo',
  soundcloud: 'soundcloud',
} as const;

type MediaType = typeof MediaType[keyof typeof MediaType];

const mediaTypeMatchers: Record<MediaType, (url: string) => boolean> = {
  [MediaType.youtube]: (url) => /youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/.test(url),
  [MediaType.vimeo]: (url) => /vimeo\.com\/([0-9]+)/.test(url),
  [MediaType.soundcloud]: (url) => /soundcloud\.com\/([a-zA-Z0-9_-]+)\/([a-zA-Z0-9_-]+)/.test(url),
};

function getMediaType(url: string | undefined): MediaType | null {
  for (const [type, matcher] of Object.entries(mediaTypeMatchers)) {
    if (url && matcher(url)) {
      return type as MediaType;
    }
  }

  return null;
}

export const player: PortableTextTypeComponent = ({ value }) => {
  if (!value || !value.url) {
    return '';
  }

  const type = getMediaType(value.url);
  let html = '';

  switch (type) {
    case MediaType.youtube:
      html = /* html */ `
        <div class="player" data-type="video">
          <iframe
            src="https://www.youtube.com/embed/${value.url.split('v=')[1]}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      `;
      break;
    case MediaType.vimeo:
      html = /* html */ `
        <div class="player" data-type="video">
          <iframe
            src="https://player.vimeo.com/video/${value.url.split('vimeo.com/')[1]}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      `;
      break;
    case MediaType.soundcloud:
      html = /* html */ `
        <div class="player" data-type="soundcloud">
          <iframe
            src="https://w.soundcloud.com/player/?url=${value.url}"
            frameborder="0"
            allow="autoplay"
          ></iframe>
        </div>
      `;
      break;

    default:
      console.warn('Unknown media type', value.url);
      break;
  }

  return html;
};
