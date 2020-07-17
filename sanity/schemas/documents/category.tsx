import React from 'react';
import { RiPriceTag3Line } from 'react-icons/ri';

import type { DocumentType } from '../../lib/data-types';

export const Category: DocumentType<'colors' | 'emoji'> = {
  name: 'category',
  type: 'document',
  title: 'Categorie',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titel',
      validation: (Rule) => Rule.required().error('Vul een titel in'),
    },
    {
      description: 'Dit is onderdeel van de URL',
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Vul een slug in'),
    },
    {
      description: 'Geef de categorie optioneel een pictogram',
      name: 'icon',
      type: 'emoji',
      title: 'Pictogram',
      options: {
        hideSummary: true,
      },
    },
    {
      name: 'color',
      type: 'colors',
      title: 'Kleur',
      options: {
        list: [
          { title: 'Onyx', value: '#303633' },
          { title: 'Mint', value: '#7AC4AD' },
          { title: 'Blueish', value: '#9CB8BF' },
          { title: 'Greyish', value: '#B0B3C4' },
          { title: 'Pinkish', value: '#C2ADBF' },
        ],
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Beschrijving',
    },
  ],
  preview: {
    select: {
      icon: 'icon',
      title: 'title',
    },
    prepare({ icon, title }) {
      return {
        media: icon ? <span style={{ fontSize: '1.5rem' }}>{icon.native}</span> : RiPriceTag3Line,
        title,
      };
    },
  },
};
