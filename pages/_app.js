import Head from 'next/head'
import '/styles/globals.css'

function MyApp({ Component, pageProps, description, image, slug, article}) {

  return (
    <>
  <Head>
    <title>{Component.title}</title>
    <html lang="en-US"/>
    <meta name="description" content="new sinews ~ late empire new writing ~ digital hub of poems & fiction"/>
    <meta name="author" content="Steve Barbaro"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta charSet="utf-8" />
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content="@new_sinews"/>
    <meta name="twitter:creator" content={Component.creator}/>
    <meta name="twitter:image" content={Component.image} key="ogtitle"/>
    <meta name="twitter:description" content={Component.description}/>

      />
    <link rel="icon" href="/images/favicon.ico" />
  </Head>
  <Component {...pageProps} />
  </>
 );
}

export default MyApp
