import React from 'react';
import { Head } from 'vike-react/Head';

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
  return (
    <Head>
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon_logo.svg" />

      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Robots Tag */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Canonical Link */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {canonical && <meta property="og:url" content={canonical} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content="Byalance" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Search Engine Verification Tags */}
      <meta name="google-site-verification" content="GOOGLE_VERIFICATION_TOKEN_PLACEHOLDER" />
      <meta name="msvalidate.01" content="BING_VERIFICATION_TOKEN_PLACEHOLDER" />

      {/*
        ========================================================================
        GEO-TARGETING (GEO SEO) Directives:
        Matched with registered office at JP Nagar, Bengaluru, Karnataka - 560078.
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
        1. /public/robots.txt - Whitelists GPTBot, ClaudeBot, PerplexityBot, xai-bot.
        2. /public/llms.txt - Structured high-level summary for AI context windows.
        3. /public/llm-full.txt - Exhaustive business profile for deep research agents.
        4. JSON-LD schemas in OrganizationSchema.tsx, WebSiteSchema.tsx, FAQSchema.tsx.
        ========================================================================
      */}
    </Head>
  );
}

/*
  ========================================================================
  SEO / AEO / GEO CONFIGURATION DIRECTORY MAP:
  ========================================================================
  Want to update keywords/descriptions?
  - Homepage: /pages/index/+Page.tsx
  - Individual Service Pages:
    * Accounting & Bookkeeping: /src/components/services/Accounting.tsx
    * GST Services: /src/components/services/GST.tsx
    * TDS Accounting: /src/components/services/TDS.tsx
    * Income Tax Returns (ITR): /src/components/services/ITR.tsx
    * Payroll Processing: /src/components/services/Payroll.tsx
    * Legal policies: /src/pages/PrivacyPolicy.tsx & /src/pages/DataHandling.tsx

  Want to update AI/LLM Context indexing?
  - /public/llms.txt - context windows (summaries, pricing, direct links)
  - /public/llm-full.txt - deeper details (SLAs, FAQs for Perplexity/Gemini)
  - /public/robots.txt - enable/disable specific AI bots (GPTBot, ClaudeBot, etc.)

  =========================================
  POST-DEPLOYMENT CHECKLIST (MANUAL STEPS):
  =========================================
  1. Submit sitemap URL to Google Search Console and Bing Webmaster Tools.
  2. Request manual URL indexing on GSC for homepage and primary landing pages.
  3. Set target country to "India" in GSC.
  4. Run Google Rich Results Test for Organization, Homepage, and FAQ markup.
  5. Ping IndexNow to sync Bing/Yandex instantly.
*/
