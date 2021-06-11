import { format } from 'date-fns';

import type { DocumentType } from '../../lib/data-types';

export const Article: DocumentType<'articleBody' | 'category' | 'excerptText' | 'figure'> = {
  name: 'article',
  type: 'document',
  title: 'Artikel',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titel',
      validation: (Rule) => Rule.required().error('Titel is een verplicht veld'),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Dit is onderdeel van de URL naar de post.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Slug is een verplicht veld'),
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Gepubliceerd op',
      description: 'Hiermee kun je inplannen wanneer het artikel openbaar wordt',
    },
    {
      name: 'hidden',
      type: 'boolean',
      title: 'Verborgen',
      description: 'Verberg dit artikel in de overzichten',
    },
    {
      name: 'mainImage',
      type: 'figure',
      title: 'Afbeelding',
      validation: (Rule) => Rule.required().error('Afbeelding is een verplicht veld'),
    },
    {
      name: 'excerpt',
      type: 'excerptText',
      title: 'Samenvatting',
      description:
        "Deze tekst wordt gebruikt op samenvattingpagina's, voor Google, en wanneer mensen de post delen op social media.",
      validation: (Rule) => Rule.required().error('Samenvatting is een verplicht veld'),
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categorieën',
      of: [
        {
          name: 'category',
          type: 'reference',
          to: [{ type: 'category' }],
        },
      ],
    },
    {
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{ type: 'project' }],
    },
    {
      name: 'body',
      type: 'articleBody',
      title: 'Inhoud',
      validation: (Rule) => Rule.required().error('Inhoud is een verplicht veld'),
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
      const dateSegment = publishedAt && format(new Date(publishedAt), 'yyyy/MM');
      const path = `artikelen/${dateSegment}/${slug?.current}/`;

      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Niet gepubliceerd',
      };
    },
  },
  orderings: [
    {
      title: 'Date published',
      name: 'datePublished',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
};
