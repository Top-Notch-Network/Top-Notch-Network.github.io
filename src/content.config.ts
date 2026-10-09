// Content collections. Blog posts live in src/content/blog/*.md (files starting with "_" are ignored).
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// The only allowed tags. Anything else fails the build with this message.
export const BLOG_TAGS = ['Network Update', 'Insight'] as const;

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1).max(120),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      summary: z.string().min(1).max(300),
      tags: z
        .array(z.enum(BLOG_TAGS, { message: 'Tag must be exactly "Network Update" or "Insight"' }))
        .min(1, { message: 'Add one tag: "Network Update" or "Insight"' })
        .max(2),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
      author: z.string().default('Seth Berg'),
    }),
});

export const collections = { blog };
