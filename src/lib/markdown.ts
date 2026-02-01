import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export interface ParsedMarkdown<T = Record<string, unknown>> {
  frontmatter: T;
  content: string;
  readTime?: number;
}

export async function parseMarkdown<T = Record<string, unknown>>(
  fileContent: string
): Promise<ParsedMarkdown<T>> {
  const { data, content: markdownContent } = matter(fileContent);

  const processedContent = await remark()
    .use(gfm)
    .use(html, { sanitize: false })
    .process(markdownContent);

  const contentHtml = processedContent.toString();
  const stats = readingTime(markdownContent);

  return {
    frontmatter: data as T,
    content: contentHtml,
    readTime: Math.ceil(stats.minutes),
  };
}

export function extractExcerpt(content: string, maxLength: number = 160): string {
  // Remove markdown syntax and HTML tags
  const plainText = content
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Convert links to plain text
    .replace(/[#*`_~]/g, '') // Remove markdown formatting
    .replace(/<[^>]+>/g, '') // Remove HTML tags
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();

  if (plainText.length <= maxLength) {
    return plainText;
  }

  // Truncate at word boundary
  const truncated = plainText.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');

  return truncated.substring(0, lastSpace) + '...';
}
