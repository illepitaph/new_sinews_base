import Head from 'next/head'
import '/styles/globals.css'

function MyApp({ Component, pageProps}) {

  return (
    <>
  <Head>
    <title>{Component.title}</title>
    <html lang="en-US"/>
    <meta name="description" content="new sinews ~ late empire new writing ~ digital hub of poems & fiction"/>
    <meta name="author" content="Steve Barbaro"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta charSet="utf-8" />
    <link rel="icon" href="/images/favicon.ico"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content={Component.site}/>
    <meta name="twitter:title" content={Component.pieceName}>
    <meta name="twitter:image" content={Component.image} key="ogtitle"/>
    <meta name="twitter:description" content={Component.description}/>
    <meta name="twitter:image" content={Component.image} key="ogtitle"/>
  </Head>
  <Component {...pageProps} />
  </>
 );
}

export default MyApp
