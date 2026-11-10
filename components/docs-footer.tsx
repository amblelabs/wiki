"use client";

import Giscus from "@giscus/react";
import { PageFooter } from "fumadocs-ui/layouts/docs/page";

export function DocsFooter() {
  return (
    <>
      <PageFooter />
      <Giscus
        repo="amblelabs/wiki"
        repoId="R_kgDOR_XZug"
        category="General"
        categoryId="DIC_kwDOR_XZus4C6ja_"
        mapping="pathname"
        strict="0"
        reactions-enabled="1"
        emit-metadata="0"
        input-position="top"
        theme="dark"
        lang="en"
        loading="lazy"
      />
    </>
  );
}
