import "@/styles/globals.css";
import MainLayout from "./components/layouts/MainLayout";

export default function App({ Component, pageProps }) {
  // Check if the current page is an auth page
  const isAuthPage = Component.name === 'Login' || Component.name === 'Register';

  if (isAuthPage) {
    return <Component {...pageProps} />;
  }

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
