import { format } from 'date-fns';

import type { DocumentType } from '../../lib/data-types';

export const Post: DocumentType<'bodyText' | 'category' | 'excerptText' | 'figure'> = {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing',
    },
    {
      name: 'mainImage',
      type: 'figure',
      title: 'Main image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      type: 'excerptText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          name: 'category',
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
    },
    {
      name: 'body',
      type: 'bodyText',
      title: 'Body',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      media: 'mainImage',
      publishedAt: 'publishedAt',
      slug: 'slug',
      title: 'title',
    },
    prepare({ media, publishedAt, slug, title = 'Geen titel' }) {
      const dateSegment = format(new Date(publishedAt), 'yyyy/MM');
      const path = `blog/${dateSegment}/${slug.current}/`;

      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Niet gepubliceerd',
      };
    },
  },
};
