import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import BlogContent from '@/components/blog/BlogContent';
import { getBlogPostBySlug, getBlogPostSlugs } from '@/lib/content';
import { formatDate } from '@/lib/utils';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getBlogPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Section>
      <Container size="small">
        {/* Back Link */}
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center text-primary-600 hover:text-primary-700"
        >
          ← Back to Blog
        </Link>

        {/* Featured Image */}
        {post.image && (
          <div className="relative mb-8 aspect-video overflow-hidden rounded-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Header */}
        <header className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            {post.title}
          </h1>

          {/* Metadata */}
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Content */}
        <BlogContent content={post.content} />

        {/* Footer */}
        <footer className="mt-12 border-t pt-8">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="text-primary-600 hover:text-primary-700"
            >
              ← Back to all posts
            </Link>
            <Link
              href="/contact"
              className="text-primary-600 hover:text-primary-700"
            >
              Get in touch →
            </Link>
          </div>
        </footer>
      </Container>
    </Section>
  );
}
