import {
  type SerializedPageTree,
  useFumadocsLoader,
} from 'fumadocs-core/source/client';
import type { TOCItemType } from 'fumadocs-core/toc';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import {
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
} from 'fumadocs-ui/layouts/docs/page';
import { Provider, type ProviderProps } from '@/components/provider';
import { baseOptions } from '@/lib/layout.shared';
import { ViewOptionsPopover } from '@/components/page-actions';
import { i18n } from '@/lib/i18n';
import { DocsFooter } from './docs-footer';

export interface DocsProps extends ProviderProps {
  tree: SerializedPageTree;
  title: string;
  description?: string;
  logoSrc: string;
  full?: boolean;
  toc: TOCItemType[];
  markdownUrl: string;
  githubUrl: string;
}

export function Docs({
  lang,
  pathname,
  tree,
  title,
  description,
  logoSrc,
  full,
  toc,
  markdownUrl,
  githubUrl,
  children,
  ...props
}: DocsProps) {
  const data = useFumadocsLoader({ tree });
  const activeLang = lang ?? props.params.lang ?? i18n.defaultLanguage;

  return (
    <Provider lang={activeLang} pathname={pathname} {...props}>
      <DocsLayout {...baseOptions(activeLang, logoSrc)} tree={data.tree}>
        <DocsPage
          toc={toc}
          full={full}
          breadcrumb={{ enabled: true }}
          footer={{ enabled: true }}
          slots={{
                  footer: DocsFooter,
                }}
        >
          <DocsTitle>{title}</DocsTitle>
          {description && (
            <DocsDescription className="mb-0">{description}</DocsDescription>
          )}
          <div className="flex flex-row gap-2 items-center border-b pb-6">
            <MarkdownCopyButton markdownUrl={markdownUrl} />
            <ViewOptionsPopover
              markdownUrl={markdownUrl}
              githubUrl={githubUrl}
            />
          </div>
          {children}
        </DocsPage>
      </DocsLayout>
    </Provider>
  );
}