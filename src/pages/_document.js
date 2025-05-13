import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta tags */}
        <meta charSet="UTF-8" />
        <meta name="description" content="Uluv App - Your trusted platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/logo.png" />

        {/* Google Fonts example (optional) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
