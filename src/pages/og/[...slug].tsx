import type { APIRoute, GetStaticPaths } from 'astro';
import { ImageResponse } from '@takumi-rs/image-response';
import { getPageImage, source } from '@/lib/source';
import { appName } from '@/lib/shared';
import {
  ogBackgroundColor,
  ogColor,
  ogData,
  ogFallback,
  ogTextColor,
} from '@/lib/server'; // or '@/lib/shared' if ogData lives there
import DocsTemplate from '@/components/takumi/docs-template';

export const prerender = true;

interface OgRouteProps {
  slugs: string[];
  locale: string;
}

export const getStaticPaths: GetStaticPaths = () => {
  return source.getPages().map((page) => ({
    params: {
      // Astro rest params expect a '/'-joined string rather than string[]
      slug: getPageImage(page).segments.join('/'),
    },
    props: {
      slugs: page.slugs,
      locale: page.locale,
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
  const meta = ogData[subtype as keyof typeof ogData] || ogFallback;

  return new ImageResponse(
    <DocsTemplate
      title={page.data.title}
      description={page.data.description}
      site={meta.name}
      siteType={appName}
      primaryColor={ogColor}
      backgroundColor={ogBackgroundColor}
      primaryTextColor={ogTextColor}
      icon={
        <img
          alt="AmbleLabs"
          src="logo"
          sizes="100px"
          tw="w-32 h-32 rounded-lg"
        />
      }
    />,
    {
      width: 1200,
      height: 630,
      format: 'png',
      persistentImages: [
        {
          src: 'logo',
          data: meta.data,
        },
      ],
    },
  );
};