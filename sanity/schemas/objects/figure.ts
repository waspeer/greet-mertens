import type { ImageType } from '../../lib/data-types';

export const Figure: ImageType = {
  name: 'figure',
  type: 'image',
  title: 'Image',
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true,
        layout: 'dropdown',
      },
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      validation: (Rule) => Rule.error('You have to fill out the alternative text.').required(),
      options: { isHighlighted: true },
    },
  ],
};
