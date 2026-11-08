import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { GreedCalc } from "@/components/greed-calc";

export function getMDXComponents(components?: MDXComponents){
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    GreedCalc,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
