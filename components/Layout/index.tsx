import Head from "next/head";
import { FC } from "react";

const Layout: FC = ({ children }) => (
  <div>
    <Head>
      <title>Picstagram</title>
    </Head>
    {children}
  </div>
);

export default Layout;
