import { Check } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "../context/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 bg-white relative overflow-hidden">
      {/* Pricing Section — Full Background Doodles */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">

        {/* ── ROW 1: TOP ── */}
        {/* Price tag ₹ — edge left */}
        <div className="absolute left-[2%] sm:left-[3%] top-[4%] sm:top-[5%] block animate-float-3 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Affordable Pricing">
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-16 md:h-16 text-slate-700 fill-none">
            <path d="M24,18 L66,18 C70,18 78,26 78,30 L78,62 L50,82 L22,62 L22,30 C22,26 20,18 24,18 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="white" />
            <circle cx="64" cy="30" r="5" stroke="currentColor" strokeWidth="2" />
            <text x="36" y="58" fontFamily="sans-serif" fontWeight="900" fontSize="26" fill="currentColor">₹</text>
          </svg>
        </div>
        {/* Rupee coin — inner left top */}
        <div className="absolute left-[22%] top-[4%] hidden sm:block animate-float-4 opacity-[0.08]" style={{animationDelay:'1.5s'}}>
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-14 md:h-14 text-slate-700 fill-none">
            <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="29" stroke="currentColor" strokeWidth="1.5" />
            <text x="34" y="62" fontFamily="sans-serif" fontWeight="900" fontSize="28" fill="currentColor">₹</text>
          </svg>
        </div>
        {/* Currency note ₹500 — center top */}
        <div className="absolute left-[42%] top-[3%] hidden sm:block animate-float-2 opacity-[0.07] -rotate-4" style={{animationDelay:'0.3s'}}>
          <svg viewBox="0 0 120 68" className="w-16 h-10 md:w-24 md:h-14 text-slate-700 fill-none">
            <rect x="3" y="3" width="114" height="62" rx="4" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <rect x="3" y="3" width="22" height="62" stroke="currentColor" strokeWidth="1.5" />
            <text x="8" y="38" fontFamily="sans-serif" fontWeight="900" fontSize="12" fill="currentColor">₹</text>
            <text x="34" y="24" fontFamily="sans-serif" fontWeight="700" fontSize="8" fill="currentColor">FIVE HUNDRED</text>
            <text x="34" y="44" fontFamily="sans-serif" fontWeight="900" fontSize="18" fill="currentColor">500</text>
            <line x1="34" y1="52" x2="110" y2="52" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        {/* Wallet — inner right top */}
        <div className="absolute right-[21%] top-[4%] hidden sm:block animate-float-5 opacity-[0.08]" style={{animationDelay:'2.6s'}}>
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-14 md:h-14 text-slate-700 fill-none">
            <rect x="14" y="28" width="72" height="50" rx="6" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <line x1="14" y1="46" x2="86" y2="46" stroke="currentColor" strokeWidth="1.5" />
            <rect x="60" y="52" width="24" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="white" />
            <circle cx="72" cy="60" r="3.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M24,28 L28,16 L72,20 L76,28" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </div>
        {/* Briefcase — edge right */}
        <div className="absolute right-[2%] sm:right-[3%] top-[5%] sm:top-[6%] block animate-float-1 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Professional Plans">
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-16 md:h-16 text-slate-700 fill-none">
            <rect x="14" y="36" width="72" height="50" rx="6" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <path d="M36,36 L36,26 C36,22 40,18 50,18 C60,18 64,22 64,26 L64,36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="14" y1="58" x2="86" y2="58" stroke="currentColor" strokeWidth="1.5" />
            <rect x="40" y="52" width="20" height="12" rx="3" stroke="currentColor" strokeWidth="2" fill="white" />
          </svg>
        </div>

        {/* ── ROW 2: MIDDLE ── */}
        {/* Stacked coins — edge left */}
        <div className="absolute left-[2%] sm:left-[3%] top-[41%] sm:top-[42%] block animate-float-2 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Stack Savings">
          <svg viewBox="0 0 100 100" className="w-9 h-9 md:w-14 md:h-14 text-slate-700 fill-none">
            <ellipse cx="50" cy="75" rx="26" ry="8" stroke="currentColor" strokeWidth="2" fill="white" />
            <ellipse cx="50" cy="62" rx="26" ry="8" stroke="currentColor" strokeWidth="2" fill="white" />
            <ellipse cx="50" cy="49" rx="26" ry="8" stroke="currentColor" strokeWidth="2" fill="white" />
            <line x1="24" y1="49" x2="24" y2="75" stroke="currentColor" strokeWidth="2" />
            <line x1="76" y1="49" x2="76" y2="75" stroke="currentColor" strokeWidth="2" />
            <text x="42" y="52" fontFamily="sans-serif" fontWeight="900" fontSize="10" fill="currentColor">₹</text>
          </svg>
        </div>
        {/* Percentage — inner left mid */}
        <div className="absolute left-[24%] top-[43%] hidden sm:block animate-float-4 opacity-[0.08]" style={{animationDelay:'1.9s'}}>
          <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-12 md:h-12 text-slate-700 fill-none">
            <circle cx="30" cy="32" r="14" stroke="currentColor" strokeWidth="2.5" />
            <line x1="20" y1="82" x2="80" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="70" cy="68" r="14" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </div>
        {/* Piggy bank — center mid */}
        <div className="absolute left-[43%] top-[44%] hidden sm:block animate-float-3 opacity-[0.07]" style={{animationDelay:'0.2s'}}>
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-16 md:h-16 text-slate-700 fill-none">
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
        {/* Padlock — inner right mid */}
        <div className="absolute right-[22%] top-[42%] hidden sm:block animate-float-1 opacity-[0.08]" style={{animationDelay:'3.6s'}}>
          <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-12 md:h-12 text-slate-700 fill-none">
            <rect x="24" y="46" width="52" height="40" rx="6" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <path d="M34,46 L34,32 C34,20 66,20 66,32 L66,46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="50" cy="64" r="7" stroke="currentColor" strokeWidth="2" />
            <line x1="50" y1="71" x2="50" y2="78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        {/* Receipt — edge right */}
        <div className="absolute right-[2%] sm:right-[3%] top-[39%] sm:top-[40%] block animate-float-5 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Transparent Billing">
          <svg viewBox="0 0 100 100" className="w-9 h-9 md:w-14 md:h-14 text-slate-700 fill-none">
            <path d="M20,10 L80,10 L80,82 L72,88 L64,82 L56,88 L50,82 L44,88 L36,82 L28,88 L20,82 Z" stroke="currentColor" strokeWidth="2" fill="white" strokeLinejoin="round" />
            <line x1="20" y1="26" x2="80" y2="26" stroke="currentColor" strokeWidth="1.5" />
            <line x1="28" y1="38" x2="68" y2="38" stroke="currentColor" strokeWidth="1.5" />
            <line x1="28" y1="48" x2="72" y2="48" stroke="currentColor" strokeWidth="1.5" />
            <line x1="28" y1="58" x2="60" y2="58" stroke="currentColor" strokeWidth="1.5" />
            <line x1="50" y1="67" x2="72" y2="67" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* ── ROW 3: BOTTOM ── */}
        {/* Cheque — edge left */}
        <div className="absolute left-[2%] sm:left-[3%] bottom-[4%] sm:bottom-[5%] block animate-float-4 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Flexible Payment">
          <svg viewBox="0 0 130 78" className="w-18 h-10 md:w-28 md:h-16 text-slate-700 fill-none">
            <rect x="3" y="3" width="124" height="72" rx="3" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <line x1="3" y1="20" x2="127" y2="20" stroke="currentColor" strokeWidth="1.5" />
            <text x="12" y="15" fontFamily="sans-serif" fontWeight="700" fontSize="8" fill="currentColor">ACCOUNT PAYEE CHEQUE</text>
            <line x1="12" y1="36" x2="115" y2="36" stroke="currentColor" strokeWidth="1.5" />
            <line x1="12" y1="50" x2="92" y2="50" stroke="currentColor" strokeWidth="1.5" />
            <text x="12" y="67" fontFamily="sans-serif" fontSize="9" fill="currentColor">₹ ___________________</text>
          </svg>
        </div>
        {/* Form 16 — inner left bottom */}
        <div className="absolute left-[24%] bottom-[4%] hidden sm:block animate-float-2 opacity-[0.08]" style={{animationDelay:'2.8s'}}>
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-14 md:h-14 text-slate-700 fill-none">
            <rect x="18" y="10" width="64" height="80" rx="4" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <text x="22" y="27" fontFamily="sans-serif" fontWeight="900" fontSize="9" fill="currentColor">FORM 16</text>
            <line x1="18" y1="33" x2="82" y2="33" stroke="currentColor" strokeWidth="1.5" />
            <line x1="26" y1="44" x2="74" y2="44" stroke="currentColor" strokeWidth="1.5" />
            <line x1="26" y1="54" x2="74" y2="54" stroke="currentColor" strokeWidth="1.5" />
            <line x1="26" y1="64" x2="60" y2="64" stroke="currentColor" strokeWidth="1.5" />
            <line x1="26" y1="74" x2="68" y2="74" stroke="currentColor" strokeWidth="1.5" />
            <path d="M28,82 L33,87 L44,76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {/* ATM card — inner right bottom */}
        <div className="absolute right-[22%] bottom-[5%] hidden sm:block animate-float-3 opacity-[0.08] rotate-3" style={{animationDelay:'1.2s'}}>
          <svg viewBox="0 0 110 72" className="w-14 h-9 md:w-20 md:h-14 text-slate-700 fill-none">
            <rect x="3" y="3" width="104" height="66" rx="8" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <rect x="14" y="18" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
            <line x1="14" y1="52" x2="60" y2="52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="14" y1="42" x2="50" y2="42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="83" cy="38" r="11" stroke="currentColor" strokeWidth="2" />
            <circle cx="95" cy="38" r="11" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        {/* Safe/vault — edge right */}
        <div className="absolute right-[2%] sm:right-[3%] bottom-[5%] sm:bottom-[6%] block animate-float-4 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Rate Locked 12 Months">
          <svg viewBox="0 0 100 100" className="w-10 h-10 md:w-16 md:h-16 text-slate-700 fill-none">
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.sections.pricing}</h2>
          <p className="text-xl text-gray-600">{t.sections.pricingSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Starter */}
          <Card className="hover:shadow-lg transition-shadow border-slate-100 h-full shadow-md">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.pricing.starter}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-1">{t.pricing.starterPrice}</div>
                <p className="text-gray-600 text-sm">{t.pricing.perMonth}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {t.pricing.starterFeatures.map((f: string) => (
                  <li key={f} className="flex items-center text-gray-700">
                    <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={scrollToContact} 
                className="w-full bg-white border border-slate-200 text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-slate-50 transition-colors"
              >
                {t.cta.chooseStarter}
              </button>
            </CardContent>
          </Card>

          {/* Growth — Recommended */}
          <Card className="border-2 border-blue-600 shadow-lg relative h-full shadow-md">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                {t.pricing.recommended}
              </span>
            </div>
            <CardContent className="p-8 pt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.pricing.growth}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-1">{t.pricing.growthPrice}</div>
                <p className="text-gray-600 text-sm">{t.pricing.perMonth}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {t.pricing.growthFeatures.map((f: string) => (
                  <li key={f} className="flex items-center text-gray-700">
                    <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={scrollToContact} 
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-100"
              >
                {t.cta.chooseGrowth}
              </button>
            </CardContent>
          </Card>

          {/* Pro */}
          <Card className="hover:shadow-lg transition-shadow border-slate-100 h-full shadow-md">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.pricing.pro}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-1">{t.pricing.proPrice}</div>
                <p className="text-gray-600 text-sm">{t.pricing.perMonth}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {t.pricing.proFeatures.map((f: string) => (
                  <li key={f} className="flex items-center text-gray-700">
                    <Check className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={scrollToContact} 
                className="w-full bg-white border border-slate-200 text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-slate-50 transition-colors"
              >
                {t.cta.choosePro}
              </button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-blue-600 mb-3">{t.pricing.notIdeal}</h3>
          <p className="text-gray-600 mb-6">{t.pricing.notIdealDesc}</p>
          <button 
            onClick={scrollToContact} 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-xl shadow-blue-100"
          >
            {t.cta.contactCustom}
          </button>
        </div>
      </div>
    </section>
  );
}
