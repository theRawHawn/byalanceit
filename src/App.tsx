/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';
import SEO from './components/SEO';
import ScarcityPopup from './components/ScarcityPopup';

// Lazy-loaded route components
const Accounting = lazy(() => import('./components/services/Accounting'));
const GST = lazy(() => import('./components/services/GST'));
const ITR = lazy(() => import('./components/services/ITR'));
const Payroll = lazy(() => import('./components/services/Payroll'));
const TDS = lazy(() => import('./components/services/TDS'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicy'));
const DataHandlingPage = lazy(() => import('./pages/DataHandling'));

// A clean, beautiful, themed loading indicator for Suspense fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[60vh] bg-slate-50">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-slate-500 font-medium text-sm animate-pulse">Loading secure resources...</p>
    </div>
  </div>
);

const LandingPage = () => (
  <>
    <SEO 
      title="Byalance: Accounting, GST, TDS & Payroll Services"
      description="Byalance provides comprehensive accounting, GST, TDS, and payroll services for businesses of all sizes. Simplify your finances and stay compliant with our expert team."
      keywords="accounting services, gst services, tds services, payroll processing, chartered accountant firm, financial services, business compliance"
      canonical="https://byalance.com/"
      ogType="website"
    />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Features />
      <About />
      <Services />
      <Pricing />
      <Contact />
    </motion.div>
  </>
);

export default function App() {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <div className="relative overflow-x-hidden">
        <Navbar />
        <FloatingWhatsApp />
        <ScarcityPopup />
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/services/accounting-bookkeeping" element={<Accounting />} />
              <Route path="/services/gst-services" element={<GST />} />
              <Route path="/services/itr-services" element={<ITR />} />
              <Route path="/services/payroll-processing" element={<Payroll />} />
              <Route path="/services/tds-services" element={<TDS />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/data-handling" element={<DataHandlingPage />} />
              {/* Fallback for other routes */}
              <Route path="*" element={<LandingPage />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
