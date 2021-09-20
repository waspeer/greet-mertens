import { VscFileSymlinkFile, VscLinkExternal } from 'react-icons/vsc';

import { ArrayType } from '../../lib/data-types';

export const ProjectBody: ArrayType<
  'figure' | 'pageLink' | 'player' | 'projectRelatedArticles' | 'attachment'
> = {
  name: 'projectBody',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normaal', value: 'normal' },
        { title: 'Kop', value: 'h2' },
        { title: 'Subkop', value: 'h3' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Opsomming', value: 'bullet' },
        { title: 'Genummerd', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Vetgedrukt', value: 'strong' },
          { title: 'Cursief', value: 'em' },
        ],
        annotations: [
          {
            name: 'internalLink',
            type: 'object',
            title: 'Link naar andere pagina',
            icon: VscFileSymlinkFile,
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Pagina',
                to: [{ type: 'project' }, { type: 'article' }],
              },
            ],
          },
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            icon: VscLinkExternal,
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.custom<string>((url) =>
                    /^https?:\/\/(?:www)?greetmertens\.nl/.test(url)
                      ? "Gebruik een 'interne link' voor links naar greetmertens.nl"
                      : true,
                  ),
              },
            ],
          },
        ],
      },
    },
    { type: 'figure' },
    { type: 'player' },
    { type: 'pageLink' },
    { type: 'projectRelatedArticles' },
    { type: 'attachment' },
  ],
};
