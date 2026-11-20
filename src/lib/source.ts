import { getCollection } from 'astro:content';
import { llms, loader, type InferPageType } from 'fumadocs-core/source';
import { toFumadocsSource } from '@fumadocs/astro/source';
import { docsRoute, docsImageRoute, docsContentRoute } from './shared';
import { createElement } from "react";
import { icons } from "lucide-react";
import { i18n } from '@/lib/i18n'

export const source = loader({
  source: toFumadocsSource(await getCollection('docs'), await getCollection('meta')),
  url(slugs, locale) {
      return [docsRoute, locale, ...slugs].filter(Boolean).join('/');
  },
  baseUrl: docsRoute,
  i18n,
  icon: (icon) => {
      if (!icon) return;
      return createElement(
        icons[icon as keyof typeof icons] || icons.BadgeQuestionMark,
      );
    },
});

export const docsLlms = llms(source, {
  renderPage: async (page) => `# ${page.data.title} (${page.url})

${await page.data.getText('processed')}`,
});

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, "image.webp"];

  return {
    segments,
    url: `${docsImageRoute}/${segments.join("/")}`,
  };
}

export function getPageMarkdownUrl(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, "content.md"];

  return {
    segments,
    url: `${docsContentRoute}/${segments.join("/")}`,
  };
}