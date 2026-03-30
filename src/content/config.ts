import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'data',
  schema: z.object({
    seoTitle: z.string(),
    seoDescription: z.string(),
    navCtaText: z.string(),
    navCtaLink: z.string(),
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    ctaPrimary: z.string(),
    ctaPrimaryLink: z.string(),
    ctaSecondary: z.string(),
    ctaSecondaryLink: z.string(),
    featuresTitle: z.string(),
    features: z.array(z.object({ icon: z.string(), title: z.string(), desc: z.string() })),
    storyTitle: z.string(),
    storyContent: z.string(),
    ctaTitle: z.string(),
    ctaButton: z.string(),
    ctaButtonLink: z.string(),
  }),
});

const releaseNotes = defineCollection({
  type: 'content',
  schema: z.object({
    version: z.string(),
    date: z.union([z.string(), z.date().transform(d => d.toISOString().slice(0, 10))]),
    title: z.string(),
    summary: z.string(),
  }),
});

const roadmap = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    quarter: z.string(),
    title: z.string(),
    desc: z.string(),
    status: z.enum(['done', 'building', 'planned']),
    features: z.array(z.string()),
  }),
});

const tutorial = defineCollection({
  type: 'data',
  schema: z.object({
    pageTitle: z.string(),
    pageSubtitle: z.string(),
    sections: z.array(z.object({
      id: z.string(),
      title: z.string(),
      desc: z.string(),
      steps: z.array(z.string()),
      mediaLabel: z.string(),
      youtubeId: z.string().optional(),
    })),
    ctaTitle: z.string(),
    ctaSubtitle: z.string(),
    ctaButton: z.string(),
    ctaButtonLink: z.string(),
  }),
});

export const collections = {
  'release-notes': releaseNotes,
  'roadmap': roadmap,
  'pages': pages,
  'tutorial': tutorial,
};
