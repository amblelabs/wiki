import { Tokenizer } from "@orama/orama";
import { createTokenizer as mandarinTokenizer } from "@orama/tokenizers/mandarin";
import { defineI18n } from "fumadocs-core/i18n";

export const localeMap = {
  // [locale]: Orama options
  en: lang("english"),
  ru: lang("russian"),
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

function mandarin(): { _language?: string } & {
  components: { tokenizer: Tokenizer };
  search: {
    threshold: number;
    tolerance: number;
  };
} {
  return {
    _language: undefined,
    components: {
      tokenizer: mandarinTokenizer(),
    },
    search: {
      threshold: 0,
      tolerance: 0,
    },
  };
}
