import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { appName, gitConfig } from "./shared";

import Logo from "@/public/logo.png";
import { defineI18nUI } from "fumadocs-ui/i18n";
import { i18n } from "./i18n";

export const logo = (
  <>
    <img
      alt="AmbleLabs"
      src={Logo.src}
      sizes="100px"
      className="size-8 rounded"
      aria-label="AmbleLabs"
    />
  </>
);

export const i18nUI = defineI18nUI(i18n, {
  en: {
    displayName: "English",
  },
  ru: {
    displayName: "Russian",
    search: "Поиск",
    searchNoResult: "Нет результатов",
    toc: "На этой странице",
    tocNoHeadings: "Нет заголовков",
    lastUpdate: "В последний раз обновлено",
    chooseLanguage: "Выберите язык",
    nextPage: "Следующая страница",
    previousPage: "Предыдущая страница",
    chooseTheme: "Тема",
    editOnGithub: "Изменить на GitHub",
  },
  fr: {
    displayName: "French",
  },
  uk: {
    displayName: "Ukrainian",
  },
  es: {
    displayName: "Spanish",
  },
  cn: {
    displayName: "Chinese",
    search: "搜尋文檔",
  },
});

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          {logo}
          <span className="font-medium">{appName}</span>
        </>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
