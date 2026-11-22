import type { C15tClientOptionsExtension } from "c15t/astro";
import { gtag } from "@c15t/scripts/google-tag";

export default {
  scripts: [
    gtag({
      id: "G-ZWTBEK75YY",
      category: "measurement",
    }),
  ],
} satisfies C15tClientOptionsExtension;