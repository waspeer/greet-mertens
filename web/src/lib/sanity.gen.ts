import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Artikel
 *
 *
 */
export interface Article extends SanityDocument {
  _type: "article";

  /**
   * Titel — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * Dit is onderdeel van de URL naar de post.
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Gepubliceerd op — `datetime`
   *
   * Hiermee kun je inplannen wanneer het artikel openbaar wordt
   */
  publishedAt?: string;

  /**
   * Verborgen — `boolean`
   *
   * Verberg dit artikel in de overzichten
   */
  hidden?: boolean;

  /**
   * Afbeelding — `figure`
   *
   *
   */
  mainImage?: Figure;

  /**
   * Samenvatting — `excerptText`
   *
   * Deze tekst wordt gebruikt op samenvattingpagina's, voor Google, en wanneer mensen de post delen op social media.
   */
  excerpt?: ExcerptText;

  /**
   * Categorieën — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Project — `reference`
   *
   *
   */
  project?: SanityReference<Project>;

  /**
   * Inhoud — `articleBody`
   *
   *
   */
  body?: ArticleBody;
}

/**
 * Categorie
 *
 *
 */
export interface Category extends SanityDocument {
  _type: "category";

  /**
   * Titel — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * Dit is onderdeel van de URL
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Pictogram — `emoji`
   *
   * Geef de categorie optioneel een pictogram
   */
  icon?: Emoji;

  /**
   * Kleur — `colorlist`
   *
   *
   */
  color?: Colorlist;

  /**
   * Beschrijving — `text`
   *
   *
   */
  description?: string;
}

/**
 * Uitgelichte Projecten
 *
 * Deze projecten worden laten zien op de homepagina
 */
export interface Highlights extends SanityDocument {
  _type: "highlights";

  /**
   * Projecten — `array`
   *
   * Kies tot maximaal 3 projecten
   */
  projects?: Array<SanityKeyedReference<Project>>;
}

/**
 * Over Mij
 *
 *
 */
export interface Me extends SanityDocument {
  _type: "me";

  /**
   * Portret — `image`
   *
   *
   */
  portrait?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Tagline — `text`
   *
   * Een korte beschrijving van je werkzaamheden. Dit wordt op de homepagina getoond.
   */
  tagline?: string;

  /**
   * Over Mij — `bioText`
   *
   *
   */
  bio?: BioText;

  /**
   * Email — `string`
   *
   *
   */
  email?: string;

  /**
   * Telefoon — `string`
   *
   *
   */
  phone?: string;
}

/**
 * Project
 *
 *
 */
export interface Project extends SanityDocument {
  _type: "project";

  /**
   * Titel — `string`
   *
   *
   */
  title?: string;

  /**
   * Nog lopend project — `boolean`
   *
   * Laat het project zien als 'nog lopend project'
   */
  isCurrent?: boolean;

  /**
   * Slug — `slug`
   *
   * Dit is onderdeel van de URL
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Gepubliceerd op — `datetime`
   *
   * Hiermee kun je inplannen wanneer het project openbaar wordt
   */
  publishedAt?: string;

  /**
   * Afbeelding — `figure`
   *
   *
   */
  mainImage?: Figure;

  /**
   * Samenvatting — `excerptText`
   *
   * Deze tekst wordt gebruikt op samenvattingpagina's, voor Google, en wanneer mensen de post delen op social media.
   */
  excerpt?: ExcerptText;

  /**
   * Categorieën — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Inhoud — `projectBody`
   *
   *
   */
  body?: ProjectBody;
}

/**
 * Instellingen
 *
 *
 */
export interface SiteSettings extends SanityDocument {
  _type: "siteSettings";

  /**
   * Beschrijving — `text`
   *
   * Beschrijf je website voor zoekmachines en social media
   */
  description?: string;

  /**
   * Sleutelwoorden — `array`
   *
   * Voeg sleutelwoorden toe die jouw website beschrijven.
   */
  keywords?: Array<SanityKeyed<string>>;
}

export type ArticleBody = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<Figure>
  | SanityKeyed<Player>
  | SanityKeyed<Attachment>
>;

export type Attachment = {
  _type: "attachment";
  asset: SanityReference<any>;
  /**
   * Naam van bestand — `string`
   *
   *
   */
  name?: string;
};

export type BioText = Array<SanityKeyed<SanityBlock> | SanityKeyed<Figure>>;

export type ExcerptText = Array<SanityKeyed<SanityBlock>>;

export type Figure = {
  _type: "figure";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Caption — `string`
   *
   * Dit wordt onder de afbeelding weergegeven
   */
  caption?: string;

  /**
   * Alternatieve Tekst — `string`
   *
   * Beschrijf wat er in de afbeelding staat. Deze tekst wordt gebruikt door middelen voor slechtzienden.
   */
  alt?: string;
};

export type Player = {
  _type: "player";
  /**
   * URL — `url`
   *
   * Vul een link in naar YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, of DailyMotion
   */
  url?: string;

  /**
   * Caption — `string`
   *
   * Korte beschrijving
   */
  caption?: string;
};

export type ProjectBody = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<Figure>
  | SanityKeyed<Player>
  | SanityKeyed<ProjectRelatedArticles>
  | SanityKeyed<Attachment>
>;

export type ProjectRelatedArticles = {
  _type: "projectRelatedArticles";
  /**
   * Categorie — `reference`
   *
   * Selecteer de categorie waarvan je de bijbehorende artikelen wilt weergeven. Alleen artikelen die bij deze categorie en dit project horen worden hier weergegeven.
   */
  category?: SanityReference<Category>;
};

export type Documents =
  | Article
  | Category
  | Highlights
  | Me
  | Project
  | SiteSettings;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Emoji = any;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Colorlist = any;
