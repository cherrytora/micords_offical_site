import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://micords.com';
  const locales = ['', 'en', 'ja']; // '' = zh-tw default (no prefix)

  const staticPages = [
    '',
    'blog',
    'contact',
    'faq',
    'pricing',
    'privacy',
    'release-notes',
    'roadmap',
    'tutorial',
  ];

  const articles = await getCollection('articles');

  const staticUrls = staticPages.flatMap((page) =>
    locales.map((loc) => {
      const locPrefix = loc ? `/${loc}` : '';
      const pageSuffix = page ? `/${page}` : '';
      return `  <url><loc>${siteUrl}${locPrefix}${pageSuffix}/</loc></url>`;
    })
  );

  const articleUrls = articles.map((article) => {
    const [locale] = article.id.split('/');
    const pureSlug = article.slug.replace(`${locale}/`, '');
    const path = locale === 'zh-tw'
      ? `/blog/${pureSlug}/`
      : `/${locale}/blog/${pureSlug}/`;
    return `  <url><loc>${siteUrl}${path}</loc></url>`;
  });

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[...staticUrls, ...articleUrls].join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
