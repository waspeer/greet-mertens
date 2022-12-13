import { Article } from './documents/article';
import { Category } from './documents/category';
import { Highlights } from './documents/highlights';
import { Me } from './documents/me';
import { Project } from './documents/project';
import { Settings } from './documents/settings';
import { ArticleBody } from './objects/article-body';
import { Attachment } from './objects/attachment';
import { BioText } from './objects/bio-text';
import { Color } from './objects/color';
import { EmojiPicker } from './objects/emoji';
import { ExcerptText } from './objects/excerpt-text';
import { Figure } from './objects/figure';
import { Player } from './objects/player';
import { ProjectBody } from './objects/project-body';
import { ProjectRelatedArticles } from './objects/project-related-articles';

export const schemaTypes = [
  // OBJECTS
  ArticleBody,
  Attachment,
  BioText,
  Color,
  EmojiPicker,
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
];
