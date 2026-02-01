import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import BlogList from '@/components/blog/BlogList';
import { getAllBlogPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles and thoughts on web development, programming, and technology',
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <Section>
      <Container>
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Blog
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Thoughts on web development, best practices, and lessons learned
            from building real-world applications
          </p>
        </div>
        <BlogList posts={posts} />
      </Container>
    </Section>
  );
}
