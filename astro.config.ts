// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import fumadocs from '@fumadocs/astro';
import { policyRulePresets } from "c15t";
import { c15t, local } from "c15t/astro";

export default defineConfig({
  site: 'https://amblelabs.dev',
  base: '/wiki',
  build: {
      format: 'file',
  },
  trailingSlash: 'never',
  integrations: [
    fumadocs({
      components: './src/components/mdx.tsx',
      includeProcessedMarkdown: true,
      collections: {
        docs: { dir: 'content/wiki' },
      },
    }),
    c15t({
      middleware: false,
      mode: local({
        policyRules: [
          policyRulePresets.europeOptIn(),
          policyRulePresets.californiaOptOut(),
          policyRulePresets.worldOptOutNoPrompt(),
        ],
      }),
      consentCategories: ["necessary", "measurement"],
      presentation: {
        prompt: {
          layout: [["reject", "customize"], "accept"],
          primaryActions: ["accept"],
        },
      },
      theme: {
        colors: {
          primary: "#ff8c00",
          primaryHover: "#e67e00",
          switchTrack: "#e67e00",
          switchTrackActive: "#e67e00",
        },
        dark: {
          primary: "#ff8c00",
          primaryHover: "#e67e00",
          switchTrack: "#e67e00",
          switchTrackActive: "#e67e00",
        },
        consentActions: {
          default: { variant: "neutral", mode: "ghost" },
          accept: { variant: "primary", mode: "filled" },
          customize: { variant: "neutral", mode: "stroke" },
        },
      },
    }),
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    ssr: {
      noExternal: ["c15t", "@c15t/astro"],
    },
    environments: {
      prerender: {
        resolve: {
          noExternal: ["c15t", "@c15t/astro"],
        },
      },
    },
  },
  i18n: {
    locales: ['en-gb', 'zh-hk', 'zh-cn', 'en-us'],
    defaultLocale: 'en-gb',
    routing: "manual",
  },
});
