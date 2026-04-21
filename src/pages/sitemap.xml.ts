import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://cherrytora.github.io/micords_offical_site';

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

  const urls = [
    ...staticPages.map(
      (page) => `  <url><loc>${siteUrl}/${page}${page ? '/' : ''}</loc></url>`
    ),
    ...articles.map(
      (article) => `  <url><loc>${siteUrl}/blog/${article.slug}/</loc></url>`
    ),
  ].join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
