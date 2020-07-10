import type { DocumentType } from '../../lib/data-types';

export const Settings: DocumentType = {
  name: 'siteSettings',
  type: 'document',
  title: 'Instellingen',
  fieldsets: [{ name: 'seo', title: 'SEO', description: 'Gegevens voor zoekmachines' }],
  fields: [
    {
      name: 'description',
      type: 'text',
      fieldset: 'seo',
      title: 'Beschrijving',
      description: 'Beschrijf je website voor zoekmachines en social media',
    },
    {
      name: 'keywords',
      type: 'array',
      fieldset: 'seo',
      title: 'Sleutelwoorden',
      description: 'Voeg sleutelwoorden toe die jouw website beschrijven.',
      of: [{ name: 'keyword', type: 'string' }],
      options: { layout: 'tags' },
    },
  ],
};
