import { defineCollection, z } from 'astro:content';

const global = defineCollection({
  type: 'data',
  schema: z.object({
    ctaUrl: z.string().url(),
  }),
});

const pages = defineCollection({
  type: 'data',
  schema: z.object({
    seoTitle: z.string(),
    seoDescription: z.string(),
    navCtaText: z.string(),
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    ctaPrimary: z.string(),
    ctaSecondary: z.string(),
    ctaSecondaryLink: z.string(),
    featuresTitle: z.string(),
    features: z.array(z.object({ icon: z.string(), title: z.string(), desc: z.string() })),
    storyEyebrow: z.string(),
    storyTitle: z.string(),
    storyContent: z.string(),
    ctaTitle: z.string(),
    ctaButton: z.string(),
  }),
});

const releaseNotes = defineCollection({
  type: 'content',
  schema: z.object({
    version: z.string(),
    date: z.union([z.string(), z.date().transform(d => d.toISOString().slice(0, 10))]),
    title: z.string(),
    summary: z.string().optional(),
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
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
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
  }),
});

const faq = defineCollection({
  type: 'data',
  schema: z.object({
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.union([z.string(), z.date().transform((d) => d.toISOString().slice(0, 10))]),
    excerpt: z.string(),
    tags: z.array(z.string()).optional(),
    coverImage: z.string().optional(),
  }),
});

const pricing = defineCollection({
  type: 'data',
  schema: z.object({
    seoTitle: z.string(),
    seoDescription: z.string(),
    pageTitle: z.string(),
    pageSubtitle: z.string(),
    trialBadge: z.string(),
    periodMonthly: z.string(),
    periodAnnual: z.string(),
    periodAnnualSave: z.string(),
    plans: z.array(z.object({
      id: z.string(),
      label: z.string(),
      tag: z.string(),
      monthlyPrice: z.string(),
      annualPrice: z.string(),
      annualTotal: z.string().optional().default(''),
      annualSaveNote: z.string().optional().default(''),
      popular: z.boolean().default(false),
      dark: z.boolean().default(false),
      cta: z.string(),
      features: z.array(z.string()),
    })),
    notes: z.array(z.object({
      title: z.string(),
      items: z.array(z.string()),
    })),
    ctaTitle: z.string(),
    ctaSubtitle: z.string(),
    ctaButton: z.string(),
  }),
});

export const collections = {
  'global': global,
  'release-notes': releaseNotes,
  'roadmap': roadmap,
  'pages': pages,
  'tutorial': tutorial,
  'articles': articles,
  'faq': faq,
  'pricing': pricing,
};
