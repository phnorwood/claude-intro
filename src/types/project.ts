export interface Project {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'archived';
  tags: string[];
  links: {
    live?: string;
    github?: string;
    demo?: string;
    external?: string;
  };
  images: {
    thumbnail: string;
    gallery?: string[];
  };
  videos?: {
    type: 'youtube' | 'vimeo' | 'url';
    url: string;
    title?: string;
  }[];
  content: string;
}
