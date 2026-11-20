import defaultMdxComponents from 'fumadocs-ui/mdx';
import { DocsBody } from 'fumadocs-ui/layouts/docs/page';
import type { MDXComponents } from 'mdx/types';
import { Provider, type ProviderProps } from '@/components/provider';
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Step, Steps } from 'fumadocs-ui/components/steps';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import {WikiGraph} from "@/components/full-wiki-graph";
import { GreedCalc } from "@/components/greed-calc";
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { Meteors } from "@/components/ui/meteors"

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    GreedCalc,
    Meteors,
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

// for the Fumadocs integration, `wrapper` gives the content its prose styles
export default getMDXComponents({ wrapper: DocsBody });
