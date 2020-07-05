import { DocumentType } from '../../lib/data-types';

export const Me: DocumentType = {
  name: 'me',
  title: 'Over Mij',
  type: 'document',
  fieldsets: [{ name: 'contact', title: 'Contact' }],
  fields: [
    {
      name: 'portrait',
      title: 'Portret',
      type: 'image',
    },
    {
      description:
        'Een korte beschrijving van je werkzaamheden. Dit wordt op de homepagina getoond.',
      name: 'tagline',
      rows: 2,
      title: 'Tagline',
      type: 'text',
    },
    {
      fieldset: 'contact',
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    },
  ],
};
