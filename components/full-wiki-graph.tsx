import { GraphView } from '@/components/graph-view';
import { buildGraph } from '@/lib/build-graph';

export function WikiGraph() {
  return (
    <div>
      <GraphView graph={buildGraph()} />
    </div>
  );
}