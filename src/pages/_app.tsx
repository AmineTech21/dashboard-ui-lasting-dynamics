import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../assets/styles/globals.css';
import ErrorBoundary from '../components/Errorboundary'
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        // Wrap the Component prop with ErrorBoundary component
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      )
}

export default MyApp;


