import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config'; // Import baseOptions

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | My Awesome Project 1',
    default: 'My Awesome Project 1',
  },
  description: 'A VitePress Site 4',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        {/* Set dir to enable correct font loading in RTL languages */}
        <RootProvider
          dir="ltr"
          // nav, links, and footer configurations will be handled by specific layouts (e.g., DocsLayout)
          // or default theme behaviors.
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
