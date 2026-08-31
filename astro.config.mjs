import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isGitHubPagesBuild = process.env.DEPLOY_TARGET === 'github-pages';

export default defineConfig({
  site: 'https://micordshq.web.app',
  ...(isGitHubPagesBuild ? { base: '/micords_offical_site' } : {}),
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw', 'en', 'ja'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
