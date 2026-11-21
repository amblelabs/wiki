"use client";

import Giscus from "@giscus/react";
import { PageFooter } from "fumadocs-ui/layouts/docs/page";

export function DocsFooter() {
  return (
    <>
      <PageFooter />
      <Giscus
        repo="vmbbi/wiki"
        repoId="R_kgDOV1I-cg"
        category="General"
        categoryId="DIC_kwDOV1I-cs4DLpkw"
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