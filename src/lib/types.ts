export interface Image {
  alt: string;
  caption?: string | null;
  fluid: any;
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

export interface BlogPostPreview {
  excerpt: any[];
  id: string;
  publishedAt: Date;
  mainImage?: Image | null;
  slug: string;
  title: string;
}

export interface BlogPost {
  body: any[];
  categories: Category[];
  id: string;
  publishedAt: Date;
  mainImage?: Image | null;
  title: string;
}

export interface PortfolioProject {
  body: any[];
  categories: Category[];
  id: string;
  isCurrent: boolean;
  publishedAt: Date;
  mainImage?: Image | null;
  title: string;
}

export interface PortfolioProjectPreview {
  excerpt: any[];
  id: string;
  isCurrent: boolean;
  mainImage?: Image | null;
  slug: string;
  title: string;
}
