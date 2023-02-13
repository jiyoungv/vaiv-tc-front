import React, { useRef } from 'react';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';

import '@public/font.css';
import GlobalStyle from '@styles/GlobalStyle';
import AsyncBoundary from '@utils/AsyncBoundary';
import { LoadingPage } from '@components/common';

const Home = ({ Component, pageProps }) => {
  const queryClientRef = useRef();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        retry: false,
      },
    });
  }

  return (    
    <>
      <GlobalStyle />
      <Head>
        <title>Tech Vridge</title>
      </Head>
      <RecoilRoot>
        <QueryClientProvider client={queryClientRef.current}>
          <Hydrate state={pageProps?.dehydratedState}>
            <AsyncBoundary pendingFallback={<LoadingPage />} rejectedFallback={<div>Error...</div>}>
              <Component {...pageProps} />
            </AsyncBoundary>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
          </Hydrate>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default Home;