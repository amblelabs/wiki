"use client";

import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
} from "fumadocs-ui/components/dialog/search";
import { useDocsSearch } from "fumadocs-core/search/client";
import { create } from "@orama/orama";
import { useI18n } from "fumadocs-ui/contexts/i18n";
import { createTokenizer } from "@orama/tokenizers/mandarin";

export const localeMap = {
  // [locale]: Orama options
  ru: { language: "russian" },
  en: { language: "english" },
  fr: { language: "french" },
  uk: { language: "ukrainian" },
  es: { language: "spanish" },
  cn: {
    language: "mandarin",
    components: {
      tokenizer: createTokenizer(),
    },
    search: {
      threshold: 0,
      tolerance: 0,
    },
  },
};

function initOrama(locale?: string) {
  return create({
    schema: { _: "string" },
    // https://docs.orama.com/docs/orama-js/supported-languages
    language: locale
      ? localeMap[locale as keyof typeof localeMap]?.language || "english"
      : "english",
    components: {
      tokenizer: locale === "cn" ? createTokenizer() : undefined,
    },
  });
}

export default function DefaultSearchDialog(props: SharedProps) {
  const { locale } = useI18n(); // (optional) for i18n
  const { search, setSearch, query } = useDocsSearch({
    type: "static",
    from: "/wiki/api/search",
    initOrama,
    locale,
  });

  return (
    <SearchDialog
      search={search}
      onSearchChange={setSearch}
      isLoading={query.isLoading}
      {...props}
    >
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList items={query.data !== "empty" ? query.data : null} />
      </SearchDialogContent>
    </SearchDialog>
  );
}
