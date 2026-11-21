import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();

  if (
    import.meta.env.DEV &&
    response.headers.get('content-type')?.includes('text/html')
  ) {
    const html = await response.text();
    const fixed = html.replaceAll(
      'component-url="/@id/virtual:fumadocs/',
      'component-url="/wiki/@id/virtual:fumadocs/',
    );

    return new Response(fixed, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  }

  return response;
});