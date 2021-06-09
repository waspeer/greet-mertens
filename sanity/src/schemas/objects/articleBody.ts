import { ArrayType } from '../../lib/data-types';

export const ArticleBody: ArrayType<'figure' | 'player' | 'attachment'> = {
  name: 'articleBody',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normaal', value: 'normal' },
        { title: 'Kop', value: 'h2' },
        { title: 'Subkop', value: 'h3' },
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
    { type: 'player' },
    { type: 'attachment' },
  ],
  validation: (Rule) => Rule.required().error('Tekst mag niet leeg zijn'),
};
