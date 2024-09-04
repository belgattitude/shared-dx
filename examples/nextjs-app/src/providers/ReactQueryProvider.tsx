'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type ReactElement, type ReactNode, useState } from 'react';

export function ReactQueryProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactElement {
  const [queryClient] = useState((): QueryClient => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    });
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
