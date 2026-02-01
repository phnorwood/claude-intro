import Hero from '@/components/sections/Hero';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import RecentPosts from '@/components/sections/RecentPosts';
import { getFeaturedProjects, getRecentBlogPosts } from '@/lib/content';

export default async function Home() {
  const [featuredProjects, recentPosts] = await Promise.all([
    getFeaturedProjects(),
    getRecentBlogPosts(3),
  ]);

  return (
    <>
      <Hero />
      <FeaturedProjects projects={featuredProjects} />
      <RecentPosts posts={recentPosts} />
    </>
  );
}
