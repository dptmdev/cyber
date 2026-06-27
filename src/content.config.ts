import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const units = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/units' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string(),
    lectureHours: z.number().optional(),
    topics: z.array(z.string()).default([]),
  }),
});

export const collections = { units };
