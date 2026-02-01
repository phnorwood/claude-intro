export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  updated?: string;
  author: string;
  tags: string[];
  readTime: number;
  featured: boolean;
  published: boolean;
  image?: string;
  content: string;
}
