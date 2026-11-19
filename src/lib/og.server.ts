// src/lib/og.server.ts
import { readFile } from 'node:fs/promises';
import { ogData, ogFallback, type OgMeta } from './shared';

export type OgData = OgMeta & {
  data: Buffer;
};

async function loadOg(meta: OgMeta): Promise<OgData> {
  return {
    ...meta,
    data: await readFile(`./public/${meta.short}.${meta.iconType}`),
  };
}

export const serverOgData = {
  ait: await loadOg(ogData.ait),
  common: await loadOg(ogData.common),
};

export const serverOgFallback = await loadOg(ogFallback);