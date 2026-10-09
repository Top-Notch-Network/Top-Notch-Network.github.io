// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://top-notchnetwork.com',
  // The old nav pointed to /media/blog; keep that URL working.
  redirects: {
    '/media/blog': '/blog',
  },
  integrations: [
    sitemap({
      // Redirect-only pages don't belong in the sitemap.
      filter: (page) => !/\/(merch|make-a-payment|podcast|youtube|instagram|media\/(blog|podcast|youtube|instagram))\/?$/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
