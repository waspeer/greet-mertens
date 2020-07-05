import S from '@sanity/desk-tool/structure-builder';
import {
  RiArticleLine,
  RiBook3Line,
  RiFileEditLine,
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
        .title('Blog')
        .icon(RiArticleLine)
        .child(
          S.list()
            .title('Blog')
            .items([
              S.listItem()
                .title('Artikelen')
                .icon(RiFileEditLine)
                .schemaType('post')
                .child(S.documentTypeList('post').title('Artikel')),
              S.listItem()
                .title('Categorieën')
                .icon(RiPriceTag3Line)
                .schemaType('category')
                .child(S.documentTypeList('category').title('Categorie')),
            ]),
        ),
      S.listItem()
        .title('Portfolio')
        .icon(RiFunctionLine)
        .child(
          S.list()
            .title('Portfolio')
            .items([
              S.listItem()
                .title('Projecten')
                .icon(RiBook3Line)
                .schemaType('project')
                .child(S.documentTypeList('project').title('Project')),
              S.listItem()
                .title('Categorieën')
                .icon(RiPriceTag3Line)
                .schemaType('category')
                .child(S.documentTypeList('category').title('Categorie')),
            ]),
        ),
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
          !['category', 'me', 'post', 'project', 'siteSettings'].includes(listItem.getId()),
      ),
    ]);
