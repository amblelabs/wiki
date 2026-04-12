import { createTokenizer } from "@orama/tokenizers/mandarin";
import { defineI18n } from "fumadocs-core/i18n";

export const localeMap = {
  // [locale]: Orama options
  ru: lang("russian"),
  en: lang("english"),
  fr: lang("french"),
  uk: lang("ukrainian"),
  es: lang("spanish"),
  cn: mandarin(),
};

export const i18n = defineI18n({
  defaultLanguage: "en",
  languages: Object.keys(localeMap),
  parser: "dot",
});

function lang(name: string): { language: string; _language: string } {
  return {
    language: name,
    _language: name,
  };
}

function mandarin(): {
  _language: string;
} & { _language: string; components: { tokenizer: any }; search: any } {
  return {
    _language: "mandarin",
    components: {
      tokenizer: createTokenizer(),
    },
    search: {
      threshold: 0,
      tolerance: 0,
    },
  };
}
