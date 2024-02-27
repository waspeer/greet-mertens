import { defineArrayMember, defineField, defineType } from 'sanity';

export const ProjectBody = defineType({
  name: 'projectBody',
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
    defineArrayMember({
      type: 'object',
      name: 'pageLink',
      title: 'Pagina link',
      validation: (Rule) => Rule.required().error('Vul een URL in.'),
      fields: [
        defineField({
          title: 'Pagina',
          name: 'page',
          type: 'reference',
          to: [{ type: 'article' as const }, { type: 'project' as const }],
        }),
      ],
      preview: {
        select: {
          title: 'page.title',
          media: 'page.mainImage',
        },
      },
    }),
    defineArrayMember({ type: 'figure' }),
    defineArrayMember({ type: 'player' }),
    defineArrayMember({ type: 'projectRelatedArticles' }),
    defineArrayMember({ type: 'attachment' }),
  ],
});
