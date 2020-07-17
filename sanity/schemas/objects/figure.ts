import { RiImage2Line } from 'react-icons/ri';

import type { ImageType } from '../../lib/data-types';

export const Figure: ImageType = {
  name: 'figure',
  type: 'image',
  title: 'Afbeelding',
  icon: RiImage2Line,
  options: {
    hotspot: true,
  },
  fields: [
    {
      description: 'Dit wordt onder de afbeelding weergegeven',
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true,
        layout: 'dropdown',
      },
    },
    {
      description:
        'Beschrijf wat er in de afbeelding staat. Deze tekst wordt gebruikt door middelen voor slechtzienden.',
      name: 'alt',
      type: 'string',
      title: 'Alternatieve Tekst',
      validation: (Rule) => Rule.required().error('Alternatieve Tekst is een verplicht veld'),
      options: {
        isHighlighted: true,
      },
    },
  ],
  validation: (Rule) => Rule.required().error('Selecteer een afbeelding'),
};
