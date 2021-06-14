import createBuilder from '@sanity/image-url';

import { client } from './sanity-client';

export const imageUrlBuilder = createBuilder(client);
