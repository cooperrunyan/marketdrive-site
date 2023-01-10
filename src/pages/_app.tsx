import type { AppProps } from 'next/app';
import Head from 'next/head';

// @ts-ignore
import useSystemTheme from 'react-use-system-theme';

import '../style/base.scss';
import '../style/eula.scss';

const App = ({ Component, pageProps }: AppProps) => {
  const theme = (useSystemTheme && useSystemTheme('dark')) || 'light';

  return (
    <>
      <Head>
        <title>Market Drive</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href={`/${theme || 'light'}/favicon.svg`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
