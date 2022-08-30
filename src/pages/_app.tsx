import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../style/base.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Get Statements</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
