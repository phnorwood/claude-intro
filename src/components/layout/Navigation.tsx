'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

interface NavigationProps {
  className?: string;
  onItemClick?: () => void;
}

export default function Navigation({ className, onItemClick }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={cn('flex items-center gap-6', className)}>
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary-600',
              isActive ? 'text-primary-600' : 'text-gray-700'
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
