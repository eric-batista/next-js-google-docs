import '../styles/globals.css';
import "@material-tailwind/react/tailwind.css";
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        {/* Material Icons Link */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
