import defaultMdxComponents from 'fumadocs-ui/mdx';
import { DocsBody } from 'fumadocs-ui/layouts/docs/page';
import type { MDXComponents } from 'mdx/types';
import { usePathname } from 'fumadocs-core/framework';
import type { ComponentProps } from 'react';
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Step, Steps } from 'fumadocs-ui/components/steps';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import {WikiGraph} from "@/components/full-wiki-graph";
import { GreedCalc } from "@/components/greed-calc";
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { Meteors } from "@/components/ui/meteors"

interface PageLinkContext {
  url: string;
  path: string;
}

export function getMDXComponents(components?: MDXComponents, page?: PageLinkContext) {
  const isIndex = /(^|\/)index\.mdx?$/i.test(page?.path ?? '');
  
    function WikiLink({ href = '', ...props }: ComponentProps<'a'>) {
      const isRelative =
        href &&
        !href.startsWith('/') &&
        !href.startsWith('#') &&
        !/^[a-z][a-z\d+.-]*:/i.test(href);
  
      let resolvedHref = href;
      if (isRelative && page?.url) {
        const cleanHref = href.replace(/\.mdx?(?=[?#]|$)/i, '');
        const cleanPath = page.url.replace(/\/$/, '') || '/';
        const base = isIndex && cleanPath !== '/' ? `${cleanPath}/` : cleanPath;
        const url = new URL(cleanHref, `http://n${base}`);
        resolvedHref = `${url.pathname}${url.search}${url.hash}`;
      }
  
      return <defaultMdxComponents.a href={resolvedHref} {...props} />;
    }
  
  return {
    ...defaultMdxComponents,
    a: WikiLink,
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
