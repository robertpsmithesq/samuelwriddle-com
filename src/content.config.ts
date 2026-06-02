import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.string(),
    startDate: z.coerce.date(),
    endDate: z.union([z.coerce.date(), z.literal("Present")]),
    highlights: z.array(z.string()).min(1),
    skills: z.array(z.string()).min(1),
    order: z.number().int().optional(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/education" }),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    location: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    details: z.string().optional(),
    highlights: z.array(z.string()).min(1),
    order: z.number().int().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    tag: z.string(),
    href: z.string().url(),
    image: z.string().optional(),
    description: z.string(),
    tags: z.array(z.string()).min(1),
    unpublished: z.boolean().optional(),
    order: z.number().int().optional(),
    reverse: z.boolean().optional(),
  }),
});

export const collections = {
  education,
  experience,
  projects,
};
