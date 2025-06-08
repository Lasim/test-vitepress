import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo"
        >
          <circle cx={12} cy={12} r={12} fill="currentColor" />
        </svg>
        My Awesome Project
      </>
    ),
    transparentMode: 'top', // Optional: for a transparent navbar at the top
  },
  links: [
    {
      text: 'Home',
      url: '/',
      active: 'nested-url', // Or 'url' if you want exact match - points to /kaki/
    },
    {
      text: 'Documentation',
      url: '/docs', // Points to /kaki/docs/ (our docs index.mdx)
      active: 'nested-url',
    },
    {
      text: 'Test Page',
      url: '/docs/test', // Points to /kaki/docs/test (our docs test.mdx)
      active: 'nested-url',
    },
    // We can add more links here if needed
    // {
    //   text: 'API Examples',
    //   url: '/api-examples',
    //   active: 'nested-url',
    // }
  ],
};
