"use client";

import Giscus from "@giscus/react";
import { PageFooter } from "fumadocs-ui/layouts/docs/page";

export function DocsFooter() {
  return (
    <>
      <PageFooter />
      <Giscus
        repo="amblelabs/ait-wiki"
        repoId="R_kgDOML5FAA"
        category="General"
        categoryId="DIC_kwDOML5FAM4CgOE1"
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
