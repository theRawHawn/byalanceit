import React from 'react';
import { motion } from 'motion/react';
import SEO from '../../src/components/SEO';
import Hero from '../../src/components/Hero';
import Features from '../../src/components/Features';
import About from '../../src/components/About';
import Services from '../../src/components/Services';
import Pricing from '../../src/components/Pricing';
import Contact from '../../src/components/Contact';
import OrganizationSchema from '../../src/components/OrganizationSchema';
import WebSiteSchema from '../../src/components/WebSiteSchema';

export default function Page() {
  return (
    <>
      <SEO
        title="Byalance: Accounting, GST, TDS & Payroll Services"
        description="Byalance provides comprehensive accounting, GST, TDS, and payroll services for businesses of all sizes. Simplify your finances and stay compliant with our expert team."
        keywords="accounting services, gst services, tds services, payroll processing, chartered accountant firm, financial services, business compliance"
        canonical="https://byalance.com/"
        ogType="website"
      />
      <OrganizationSchema />
      <WebSiteSchema />
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
}
