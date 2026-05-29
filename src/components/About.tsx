import { motion } from 'framer-motion';
import { Handshake, TrendingUp, Clock, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { icon: Handshake, title: t.about.stats.trusted, text: t.about.stats.trustedText },
    { icon: TrendingUp, title: t.about.stats.growth, text: t.about.stats.growthText },
    { icon: Clock, title: t.about.stats.timely, text: t.about.stats.timelyText },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* About Section — Full Background Doodles */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">

        {/* ── ROW 1: TOP ── */}
        {/* Trophy — edge left */}
        <div className="absolute left-[3%] top-[6%] hidden md:block animate-float-2 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Excellence">
          <svg viewBox="0 0 100 100" className="w-16 h-16 text-slate-700 fill-none">
            <path d="M34,18 L66,18 L66,50 C66,66 50,74 50,74 C50,74 34,66 34,50 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="white" />
            <path d="M34,30 L20,30 L20,46 C20,54 27,57 34,55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M66,30 L80,30 L80,46 C80,54 73,57 66,55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="50" y1="74" x2="50" y2="84" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <rect x="34" y="84" width="32" height="6" rx="3" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        {/* Rupee coin — inner left top */}
        <div className="absolute left-[22%] top-[4%] hidden lg:block animate-float-4 opacity-[0.08]" style={{animationDelay:'1.4s'}}>
          <svg viewBox="0 0 100 100" className="w-14 h-14 text-slate-700 fill-none">
            <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="29" stroke="currentColor" strokeWidth="1.5" />
            <text x="34" y="62" fontFamily="sans-serif" fontWeight="900" fontSize="28" fill="currentColor">₹</text>
          </svg>
        </div>
        {/* Passbook — center top */}
        <div className="absolute left-[43%] top-[3%] hidden lg:block animate-float-3 opacity-[0.07]" style={{animationDelay:'0.6s'}}>
          <svg viewBox="0 0 80 110" className="w-12 h-16 text-slate-700 fill-none">
            <rect x="4" y="4" width="72" height="102" rx="5" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <rect x="4" y="4" width="72" height="20" stroke="currentColor" strokeWidth="1.5" fill="white" />
            <text x="10" y="18" fontFamily="sans-serif" fontWeight="900" fontSize="9" fill="currentColor">PASSBOOK</text>
            <line x1="14" y1="38" x2="66" y2="38" stroke="currentColor" strokeWidth="1.5" />
            <line x1="14" y1="50" x2="66" y2="50" stroke="currentColor" strokeWidth="1.5" />
            <line x1="14" y1="62" x2="66" y2="62" stroke="currentColor" strokeWidth="1.5" />
            <line x1="14" y1="74" x2="66" y2="74" stroke="currentColor" strokeWidth="1.5" />
            <line x1="14" y1="86" x2="60" y2="86" stroke="currentColor" strokeWidth="1.5" />
            <line x1="40" y1="24" x2="40" y2="106" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        {/* Bank building — inner right top */}
        <div className="absolute right-[20%] top-[5%] hidden lg:block animate-float-5 opacity-[0.08]" style={{animationDelay:'2.1s'}}>
          <svg viewBox="0 0 100 100" className="w-14 h-14 text-slate-700 fill-none">
            <path d="M8,36 L50,10 L92,36 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="white" />
            <rect x="14" y="36" width="72" height="48" stroke="currentColor" strokeWidth="2" fill="white" />
            <line x1="8" y1="84" x2="92" y2="84" stroke="currentColor" strokeWidth="2.5" />
            <rect x="20" y="44" width="10" height="28" stroke="currentColor" strokeWidth="1.5" />
            <rect x="36" y="44" width="10" height="28" stroke="currentColor" strokeWidth="1.5" />
            <rect x="52" y="44" width="10" height="28" stroke="currentColor" strokeWidth="1.5" />
            <rect x="68" y="44" width="10" height="28" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        {/* Target bullseye — edge right */}
        <div className="absolute right-[3%] top-[7%] hidden md:block animate-float-1 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Mission-Driven">
          <svg viewBox="0 0 100 100" className="w-16 h-16 text-slate-700 fill-none">
            <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2.5" />
            <line x1="76" y1="24" x2="62" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M62,22 L78,22 L78,38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* ── ROW 2: MIDDLE ── */}
        {/* Calendar — edge left */}
        <div className="absolute left-[3%] top-[42%] hidden md:block animate-float-1 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Timely Filing">
          <svg viewBox="0 0 100 100" className="w-14 h-14 text-slate-700 fill-none">
            <rect x="16" y="24" width="68" height="58" rx="6" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <line x1="16" y1="42" x2="84" y2="42" stroke="currentColor" strokeWidth="2" />
            <line x1="34" y1="14" x2="34" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="66" y1="14" x2="66" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="32" cy="57" r="4" fill="currentColor" />
            <circle cx="50" cy="57" r="4" fill="currentColor" />
            <circle cx="68" cy="57" r="4" fill="currentColor" />
            <circle cx="32" cy="72" r="4" fill="currentColor" />
            <circle cx="50" cy="72" r="4" fill="currentColor" />
          </svg>
        </div>
        {/* Handshake — inner left mid */}
        <div className="absolute left-[24%] top-[44%] hidden lg:block animate-float-3 opacity-[0.08]" style={{animationDelay:'1.8s'}}>
          <svg viewBox="0 0 100 100" className="w-12 h-12 text-slate-700 fill-none">
            <path d="M12,55 L30,38 L44,38 L50,32 L56,38 L70,38 L88,55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30,38 L30,62 C30,65 33,68 36,66 L50,58 L64,66 C67,68 70,65 70,62 L70,38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {/* Currency note — center mid */}
        <div className="absolute left-[43%] top-[45%] hidden lg:block animate-float-4 opacity-[0.07] rotate-3" style={{animationDelay:'0.9s'}}>
          <svg viewBox="0 0 120 68" className="w-24 h-14 text-slate-700 fill-none">
            <rect x="3" y="3" width="114" height="62" rx="4" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <rect x="3" y="3" width="22" height="62" stroke="currentColor" strokeWidth="1.5" />
            <text x="8" y="38" fontFamily="sans-serif" fontWeight="900" fontSize="12" fill="currentColor">₹</text>
            <text x="34" y="22" fontFamily="sans-serif" fontWeight="700" fontSize="8" fill="currentColor">ONE HUNDRED</text>
            <text x="34" y="44" fontFamily="sans-serif" fontWeight="900" fontSize="18" fill="currentColor">100</text>
            <line x1="34" y1="52" x2="110" y2="52" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        {/* Pie chart — inner right mid */}
        <div className="absolute right-[22%] top-[42%] hidden lg:block animate-float-2 opacity-[0.08]" style={{animationDelay:'3.2s'}}>
          <svg viewBox="0 0 100 100" className="w-12 h-12 text-slate-700 fill-none">
            <circle cx="50" cy="52" r="34" stroke="currentColor" strokeWidth="2.5" />
            <line x1="50" y1="18" x2="50" y2="52" stroke="currentColor" strokeWidth="2" />
            <line x1="50" y1="52" x2="80" y2="69" stroke="currentColor" strokeWidth="2" />
            <path d="M50,18 A34,34 0 0,1 80,69" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="50" y1="52" x2="16" y2="52" stroke="currentColor" strokeWidth="2" />
            <path d="M16,52 A34,34 0 0,1 50,18" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
        {/* Office building — edge right */}
        <div className="absolute right-[3%] top-[40%] hidden md:block animate-float-5 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Established Firm">
          <svg viewBox="0 0 100 100" className="w-14 h-14 text-slate-700 fill-none">
            <rect x="22" y="18" width="56" height="70" rx="2" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <line x1="22" y1="34" x2="78" y2="34" stroke="currentColor" strokeWidth="1.5" />
            <line x1="22" y1="50" x2="78" y2="50" stroke="currentColor" strokeWidth="1.5" />
            <line x1="22" y1="66" x2="78" y2="66" stroke="currentColor" strokeWidth="1.5" />
            <rect x="30" y="22" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="46" y="22" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="61" y="22" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <rect x="38" y="72" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* ── ROW 3: BOTTOM ── */}
        {/* Piggy bank — edge left */}
        <div className="absolute left-[3%] bottom-[6%] hidden md:block animate-float-4 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Save Smartly">
          <svg viewBox="0 0 100 100" className="w-16 h-16 text-slate-700 fill-none">
            <ellipse cx="44" cy="58" rx="28" ry="22" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <circle cx="68" cy="52" r="13" stroke="currentColor" strokeWidth="2" fill="white" />
            <ellipse cx="77" cy="57" rx="6" ry="4.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="75" cy="57" r="1.5" fill="currentColor" />
            <circle cx="79" cy="57" r="1.5" fill="currentColor" />
            <path d="M63,40 L67,32 L72,40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="71" cy="49" r="2" fill="currentColor" />
            <path d="M44,36 L52,36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M16,58 C10,54 8,60 12,62" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="28" y1="78" x2="26" y2="90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="40" y1="80" x2="38" y2="90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="52" y1="80" x2="54" y2="90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="62" y1="78" x2="64" y2="88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        {/* Cheque — inner left bottom */}
        <div className="absolute left-[21%] bottom-[5%] hidden lg:block animate-float-2 opacity-[0.08] -rotate-3" style={{animationDelay:'2.4s'}}>
          <svg viewBox="0 0 130 78" className="w-28 h-16 text-slate-700 fill-none">
            <rect x="3" y="3" width="124" height="72" rx="3" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <line x1="3" y1="20" x2="127" y2="20" stroke="currentColor" strokeWidth="1.5" />
            <text x="12" y="15" fontFamily="sans-serif" fontWeight="700" fontSize="8" fill="currentColor">ACCOUNT PAYEE CHEQUE</text>
            <line x1="12" y1="36" x2="115" y2="36" stroke="currentColor" strokeWidth="1.5" />
            <line x1="12" y1="50" x2="92" y2="50" stroke="currentColor" strokeWidth="1.5" />
            <text x="12" y="67" fontFamily="sans-serif" fontSize="9" fill="currentColor">₹ ___________________</text>
            <path d="M96,62 C100,58 105,58 109,62 C113,66 117,66 121,62" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        {/* Stacked coins — inner right bottom */}
        <div className="absolute right-[21%] bottom-[5%] hidden lg:block animate-float-3 opacity-[0.08]" style={{animationDelay:'1.1s'}}>
          <svg viewBox="0 0 100 100" className="w-12 h-12 text-slate-700 fill-none">
            <ellipse cx="50" cy="76" rx="26" ry="8" stroke="currentColor" strokeWidth="2" fill="white" />
            <ellipse cx="50" cy="63" rx="26" ry="8" stroke="currentColor" strokeWidth="2" fill="white" />
            <ellipse cx="50" cy="50" rx="26" ry="8" stroke="currentColor" strokeWidth="2" fill="white" />
            <line x1="24" y1="50" x2="24" y2="76" stroke="currentColor" strokeWidth="2" />
            <line x1="76" y1="50" x2="76" y2="76" stroke="currentColor" strokeWidth="2" />
            <text x="42" y="54" fontFamily="sans-serif" fontWeight="900" fontSize="11" fill="currentColor">₹</text>
          </svg>
        </div>
        {/* Safe/vault — edge right */}
        <div className="absolute right-[3%] bottom-[7%] hidden md:block animate-float-1 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Your Data is Safe">
          <svg viewBox="0 0 100 100" className="w-16 h-16 text-slate-700 fill-none">
            <rect x="14" y="12" width="72" height="72" rx="5" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="2" />
            <line x1="50" y1="32" x2="50" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="50" y1="58" x2="50" y2="68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="32" y1="50" x2="42" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="58" y1="50" x2="68" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="14" y1="80" x2="86" y2="80" stroke="currentColor" strokeWidth="1.5" />
            <rect x="72" y="45" width="10" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="white" />
          </svg>
        </div>

      </div>
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          {...fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">{t.about.title}</h2>
          <p className="text-lg text-blue-600 font-medium">
            Pioneering excellence in financial and compliance services to empower your business.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl shadow-slate-200"
          >
            <img 
              src="/file_000.webp" 
              alt="Byalance Professional Compliance Team"
              className="w-full h-full object-cover"
              loading="lazy"
              width={600}
              height={450}
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          {/* Text Content */}
          <motion.div {...fadeIn}>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
            
            <div className="mt-8 card-professional p-8 flex items-start gap-6 bg-blue-50 border-2 border-blue-200 shadow-lg shadow-blue-200/50">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                    <Target size={32} strokeWidth={1.5} />
                </div>
                <div>
                    <h4 className="font-bold text-xl text-slate-800 mb-2">{t.about.missionBadge}</h4>
                    <p className="text-slate-500 italic">
                      {t.about.missionText}
                    </p>
                </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 pt-16 border-t border-slate-200">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.title}
                        className="card-professional p-8 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-6 mx-auto">
                            <stat.icon size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">{stat.title}</h3>
                        <p className="text-slate-500">{stat.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}