import { defineArrayMember, defineField, defineType } from 'sanity';

export const ArticleBody = defineType({
  name: 'articleBody',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normaal', value: 'normal' as const },
        { title: 'Kop', value: 'h2' as const },
        { title: 'Subkop', value: 'h3' as const },
        { title: 'Quote', value: 'blockquote' as const },
      ],
      lists: [
        { title: 'Opsomming', value: 'bullet' as const },
        { title: 'Genummerd', value: 'number' as const },
      ],
      marks: {
        decorators: [
          { title: 'Vetgedrukt', value: 'strong' as const },
          { title: 'Cursief', value: 'em' as const },
        ],
        annotations: [
          defineArrayMember({
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              defineField({
                title: 'URL',
                name: 'href',
                type: 'url',
              }),
            ],
          }),
        ],
      },
    }),
    defineArrayMember({ type: 'figure' }),
    defineArrayMember({ type: 'player' }),
    defineArrayMember({ type: 'attachment' }),
  ],
  validation: (Rule) => Rule.required().error('Tekst mag niet leeg zijn'),
});
