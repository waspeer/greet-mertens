import createBuilder from '@sanity/image-url';

import { sanityClient } from './sanity-client';

export const imageUrlBuilder = createBuilder(sanityClient);
