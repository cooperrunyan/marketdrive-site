import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../style/base.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Market Drive</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
