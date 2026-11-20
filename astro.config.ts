// @ts-check
import type { IncomingMessage, ServerResponse } from 'node:http';
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
  ],
  vite: {
    plugins: [
      tailwindcss(),
      {
              name: 'fumadocs-island-base-rewrite',
              configureServer(server) {
                server.middlewares.stack.unshift({
                  route: '',
                  handle(req: IncomingMessage,
                         _res: ServerResponse,
                        next: (err?: unknown) => void,) {
                    if (req.url?.startsWith('/@id/virtual:fumadocs')) {
                      req.url = `/wiki${req.url}`;
                    }
                    next();
                  },
                });
              },
            },
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
