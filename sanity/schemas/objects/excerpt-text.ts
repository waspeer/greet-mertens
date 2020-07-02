import type { ArrayType } from '../../lib/data-types';

export const ExcerptText: ArrayType = {
  name: 'excerptText',
  type: 'array',
  of: [
    {
      name: 'ExcerptTextBlock',
      title: 'Block',
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [],
      },
    },
  ],
};
