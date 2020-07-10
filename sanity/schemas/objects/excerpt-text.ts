import type { ArrayType } from '../../lib/data-types';

export const ExcerptText: ArrayType = {
  name: 'excerptText',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [{ title: 'Normaal', value: 'normal' }],
      lists: [],
      marks: {
        decorators: [
          { title: 'Vetgedrukt', value: 'strong' },
          { title: 'Cursief', value: 'em' },
        ],
        annotations: [],
      },
    },
  ],
  validation: (Rule) => Rule.required().error('Vul een samenvatting in'),
};
