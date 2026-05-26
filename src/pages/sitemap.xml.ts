import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://cherrytora.github.io/micords_offical_site';
  const locales = ['', 'en', 'ja']; // '' = zh-tw default (no prefix)

  const staticPages = [
    '',
    'blog',
    'contact',
    'faq',
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

  // Blog articles only in zh-tw for now
  const articleUrls = articles.map(
    (article) => `  <url><loc>${siteUrl}/blog/${article.slug}/</loc></url>`
  );

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
