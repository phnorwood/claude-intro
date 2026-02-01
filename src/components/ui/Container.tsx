import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'small' | 'large';
}

export default function Container({ children, className, size = 'default' }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        {
          'max-w-7xl': size === 'default',
          'max-w-4xl': size === 'small',
          'max-w-screen-2xl': size === 'large',
        },
        className
      )}
    >
      {children}
    </div>
  );
}
