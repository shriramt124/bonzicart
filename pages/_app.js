import "@/styles/globals.css";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Nava from "./components/Nava";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nava />
      <Component {...pageProps} />
      <Footer />
    </>

  );
}
