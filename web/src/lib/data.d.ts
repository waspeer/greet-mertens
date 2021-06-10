import type { SanityReference } from '@sanity/image-url/lib/types/types';

declare namespace Data {
  type PortableText = PortableText;

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

  interface ArticlePreview {
    excerpt: PortableText;
    id: string;
    publishedAt: Date;
    mainImage?: Image | null;
    slug: string;
    title: string;
  }

  interface Article {
    body: PortableText;
    categories: Category[];
    id: string;
    publishedAt: Date;
    // mainImage?: TransformableFigure | null;
    title: string;
  }

  interface Project {
    body: PortableText;
    categories: Category[];
    id: string;
    isCurrent: boolean;
    publishedAt?: Date;
    // mainImage?: TransformableFigure | null;
    title: string;
  }

  interface ProjectPreview {
    // categories: Category[];
    excerpt: PortableText;
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
    home: Home;
  }
}
