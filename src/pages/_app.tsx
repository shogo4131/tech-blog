import '../styles/globals.css';
import 'destyle.css';
import { useEffect } from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';

import { pageview } from '@/lib/gtm';

const App = ({ Component, pageProps }: AppProps) => {
  const { events } = useRouter();

  useEffect(() => {
    events.on('routeChangeComplete', pageview);
    return () => events.off('routeChangeComplete', pageview);
  }, [events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTM_ID || ''}');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
