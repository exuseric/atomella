import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="facebook-domain-verification" content="wp29qz9jcnkxtdqaw3jc1jhrzghvr6" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
