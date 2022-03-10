import Head from 'next/head'
import '/styles/globals.css'

function MyApp({ Component, pageProps}) {

  return (
    <>
    <html lang="en-US">
  <Head>
    <title>{Component.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta charSet="utf-8"/>
    <meta name="author" content="Steve Barbaro"/>
    <link rel="icon" href="/images/favicon.ico" type="image/x-icon"/>
    <meta name="description" content="new sinews ~ late empire new writing ~ digital hub of poems & fiction"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content={Component.pieceName}/>
    <meta name="twitter:description" content={Component.description}/>
    <meta name="twitter:image" content="https://www.newnewsinews.com/public/images/AkantBackground.jpg" key="ogtitle"/>
  </Head>
  <Component {...pageProps} />
  </html>
  </>
 );
}

export default MyApp
