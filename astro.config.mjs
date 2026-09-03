import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://micords.com',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw', 'en', 'ja'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
