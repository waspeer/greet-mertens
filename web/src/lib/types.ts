type ArticleData = PostData;

interface ImageData {
  alt: string;
  aspectRatio: number;
  asset: any;
  caption: string | null;
  crop: any;
  dominantColor: string;
  hotspot: any;
}

interface CategoryData {
  id: string;
  color?: string;
  description: string;
  icon: {
    description: string;
    emoji: string;
  };
  slug: string;
  title: string;
}

interface PostData {
  id: string;
  body: any[];
  categories: CategoryData[] | null;
  excerpt: any[];
  mainImage: ImageData;
  publishedAt: string;
  slug: string;
  title: string;
}

interface ProjectData extends PostData {
  isCurrent: boolean;
}


export { ArticleData, CategoryData, ImageData, PostData, ProjectData };
