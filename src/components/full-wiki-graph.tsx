import { useEffect, useState } from 'react';
import { type Graph, GraphView } from '@/components/graph-view';

export function WikiGraph() {
  const [graph, setGraph] = useState<Graph | null>(null);

  useEffect(() => {
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    fetch(`${base}/api/graph.json`)
      .then((res) => res.json())
      .then((data: Graph) => setGraph(data))
      .catch((err) => console.error('Failed to load wiki graph:', err));
  }, []);

  if (!graph) {
    return (
      <div className="relative border h-[600px] rounded-xl bg-fd-background" />
    );
  }

  return (
    <div>
      <GraphView graph={graph} />
    </div>
  );
}