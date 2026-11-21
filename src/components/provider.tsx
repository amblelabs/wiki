// src/components/provider.tsx
import { navigate as astroNavigate } from 'astro:transitions/client';
import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider/astro';
import { i18nProvider } from 'fumadocs-ui/i18n';
import SearchDialog from '@/components/search';
import { i18n, translations } from '@/lib/i18n';

export interface ProviderProps {
  lang?: string;
  pathname: string;
  params: Record<string, string | undefined>;
  children?: ReactNode;
}

const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // '/wiki'

function withBase(path: string) {
  if (
    !base ||
    !path.startsWith('/') ||
    path === base ||
    path.startsWith(`${base}/`)
  ) {
    return path;
  }
  return `${base}${path}`;
}

function normalizePath(path: string) {
  const withSlash = path.startsWith('/') ? path : `/${path}`;
  return withSlash.replace(/\.html$/, '').replace(/\/$/, '') || '/';
}

export function Provider({ lang, pathname, params, children }: ProviderProps) {
  const activeLang = lang ?? params.lang ?? i18n.defaultLanguage;
  return (
    <RootProvider
      pathname={normalizePath(pathname)}
      params={params}
      navigate={(url) => astroNavigate(withBase(normalizePath(url)))}
      search={{ SearchDialog }}
      i18n={i18nProvider(translations, activeLang)}
    >
      {children}
    </RootProvider>
  );
}