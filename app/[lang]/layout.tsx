import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/global.css";
import { MinGoogleAnalytics } from "@/components/min-google-analytics";
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
  const lang = (await params).lang;

  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <MinGoogleAnalytics googleId="G-3B98G1FDF0" />
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ SearchDialog }} i18n={i18nUI.provider(lang)}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
};
