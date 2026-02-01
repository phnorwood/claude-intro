import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/types/blog';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card hover className="group h-full">
        {/* Featured Image */}
        {post.image && (
          <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}

        {/* Post Content */}
        <div>
          <div className="mb-2 flex items-center gap-3 text-sm text-gray-500">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>

          <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-primary-600">
            {post.title}
          </h3>
          <p className="mb-4 text-sm text-gray-600">{post.excerpt}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
            {post.tags.length > 3 && (
              <Badge variant="default">+{post.tags.length - 3}</Badge>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
