import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import Head from 'next/head'
import Header from "/components/header"
import Footer from "/components/footer"

function MyApp({ Component, pageProps }) {


  return (
    <>
      <Head>
        <title>Dykann Khaov Dyson</title>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp