export interface Image {
  alt: string;
  caption?: string | null;
  fluid: any;
}

export interface BlogPostPreview {
  excerpt: any[];
  id: string;
  publishedAt: Date;
  mainImage?: Image | null;
  slug: string;
  title: string;
}

export interface Category {
  color?: string | null;
  description?: string | null;
  icon?: string | null;
  id: string;
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
