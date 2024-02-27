import { defineArrayMember, defineType } from 'sanity';

export const ExcerptText = defineType({
  name: 'excerptText',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [{ title: 'Normaal', value: 'normal' as const }],
      lists: [],
      marks: {
        decorators: [
          { title: 'Vetgedrukt', value: 'strong' as const },
          { title: 'Cursief', value: 'em' as const },
        ],
        annotations: [],
      },
    }),
  ],
  validation: (Rule) => Rule.required().error('Vul een samenvatting in'),
});
