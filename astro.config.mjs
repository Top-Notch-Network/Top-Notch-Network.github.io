// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://top-notchnetwork.com',
  // The old nav pointed to /media/blog; keep that URL working.
  redirects: {
    // Legacy Chirpy path; destination uses trailing slash to avoid an extra host 301.
    '/media/blog': '/blog/',
    // /sitemap.xml is a static alias of sitemap-index.xml (see package.json build copy).
    // /index.html → / skipped: in static output index.html IS the homepage; redirecting it would break /.
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
