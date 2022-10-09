import NextDocument, { Html, Main, NextScript } from 'next/document';

/* eslint-disable @next/next/next-script-for-ga */
class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
