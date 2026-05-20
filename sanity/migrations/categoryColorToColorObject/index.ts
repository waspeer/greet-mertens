import { at, defineMigration, set } from 'sanity/migrate';

export default defineMigration({
  title: 'Convert category.color from string (sanity-plugin-color-list) to color object (@sanity/color-input)',
  documentTypes: ['category'],
  migrate: {
    document(doc) {
      if (typeof doc.color !== 'string') {
        return [];
      }

      return at(
        'color',
        set({
          _type: 'color',
          hex: doc.color,
          alpha: 1,
        }),
      );
    },
  },
});
