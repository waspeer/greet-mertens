import { DocumentType } from '../../lib/data-types';

export const Me: DocumentType<'bioText'> = {
  name: 'me',
  title: 'Over Mij',
  type: 'document',
  fieldsets: [{ name: 'contact', title: 'Contact' }],
  fields: [
    {
      name: 'portrait',
      title: 'Portret',
      type: 'image',
      validation: (Rule) => Rule.required().error('Kies een portret foto'),
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
      name: 'bio',
      title: 'Over Mij',
      type: 'bioText',
    },
    {
      fieldset: 'contact',
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email().error('Moet een geldig email adres zijn'),
    },
    {
      fieldset: 'contact',
      name: 'phone',
      title: 'Telefoon',
      type: 'string',
    },
  ],
};
