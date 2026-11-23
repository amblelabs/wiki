import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { DefaultNotFound } from 'fumadocs-ui/layouts/home/not-found';
import { Provider, type ProviderProps } from '@/components/provider';
import { baseOptions } from '@/lib/layout.shared';
import { locales } from 'astro/zod';

/**
 * The React island of pages in the home layout, the content is passed as children.
 */
export function Home({ children, ...props }: ProviderProps) {
  return (
    <Provider {...props}>
      <HomeLayout {...baseOptions('en-gb')}>{children}</HomeLayout>
    </Provider>
  );
}

export function NotFound(props: ProviderProps) {
  return (
    <Home {...props}>
      <div class="flex flex-col px-8 justify-center flex-1 text-center items-center gap-4">
        <h1 class="text-6xl font-bold text-fd-muted-foreground">404</h1>
        <h2 class="text-2xl font-semibold">Page Not Found</h2>
        <p class="text-fd-muted-foreground max-w-md">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <a href="/wiki" class="inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/80 mt-4 gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house lucide-home size-4" aria-hidden="true">
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </svg>
          Back to Home</a>
      </div>
    </Home>
  );
}
