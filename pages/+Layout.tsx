import React from 'react';
import { LanguageProvider } from '../src/context/LanguageContext';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import FloatingWhatsApp from '../src/components/FloatingWhatsApp';
import ScarcityPopup from '../src/components/ScarcityPopup';
import ScrollToTop from '../src/components/ScrollToTop';
import '../src/index.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <div className="relative overflow-x-hidden">
        <Navbar />
        <FloatingWhatsApp />
        <ScarcityPopup />
        {children}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
