import React, { useState } from 'react';
import { Head } from 'vike-react/Head';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
}

export default function FAQSection({ faqs, title = 'Have Questions? We Have Answers' }: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };

  const css = {
    section: {
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '20px',
      padding: '40px 24px',
      margin: '32px auto',
      maxWidth: '800px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    title: {
      fontSize: '28px',
      fontWeight: '700',
      color: '#0f172a',
      textAlign: 'center' as const,
      marginBottom: '32px',
      letterSpacing: '-0.025em'
    },
    item: {
      borderBottom: '1px solid #f1f5f9',
      paddingBottom: '16px',
      marginBottom: '16px'
    },
    button: {
      width: '100%',
      background: 'none',
      border: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 4px',
      cursor: 'pointer',
      fontSize: '18px',
      fontWeight: '600',
      color: '#1e293b',
      textAlign: 'left' as const,
      transition: 'color 0.2s',
      outline: 'none'
    },
    answerContainer: {
      overflow: 'hidden',
      transition: 'max-height 0.25s ease-out, opacity 0.2s',
      opacity: 0,
      maxHeight: 0
    },
    answerContainerOpen: {
      opacity: 1,
      maxHeight: '300px'
    },
    answerText: {
      padding: '8px 4px 12px 4px',
      fontSize: '15px',
      lineHeight: '1.6',
      color: '#64748b'
    },
    icon: {
      fontSize: '14px',
      transition: 'transform 0.2s',
      color: '#3b82f6',
      marginLeft: '12px'
    }
  };

  return (
    <div style={css.section} itemScope itemType="https://schema.org/FAQPage">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Head>

      {title && <h2 style={css.title}>{title}</h2>}

      <div>
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          const buttonId = `sec-faq-btn-${index}`;
          const panelId = `sec-faq-panel-${index}`;

          return (
            <div 
              key={index} 
              style={css.item}
              itemScope 
              itemProp="mainEntity" 
              itemType="https://schema.org/Question"
            >
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleAccordion(index)}
                style={css.button}
                itemProp="name"
              >
                <span>{faq.question}</span>
                <span style={{ 
                  ...css.icon, 
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' 
                }}>
                  ▲
                </span>
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                style={{
                  ...css.answerContainer,
                  ...(isOpen ? css.answerContainerOpen : {})
                }}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div style={css.answerText} itemProp="text">
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
