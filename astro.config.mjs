import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cherrytora.github.io/micords_offical_site',
  base: '/micords_offical_site',
  integrations: [tailwind(), sitemap()],
});
