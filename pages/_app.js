import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import Footer from "../components/layout/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
