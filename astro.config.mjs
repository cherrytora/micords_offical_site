import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://micordshq.web.app',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw', 'en', 'ja'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
