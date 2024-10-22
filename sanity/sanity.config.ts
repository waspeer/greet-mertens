import { colorList } from '@pogasanov/sanity-plugin-color-list';
import { visionTool } from '@sanity/vision';
import {
  RiArticleLine,
  RiFunctionLine,
  RiPriceTag3Line,
  RiSettings3Line,
  RiStarLine,
  RiUser3Line,
} from 'react-icons/ri';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { schemaTypes } from './schema-types';

const config = defineConfig({
  name: 'default',
  title: 'Greet Mertens',

  projectId: 'ph08or48',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Over Mij')
              .icon(RiUser3Line)
              .child(S.editor().id('me').schemaType('me').documentId('me').title('Over Mij')),
            S.divider(),
            S.listItem()
              .title('Projecten')
              .icon(RiFunctionLine)
              .child(S.documentTypeList('project').title('Project')),
            S.listItem()
              .title('Artikelen')
              .icon(RiArticleLine)
              .child(
                S.documentTypeList('article')
                  .title('Artikel')
                  .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }]),
              ),
            S.listItem()
              .title('Uitgelichte Projecten')
              .icon(RiStarLine)
              .child(
                S.editor()
                  .id('highlights')
                  .schemaType('highlights')
                  .documentId('highlights')
                  .title('Uitgelichte Projecten'),
              ),
            S.listItem()
              .title('Categorieën')
              .icon(RiPriceTag3Line)
              .child(S.documentTypeList('category').title('Categorie')),
            S.divider(),
            S.listItem()
              .title('Instellingen')
              .icon(RiSettings3Line)
              .child(
                S.editor()
                  .id('siteSettings')
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
                  .title('Instellingen'),
              ),
            // `S.documentTypeListItems()` returns an array of all the document types
            // defined in schema.js. We filter out those that we have
            // defined the structure above.
            ...S.documentTypeListItems().filter(
              (listItem) =>
                !['category', 'highlights', 'me', 'article', 'project', 'siteSettings'].includes(
                  listItem.getId()!,
                ),
            ),
          ]),
    }),
    visionTool(),
    colorList(),
    unsplashImageAsset(),
  ],

  schema: {
    types: schemaTypes,
  },
});

export default config;
