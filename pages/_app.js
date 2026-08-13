import Head from "next/head";
import "/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title>{Component.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="Steve Barbaro" />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <meta property="og:title" content={Component.pieceName} />
        <meta property="og:description" content={Component.description} />
        <meta name="og:image" content={Component.image} />
        <meta
          name="description"
          content="new sinews ~ late empire new writing ~ digital hub of poems & fiction"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={Component.pieceName} />
        <meta name="twitter:description" content={Component.description} />
        <meta
          name="twitter:image:src"
          content={Component.image}
          key="ogtitle"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
