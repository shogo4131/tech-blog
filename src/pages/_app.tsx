import '../styles/globals.css';
import 'destyle.css';
import { useEffect } from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import TagManager from 'react-gtm-module';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID || '' });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
