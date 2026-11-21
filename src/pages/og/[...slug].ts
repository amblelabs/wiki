import { createElement } from 'react';
import type { APIRoute, GetStaticPaths } from 'astro';
import { ImageResponse } from '@takumi-rs/image-response';
import { getPageImage, source } from '@/lib/source';
import { i18n } from '@/lib/i18n';
import {
  appName,
  ogBackgroundColor,
  ogColor,
  ogTextColor,
} from '@/lib/shared';
import { serverOgData, serverOgFallback} from '@/lib/og.server';
import DocsTemplate from '@/components/takumi/docs-template';
import Logo from '@/assets/images/logo.png'
export const prerender = true;

interface OgRouteProps {
  slugs: string[];
  locale?: string;
}

export const getStaticPaths: GetStaticPaths = () => {
  return source.getPages().map((page) => ({
    params: {
      slug: getPageImage(page).segments.join('/'),
    },
    props: {
      slugs: page.slugs,
      locale: page.locale ?? i18n.defaultLanguage,
    } satisfies OgRouteProps,
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const { slugs, locale } = props as OgRouteProps;
  const page = source.getPage(slugs, locale);

  if (!page) {
    return new Response('Not Found', { status: 404 });
  }

  const rawPath =
    (page.data as { info?: { path?: string } }).info?.path ??
    page.slugs.join('/');
  const subtype = rawPath.split('/')[0];
  const meta = serverOgData[subtype as keyof typeof serverOgData] || serverOgFallback;

  return new ImageResponse(
    createElement(DocsTemplate, {
      title: page.data.title,
      description: page.data.description,
      site: meta.name,
      siteType: appName,
      primaryColor: ogColor,
      backgroundColor: ogBackgroundColor,
      primaryTextColor: ogTextColor,
      icon: createElement('img', {
        alt: 'AmbleLabs',
        src: Logo.src,
        sizes: '100px',
        tw: 'w-32 h-32 rounded-lg',
      }),
    }),
    {
      width: 1200,
      height: 630,
      format: 'png',
      images: [
        {
          src: Logo.src,
          data: meta.data,
        },
      ],
    },
  );
};