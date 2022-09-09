import Head from 'next/head';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>atomella | Bold and Quirky</title>
        <meta
          name="description"
          content="The place for beautifully designed garments that are bold with a smidge quirky."
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
