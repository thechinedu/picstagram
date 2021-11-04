import styles from "./index.module.css";

import { AuthProvider } from "@providers/AuthProvider";
import Head from "next/head";
import { FC } from "react";

const Layout: FC = ({ children }) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Picstagram</title>
    </Head>
    <AuthProvider>{children}</AuthProvider>
  </div>
);

export default Layout;
