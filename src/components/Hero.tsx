import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const cyclingTexts = [
  { text: "Your Personal Accountant",       lang: "English"  },
  { text: "ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಲೆಕ್ಕಪತ್ರಗಾರ",  lang: "Kannada"  },
  { text: "आपके व्यक्तिगत लेखाकार",         lang: "Hindi"    },
  { text: "మీ వ్యక్తిగత అకౌంటెంట్",         lang: "Telugu"   },
  { text: "तुमचे वैयक्तिक लेखापाल",          lang: "Marathi"  },
  { text: "உங்கள் தனிப்பட்ட கணக்காளர்",     lang: "Tamil"    },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cyclingTexts.length);
    }, 1600);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const currentItem = cyclingTexts[currentIndex];

  return (
    <section className="bg-white pt-24 md:pt-32 md:pb-12 relative overflow-hidden">
      {/* Hand-Drawn / Miniature Financial Graphics Backdrop (Imitating user's uploaded doodle doodle sheet) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Left Side Floaters */}
        {/* 1. Calculator + Coins Stack */}
        <div className="absolute left-[2%] sm:left-[5%] top-[22%] sm:top-[25%] block animate-float-1 opacity-20 hover:opacity-100 transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Calculations">
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-16 md:h-16 text-slate-700 fill-none">
            <path d="M25,20 C25,18 28,15 30,15 L70,15 C72,15 75,18 75,20 L75,80 C75,82 72,85 70,85 L30,85 C28,85 25,82 25,80 Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32,25 L68,25 C70,25 70,25 70,27 L70,38 C70,40 70,40 68,40 L32,40 C30,40 30,40 30,38 L30,27 C30,25 30,25 32,25" stroke="currentColor" strokeWidth="2" />
            <circle cx="38" cy="48" r="3" fill="currentColor" />
            <circle cx="50" cy="48" r="3" fill="currentColor" />
            <circle cx="62" cy="48" r="3" fill="currentColor" />
            <circle cx="38" cy="60" r="3" fill="currentColor" />
            <circle cx="50" cy="60" r="3" fill="currentColor" />
            <circle cx="62" cy="60" r="3" fill="currentColor" />
            <rect x="34" y="70" width="18" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
            <circle cx="62" cy="73" r="3" fill="currentColor" />
            {/* Associated subtle hand-drawn coin loops */}
            <ellipse cx="78" cy="85" rx="12" ry="5" stroke="currentColor" strokeWidth="2" fill="white" />
            <ellipse cx="78" cy="80" rx="12" ry="5" stroke="currentColor" strokeWidth="2" fill="white" />
          </svg>
        </div>

        {/* 2. Hand-drawn GST list Clipboard */}
        <div className="absolute left-[3%] sm:left-[8%] bottom-[12%] sm:bottom-[20%] block animate-float-2 opacity-20 hover:opacity-100 transition-opacity duration-300 pointer-events-auto cursor-pointer" title="GST Compliance">
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-16 md:h-16 text-slate-700 fill-none">
            <path d="M30,15 L70,18 L65,85 L25,82 Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <text x="36" y="38" fontFamily="sans-serif" fontWeight="900" fontSize="14" fill="currentColor" transform="rotate(4 36 38)">GST</text>
            <circle cx="38" cy="50" r="4" stroke="currentColor" strokeWidth="2" />
            <path d="M48,50 L60,51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="37" cy="62" r="4" stroke="currentColor" strokeWidth="2" />
            <path d="M47,62 L59,63" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M58,25 C60,23 64,23 66,25 C68,27 68,31 66,33 L58,39 L50,33 C48,31 48,27 50,25 C52,23 56,23 58,25 Z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        {/* 3. Spiral ledger book with a pencil */}
        <div className="absolute left-[12%] sm:left-[20%] top-[72%] sm:top-[70%] block animate-float-3 opacity-15 hover:opacity-100 transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Ledgers & Books">
          <svg viewBox="0 0 100 100" className="w-9 h-9 md:w-14 md:h-14 text-slate-700 fill-none">
            <path d="M22,25 C20,25 20,28 22,28 M22,35 C20,35 20,38 22,38 M22,45 C20,45 20,48 22,48 M22,55 C20,55 20,58 22,58 M22,65 C20,65 20,68 22,68 M22,75 C20,75 20,78 22,78" stroke="currentColor" strokeWidth="2.5" />
            <rect x="25" y="20" width="45" height="63" rx="3" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <path d="M78,25 L83,30 L65,75 L58,75 L58,68 Z" stroke="currentColor" strokeWidth="2" fill="white" />
            <line x1="33" y1="35" x2="60" y2="35" stroke="currentColor" strokeWidth="1.5" />
            <line x1="33" y1="48" x2="60" y2="48" stroke="currentColor" strokeWidth="1.5" />
            <line x1="33" y1="61" x2="60" y2="61" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Right Side Floaters */}
        {/* 4. Rupee Symbol with magical stars */}
        <div className="absolute right-[2%] sm:right-[6%] top-[18%] sm:top-[20%] block animate-float-2 opacity-20 hover:opacity-100 transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Tax & Wealth">
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-16 md:h-16 text-slate-700 fill-none">
            <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <text x="35" y="65" fontFamily="sans-serif" fontWeight="bold" fontSize="42" fill="currentColor" transform="rotate(-6 50 50)">₹</text>
            <path d="M15,25 L21,25 M18,22 L18,28" stroke="currentColor" strokeWidth="1.5" />
            <path d="M75,70 L81,70 M78,67 L78,73" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="78" cy="25" r="3" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </div>

        {/* 5. Hand-drawn TDS checklist layout */}
        <div className="absolute right-[3%] sm:right-[8%] bottom-[13%] sm:bottom-[25%] block animate-float-3 opacity-20 hover:opacity-100 transition-opacity duration-300 pointer-events-auto cursor-pointer" title="TDS Compliance">
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-16 md:h-16 text-slate-700 fill-none">
            <path d="M25,18 L65,15 C68,15 70,17 71,20 L75,80 C76,83 73,85 70,85 L30,85 C27,85 25,83 25,80 Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="white" />
            <text x="35" y="38" fontFamily="sans-serif" fontWeight="900" fontSize="14" fill="currentColor" transform="rotate(-4 35 38)">TDS</text>
            <path d="M30,50 L34,54 L44,44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M50,49 L68,49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M30,66 L34,70 L44,60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M50,65 L68,65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* 6. Hand-drawn Payroll Ticket Tag */}
        <div className="absolute right-[10%] sm:right-[22%] top-[68%] sm:top-[65%] block animate-float-1 opacity-15 hover:opacity-100 transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Payroll Processing">
          <svg viewBox="0 0 100 100" className="w-9 h-9 md:w-14 md:h-14 text-slate-700 fill-none">
            <rect x="15" y="25" width="70" height="42" rx="4" stroke="currentColor" strokeWidth="2.5" transform="rotate(3 50 45)" fill="white" />
            <text x="24" y="50" fontFamily="sans-serif" fontWeight="bold" fontSize="11" fill="currentColor" transform="rotate(3 50 45)">PAYROLL</text>
            <circle cx="50" cy="74" r="9" stroke="currentColor" strokeWidth="2" fill="white" />
            <path d="M46,74 L49,77 L54,71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="font-bold text-slate-900 mb-2 md:mb-6 h-[7.5rem] md:h-[9rem] flex items-center justify-center">
            <span
              key={currentIndex}
              className="animate-fade-in-up px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
            >
              {currentItem.text}.
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-8 max-w-xs sm:max-w-none mx-auto">
            {t.hero.subtitle}
          </h2>

          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors shadow-xl shadow-blue-100"
            >
              {t.hero.bookConsultation}
            </button>
            <a
              href="https://wa.me/917406296116"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors inline-flex items-center justify-center shadow-xl shadow-green-100"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              {currentItem.lang === "English" ? "WhatsApp Now" : t.hero.whatsappNow}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
