import "@/styles/globals.css";
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return <>
          <title>InstaChef</title>
          <link rel="icon" href="/icon.png" />
          <Component {...pageProps} />
          <Footer />
         </>
}
