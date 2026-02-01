import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Your Name - Portfolio',
    template: '%s | Your Name',
  },
  description: 'Professional portfolio showcasing projects, experience, and blog posts.',
  keywords: ['portfolio', 'web development', 'software engineer', 'projects'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yoursite.com',
    siteName: 'Your Name Portfolio',
    title: 'Your Name - Professional Portfolio',
    description: 'Professional portfolio showcasing projects, experience, and blog posts.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Professional Portfolio',
    description: 'Professional portfolio showcasing projects, experience, and blog posts.',
    creator: '@yourhandle',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
