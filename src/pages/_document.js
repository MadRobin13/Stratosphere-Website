import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to Google Fonts for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* Load Google Fonts */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@300;400;500;600&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Favicon with multiple formats for maximum compatibility */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Meta tags */}
        <meta name="description" content="Stratosphere - Interactive solar system interface for exploring product features" />
        <meta name="keywords" content="stratosphere, solar system, interactive, space, planets, interface" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}