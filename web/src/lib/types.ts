export interface Image {
  alt: string;
  caption?: string | null;
  fluid: any;
}

export interface TransformableImage {
  asset: {
    _id: string;
    metadata: {
      lqip: string;
    };
  };
  crop?: {
    bottom: number;
    left: number;
    right: number;
    top: number;
  } | null;
  hotspot?: {
    height: number;
    width: number;
    x: number;
    y: number;
  } | null;
}

export interface TransformableFigure extends TransformableImage {
  alt: string;
  caption?: string | null;
}

export interface Category {
  color?: string | null;
  description?: string | null;
  icon?: {
    description: string;
    icon: string;
  } | null;
  id: string;
  slug: string;
  title: string;
}

export interface ArticlePreview {
  excerpt: any[];
  id: string;
  publishedAt: Date;
  mainImage?: Image | null;
  slug: string;
  title: string;
}

export interface Article {
  body: any[];
  categories: Category[];
  id: string;
  publishedAt: Date;
  mainImage?: TransformableFigure | null;
  title: string;
}

export interface Project {
  body: any[];
  categories: Category[];
  id: string;
  isCurrent: boolean;
  publishedAt?: Date;
  mainImage?: TransformableFigure | null;
  title: string;
}

export interface ProjectPreview {
  excerpt: any[];
  id: string;
  isCurrent: boolean;
  mainImage?: Image | null;
  slug: string;
  title: string;
}
