import Link from 'next/link';
import type { BlogPost } from '@/types/blog';
import Container from '../ui/Container';
import Section from '../ui/Section';
import BlogList from '../blog/BlogList';

interface RecentPostsProps {
  posts: BlogPost[];
}

export default function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <Section>
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Recent Blog Posts
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Thoughts on web development, best practices, and lessons learned
          </p>
        </div>
        <BlogList posts={posts} />
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            View all posts →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
