import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

const Document = () => (
  <Html lang="pt-BR">
    <Head>
      <link rel="icon" type="image/png" href="/favicon.ico" />
    </Head>
    <body>
      <Main />

      <NextScript />
    </body>
  </Html>
);

export default Document;
