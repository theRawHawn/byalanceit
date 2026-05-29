import React from 'react';
import { Head } from 'vike-react/Head';

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
}

export default function OrganizationSchema({
  name = 'Byalance',
  url = 'https://byalance.com',
  logo = 'https://byalance.com/brandlogo%20(1).svg',
  sameAs = [
    'https://www.facebook.com/byalance',
    'https://twitter.com/byalance',
    'https://www.linkedin.com/company/byalance',
    'https://www.instagram.com/byalance'
  ],
}: OrganizationSchemaProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': name,
    'url': url,
    'logo': logo,
    'sameAs': sameAs,
    'contactPoint': [
      {
        '@type': 'ContactPoint',
        'telephone': '+91-XXXXXXXXXX',
        'contactType': 'customer service',
        'areaServed': 'IN',
        'availableLanguage': ['en', 'hi']
      }
    ]
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Head>
  );
}
