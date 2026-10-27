// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/** lastmod for published blog posts from frontmatter date/updated. */
function blogLastmods() {
  const dir = path.join(process.cwd(), 'src/content/blog');
  /** @type {Map<string, string>} */
  const map = new Map();
  if (!fs.existsSync(dir)) return map;
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.md') || file.startsWith('_')) continue;
    const raw = fs.readFileSync(path.join(dir, file), 'utf8');
    if (/^draft:\s*true\b/m.test(raw)) continue;
    const slug = file.replace(/\.md$/, '');
    const updated = raw.match(/^updated:\s*['"]?(\d{4}-\d{2}-\d{2})/m)?.[1];
    const date = raw.match(/^date:\s*['"]?(\d{4}-\d{2}-\d{2})/m)?.[1];
    const lastmod = updated || date;
    if (lastmod) {
      map.set(`https://top-notchnetwork.com/blog/${slug}/`, lastmod);
    }
  }
  return map;
}

const lastmods = blogLastmods();

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
      filter: (page) =>
        !/\/(merch|make-a-payment|podcast|youtube|instagram|media\/(blog|podcast|youtube|instagram))\/?$/.test(
          page,
        ),
      serialize(item) {
        const lm = lastmods.get(item.url);
        if (lm) item.lastmod = new Date(lm);
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
