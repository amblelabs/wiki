import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { appName, gitConfig, docsRoute} from "./shared";

import { defineI18nUI } from "fumadocs-ui/i18n";
import { i18n } from "./i18n";

const base = docsRoute.replace(/\/$/, "");

export function Logo({ src }: { src: string }) {
  return (
    <img
      alt="AmbleLabs"
      src={src}
      width={32}
      height={32}
      className="size-8 rounded"
      aria-label="AmbleLabs"
    />
  );
}

export const i18nUI = defineI18nUI(i18n, {
  "en-gb": {
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

export function baseOptions(locale: string, logoSrc=''): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          {logoSrc && <Logo src={logoSrc} />}
          <span className="font-medium">{appName}</span>
        </>
      ),
     url: `${docsRoute}/${locale}`.replace(/^\/+/, '/'),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}