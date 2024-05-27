import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: 1,
        },
    },
});


ReactDOM.createRoot(document.getElementById('reactMountPoint')!).render(
    <QueryClientProvider client={queryClient}><App /></QueryClientProvider>
);

