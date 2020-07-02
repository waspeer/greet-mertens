import { ArrayType } from '../../lib/data-types';

export const BodyText: ArrayType = {
  name: 'bodyText',
  type: 'array',
  of: [
    {
      name: 'bodyTextBlock',
      type: 'block',
      title: 'Block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading', value: 'h2' },
        { title: 'Sub-Heading', value: 'h3' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Number', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    {
      name: 'bodyTextFigure',
      type: 'figure',
    },
    {
      name: 'bodyTextPlayer',
      type: 'player',
    },
  ],
};
