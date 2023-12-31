/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import App from '../../app';
import { Provider } from 'jotai/react';
import { StrictMode, useMemo } from 'react';
import { useHydrateAtoms } from 'jotai/react/utils';
import { queryClientAtom } from 'jotai-tanstack-query';
import { QueryClient, MutationCache, QueryClientProvider } from 'react-query';

export default function AppWrapper() {
  const client = useMemo(
    () =>
      new QueryClient({
        mutationCache: new MutationCache({
          onError: (error, _variables, _context, mutation) => {
            if (mutation.options.onError) return;
            console.error(error);
          },
        }),
        defaultOptions: {
          queries: {
            staleTime: Infinity,
          },
        },
      }),
    [],
  );

  const HydrateAtoms = ({ children }: { children: React.ReactNode }) => {
    useHydrateAtoms(new Map([[queryClientAtom, client]]));
    return children;
  };

  return (
    <StrictMode>
      <QueryClientProvider client={client}>
        <Provider>
          <HydrateAtoms>
            <App />
          </HydrateAtoms>
        </Provider>
      </QueryClientProvider>
    </StrictMode>
  );
}
