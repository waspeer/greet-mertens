import { defineField, defineType } from 'sanity';

export const Settings = defineType({
  name: 'siteSettings',
  type: 'document',
  title: 'Instellingen',
  fieldsets: [{ name: 'seo', title: 'SEO', description: 'Gegevens voor zoekmachines' }],
  fields: [
    defineField({
      name: 'description',
      type: 'text',
      fieldset: 'seo',
      title: 'Beschrijving',
      description: 'Beschrijf je website voor zoekmachines en social media',
    }),
    defineField({
      name: 'keywords',
      type: 'array',
      fieldset: 'seo',
      title: 'Sleutelwoorden',
      description: 'Voeg sleutelwoorden toe die jouw website beschrijven.',
      of: [{ name: 'keyword', type: 'string' }],
      options: { layout: 'tags' },
    }),
  ],
});
