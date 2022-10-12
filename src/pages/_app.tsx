import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/styles/globals.css';
import ErrorBoundary from '../components/Errorboundary';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { NavbarContext } from '../contexts/NavbarContext';

function MyApp({ Component, pageProps }: AppProps) {
  const [open, setOpen] = useState(false);
  
    return (
        <NavbarContext.Provider value={{ open, setOpen }}>
            <ErrorBoundary>
                <Component {...pageProps} />
            </ErrorBoundary>
        </NavbarContext.Provider>
    );
}

export default MyApp;
