// src/components/provider.tsx
import { navigate as astroNavigate } from 'astro:transitions/client';
import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider/astro';
import { i18nProvider } from 'fumadocs-ui/i18n';
import SearchDialog from '@/components/search';
import { translations } from '@/lib/layout.shared';

export interface ProviderProps {
  lang: string;
  pathname: string;
  params: Record<string, string | undefined>;
  children?: ReactNode;
}

const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // '/wiki'

function stripBase(path: string) {
  if (base && (path === base || path.startsWith(`${base}/`))) {
    return path.slice(base.length) || '/';
  }
  return path;
}

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

export function Provider({ lang, pathname, params, children }: ProviderProps) {
  return (
    <RootProvider
      pathname={stripBase(pathname)}
      params={params}
      navigate={(url) => astroNavigate(withBase(url))}
      search={{ SearchDialog }}
      i18n={i18nProvider(translations, lang)}
    >
      {children}
    </RootProvider>
  );
}