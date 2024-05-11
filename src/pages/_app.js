import { useEffect } from 'react';
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('@preline/overlay');
  }, []);

  return <>
    <Component {...pageProps} />
    <Script src="./node_modules/preline/dist/preline.js" />
  </>;
}

export default MyApp;
