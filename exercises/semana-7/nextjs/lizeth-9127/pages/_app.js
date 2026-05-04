import "@/app/globals.css"
import Head from "next/head"

 const App = ({ Component, pageProps }) => {
    return <>
    <Head> 
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Dog Listing</title>
      </Head>
    <Component {...pageProps} />
    </>
  }

export default App