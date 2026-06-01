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
import FAQSchema from '../../src/components/FAQSchema';
import { homeFAQs } from '../../src/data/faqData';

export default function Page() {
  return (
    <>
      <SEO
        title="Byalance - Accounting, GST, TDS & Payroll Services India"
        description="Byalance is India's affordable remote accounting firm for startups and MSMEs. Expert GST filing, TDS compliance, ITR filing, payroll processing & bookkeeping. Starting ₹1,999/month. Based in Bengaluru."
        keywords="virtual accounting firm India, GST filing services, TDS return filing services, ITR filing India, payroll processing, bookkeeping services Bengaluru, accounting for startups India, MSME accounting services, affordable CA services India, GST TDS payroll Bengaluru"
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
        <FAQSchema faqs={homeFAQs} title="Frequently Asked Questions About Byalance" />
      </motion.div>
    </>
  );
}
