import "modern-css-reset";
import "@styles/globals.css";

import Layout from "@components/Layout";
import "@utils/firebase";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
