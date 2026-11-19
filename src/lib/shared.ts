// src/lib/shared.ts
import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'Astro';
export const docsRoute = '/wiki';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/wiki/llms.mdx';

export const gitConfig = {
  user: 'fuma-nama',
  repo: 'fumadocs',
  branch: 'main',
};

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.webp'];

  return { segments, url: getImageUrl(segments, page.locale) };
}

export type OgMeta = {
  short: string;
  name: string;
  iconType: 'png' | 'webp';
};

export const ogData = {
  ait: {
    short: 'ait',
    name: 'Adventures in Time',
    iconType: 'webp',
  },
  common: {
    short: 'logo',
    name: 'AmbleLabs',
    iconType: 'png',
  },
} satisfies Record<string, OgMeta>;

export const ogFallback = ogData.common;