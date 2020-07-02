import { format } from 'date-fns';

import type { DocumentType } from '../../lib/data-types';

export const Project: DocumentType<'bodyText' | 'category' | 'excerptText' | 'figure'> = {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isCurrent',
      type: 'boolean',
      title: 'Currently working on',
      description: "Show the project as 'currently working on'",
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the project',
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
      description: 'This can be used to schedule project for publishing',
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
        'This ends up on summary pages, on Google, when people share your project on social media.',
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
      isCurrent: 'isCurrent',
      media: 'mainImage',
      publishedAt: 'publishedAt',
      slug: 'slug',
      title: 'title',
    },
    prepare({ isCurrent, media, publishedAt, slug, title = 'Geen titel' }) {
      const path = `portfolio/project/${slug?.current}/`;
      return {
        title,
        media,
        subtitle: publishedAt || isCurrent ? path : 'Niet gepubliceerd',
      };
    },
  },
};
