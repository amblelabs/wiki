import {
  type SerializedPageTree,
  useFumadocsLoader,
} from 'fumadocs-core/source/client';
import type { TOCItemType } from 'fumadocs-core/toc';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
} from 'fumadocs-ui/layouts/docs/page';
import { Provider, type ProviderProps } from '@/components/provider';
import { baseOptions } from '@/lib/layout.shared';
import { ViewOptionsPopover } from '@/components/page-actions';

export interface DocsProps extends ProviderProps {
  tree: SerializedPageTree;
  title: string;
  description?: string;
  full?: boolean;
  toc: TOCItemType[];
  markdownUrl: string;
  githubUrl: string;
}

export function Docs({
  lang,
  tree,
  title,
  description,
  full,
  toc,
  markdownUrl,
  githubUrl,
  children,
  ...props
}: DocsProps) {
  const data = useFumadocsLoader({ tree });

  return (
    <Provider lang={lang} {...props}>
      <DocsLayout {...baseOptions(lang)} tree={data.tree}>
        <DocsPage
          toc={toc}
          full={full}
        >
          <DocsTitle>{title}</DocsTitle>
          <DocsDescription className="mb-0">{description}</DocsDescription>
          <div className="flex flex-row gap-2 items-center border-b pb-6">
            <MarkdownCopyButton markdownUrl={markdownUrl} />
            <ViewOptionsPopover
              markdownUrl={markdownUrl}
              githubUrl={githubUrl}
            />
          </div>
          <DocsBody>{children}</DocsBody>
        </DocsPage>
      </DocsLayout>
    </Provider>
  );
}