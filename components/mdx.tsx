import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { WikiGraph } from "./full-wiki-graph";
import type { MDXComponents } from "mdx/types";
import { GreedCalc } from "@/components/greed-calc";
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';

export function getMDXComponents(components?: MDXComponents){
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    GreedCalc,
    WikiGraph,
    Kbd,
    KbdGroup,
    Step,
    Steps,
    Accordion,
    Accordions,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
