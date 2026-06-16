import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/global.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import { RootProvider } from "fumadocs-ui/provider/next";
import SearchDialog from "@/components/search";
import { i18nUI } from "@/lib/layout.shared";

const inter = Inter({
  subsets: ["latin"],
});

export default async function Layout({
  params,
  children,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ SearchDialog }} i18n={i18nUI.provider(lang)}>
          {children}
        </RootProvider>
      </body>
      <GoogleAnalytics gaId="G-ZWTBEK75YY" />
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
};
