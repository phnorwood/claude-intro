import { cn } from '@/lib/utils';

interface BlogContentProps {
  content: string;
  className?: string;
}

export default function BlogContent({ content, className }: BlogContentProps) {
  return (
    <div
      className={cn('prose prose-gray max-w-none', className)}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
