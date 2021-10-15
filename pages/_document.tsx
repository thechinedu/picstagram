import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MainDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Share moments" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
