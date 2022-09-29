import '../styles/globals.css';
import { Layout } from 'components/index';
import { ThemeProvider } from 'context/Theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <ThemeProvider>
      <Layout>
        <Head>
          <title>Amr Guaily</title>
          <meta
            name="description"
            content="A frontend developer with 2+ years of experience using React.js"
          ></meta>
          <meta
            name="keyword"
            content="portfolio, javascript, frontend developer, react developer, amr guaily"
          ></meta>
          <meta
            property="og:url"
            content="https://personal-portfolio-sage-delta.vercel.app/"
          ></meta>
          <meta name="og:type" content="website"></meta>
          <meta name="og:email" content="amrguaily@gmail.com"></meta>
          <meta name="og:phone_number" content="+201212526626"></meta>
          <meta
            property="og:image"
            content="https://drive.google.com/file/d/1rngUZNvxbx1GaLwsIDKVIOvhD6OLMnwI/view?usp=sharing"
          ></meta>
          <meta name="og:title" content="Amr Guaily"></meta>
          <meta
            name="og:description"
            content="A frontend developer with 2+ years of experience using React.js."
          ></meta>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
