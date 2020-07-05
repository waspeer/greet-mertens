import type { DocumentType } from '../../lib/data-types';

export const Settings: DocumentType = {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  fieldsets: [{ name: 'seo', title: 'SEO', description: 'Gegevens voor zoekmachines' }],
  fields: [
    {
      name: 'description',
      type: 'text',
      fieldset: 'seo',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.',
    },
    {
      name: 'keywords',
      type: 'array',
      fieldset: 'seo',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{ name: 'keyword', type: 'string' }],
      options: { layout: 'tags' },
    },
  ],
};
