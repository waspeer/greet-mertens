import type { DocumentType } from '../../lib/data-types';

export const Category: DocumentType<'colors' | 'emoji'> = {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'icon',
      type: 'emoji',
      title: 'Icon',
      options: {
        hideSummary: true,
      },
    },
    {
      name: 'color',
      type: 'colors',
      title: 'Color',
      options: {
        list: [
          { title: 'Onyx', value: '#303633' },
          { title: 'Mint', value: '#8BE8CB' },
          { title: 'Mint', value: '#8BE8CB' },
          { title: 'Blueish', value: '#7EA2AA' },
          { title: 'Greyish', value: '#888DA7' },
          { title: 'Pinkish', value: '#9C7A97' },
        ],
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
  ],
};
