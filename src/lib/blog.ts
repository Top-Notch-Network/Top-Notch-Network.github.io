import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export const SITE = {
  name: 'Top-Notch Network',
  url: 'https://top-notchnetwork.com',
  blogTitle: 'Top-Notch Network Blog',
  blogDescription:
    'Field notes on stewardship, leadership and the systems that sustain service: from Top-Notch Network.',
  ogDefault: '/og-default.png',
  logo: '/topdraftinvisbackgroundfinal001.png',
};

/** Published posts, newest first. Drafts show in `astro dev` only. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const tagSlug = (tag: string) =>
  tag.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

/** Unique tags (display form of the first occurrence) with counts, most used first. */
export function allTags(posts: Post[]) {
  const map = new Map<string, { tag: string; slug: string; count: number }>();
  for (const p of posts) for (const t of p.data.tags) {
    const slug = tagSlug(t);
    const e = map.get(slug) ?? { tag: t, slug, count: 0 };
    e.count++; map.set(slug, e);
  }
  return [...map.values()].sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export function readingTime(body = '') {
  const words = body.replace(/```[\s\S]*?```/g, ' ').replace(/[#>*_`\[\]()!-]/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 225));
}

// Frontmatter dates are calendar dates; format in UTC so they never shift a day.
const DATE_FMT = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
export const formatDate = (d: Date) => DATE_FMT.format(d);
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
