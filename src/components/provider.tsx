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

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

function normalizePath(path: string) {
  const withSlash = path.startsWith('/') ? path : `/${path}`;
  return withSlash.replace(/\.html$/, '').replace(/\/$/, '') || '/';
}

function stripBase(path: string) {
  const normalized = normalizePath(path);
  if (!base) return normalized;
  if (normalized === base) return '/';
  if (normalized.startsWith(`${base}/`)) {
    return normalized.slice(base.length) || '/';
  }
  return normalized;
}

function withBase(path: string) {
  const normalized = normalizePath(path);
  if (!base || normalized === base || normalized.startsWith(`${base}/`)) {
    return normalized;
  }
  return `${base}${normalized === '/' ? '' : normalized}`;
}

export function Provider({ lang, pathname, params, children }: ProviderProps) {
  const activeLang = lang ?? params.lang ?? i18n.defaultLanguage;
  const appPath = stripBase(pathname);
  const baseI18n = i18nProvider(translations, activeLang);
  return (
    <RootProvider
      pathname={normalizePath(pathname)}
      params={params}
      navigate={(url) => astroNavigate(withBase(url))}
      search={{ SearchDialog }}
      i18n={{
        ...baseI18n,
        onLocaleChange(newLocale) {
          const segments = appPath.split('/').filter(Boolean);
          const languages: readonly string[] = i18n.languages;

          if (segments.length > 0 && languages.includes(segments[0])) {
            segments.shift();
          }

          const shouldHide =
            i18n.hideLocale === 'default-locale' &&
            newLocale === i18n.defaultLanguage;

          const nextAppPath = [
            ...(shouldHide ? [] : [newLocale]),
            ...segments,
          ].join('/');

          astroNavigate(withBase(`/${nextAppPath}`));
        },
      }}
    >
      {children}
    </RootProvider>
  );
}