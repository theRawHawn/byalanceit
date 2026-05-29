# Byalance — SEO, AEO, & GEO Implementation Guide

This guide details how **Search Engine Optimization (SEO)**, **Answer Engine Optimization (AEO)**, and **Generative/Geographical Engine Optimization (GEO)** are configured for Byalance. 

Byalance is fully optimized for standard search engines (Google/Bing) as well as the new wave of AI Search Assistants and Large Language Model crawlers (Gemini Search, ChatGPT Web Search, Claude, Perplexity).

---

## Direct File Map Directory

| Optimizations | Resource Path | Purpose / Description |
| :--- | :--- | :--- |
| **AEO (AI Context)** | `/public/llms.txt` | Core business overview, brand context, short summaries of plans & SLAs for AI context windows. |
| **AEO (Deep Research)** | `/public/llm-full.txt` | In-depth complete knowledge base containing exhaustive service scopes, legal compliance details, extensive SLAs, and pricing models for Deep Research agents. |
| **AEO (Bot Rules)** | `/public/robots.txt` | Instructs search bots and explicit AI scrapers (e.g., `GPTBot`, `ClaudeBot`, `PerplexityBot`, `xai-bot`) that they are *fully allowed* to crawl the site. |
| **SEO Meta Tags** | `/src/components/SEO.tsx` | Standard parent component injecting HTML heads (`title`, `description`, `keywords`, `robots`, `OpenGraph`, `TwitterCards`). |
| **GEO Local Targeting** | `/src/components/SEO.tsx` | Geographic location triggers (`geo.region`, `geo.position`, `ICBM`) that boost local searches. |
| **SEO Pages** | `/pages/index/+Page.tsx` | Landing Page SEO instantiation. `<SEO title="..." description="..." keywords="..." />` |
| **SEO Services** | `/src/components/services/*` | Sectional / service-specific `<SEO />` settings (e.g. `GST.tsx`, `TDS.tsx`, `ITR.tsx`, `Payroll.tsx`, `Accounting.tsx`). |
| **Structured Schema** | `/src/components/*Schema.tsx` | JSON-LD metadata providing pristine, machine-readable structured semantic data for Google Rich Results and AI reasoning. |

---

## 1. Standard SEO: How to update Keywords & Descriptions

Traditional SEO relies on accurate page descriptors, keywords, and headers to optimize indexing on Google and Bing.

### To Change Core Metadata:
Navigate to the desired page component and locate the `<SEO />` tag.

**Example: Homepage / Landing Page (`/pages/index/+Page.tsx`):**
```tsx
<SEO 
  title="Byalance: Accounting, GST, TDS & Payroll Services"
  description="Byalance provides comprehensive accounting, GST, TDS, and payroll services for businesses of all sizes. Simplify your finances and stay compliant with our expert team."
  keywords="accounting services, gst services, tds services, payroll processing, chartered accountant firm, financial services, business compliance"
  canonical="https://byalance.com/"
  ogType="website"
/>
```

### Guidance for Updates:
1. **Title:** Max **60 characters**. Place high-traffic keywords at the front (e.g. `GST Filing Services`, `Accounting & Bookkeeping`) separated by pipes or colons, followed by the brand.
2. **Description:** Max **155–160 characters**. Tell the reader exactly what value they will get and include a subtle call to action (e.g., *"...starting at ₹1,999/month. Talk to us on WhatsApp!"*).
3. **Keywords:** Keep them comma-separated and specific to Indian business finance context (e.g., *ROC annual filing, GSTR-1, Form 16, PF ESI registration, payroll processing*).

---

## 2. AEO: Answer Engine Optimization (For Gemini, ChatGPT & Perplexity)

AEO makes sure that when a user asks an AI tool like Gemini or ChatGPT: *"What are the pricing plans for virtual accounting at Byalance?"* or *"Does Byalance help solo CAs with back-office work?"*, the AI has clear, fully accurate text documentation to formulate its response and cite the brand.

### A. The `/public/llms.txt` and `/public/llm-full.txt` standard
Large Language Model systems and AI search engines actively scour the standard location `https://[your_domain]/llms.txt` for contextual knowledge.

* **Where to modify:** Edit `/public/llms.txt` and `/public/llm-full.txt` directly.
* **Format:** Write in clean, structured Markdown. Use bullet points and clear, definitive, statement-driven paragraphs.
* **When to update:**
  * If pricing tiers are modified.
  * If the virtual firm adds new service offerings (e.g., Trademark filing, Private Ltd incorporation).
  * If service delivery timelines (SLAs) or WhatsApp phone numbers change.

### B. Robots crawling permissions
AI bots require crawl permission in the `robots.txt` file to extract details from the site.
* **Where to modify:** `/public/robots.txt`
* **Directives included:**
  ```text
  User-agent: GPTBot
  Allow: /

  User-agent: ClaudeBot
  Allow: /

  User-agent: PerplexityBot
  Allow: /
  ```
* Ensure you preserve the references at the bottom of `/public/robots.txt`:
  ```text
  Sitemap: https://byalance.com/sitemap.xml
  LLMs: https://byalance.com/llms.txt
  LLMs-Full: https://byalance.com/llms-full.txt
  ```

### C. JSON-LD Schemas (The Ultimate AEO Schema)
Semantic structures give AI search engines precise nodes of context. Byalance utilizes custom nested Schemas:
* **Organization Schema (`/src/components/OrganizationSchema.tsx`):** Tells LLMs that Byalance is a localized financial services provider with a JP Nagar office, specific WhatsApp support numbers, and official social assets.
* **FAQ Schema (`/src/components/FAQSchema.tsx`):** Contains pre-formatted, easy-to-parse question-and-answer trees. AI engines prefer pulling exact Q&A snippets for fast search results.
* **Website / Breadcrumbs Schemas:** Maps structure links.

---

## 3. GEO: Generative & Geographical Engine Optimization

GEO optimizes visibility for location-based generative searches (e.g., *"Find virtual GST accountants near JP Nagar Bengaluru"* or *"Top virtual accounting firms in Karnataka"*).

### Meta Geographical Tags in `/src/components/SEO.tsx`:
Directly injected into the document head to link the digital profile with geographic coordinates:

```tsx
<meta name="geo.region" content="IN-KA" />
<meta name="geo.placename" content="Bengaluru, JP Nagar" />
<meta name="geo.position" content="12.9063;77.5855" />
<meta name="ICBM" content="12.9063, 77.5855" />
```

### Coordinate details:
* **geo.region:** Regional code representing the state (e.g., `IN-KA` for Karnataka, `IN-MH` for Maharashtra).
* **geo.placename:** Local city name and landmark neighborhood.
* **geo.position & ICBM:** Precise latitude and longitude decimal numbers parsed by mapping APIs and regional crawlers. (Currently set around JP Nagar, Bengaluru coordinates: `12.9063` N, `77.5855` E).

---

## 🚀 Easy Maintenance Checklist for Future Developers

1. **Changing the Office Location?**
   * [ ] Update the registered physical address in `/public/llms.txt` and `/public/llm-full.txt`.
   * [ ] Retrieve new latitude & longitude coordinates.
   * [ ] Update `geo.region`, `geo.position`, and `ICBM` variables inside `/src/components/SEO.tsx`.
   * [ ] Update localized fields inside the JSON-LD schemas in `/src/components/OrganizationSchema.tsx`.

2. **Releasing a New Service?**
   * [ ] Create the service description file in `/src/components/services/YourNewService.tsx`.
   * [ ] Include `<SEO title="..." description="..." keywords="..." />` tailored to that specific service.
   * [ ] Add a service section and pricing detail block inside `/public/llms.txt` & `/public/llm-full.txt`.
   * [ ] Link the new service in the footer and main navigation so sitemap generators and bots can reach it natively.
