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
    toc: "目錄",
    search: "搜尋文檔",
    lastUpdate: "最後更新於",
    searchNoResult: "沒有結果",
    previousPage: "上一頁",
    nextPage: "下一頁",
    chooseLanguage: "選擇語言",
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
      url: `/${locale}`,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
