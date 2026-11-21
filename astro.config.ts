// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import fumadocs from '@fumadocs/astro';

export default defineConfig({
  site: 'https://amblelabs.dev',
  base: '/wiki',
  build: {
      format: 'file',
  },
  trailingSlash: 'ignore',
  integrations: [
    fumadocs({
      components: './src/components/mdx.tsx',
      includeProcessedMarkdown: true,
      collections: {
        docs: { dir: 'content/wiki' },
      },
    }),
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  i18n: {
      locales: ['en-gb', 'zh-hk', 'zh-cn', 'en-us'],
      defaultLocale: 'en-gb',
      routing: {
        prefixDefaultLocale: true,
        redirectToDefaultLocale: true,
      },
    },
});
