import type { APIRoute } from 'astro';
import { source } from '@/lib/source';

export const prerender = true;

interface SitemapEntry {
  url: string;
  lastModified?: Date;
  changeFrequency?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  priority?: number;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = async ({ site }) => {
  const baseUrl =
    site ?? new URL(import.meta.env.SITE ?? 'https://amblelabs.dev');
  const url = (path: string): string => new URL(path, baseUrl).toString();

  const entries: SitemapEntry[] = [
    {
      url: url(import.meta.env.BASE_URL),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    ...source.getPages().map((page): SitemapEntry => {
      const rawLastModified = (
        page.data as { lastModified?: string | number | Date }
      ).lastModified;

      return {
        url: url(page.url),
        lastModified: rawLastModified ? new Date(rawLastModified) : undefined,
        changeFrequency: 'monthly',
        priority: 0.5,
      };
    }),
  ];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map((entry) =>
      [
        '  <url>',
        `    <loc>${escapeXml(entry.url)}</loc>`,
        entry.lastModified && !Number.isNaN(entry.lastModified.getTime())
          ? `    <lastmod>${entry.lastModified.toISOString()}</lastmod>`
          : null,
        entry.changeFrequency
          ? `    <changefreq>${entry.changeFrequency}</changefreq>`
          : null,
        entry.priority !== undefined
          ? `    <priority>${entry.priority.toFixed(1)}</priority>`
          : null,
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n'),
    ),
    '</urlset>',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};