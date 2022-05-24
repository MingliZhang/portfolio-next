import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
                        rel="stylesheet"
                    />
                    <meta name="keywords" content="Titile" />
                    <meta
                        property="og:image"
                        content="https://www.minglizhang.com/_next/image?url=%2Fimages%2Fnew-portfolio.jpg&w=3840&q=75"
                    />
                    <meta
                        property="og:description"
                        content="My porfolio page."
                    />
                </Head>
                <body className="bg-gradient-to-r from-green to-blue-400 dark:from-dark dark:to-dark-700 dark:text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
