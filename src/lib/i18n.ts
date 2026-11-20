import { defineI18n } from 'fumadocs-core/i18n';
import { defineI18nUI, uiTranslations } from 'fumadocs-ui/i18n';

export const i18n = defineI18n({
  defaultLanguage: 'en-gb',
  fallbackLanguage:'en-gb',
  languages: ['zh-hk', 'en-gb', 'zh-cn', 'en-us', 'ru', 'cn'],
  hideLocale: 'never',
});

export const { provider } = defineI18nUI(i18n, {
  'en-gb': {
    displayName: 'English (UK)',
  },
  'en-us': {
    displayName: 'English (US)',
  },
  'zh-hk': {
    displayName: '繁體中文（香港）',
  },
  'zh-cn': {
    displayName: '简体中文',
  },
});

export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .add({
    'en-gb': { displayName: 'English (UK)' },
    'en-us': { displayName: 'English (US)' },
    'zh-hk': { displayName: '繁體中文（香港）' },
    'zh-cn': { displayName: '简体中文' },
  });