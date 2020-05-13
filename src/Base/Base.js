import React from 'react';
import Header from './Header/Connector';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { Footer } from "./Footer/Footer";
import "../style/reset.scss";

/**
 * Renders an header and the current process.
 */
export const Base = () => {
  return (
    <main>
      <Header />
      <ErrorBoundary />
      <Footer />
    </main>
  );
}