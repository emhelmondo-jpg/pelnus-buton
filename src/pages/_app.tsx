import type { AppProps } from 'next/app';
import '../index.css';
import '../i18n';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-200px)]">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
