import { defineI18n } from 'fumadocs-core/i18n';
import { uiTranslations } from 'fumadocs-ui/i18n';
import type { Tokenizer } from '@orama/orama';
import { createTokenizer as mandarinTokenizer } from '@orama/tokenizers/mandarin';

export const i18n = defineI18n({
  defaultLanguage: 'en-gb',
  fallbackLanguage: 'en-gb',
  languages: ['zh-hk', 'en-gb', 'zh-cn', 'en-us', 'ru', 'cn'],
  hideLocale: 'never',
});

export interface LocaleOramaConfig {
  language?: string;
  _language?: string;
  components?: {
    tokenizer: Tokenizer;
  };
  search?: {
    threshold: number;
    tolerance: number;
  };
}

function lang(name: string): LocaleOramaConfig {
  return {
    language: name,
    _language: name,
  };
}

function mandarin(): LocaleOramaConfig {
  return {
    components: {
      tokenizer: mandarinTokenizer(),
    },
    search: {
      threshold: 0,
      tolerance: 0,
    },
  };
}

export const localeMap: Record<string, LocaleOramaConfig> = {
  'en-gb': lang('english'),
  'en-us': lang('english'),
  ru: lang('russian'),
  'zh-hk': mandarin(),
  'zh-cn': mandarin(),
  cn: mandarin(),
};

export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .add({
    'en-gb': { displayName: 'English (UK)' },
    'en-us': { displayName: 'English (US)' },
    'zh-hk': { displayName: '繁體中文（香港）' },
    'zh-cn': { displayName: '简体中文' },
    cn: { displayName: '中文' },
    ru: { displayName: 'Русский' },
  });