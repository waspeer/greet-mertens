import { defineField, defineType } from 'sanity';

export const Me = defineType({
  name: 'me',
  title: 'Over Mij',
  type: 'document',
  fieldsets: [{ name: 'contact', title: 'Contact' }],
  fields: [
    defineField({
      name: 'portrait',
      title: 'Portret',
      type: 'image',
      validation: (Rule) => Rule.required().error('Kies een portret foto'),
    }),
    defineField({
      description:
        'Een korte beschrijving van je werkzaamheden. Dit wordt op de homepagina getoond.',
      name: 'tagline',
      rows: 2,
      title: 'Tagline',
      type: 'text',
    }),
    defineField({
      name: 'bio',
      title: 'Over Mij',
      type: 'bioText',
    }),
    defineField({
      fieldset: 'contact',
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email().error('Moet een geldig email adres zijn'),
    }),
    defineField({
      fieldset: 'contact',
      name: 'phone',
      title: 'Telefoon',
      type: 'string',
    }),
  ],
});
