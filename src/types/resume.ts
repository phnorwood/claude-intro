export interface Resume {
  personalInfo: PersonalInfo;
  social: SocialLinks;
  experience: WorkExperience[];
  education: Education[];
  skills: SkillCategory[];
  certifications?: Certification[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  summary: string;
  avatar?: string;
}

export interface SocialLinks {
  linkedin?: string;
  github?: string;
  twitter?: string;
  website?: string;
  other?: { name: string; url: string }[];
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | 'present';
  description: string;
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string[];
  relevant?: string[];
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  years?: number;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}
