import React, { useState } from 'react';
import { Head } from 'vike-react/Head';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  title?: string;
}

export default function FAQSchema({ faqs, title = 'Frequently Asked Questions' }: FAQSchemaProps) {
  const [openIndexes, setOpenIndexes] = useState<Record<number, boolean>>({});

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // 1. JSON-LD Schema Structure
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((item) => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer,
      },
    })),
  };

  // Plain CSS-in-JS styling block for scoped responsive styling
  const styles = {
    container: {
      padding: '2.5rem 1.5rem',
      backgroundColor: '#F8FAFC',
      borderRadius: '1.5rem',
      border: '1px solid #E2E8F0',
      maxWidth: '56rem',
      margin: '2rem auto',
      fontFamily: 'Inter, system-ui, sans-serif',
    },
    title: {
      fontSize: '1.875rem',
      fontWeight: '700',
      color: '#0F172A',
      marginBottom: '1.5rem',
      textAlign: 'center' as const,
    },
    item: {
      borderBottom: '1px solid #E2E8F0',
      padding: '1rem 0',
    },
    button: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      textAlign: 'left' as const,
      background: 'none',
      border: 'none',
      padding: '0.75rem 0',
      cursor: 'pointer',
      fontSize: '1.125rem',
      fontWeight: '600',
      color: '#0F172A',
      outline: 'none',
      transition: 'color 0.2s',
    },
    answerContainer: {
      overflow: 'hidden',
      transition: 'max-height 0.3s ease-out, opacity 0.2s',
    },
    answerText: {
      fontSize: '0.975rem',
      lineHeight: '1.625',
      color: '#475569',
      padding: '0.5rem 0 1rem 0',
    }
  };

  return (
    <div style={styles.container} itemScope itemType="https://schema.org/FAQPage">
      {/* Schema Injection */}
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Head>

      {title && <h2 style={styles.title}>{title}</h2>}

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {faqs.map((faq, index) => {
          const isOpen = !!openIndexes[index];
          const controlId = `faq-answer-${index}`;
          const buttonId = `faq-button-${index}`;

          return (
            <div
              key={index}
              style={styles.item}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <h3 style={{ margin: 0 }}>
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={controlId}
                  onClick={() => toggleIndex(index)}
                  style={styles.button}
                  itemProp="name"
                >
                  <span>{faq.question}</span>
                  <span style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                    fontSize: '1.25rem',
                    fontWeight: '300',
                    color: '#64748B'
                  }}>
                    ▼
                  </span>
                </button>
              </h3>
              <div
                id={controlId}
                role="region"
                aria-labelledby={buttonId}
                style={{
                  ...styles.answerContainer,
                  maxHeight: isOpen ? '500px' : '0px',
                  opacity: isOpen ? 1 : 0,
                  pointerEvents: isOpen ? 'auto' : 'none',
                }}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div style={styles.answerText} itemProp="text">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
