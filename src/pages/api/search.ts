import { createFromSource } from 'fumadocs-core/search/server';
import { createTokenizer } from '@orama/tokenizers/mandarin';
import { source } from '@/lib/source';

export const prerender = true;

export const { staticGET: GET } = createFromSource(source, {
  localeMap: {
    'en-gb': { language: 'english' },
    ru: { language: 'russian' },
    cn: {
      components: {
        tokenizer: createTokenizer(),
      },
      search: {
        threshold: 0,
        tolerance: 0,
      },
    },
  },
});