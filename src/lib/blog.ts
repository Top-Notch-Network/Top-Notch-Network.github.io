import { getCollection, type CollectionEntry } from 'astro:content';
import { BLOG_TAGS, tagSlug } from './tags';

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

export { tagSlug } from './tags';

/** Tags that have at least one post, with counts, in the BLOG_TAGS order. */
export function allTags(posts: Post[]) {
  return BLOG_TAGS.map((tag) => ({ tag, slug: tagSlug(tag), count: posts.filter((p) => p.data.tags.includes(tag)).length }))
    .filter((t) => t.count > 0);
}

export function readingTime(body = '') {
  const words = body.replace(/```[\s\S]*?```/g, ' ').replace(/[#>*_`\[\]()!-]/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 225));
}

// Frontmatter dates are calendar dates; format in UTC so they never shift a day.
const DATE_FMT = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
export const formatDate = (d: Date) => DATE_FMT.format(d);
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
