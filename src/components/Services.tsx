import React from 'react';
import { Calculator, FileText, Landmark, Users, Receipt } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const serviceIcons = [Calculator, FileText, Landmark, Receipt, Users];
  const serviceLinks = [
    '/services/accounting-bookkeeping',
    '/services/itr-services',
    '/services/gst-services',
    '/services/tds-services',
    '/services/payroll-processing'
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-zinc-50 relative overflow-hidden">
      {/* Services Section — Full Background Doodles */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">

        {/* ── ROW 1: TOP ── */}
        {/* T-account — edge left */}
        <div className="absolute left-[2%] sm:left-[3%] top-[4%] sm:top-[5%] block animate-float-1 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Double-Entry Bookkeeping">
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-16 md:h-16 text-slate-700 fill-none">
            <rect x="14" y="14" width="72" height="72" rx="3" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <line x1="50" y1="14" x2="50" y2="86" stroke="currentColor" strokeWidth="2" />
            <line x1="14" y1="30" x2="86" y2="30" stroke="currentColor" strokeWidth="2" />
            <text x="24" y="26" fontFamily="sans-serif" fontWeight="900" fontSize="9" fill="currentColor">Dr</text>
            <text x="57" y="26" fontFamily="sans-serif" fontWeight="900" fontSize="9" fill="currentColor">Cr</text>
            <line x1="20" y1="42" x2="44" y2="42" stroke="currentColor" strokeWidth="1.5" />
            <line x1="20" y1="52" x2="44" y2="52" stroke="currentColor" strokeWidth="1.5" />
            <line x1="20" y1="62" x2="44" y2="62" stroke="currentColor" strokeWidth="1.5" />
            <line x1="56" y1="42" x2="80" y2="42" stroke="currentColor" strokeWidth="1.5" />
            <line x1="56" y1="52" x2="80" y2="52" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        {/* Rupee coin — inner left top */}
        <div className="absolute left-[22%] top-[3%] hidden sm:block animate-float-4 opacity-[0.08]" style={{animationDelay:'1.3s'}}>
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-14 md:h-14 text-slate-700 fill-none">
            <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="29" stroke="currentColor" strokeWidth="1.5" />
            <text x="34" y="62" fontFamily="sans-serif" fontWeight="900" fontSize="28" fill="currentColor">₹</text>
          </svg>
        </div>
        {/* GSTR document — center top */}
        <div className="absolute left-[43%] top-[3%] hidden sm:block animate-float-3 opacity-[0.07] rotate-2" style={{animationDelay:'0.7s'}}>
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-14 md:h-14 text-slate-700 fill-none">
            <rect x="18" y="10" width="64" height="80" rx="4" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <text x="20" y="27" fontFamily="sans-serif" fontWeight="900" fontSize="10" fill="currentColor">GSTR-3B</text>
            <line x1="18" y1="33" x2="82" y2="33" stroke="currentColor" strokeWidth="1.5" />
            <line x1="26" y1="45" x2="74" y2="45" stroke="currentColor" strokeWidth="1.5" />
            <line x1="26" y1="55" x2="74" y2="55" stroke="currentColor" strokeWidth="1.5" />
            <line x1="26" y1="65" x2="66" y2="65" stroke="currentColor" strokeWidth="1.5" />
            <line x1="26" y1="75" x2="70" y2="75" stroke="currentColor" strokeWidth="1.5" />
            <line x1="52" y1="80" x2="74" y2="80" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        {/* ITR form — inner right top */}
        <div className="absolute right-[20%] top-[4%] hidden sm:block animate-float-5 opacity-[0.08]" style={{animationDelay:'2.3s'}}>
          <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-12 md:h-12 text-slate-700 fill-none">
            <rect x="20" y="10" width="60" height="80" rx="4" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <text x="30" y="28" fontFamily="sans-serif" fontWeight="900" fontSize="11" fill="currentColor">ITR</text>
            <line x1="28" y1="38" x2="72" y2="38" stroke="currentColor" strokeWidth="1.5" />
            <line x1="28" y1="48" x2="68" y2="48" stroke="currentColor" strokeWidth="1.5" />
            <line x1="28" y1="58" x2="70" y2="58" stroke="currentColor" strokeWidth="1.5" />
            <line x1="28" y1="68" x2="60" y2="68" stroke="currentColor" strokeWidth="1.5" />
            <path d="M30,80 L35,85 L46,74" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {/* Invoice — edge right */}
        <div className="absolute right-[2%] sm:right-[3%] top-[4%] sm:top-[5%] block animate-float-2 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="GST Invoicing">
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-16 md:h-16 text-slate-700 fill-none">
            <path d="M18,12 L82,12 L82,80 L74,86 L66,80 L58,86 L50,80 L42,86 L34,80 L26,86 L18,80 Z" stroke="currentColor" strokeWidth="2" fill="white" strokeLinejoin="round" />
            <text x="26" y="26" fontFamily="sans-serif" fontWeight="900" fontSize="8" fill="currentColor">INVOICE</text>
            <line x1="18" y1="32" x2="82" y2="32" stroke="currentColor" strokeWidth="1.5" />
            <line x1="26" y1="43" x2="60" y2="43" stroke="currentColor" strokeWidth="1.5" />
            <line x1="26" y1="53" x2="64" y2="53" stroke="currentColor" strokeWidth="1.5" />
            <line x1="26" y1="63" x2="55" y2="63" stroke="currentColor" strokeWidth="1.5" />
            <line x1="52" y1="70" x2="74" y2="70" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* ── ROW 2: MIDDLE ── */}
        {/* Balance scale — edge left */}
        <div className="absolute left-[2%] top-[41%] sm:top-[42%] block animate-float-3 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Balanced Compliance">
          <svg viewBox="0 0 100 100" className="w-9 h-9 md:w-14 md:h-14 text-slate-700 fill-none">
            <line x1="50" y1="14" x2="50" y2="86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="50" y1="28" x2="22" y2="46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="50" y1="28" x2="78" y2="46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12,46 C12,58 32,58 32,46 Z" stroke="currentColor" strokeWidth="1.5" fill="white" />
            <path d="M68,46 C68,58 88,58 88,46 Z" stroke="currentColor" strokeWidth="1.5" fill="white" />
            <line x1="34" y1="86" x2="66" y2="86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="50" cy="28" r="3.5" fill="currentColor" />
          </svg>
        </div>
        {/* Percentage — inner left mid */}
        <div className="absolute left-[24%] top-[44%] hidden sm:block animate-float-2 opacity-[0.08]" style={{animationDelay:'1.7s'}}>
          <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-12 md:h-12 text-slate-700 fill-none">
            <circle cx="30" cy="32" r="14" stroke="currentColor" strokeWidth="2.5" />
            <line x1="20" y1="82" x2="80" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="70" cy="68" r="14" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </div>
        {/* Currency note — center mid */}
        <div className="absolute left-[42%] top-[44%] hidden sm:block animate-float-4 opacity-[0.07] -rotate-2" style={{animationDelay:'0.4s'}}>
          <svg viewBox="0 0 120 68" className="w-16 h-10 md:w-24 md:h-14 text-slate-700 fill-none">
            <rect x="3" y="3" width="114" height="62" rx="4" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <rect x="3" y="3" width="22" height="62" stroke="currentColor" strokeWidth="1.5" />
            <text x="8" y="38" fontFamily="sans-serif" fontWeight="900" fontSize="12" fill="currentColor">₹</text>
            <text x="34" y="22" fontFamily="sans-serif" fontWeight="700" fontSize="8" fill="currentColor">TWO HUNDRED</text>
            <text x="34" y="44" fontFamily="sans-serif" fontWeight="900" fontSize="18" fill="currentColor">200</text>
            <line x1="34" y1="52" x2="110" y2="52" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        {/* TDS cert — inner right mid */}
        <div className="absolute right-[22%] top-[42%] hidden sm:block animate-float-1 opacity-[0.08]" style={{animationDelay:'3.4s'}}>
          <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-12 md:h-12 text-slate-700 fill-none">
            <rect x="16" y="14" width="68" height="52" rx="4" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <text x="26" y="32" fontFamily="sans-serif" fontWeight="900" fontSize="11" fill="currentColor">TDS</text>
            <line x1="24" y1="42" x2="76" y2="42" stroke="currentColor" strokeWidth="1.5" />
            <line x1="24" y1="52" x2="66" y2="52" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="50" cy="78" r="14" stroke="currentColor" strokeWidth="2" fill="white" />
            <path d="M43,78 L48,83 L58,72" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {/* Salary slip — edge right */}
        <div className="absolute right-[2%] top-[40%] block animate-float-5 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Payroll Processing">
          <svg viewBox="0 0 100 100" className="w-9 h-9 md:w-14 md:h-14 text-slate-700 fill-none">
            <rect x="14" y="16" width="72" height="68" rx="3" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <line x1="14" y1="34" x2="86" y2="34" stroke="currentColor" strokeWidth="2" />
            <text x="20" y="28" fontFamily="sans-serif" fontWeight="900" fontSize="8" fill="currentColor">SALARY SLIP</text>
            <line x1="22" y1="46" x2="48" y2="46" stroke="currentColor" strokeWidth="1.5" />
            <line x1="22" y1="56" x2="48" y2="56" stroke="currentColor" strokeWidth="1.5" />
            <line x1="22" y1="66" x2="48" y2="66" stroke="currentColor" strokeWidth="1.5" />
            <line x1="56" y1="46" x2="78" y2="46" stroke="currentColor" strokeWidth="1.5" />
            <line x1="56" y1="56" x2="78" y2="56" stroke="currentColor" strokeWidth="1.5" />
            <line x1="56" y1="66" x2="72" y2="66" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* ── ROW 3: BOTTOM ── */}
        {/* PAN card — edge left */}
        <div className="absolute left-[2%] bottom-[4%] sm:bottom-[5%] block animate-float-4 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="PAN Verification">
          <svg viewBox="0 0 100 65" className="w-14 h-9 md:w-20 md:h-14 text-slate-700 fill-none">
            <rect x="4" y="4" width="92" height="57" rx="4" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <text x="14" y="20" fontFamily="sans-serif" fontWeight="900" fontSize="9" fill="currentColor">PAN CARD</text>
            <line x1="14" y1="26" x2="86" y2="26" stroke="currentColor" strokeWidth="1.5" />
            <text x="14" y="40" fontFamily="sans-serif" fontWeight="700" fontSize="10" fill="currentColor">ABCDE 1234 F</text>
            <line x1="14" y1="48" x2="55" y2="48" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        {/* Abacus — inner left bottom */}
        <div className="absolute left-[22%] bottom-[4%] hidden sm:block animate-float-2 opacity-[0.08]" style={{animationDelay:'2s'}}>
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-14 md:h-14 text-slate-700 fill-none">
            <rect x="12" y="12" width="76" height="76" rx="4" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <line x1="12" y1="36" x2="88" y2="36" stroke="currentColor" strokeWidth="2" />
            <line x1="30" y1="12" x2="30" y2="88" stroke="currentColor" strokeWidth="1.5" />
            <line x1="50" y1="12" x2="50" y2="88" stroke="currentColor" strokeWidth="1.5" />
            <line x1="70" y1="12" x2="70" y2="88" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="30" cy="24" r="7" stroke="currentColor" strokeWidth="2" fill="white" />
            <circle cx="50" cy="20" r="7" stroke="currentColor" strokeWidth="2" fill="white" />
            <circle cx="70" cy="24" r="7" stroke="currentColor" strokeWidth="2" fill="white" />
            <circle cx="30" cy="58" r="7" stroke="currentColor" strokeWidth="2" fill="white" />
            <circle cx="50" cy="70" r="7" stroke="currentColor" strokeWidth="2" fill="white" />
            <circle cx="70" cy="62" r="7" stroke="currentColor" strokeWidth="2" fill="white" />
          </svg>
        </div>
        {/* ATM card — inner right bottom */}
        <div className="absolute right-[21%] bottom-[4%] hidden sm:block animate-float-3 opacity-[0.08] rotate-5" style={{animationDelay:'1s'}}>
          <svg viewBox="0 0 110 72" className="w-14 h-9 md:w-20 md:h-14 text-slate-700 fill-none">
            <rect x="3" y="3" width="104" height="66" rx="8" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <rect x="14" y="18" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
            <line x1="14" y1="52" x2="60" y2="52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="14" y1="42" x2="50" y2="42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="83" cy="38" r="11" stroke="currentColor" strokeWidth="2" />
            <circle cx="95" cy="38" r="11" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        {/* Stacked rupee coins — edge right */}
        <div className="absolute right-[2%] bottom-[5%] sm:bottom-[6%] block animate-float-1 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Cost-Effective">
          <svg viewBox="0 0 100 100" className="w-9 h-9 md:w-14 md:h-14 text-slate-700 fill-none">
            <ellipse cx="50" cy="76" rx="28" ry="9" stroke="currentColor" strokeWidth="2" fill="white" />
            <ellipse cx="50" cy="64" rx="28" ry="9" stroke="currentColor" strokeWidth="2" fill="white" />
            <ellipse cx="50" cy="52" rx="28" ry="9" stroke="currentColor" strokeWidth="2" fill="white" />
            <ellipse cx="50" cy="40" rx="28" ry="9" stroke="currentColor" strokeWidth="2" fill="white" />
            <line x1="22" y1="40" x2="22" y2="76" stroke="currentColor" strokeWidth="2" />
            <line x1="78" y1="40" x2="78" y2="76" stroke="currentColor" strokeWidth="2" />
            <text x="42" y="44" fontFamily="sans-serif" fontWeight="900" fontSize="11" fill="currentColor">₹</text>
          </svg>
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 gap-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6">{t.services.title}</h2>
            <p className="text-slate-600 text-base md:text-lg">{t.services.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
          {t.services.items.map((service: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row items-start gap-6 p-6 md:p-8 bg-white border border-slate-100 rounded-2xl shadow-lg md:hover:shadow-xl md:hover:border-blue-100 transition-all duration-300 relative overflow-hidden"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm shrink-0">
                {serviceIcons[index] ? React.createElement(serviceIcons[index], { size: 32 }) : <Calculator size={32} />}
              </div>

              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900">{service.title}</h3>
                  <a 
                    href={serviceLinks[index] || '#'}
                    className="hidden md:inline-flex items-center px-4 py-1.5 rounded-lg border border-green-100 text-green-600 hover:bg-green-600 hover:text-white text-xs font-bold transition-all group"
                  >
                    Learn More <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>
                <p className="text-slate-500 text-sm font-medium mb-6 max-w-3xl leading-relaxed whitespace-normal">{service.text}</p>
                
                {service.features && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 pt-6 border-t border-slate-50">
                    {service.features.map((feature: string, fIndex: number) => (
                      <div key={fIndex} className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-xs md:text-sm font-medium text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 md:hidden">
                  <a 
                    href={serviceLinks[index] || '#'}
                    className="w-full group inline-flex items-center justify-center px-6 py-3 rounded-xl bg-green-50 text-green-600 text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    Learn More <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 md:p-10 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-100 mt-4"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 shrink-0">
                <Users size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">{t.services.ctaTitle}</h3>
                <p className="text-slate-400 text-sm max-w-sm">{t.services.ctaText}</p>
              </div>
            </div>
            <a 
              href="https://wa.me/917406296116"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-blue-50 transition-all shrink-0"
            >
              {t.services.ctaButton}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
