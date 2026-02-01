export type { Project } from './project';
export type { BlogPost } from './blog';
export type {
  Resume,
  PersonalInfo,
  SocialLinks,
  WorkExperience,
  Education,
  SkillCategory,
  Skill,
  Certification,
} from './resume';

export interface SiteConfig {
  site: {
    name: string;
    title: string;
    description: string;
    url: string;
    ogImage?: string;
  };
  author: {
    name: string;
    email: string;
  };
  navigation: NavigationItem[];
  social: SocialLink[];
  analytics?: {
    provider: 'google' | 'plausible' | 'vercel' | 'custom';
    id: string;
  };
}

export interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
