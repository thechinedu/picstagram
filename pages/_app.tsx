import "modern-css-reset";
import "@styles/globals.css";

import Layout from "@components/Layout";
import { AuthProvider } from "@providers/AuthProvider";
import { config, initializeApp } from "@utils/firebase";

import type { AppProps } from "next/app";

initializeApp(config);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Layout>
  );
}

export default MyApp;
