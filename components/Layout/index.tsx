import styles from "./index.module.css";

import Head from "next/head";
import { FC } from "react";

const Layout: FC = ({ children }) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Picstagram</title>
    </Head>
    {children}
  </div>
);

export default Layout;
