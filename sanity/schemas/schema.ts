/* eslint-disable import/no-unresolved */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import { BodyText } from './objects/body-text';
import { ExcerptText } from './objects/excerpt-text';
import { Figure } from './objects/figure';
import { Player } from './objects/player';
import { Category } from './documents/category';
import { Post } from './documents/post';
import { Project } from './documents/project';
import { Settings } from './documents/settings';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // OBJECTS
    BodyText,
    ExcerptText,
    Figure,
    Player,

    // DOCUMENTS
    Category,
    Post,
    Project,
    Settings,
  ]),
});
