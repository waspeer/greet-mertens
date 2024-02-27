import { defineArrayMember, defineField, defineType } from 'sanity';

export const BioText = defineType({
  name: 'bioText',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      title: 'Block',
      styles: [
        { title: 'Normaal', value: 'normal' as const },
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
  ],
});
