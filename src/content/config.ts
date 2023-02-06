import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.string().optional(),
  heroImage: z.string().optional(),
  heroImageAlt: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

const worksSchema = z.object({
  title: z.string(),
  description: z.string(),
  details: z.boolean().optional(),
  heroImage: z.string().optional(),
  updatedDate: z.coerce.date(),
  custom_link_label: z.string().optional(),
  custom_link: z.string().optional(),
  badge: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type WorksSchema = z.infer<typeof worksSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const worksCollection = defineCollection({ schema: worksSchema });

export const collections = {
  blog: blogCollection,
  works: worksCollection,
};
