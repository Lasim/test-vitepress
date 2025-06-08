import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      footer={{
        copyright: `© ${new Date().getFullYear()} My Awesome Project`,
        socialLinks: [
          {
            icon: 'github',
            url: 'https://github.com/vuejs/vitepress', // Replace with your project's GitHub URL
          },
        ],
      }}
    >
      {children}
    </DocsLayout>
  );
}
