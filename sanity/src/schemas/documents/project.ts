import type { DocumentType } from '../../lib/data-types';

export const Project: DocumentType<'category' | 'excerptText' | 'figure' | 'projectBody'> = {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titel',
      validation: (Rule) => Rule.required().error('Vul een titel in'),
    },
    {
      name: 'isCurrent',
      type: 'boolean',
      title: 'Nog lopend project',
      description: "Laat het project zien als 'nog lopend project'",
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Dit is onderdeel van de URL',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Vul of genereer een slug'),
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Gepubliceerd op',
      description: 'Hiermee kun je inplannen wanneer het project openbaar wordt',
    },
    {
      name: 'mainImage',
      type: 'figure',
      title: 'Afbeelding',
      validation: (Rule) => Rule.required().error('Selecteer een afbeelding'),
    },
    {
      name: 'excerpt',
      type: 'excerptText',
      title: 'Samenvatting',
      description:
        "Deze tekst wordt gebruikt op samenvattingpagina's, voor Google, en wanneer mensen de post delen op social media.",
      validation: (Rule) => Rule.required().error('Vul een samenvatting in'),
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
      name: 'body',
      type: 'projectBody',
      title: 'Inhoud',
      validation: (Rule) => Rule.required().error('Inhoud is een verplicht veld'),
    },
  ],
  orderings: [
    {
      by: [
        { field: 'isCurrent', direction: 'desc' },
        { field: 'publishedAt', direction: 'desc' },
      ],
      name: 'recent',
      title: 'Recent',
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
