import { Shield, Languages, CheckCircle, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const featureIcons = [Shield, Languages, CheckCircle, TrendingUp];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Features Section — Full Background Doodles */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">

        {/* ── ROW 1: TOP ── */}
        {/* Shield — edge left */}
        <div className="absolute left-[2%] sm:left-[3%] top-[4%] sm:top-[6%] block animate-float-2 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Compliance & Security">
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-16 md:h-16 text-slate-700 fill-none">
            <path d="M50,14 L80,27 L80,56 C80,71 65,82 50,88 C35,82 20,71 20,56 L20,27 Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="white" />
            <path d="M35,51 L44,60 L65,39" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {/* Rupee Coin — inner left top */}
        <div className="absolute left-[22%] top-[4%] hidden sm:block animate-float-4 opacity-[0.08]" style={{animationDelay:'1.2s'}}>
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-14 md:h-14 text-slate-700 fill-none">
            <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="29" stroke="currentColor" strokeWidth="1.5" />
            <text x="35" y="60" fontFamily="sans-serif" fontWeight="900" fontSize="28" fill="currentColor">₹</text>
          </svg>
        </div>
        {/* Currency Note — center top */}
        <div className="absolute left-[44%] top-[3%] hidden sm:block animate-float-3 opacity-[0.07] -rotate-6" style={{animationDelay:'0.8s'}}>
          <svg viewBox="0 0 120 68" className="w-16 h-10 md:w-24 md:h-14 text-slate-700 fill-none">
            <rect x="3" y="3" width="114" height="62" rx="4" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <rect x="3" y="3" width="22" height="62" stroke="currentColor" strokeWidth="1.5" />
            <text x="8" y="38" fontFamily="sans-serif" fontWeight="900" fontSize="12" fill="currentColor">₹</text>
            <text x="34" y="24" fontFamily="sans-serif" fontWeight="700" fontSize="8" fill="currentColor">FIVE HUNDRED</text>
            <text x="34" y="44" fontFamily="sans-serif" fontWeight="900" fontSize="18" fill="currentColor">500</text>
            <line x1="34" y1="52" x2="110" y2="52" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        {/* Bar chart — inner right top */}
        <div className="absolute right-[20%] top-[5%] hidden sm:block animate-float-5 opacity-[0.08]" style={{animationDelay:'2s'}}>
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-14 md:h-14 text-slate-700 fill-none">
            <line x1="18" y1="82" x2="82" y2="82" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="18" y1="18" x2="18" y2="82" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <rect x="26" y="54" width="14" height="28" rx="2" stroke="currentColor" strokeWidth="2" />
            <rect x="44" y="40" width="14" height="42" rx="2" stroke="currentColor" strokeWidth="2" />
            <rect x="62" y="24" width="14" height="58" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M24,52 L40,38 L58,44 L74,24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 2" />
          </svg>
        </div>
        {/* Globe — edge right */}
        <div className="absolute right-[2%] sm:right-[3%] top-[5%] sm:top-[7%] block animate-float-1 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Multilingual Support">
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-16 md:h-16 text-slate-700 fill-none">
            <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="2.5" />
            <ellipse cx="50" cy="50" rx="14" ry="32" stroke="currentColor" strokeWidth="1.5" />
            <line x1="18" y1="50" x2="82" y2="50" stroke="currentColor" strokeWidth="1.5" />
            <line x1="23" y1="34" x2="77" y2="34" stroke="currentColor" strokeWidth="1.5" />
            <line x1="23" y1="66" x2="77" y2="66" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        {/* ── ROW 2: MIDDLE ── */}
        {/* Abacus — edge left */}
        <div className="absolute left-[2%] sm:left-[3%] top-[39%] sm:top-[40%] block animate-float-3 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Precise Calculations">
          <svg viewBox="0 0 100 100" className="w-9 h-9 md:w-14 md:h-14 text-slate-700 fill-none">
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
        {/* Percentage % — inner left mid */}
        <div className="absolute left-[24%] top-[42%] hidden sm:block animate-float-2 opacity-[0.08]" style={{animationDelay:'1.6s'}}>
          <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-12 md:h-12 text-slate-700 fill-none">
            <circle cx="30" cy="32" r="14" stroke="currentColor" strokeWidth="2.5" />
            <line x1="20" y1="82" x2="80" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="70" cy="68" r="14" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </div>
        {/* PAN Card — center mid */}
        <div className="absolute left-[44%] top-[44%] hidden sm:block animate-float-4 opacity-[0.07] rotate-3" style={{animationDelay:'0.5s'}}>
          <svg viewBox="0 0 100 65" className="w-14 h-9 md:w-20 md:h-14 text-slate-700 fill-none">
            <rect x="4" y="4" width="92" height="57" rx="4" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <text x="14" y="22" fontFamily="sans-serif" fontWeight="900" fontSize="9" fill="currentColor">PAN CARD</text>
            <line x1="14" y1="28" x2="86" y2="28" stroke="currentColor" strokeWidth="1.5" />
            <text x="14" y="42" fontFamily="sans-serif" fontWeight="700" fontSize="10" fill="currentColor">ABCDE 1234 F</text>
            <line x1="14" y1="50" x2="55" y2="50" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        {/* Approval stamp — inner right mid */}
        <div className="absolute right-[22%] top-[40%] hidden sm:block animate-float-1 opacity-[0.08]" style={{animationDelay:'3s'}}>
          <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-12 md:h-12 text-slate-700 fill-none">
            <circle cx="50" cy="44" r="22" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="50" cy="44" r="14" stroke="currentColor" strokeWidth="1.5" />
            <path d="M43,44 L48,49 L58,38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="26" y="72" width="48" height="8" rx="3" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        {/* Magnifying glass — edge right mid */}
        <div className="absolute right-[2%] sm:right-[3%] top-[37%] sm:top-[38%] block animate-float-5 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Accurate Reviews">
          <svg viewBox="0 0 100 100" className="w-9 h-9 md:w-14 md:h-14 text-slate-700 fill-none">
            <rect x="18" y="18" width="46" height="58" rx="4" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <line x1="28" y1="34" x2="54" y2="34" stroke="currentColor" strokeWidth="1.5" />
            <line x1="28" y1="44" x2="50" y2="44" stroke="currentColor" strokeWidth="1.5" />
            <line x1="28" y1="54" x2="54" y2="54" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="68" cy="64" r="14" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <line x1="78" y1="74" x2="86" y2="82" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        {/* ── ROW 3: BOTTOM ── */}
        {/* Lightbulb — edge left */}
        <div className="absolute left-[2%] sm:left-[3%] bottom-[4%] sm:bottom-[6%] block animate-float-4 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Smart Solutions">
          <svg viewBox="0 0 100 100" className="w-9 h-9 md:w-14 md:h-14 text-slate-700 fill-none">
            <path d="M50,14 C36,14 26,24 26,38 C26,48 32,56 40,60 L40,68 L60,68 L60,60 C68,56 74,48 74,38 C74,24 64,14 50,14 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="white" />
            <line x1="40" y1="74" x2="60" y2="74" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="42" y1="80" x2="58" y2="80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="50" y1="38" x2="50" y2="56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M43,44 L50,38 L57,44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {/* Cheque — inner left bottom */}
        <div className="absolute left-[22%] bottom-[5%] hidden sm:block animate-float-2 opacity-[0.08] -rotate-3" style={{animationDelay:'2.2s'}}>
          <svg viewBox="0 0 130 78" className="w-20 h-12 md:w-28 md:h-16 text-slate-700 fill-none">
            <rect x="3" y="3" width="124" height="72" rx="3" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <line x1="3" y1="20" x2="127" y2="20" stroke="currentColor" strokeWidth="1.5" />
            <text x="12" y="15" fontFamily="sans-serif" fontWeight="700" fontSize="8" fill="currentColor">ACCOUNT PAYEE CHEQUE</text>
            <line x1="12" y1="36" x2="115" y2="36" stroke="currentColor" strokeWidth="1.5" />
            <line x1="12" y1="50" x2="92" y2="50" stroke="currentColor" strokeWidth="1.5" />
            <text x="12" y="67" fontFamily="sans-serif" fontSize="9" fill="currentColor">₹ ___________________</text>
            <path d="M96,62 C99,58 104,58 108,62 C112,66 116,66 120,62" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        {/* ATM card — inner right bottom */}
        <div className="absolute right-[20%] bottom-[5%] hidden sm:block animate-float-3 opacity-[0.08] rotate-6" style={{animationDelay:'1s'}}>
          <svg viewBox="0 0 110 72" className="w-14 h-9 md:w-20 md:h-14 text-slate-700 fill-none">
            <rect x="3" y="3" width="104" height="66" rx="8" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <rect x="14" y="18" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
            <line x1="14" y1="54" x2="58" y2="54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="14" y1="44" x2="48" y2="44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="82" cy="40" r="10" stroke="currentColor" strokeWidth="2" />
            <circle cx="94" cy="40" r="10" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        {/* Bank Building — edge right */}
        <div className="absolute right-[2%] sm:right-[3%] bottom-[5%] sm:bottom-[7%] block animate-float-1 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Reliable as a Bank">
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-16 md:h-16 text-slate-700 fill-none">
            <path d="M8,36 L50,10 L92,36 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="white" />
            <rect x="14" y="36" width="72" height="48" stroke="currentColor" strokeWidth="2" fill="white" />
            <line x1="8" y1="84" x2="92" y2="84" stroke="currentColor" strokeWidth="2.5" />
            <rect x="20" y="44" width="10" height="28" stroke="currentColor" strokeWidth="1.5" />
            <rect x="36" y="44" width="10" height="28" stroke="currentColor" strokeWidth="1.5" />
            <rect x="52" y="44" width="10" height="28" stroke="currentColor" strokeWidth="1.5" />
            <rect x="68" y="44" width="10" height="28" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

      </div>
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">{t.features.title}</h2>
          <p className="text-zinc-600 text-lg">{t.features.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.items.map((feature: any, index: number) => {
            const Icon = featureIcons[index] || CheckCircle;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 group overflow-hidden relative flex flex-col items-center text-center bg-indigo-50 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                  <Icon size={80} />
                </div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{feature.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}