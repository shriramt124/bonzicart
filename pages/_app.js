import "@/styles/globals.css";
import MainLayout from "./components/layouts/MainLayout";
import { AuthProvider } from "./components/auth/AuthContext";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  // Check if the current page is an auth page
  const isAuthPage = Component.name === 'Login' || Component.name === 'Register';

  if (isAuthPage) {
    return (
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    );
  }

  return (
    <SessionProvider session={session}>
      <AuthProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </AuthProvider>
    </SessionProvider>
  );
}
