import rss from '@astrojs/rss';
import { getPosts, SITE } from '../../lib/blog';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: SITE.blogTitle,
    description: SITE.blogDescription,
    site: context.site ?? SITE.url,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.summary,
      pubDate: p.data.date,
      link: `/blog/${p.id}/`,
      categories: p.data.tags,
      author: `contact@top-notchnetwork.com (${p.data.author})`,
    })),
    customData: '<language>en-us</language>',
  });
}
