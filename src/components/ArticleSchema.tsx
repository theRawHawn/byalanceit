import React from 'react';
import { Head } from 'vike-react/Head';

interface ArticleSchemaProps {
  headline: string;
  authorName?: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  description?: string;
}

export default function ArticleSchema({
  headline,
  authorName = 'Byalance Experts',
  datePublished,
  dateModified,
  image = 'https://byalance.com/brandlogo%20(1).svg',
  description,
}: ArticleSchemaProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    'headline': headline,
    'image': [image],
    'datePublished': datePublished,
    'dateModified': dateModified || datePublished,
    'author': {
      '@type': 'Organization',
      'name': authorName,
      'url': 'https://byalance.com'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Byalance',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://byalance.com/brandlogo%20(1).svg'
      }
    },
    'description': description
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Head>
  );
}
