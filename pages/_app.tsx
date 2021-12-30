import "modern-css-reset";
import "@styles/globals.css";

import Layout from "@components/Layout";
import { AuthProvider } from "@providers/AuthProvider";
import {
  config,
  connectAuthEmulator,
  connectFirestoreEmulator,
  getAuth,
  getFirestore,
  initializeApp,
} from "@utils/firebase";

import type { AppProps } from "next/app";

initializeApp(config);

if (process.env.NODE_ENV === "development") {
  const auth = getAuth();
  const firestore = getFirestore();

  connectFirestoreEmulator(firestore, "localhost", 9098);
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
