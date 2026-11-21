import type { APIRoute } from 'astro';
import { buildGraph } from '@/lib/build-graph';

export const prerender = true;

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(buildGraph()), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};