import React from 'react';
import { Head } from 'vike-react/Head';

interface WebSiteSchemaProps {
  name?: string;
  url?: string;
}

export default function WebSiteSchema({
  name = 'Byalance',
  url = 'https://byalance.com',
}: WebSiteSchemaProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': name,
    'url': url,
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': `${url}/?s={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Head>
  );
}
