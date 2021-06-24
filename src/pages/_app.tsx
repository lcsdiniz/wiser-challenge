import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/Global';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
