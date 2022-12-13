import { defineType } from 'sanity';

export const Highlights = defineType({
  description: 'Deze projecten worden laten zien op de homepagina',
  name: 'highlights',
  title: 'Uitgelichte Projecten',
  type: 'document',
  fields: [
    {
      description: 'Kies tot maximaal 3 projecten',
      name: 'projects',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      title: 'Projecten',
      type: 'array',
      validation: (Rule) => Rule.max(3).error('Je kan niet meer dan 3 projecten highlighten'),
    },
  ],
});
