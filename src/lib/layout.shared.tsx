import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from '@/lib/i18n';
import { uiTranslations, defineI18nUI } from 'fumadocs-ui/i18n';
import { appName, gitConfig } from './shared';

export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .add({
    'en-gb': { displayName: 'English (UK)' },
    'en-us': { displayName: 'English (US)' },
    'zh-hk': { displayName: '繁體中文（香港）' },
    'zh-cn': { displayName: '简体中文' },
  });

export const i18nUI = defineI18nUI(i18n, {
  "en-gb": {
    displayName: "English",
  },
  "zh-hk": {
    displayName: "Traditional Chinese",
  },
  "en-us": {
    displayName: "English",
  },
  "zh-cn": {
    displayName: "Simplifieed Chinese",
  },

});

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: appName,
      url: locale === i18n.defaultLanguage ? '/' : `/${locale}`, 
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
