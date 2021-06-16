import type { SanityReference } from '@sanity/image-url/lib/types/types';

declare namespace Data {
  type BlockContent = any[];

  interface Image {
    alt: string;
    aspectRatio: number;
    asset: SanityReference;
    caption?: string;
    crop?: {
      bottom: number;
      left: number;
      right: number;
      top: number;
    };
    dominantColor: string;
    hotspot?: {
      height: number;
      width: number;
      x: number;
      y: number;
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Category {
    // color?: {
    //   value?: string | null;
    // } | null;
    // description?: string | null;
    // icon?: {
    //   description: string;
    //   icon: string;
    // } | null;
    // id: string;
    // slug: string;
    // title: string;
  }
  interface Article {
    body: BlockContent;
    categories: Category[];
    excerpt: BlockContent;
    id: string;
    publishedAt: Date;
    mainImage?: Image;
    slug: string;
    title: string;
  }

  interface Project {
    body: BlockContent;
    categories: Category[];
    id: string;
    isCurrent: boolean;
    publishedAt?: Date;
    // mainImage?: TransformableFigure | null;
    title: string;
  }

  interface ProjectPreview {
    // categories: Category[];
    excerpt: BlockContent;
    id: string;
    isCurrent: boolean;
    mainImage?: Image | null;
    slug: string;
    title: string;
  }

  interface Home {
    email: string;
    highlightedProjects: ProjectPreview[];
    portrait: Image;
    tagline: string;
  }

  interface AllData {
    articles: Article[];
    home: Home;
  }
}
