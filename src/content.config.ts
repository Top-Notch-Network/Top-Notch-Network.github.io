// Content collections. Blog posts live in src/content/blog/*.md (files starting with "_" are ignored).
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1).max(120),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      summary: z.string().min(1).max(300),
      tags: z.array(z.string().min(1)).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
      author: z.string().default('Seth Berg'),
    }),
});

export const collections = { blog };
