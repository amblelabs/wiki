import type { MetadataRoute } from "next";

import { source } from "@/lib/source";

export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const url = (path: string): string => new URL(path, baseUrl).toString();

  return [
    {
      url: url("/"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    ...(await Promise.all(
      source.getPages().map(async (page) => {
        return {
          url: url(page.url),
          lastModified: page.data.lastModified
            ? new Date(page.data.lastModified)
            : undefined,
          changeFrequency: "monthly",
          priority: 0.5,
        } as MetadataRoute.Sitemap[number];
      }),
    )),
  ];
}
