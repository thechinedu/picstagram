import "modern-css-reset";
import "@styles/globals.css";

import Layout from "@components/Layout";
import { AuthProvider } from "@providers/AuthProvider";
import {
  config,
  connectAuthEmulator,
  getAuth,
  initializeApp,
} from "@utils/firebase";

import type { AppProps } from "next/app";

initializeApp(config);

if (process.env.NODE_ENV === "development") {
  const auth = getAuth();
  connectAuthEmulator(auth, "http://localhost:9099");
}

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
