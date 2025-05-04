import "@/styles/globals.css";

import Footer from "./components/Footer";
import Nava from "./components/Nava";
import MobileNav from "./components/MobileNav";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Desktop navigation - hidden on mobile */}
      <div className="hidden lg:block sticky top-0 z-50">
        <Nava />
      </div>

      {/* Mobile navigation - hidden on desktop */}
      <div className="lg:hidden">
        <MobileNav />
      </div>

      <Component {...pageProps} />
      <Footer />
    </>
  );
}
