import { source } from '@/lib/source';
import type { Graph } from '../components/graph-view';

export function buildGraph(): Graph {
  const pages = source.getPages();
  const graph: Graph = { links: [], nodes: [] };

  for (const page of pages) {
    graph.nodes.push({
      id: page.url,
      url: page.url,
      text: page.data.title,
      description: page.data.description,
    });

    const refs =
      'extractedReferences' in page.data &&
      Array.isArray(page.data.extractedReferences)
        ? (page.data.extractedReferences as { href: string }[])
        : [];

    for (const ref of refs) {
      const refPage = source.getPageByHref(ref.href);
      if (!refPage) continue;

      graph.links.push({
        source: page.url,
        target: refPage.page.url,
      });
    }
  }

  return graph;
}