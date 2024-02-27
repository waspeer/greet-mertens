import { defineArrayMember, defineField, defineType } from 'sanity';

export const Highlights = defineType({
  description: 'Deze projecten worden laten zien op de homepagina',
  name: 'highlights',
  title: 'Uitgelichte Projecten',
  type: 'document',
  fields: [
    defineField({
      description: 'Kies tot maximaal 3 projecten',
      name: 'projects',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'project' as const }],
        }),
      ],
      title: 'Projecten',
      type: 'array',
      validation: (Rule) => Rule.max(3).error('Je kan niet meer dan 3 projecten highlighten'),
    }),
  ],
});
