// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import fumadocs from '@fumadocs/astro';

export default defineConfig({
  site: 'https://vmbbi.github.io',
  base: '/wiki',
  integrations: [
    fumadocs({
      components: './src/components/mdx.tsx',
      includeProcessedMarkdown: true,
      collections: {
        docs:{dir:'content/wiki'},
      },
    }),
    {
          name: 'fumadocs-base-virtual-id',
          hooks: {
            'astro:server:setup'({ server }) {
              /** @type {import('vite').Connect.NextHandleFunction} */
              const rewrite = (req, _res, next) => {
                if (req.url?.startsWith('/@id/virtual:fumadocs/')) {
                  req.url = `/wiki${req.url}`;
                }
                next();
              };
    
              server.middlewares.stack.unshift({ route: '', handle: rewrite });
              server.httpServer?.once('listening', () => {
                server.middlewares.stack = server.middlewares.stack.filter(
                  (layer) => layer.handle !== rewrite,
                );
                server.middlewares.stack.unshift({ route: '', handle: rewrite });
              });
            },
          },
        },
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
