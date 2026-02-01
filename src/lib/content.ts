import fs from 'fs';
import path from 'path';
import type { Project } from '@/types/project';
import type { BlogPost } from '@/types/blog';
import type { Resume } from '@/types/resume';
import type { SiteConfig } from '@/types';
import { parseMarkdown } from './markdown';

const contentDirectory = path.join(process.cwd(), 'content');
const projectsDirectory = path.join(contentDirectory, 'projects');
const blogDirectory = path.join(contentDirectory, 'blog');
const dataDirectory = path.join(contentDirectory, 'data');

// Project functions
export async function getAllProjects(): Promise<Project[]> {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        return getProjectBySlug(slug);
      })
  );

  return projects
    .filter((project): project is Project => project !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { frontmatter, content } = await parseMarkdown<Omit<Project, 'slug' | 'content'>>(
      fileContents
    );

    return {
      ...frontmatter,
      slug,
      content,
    } as Project;
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getAllProjects();
  return projects.filter((project) => project.featured);
}

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames.filter((fileName) => fileName.endsWith('.md')).map((fileName) => fileName.replace(/\.md$/, ''));
}

// Blog functions
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  const posts = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        return getBlogPostBySlug(slug);
      })
  );

  return posts
    .filter((post): post is BlogPost => post !== null && post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { frontmatter, content, readTime } = await parseMarkdown<
      Omit<BlogPost, 'slug' | 'content' | 'readTime'>
    >(fileContents);

    return {
      ...frontmatter,
      slug,
      content,
      readTime: readTime || 0,
    } as BlogPost;
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts.filter((post) => post.featured);
}

export async function getRecentBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts.slice(0, limit);
}

export function getBlogPostSlugs(): string[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  return fileNames.filter((fileName) => fileName.endsWith('.md')).map((fileName) => fileName.replace(/\.md$/, ''));
}

// Resume functions
export function getResume(): Resume | null {
  try {
    const fullPath = path.join(dataDirectory, 'resume.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(fileContents) as Resume;
  } catch (error) {
    console.error('Error reading resume:', error);
    return null;
  }
}

// Site config functions
export function getSiteConfig(): SiteConfig | null {
  try {
    const fullPath = path.join(dataDirectory, 'site-config.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(fileContents) as SiteConfig;
  } catch (error) {
    console.error('Error reading site config:', error);
    return null;
  }
}
