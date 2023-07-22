import type { QueryClientConfig } from '@tanstack/query-core';

const isServer = typeof window === 'undefined';
const isProd = process.env.NODE_ENV === 'production';

export const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      // Warning when using prefetchQuery in getServerSideProps or getStaticProps
      // the initial data looks stale on the client and causes a refresh. As it's
      // not exactly what is intended, you can change either this globally in this config
      // or set staleTime and refetchOnWindowFocus to false in each getSSP.
      // refetchOnWindowFocus: !isProd,
      // staleTime: 5 * 60_000,
      retry: isServer ? false : 2,
      retryDelay: isProd ? 1_000 : 250,
    },
  },
};
