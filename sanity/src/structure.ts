import S from '@sanity/desk-tool/structure-builder';
import {
  RiArticleLine,
  RiFunctionLine,
  RiPriceTag3Line,
  RiSettings3Line,
  RiUser3Line,
} from 'react-icons/ri';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Over Mij')
        .icon(RiUser3Line)
        .child(S.editor().id('me').schemaType('me').documentId('me').title('Over Mij')),
      S.divider(),
      S.listItem()
        .title('Artikelen')
        .icon(RiArticleLine)
        .child(S.documentTypeList('article').title('Artikel')),
      S.listItem()
        .title('Portfolio')
        .icon(RiFunctionLine)
        .child(S.documentTypeList('project').title('Project')),
      S.listItem()
        .title('Categorieën')
        .icon(RiPriceTag3Line)
        .schemaType('category')
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
          !['category', 'me', 'article', 'project', 'siteSettings'].includes(listItem.getId()),
      ),
    ]);
