// Content collections. Blog posts live in src/content/blog/*.md (files starting with "_" are ignored).
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { BLOG_TAGS } from './lib/tags';

const TAG_LIST = BLOG_TAGS.map((t) => `"${t}"`).join(', ');

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1).max(120),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      summary: z.string().min(1).max(300),
      tags: z
        .array(z.enum(BLOG_TAGS, { message: `Unknown tag. Allowed tags (src/lib/tags.ts): ${TAG_LIST}` }))
        .min(1, { message: 'Add 1 to 3 tags' })
        .max(3, { message: 'Use at most 3 tags' })
        .refine((t) => new Set(t).size === t.length, { message: 'Each tag only once' }),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
      author: z.string().default('Seth Berg'),
    }),
});

export const collections = { blog };
