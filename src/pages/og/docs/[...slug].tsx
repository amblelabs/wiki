import type { APIRoute, GetStaticPaths, InferGetStaticPropsType } from 'astro';
import { ImageResponse } from '@takumi-rs/image-response';
import { source } from '@/lib/source';
import {
  appName,
  ogBackgroundColor,
  ogColor,
  ogTextColor,
} from '@/lib/shared';
import { serverOgData, serverOgFallback } from '@/lib/og.server';
import DocsTemplate from '@/components/takumi/docs-template';

export const prerender = true;

export const getStaticPaths = (() => {
  return source.getPages().map((page) => ({
    params: {
      slug: [page.locale, ...page.slugs, 'image.webp'].filter(Boolean).join('/'),
    },
    props: { page },
  }));
}) satisfies GetStaticPaths;

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export const GET: APIRoute<Props> = async ({ props }) => {
  const { page } = props;

  const subtype = page.path.split('/')[0];
  const meta =
    serverOgData[subtype as keyof typeof serverOgData] || serverOgFallback;

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
          width={128}
          height={128}
          style={{ width: 128, height: 128, borderRadius: 8 }}
        />
      }
    />,
    {
      width: 1200,
      height: 630,
      format: 'webp',
      images: [
        {
          src: 'logo',
          data: meta.data,
        },
      ],
    },
  );
};