import '../styles/globals.css';
import { Layout } from 'components/index';
import { ThemeProvider } from 'context/Theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
