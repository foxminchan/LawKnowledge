import App from '../../app';
import { StrictMode, useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
      }),
    [],
  );

  return (
    <StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </StrictMode>
  );
}
