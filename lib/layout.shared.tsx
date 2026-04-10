import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { appName, gitConfig } from "./shared";

import Logo from "@/public/logo.png";

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

export function baseOptions(): BaseLayoutProps {
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
