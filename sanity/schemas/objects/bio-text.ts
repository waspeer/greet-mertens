import { ArrayType } from '../../lib/data-types';

export const BioText: ArrayType<'figure' | 'player'> = {
  name: 'bioText',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        { title: 'Normaal', value: 'normal' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Opsomming', value: 'bullet' },
        { title: 'Genummerd', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Vetgedrukt', value: 'strong' },
          { title: 'Cursief', value: 'em' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
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
    { type: 'figure' },
  ],
};
