import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image';
  noindex?: boolean;
}

export default function SEO({
  title,
  description,
  keywords = 'accounting services, gst services, tds services, payroll processing, tax filing, CA firm India',
  canonical,
  ogImage = 'https://byalance.com/brandlogo%20(1).svg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
}: SEOProps) {
  const currentUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');

  return (
    <Helmet>
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon_logo.svg" />

      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Robots Tag for indexing/noindexing */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Canonical Link */}
      {currentUrl && <link rel="canonical" href={currentUrl} />}

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {currentUrl && <meta property="og:url" content={currentUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content="Byalance" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Search Engine Verification Tags (Placeholders) */}
      <meta name="google-site-verification" content="GOOGLE_VERIFICATION_TOKEN_PLACEHOLDER" />
      <meta name="msvalidate.01" content="BING_VERIFICATION_TOKEN_PLACEHOLDER" />

      {/* 
        ========================================================================
        GEO-TARGETING (GEO SEO) Directives:
        Helps search engines understand physical location relevance (local search query booster).
        Matched with the registered office at JP Nagar, Bengaluru, Karnataka - 560078.
        ========================================================================
      */}
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bengaluru, JP Nagar" />
      <meta name="geo.position" content="12.9063;77.5855" />
      <meta name="ICBM" content="12.9063, 77.5855" />
      <meta name="author" content="Byalance" />

      {/*
        ========================================================================
        AEO (Answer Engine Optimization) & GEO (Generative Engine Optimization):
        Byalance handles AI crawler discovery through:
        1. /public/robots.txt - Whitelists GPTBot, ClaudeBot, PerplexityBot, xai-bot, GoogleOther.
        2. /public/llms.txt - Structured high-level summary for prompt context (this file!).
        3. /public/llm-full.txt - Exhaustive business profile index with complete pricing, FAQs, & SLAs.
        4. JSON-LD schema markup configured in:
           - /src/components/OrganizationSchema.tsx (Business identity, address, logo, WhatsApp)
           - /src/components/WebSiteSchema.tsx (Site entry links)
           - /src/components/FAQSchema.tsx (Pre-structured question/answers for AI crawlers)
        ========================================================================
      */}
    </Helmet>
  );
}

/*
  ========================================================================
  SEO / AEO / GEO CONFIGURATION DIRECTORY MAP:
  ========================================================================
  Want to update keywords/descriptions?
  - Homepage & Main Landing fallback: Set props inside /src/App.tsx under `<SEO .../>`
  - Homepage page config: Set props inside /pages/index/+Page.tsx under `<SEO .../>`
  - Individual Service Pages:
    * Accounting & Bookkeeping: /src/components/services/Accounting.tsx
    * GST Services: /src/components/services/GST.tsx
    * TDS Accounting: /src/components/services/TDS.tsx
    * Income Tax Returns (ITR): /src/components/services/ITR.tsx
    * Payroll Processing: /src/components/services/Payroll.tsx
    * Legal policies: /src/pages/PrivacyPolicy.tsx & /src/pages/DataHandling.tsx

  Want to update AI/LLM Context indexing?
  - Modify `/public/llms.txt` for context windows (summaries, pricing structures, direct links).
  - Modify `/public/llm-full.txt` for deeper details (exhaustive service rules, SLAs, extensive FAQs consumed by Perplexity, Gemini, etc.).
  - Modify `/public/robots.txt` to enable/disable bots of specific generative platforms (GPTBot, ClaudeBot, etc.).
*/

/*
  =========================================
  POST-DEPLOYMENT CHECKLIST (MANUAL STEPS):
  =========================================
  1. Submit sitemap URL: https://[YOUR_DOMAIN]/sitemap.xml to Google Search Console (GSC) and Bing Webmaster Tools.
  2. Request manual URL indexing on GSC for the root homepage and primary landing pages to trigger rapid crawler discovery.
  3. Set target country targeting explicitly to "India" in GSC (via legacy International Targeting if active, or via search market optimization).
  4. Perform the Google Rich Results Test (https://search.google.com/test/rich-results) for both the Organization, Homepage, and FAQ markup on the live URL.
  5. Run an IndexNow manual ping (or click the post-build automated endpoints) to synchronize state instantly on Bing / Yandex.
*/
