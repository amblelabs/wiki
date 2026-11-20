import { getCollection } from 'astro:content';
import { llms, loader, type InferPageType } from 'fumadocs-core/source';
import { toFumadocsSource } from '@fumadocs/astro/source';
import { docsRoute, docsImageRoute, docsContentRoute } from './shared';
import { createElement } from "react";
import { icons } from "lucide-react";
import { i18n } from '@/lib/i18n'
import AitIcon from "@/assets/images/ait.webp";
import K9Icon from "@/assets/images/k9.webp";
import IbdIcon from "@/assets/images/ibd.webp";

export const source = loader({
  source: toFumadocsSource(await getCollection('docs'), await getCollection('meta')),
  url(slugs, locale) {
      return ['wiki', locale, ...slugs].filter(Boolean).join('/');
  },
  baseUrl: docsRoute,
  i18n,
  icon: (icon) => {
    if (!icon) return;
    if (icon === "ait") {
         return createElement("img", {
           src: AitIcon.src,
           alt: "AIT Icon",
           className: "rounded",
         });
       }
   
       if (icon === "k9") {  // Add this block
         return createElement("img", {
           src: K9Icon.src,
           alt: "K9 Icon",
           className: "rounded",
         });
       }
   
       if (icon === "ibd") {
         return createElement("img", {
           src: IbdIcon.src,
           alt: "IBD Icon",
           className: "rounded",
         });
       }

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
  const locale = page.locale ?? i18n.defaultLanguage;
  const segments = [locale, ...page.slugs, 'image.png'];
  
  return {
    segments,
    url: `/wiki/og/${segments.join('/')}`,
  };
}

export function getPageMarkdownUrl(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, "content.md"];

  return {
    segments,
    url: `${docsContentRoute}/${segments.join("/")}`,
  };
}