import { getPageImage, source } from "@/lib/source";
import { notFound } from "next/navigation";
import { ImageResponse } from "@takumi-rs/image-response";
import {
  appName,
  ogBackgroundColor,
  ogColor,
  ogData,
  ogFallback,
  ogTextColor,
} from "@/lib/shared";
import DocsTemplate from "@/components/takumi/docs-template";

export const revalidate = false;

export async function GET(
  _req: Request,
  { params }: RouteContext<"/og/[...slug]">,
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  let subtype = page.data.info.path.split("/")[0];
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
      format: "png",
      persistentImages: [
        {
          src: "logo",
          data: meta.data,
        },
      ],
    },
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }));
}
