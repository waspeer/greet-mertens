/* eslint-disable import/no-unresolved */
import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';

import { Article } from './documents/article';
import { Category } from './documents/category';
import { Highlights } from './documents/highlights';
import { Me } from './documents/me';
import { Project } from './documents/project';
import { Settings } from './documents/settings';
import { ArticleBody } from './objects/articleBody';
import { BioText } from './objects/bio-text';
import { ExcerptText } from './objects/excerpt-text';
import { Figure } from './objects/figure';
import { Player } from './objects/player';
import { ProjectBody } from './objects/project-body';
import { ProjectRelatedArticles } from './objects/project-related-articles';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // OBJECTS
    ArticleBody,
    BioText,
    ExcerptText,
    Figure,
    Player,
    ProjectBody,
    ProjectRelatedArticles,

    // DOCUMENTS
    Article,
    Category,
    Highlights,
    Me,
    Project,
    Settings,
  ]),
});
