import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://cherrytora.github.io',
  base: '/micords_offical_site',
  integrations: [tailwind()],
});
