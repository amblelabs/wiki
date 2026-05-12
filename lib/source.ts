import { docs } from "collections/server";
import { type InferPageType, loader } from "fumadocs-core/source";
import { docsContentRoute, docsImageRoute, docsRoute } from "./shared";
import { icons } from "lucide-react";

import AitIcon from "@/public/ait.webp";
import StargateIcon from "@/public/stargate.webp";
import K9Icon from "@/public/k9.webp";
import RegenIcon from "@/public/regen.webp";
import WAIcon from "@/public/wa.webp";
import TronIcon from "@/public/tron.webp";
import { createElement } from "react";
import { i18n } from "./i18n";

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  plugins: [],
  i18n,
  icon: (icon) => {
    if (!icon) return;

    if (icon === "ait") {
      return createElement("img", {
        src: AitIcon.src,
        alt: "AIT Icon",
        className: "rounded",
      });
    }

    if (icon === "stargate") {
      return createElement("img", {
        src: StargateIcon.src,
        alt: "Stargate Icon",
        className: "rounded",
      });
    }

    if (icon === "k9") {  // Add this block
      return createElement("img", {
        src: K9Icon.src,
        alt: "K9 Icon",
        className: "rounded",
      });
    }

    if (icon === "regen") {  // Add this block
      return createElement("img", {
        src: RegenIcon.src,
        alt: "Regen Icon",
        className: "rounded",
      });
    }

    if (icon === "wa") {
      return createElement("img", {
        src: WAIcon.src,
        alt: "Weeping Angels Icon",
        className: "rounded",
      });
    }

    if (icon === "tron") {
      return createElement("img", {
        src: TronIcon.src,
        alt: "Tron Icon",
        className: "rounded",
      });
    }


    return createElement(
      icons[icon as keyof typeof icons] || icons.BadgeQuestionMark,
    );
  },
});

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, "image.webp"];

  return {
    segments,
    url: `${docsImageRoute}/${segments.join("/")}`,
  };
}

export function getPageMarkdownUrl(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, "content.md"];

  return {
    segments,
    url: `${docsContentRoute}/${segments.join("/")}`,
  };
}
