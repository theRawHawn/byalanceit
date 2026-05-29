import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    businessType: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');
  const [errorDetail, setErrorDetail] = useState('');

  const contactInfo = [
    { icon: Phone, title: t.contact.phone, text: '+91 74062 96116, +91 96111 93492' },
    { icon: Mail, title: t.contact.email, text: 'info@byalance.in' },
    { icon: MapPin, title: t.contact.location, text: '4th Phase, JP Nagar, Bengaluru, KA 560078' },
    { icon: Clock, title: t.common.businessHours, text: 'Mon – Sat, 9:00 AM – 5:30 PM' },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    setErrorDetail('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormStatus('success');
        setFormData({
          name: '',
          mobile: '',
          email: '',
          businessType: '',
          message: '',
        });
      } else {
        // Log the actual server error so it's visible in browser DevTools → Console
        try {
          const errData = await response.json();
          console.error('[Byalance] Form submission error:', errData);
          setErrorDetail(errData.detail || errData.message || 'Server returned an error status.');
        } catch {
          setErrorDetail('Server returned an error without a modern description.');
        }
        setFormStatus('error');
      }
    } catch (error: any) {
      console.error('Network or client-side error:', error);
      setErrorDetail(error.message || 'Network, offline, or browser connectivity issue.');
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-zinc-50 overflow-hidden relative">
      {/* Contact Section — Full Background Doodles */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">

        {/* ── ROW 1: TOP ── */}
        {/* Mobile phone — edge left */}
        <div className="absolute left-[3%] top-[5%] hidden md:block animate-float-2 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Call or WhatsApp Us">
          <svg viewBox="0 0 100 100" className="w-16 h-16 text-slate-700 fill-none">
            <rect x="28" y="10" width="44" height="80" rx="8" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <line x1="28" y1="24" x2="72" y2="24" stroke="currentColor" strokeWidth="1.5" />
            <line x1="28" y1="76" x2="72" y2="76" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="50" cy="85" r="3.5" stroke="currentColor" strokeWidth="1.5" />
            <line x1="42" y1="17" x2="58" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <rect x="36" y="34" width="28" height="34" rx="3" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        {/* Paper plane — inner left top */}
        <div className="absolute left-[22%] top-[4%] hidden lg:block animate-float-4 opacity-[0.08]" style={{animationDelay:'1.1s'}}>
          <svg viewBox="0 0 100 100" className="w-12 h-12 text-slate-700 fill-none">
            <path d="M12,50 L88,14 L60,88 L46,58 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="white" />
            <line x1="46" y1="58" x2="88" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M46,58 L52,74 L60,88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {/* Rupee coin — center top */}
        <div className="absolute left-[44%] top-[3%] hidden lg:block animate-float-3 opacity-[0.07]" style={{animationDelay:'0.5s'}}>
          <svg viewBox="0 0 100 100" className="w-14 h-14 text-slate-700 fill-none">
            <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="29" stroke="currentColor" strokeWidth="1.5" />
            <text x="34" y="62" fontFamily="sans-serif" fontWeight="900" fontSize="28" fill="currentColor">₹</text>
          </svg>
        </div>
        {/* Chat bubble — inner right top */}
        <div className="absolute right-[21%] top-[4%] hidden lg:block animate-float-5 opacity-[0.08]" style={{animationDelay:'2.7s'}}>
          <svg viewBox="0 0 100 100" className="w-14 h-14 text-slate-700 fill-none">
            <path d="M18,16 L82,16 C85,16 88,19 88,22 L88,58 C88,61 85,64 82,64 L56,64 L44,82 L44,64 L18,64 C15,64 12,61 12,58 L12,22 C12,19 15,16 18,16 Z" stroke="currentColor" strokeWidth="2.5" fill="white" strokeLinejoin="round" />
            <line x1="28" y1="32" x2="72" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="28" y1="46" x2="62" y2="46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        {/* Location pin — edge right */}
        <div className="absolute right-[3%] top-[6%] hidden md:block animate-float-1 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="JP Nagar, Bengaluru">
          <svg viewBox="0 0 100 100" className="w-16 h-16 text-slate-700 fill-none">
            <path d="M50,12 C34,12 20,26 20,42 C20,62 50,88 50,88 C50,88 80,62 80,42 C80,26 66,12 50,12 Z" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <circle cx="50" cy="42" r="12" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="42" r="4" fill="currentColor" />
          </svg>
        </div>

        {/* ── ROW 2: MIDDLE ── */}
        {/* Envelope — edge left */}
        <div className="absolute left-[3%] top-[42%] hidden md:block animate-float-1 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Email Us">
          <svg viewBox="0 0 100 100" className="w-14 h-14 text-slate-700 fill-none">
            <rect x="12" y="26" width="76" height="54" rx="5" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <path d="M12,26 L50,56 L88,26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="12" y1="80" x2="36" y2="56" stroke="currentColor" strokeWidth="1.5" />
            <line x1="88" y1="80" x2="64" y2="56" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        {/* Clock — inner left mid */}
        <div className="absolute left-[24%] top-[44%] hidden lg:block animate-float-3 opacity-[0.08]" style={{animationDelay:'1.6s'}}>
          <svg viewBox="0 0 100 100" className="w-12 h-12 text-slate-700 fill-none">
            <circle cx="50" cy="52" r="34" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <line x1="50" y1="52" x2="50" y2="30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="50" y1="52" x2="66" y2="62" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="38" y1="14" x2="46" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="62" y1="14" x2="54" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        {/* Currency note — center mid */}
        <div className="absolute left-[43%] top-[45%] hidden lg:block animate-float-4 opacity-[0.07] rotate-2" style={{animationDelay:'0.8s'}}>
          <svg viewBox="0 0 120 68" className="w-24 h-14 text-slate-700 fill-none">
            <rect x="3" y="3" width="114" height="62" rx="4" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <rect x="3" y="3" width="22" height="62" stroke="currentColor" strokeWidth="1.5" />
            <text x="8" y="38" fontFamily="sans-serif" fontWeight="900" fontSize="12" fill="currentColor">₹</text>
            <text x="34" y="24" fontFamily="sans-serif" fontWeight="700" fontSize="8" fill="currentColor">ONE THOUSAND</text>
            <text x="34" y="44" fontFamily="sans-serif" fontWeight="900" fontSize="18" fill="currentColor">1000</text>
            <line x1="34" y1="52" x2="110" y2="52" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        {/* Passbook — inner right mid */}
        <div className="absolute right-[22%] top-[43%] hidden lg:block animate-float-2 opacity-[0.08]" style={{animationDelay:'3.1s'}}>
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
        {/* Calendar — edge right */}
        <div className="absolute right-[3%] top-[40%] hidden md:block animate-float-5 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Never Miss a Deadline">
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

        {/* ── ROW 3: BOTTOM ── */}
        {/* ATM card — edge left */}
        <div className="absolute left-[3%] bottom-[5%] hidden md:block animate-float-4 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Easy Payments">
          <svg viewBox="0 0 110 72" className="w-22 h-14 text-slate-700 fill-none">
            <rect x="3" y="3" width="104" height="66" rx="8" stroke="currentColor" strokeWidth="2.5" fill="white" />
            <rect x="14" y="18" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
            <line x1="14" y1="52" x2="60" y2="52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="14" y1="42" x2="50" y2="42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="83" cy="38" r="11" stroke="currentColor" strokeWidth="2" />
            <circle cx="95" cy="38" r="11" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        {/* Form 16 — inner left bottom */}
        <div className="absolute left-[22%] bottom-[4%] hidden lg:block animate-float-2 opacity-[0.08]" style={{animationDelay:'2.5s'}}>
          <svg viewBox="0 0 100 100" className="w-12 h-12 text-slate-700 fill-none">
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
        {/* Stacked rupee coins — inner right bottom */}
        <div className="absolute right-[22%] bottom-[4%] hidden lg:block animate-float-3 opacity-[0.08]" style={{animationDelay:'0.9s'}}>
          <svg viewBox="0 0 100 100" className="w-12 h-12 text-slate-700 fill-none">
            <ellipse cx="50" cy="76" rx="28" ry="9" stroke="currentColor" strokeWidth="2" fill="white" />
            <ellipse cx="50" cy="64" rx="28" ry="9" stroke="currentColor" strokeWidth="2" fill="white" />
            <ellipse cx="50" cy="52" rx="28" ry="9" stroke="currentColor" strokeWidth="2" fill="white" />
            <ellipse cx="50" cy="40" rx="28" ry="9" stroke="currentColor" strokeWidth="2" fill="white" />
            <line x1="22" y1="40" x2="22" y2="76" stroke="currentColor" strokeWidth="2" />
            <line x1="78" y1="40" x2="78" y2="76" stroke="currentColor" strokeWidth="2" />
            <text x="42" y="44" fontFamily="sans-serif" fontWeight="900" fontSize="11" fill="currentColor">₹</text>
          </svg>
        </div>
        {/* Safe/vault — edge right */}
        <div className="absolute right-[3%] bottom-[5%] hidden md:block animate-float-1 opacity-[0.13] hover:opacity-[0.35] transition-opacity duration-300 pointer-events-auto cursor-pointer" title="Your Data is Safe">
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-600 mb-4 md:mb-6">{t.contact.badge}</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 md:mb-8 leading-tight">{t.contact.title}</h3>
            <p className="text-slate-600 text-base md:text-lg mb-8 md:mb-12 font-medium leading-relaxed max-w-md">
              {t.contact.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm text-indigo-600">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">{item.title}</h4>
                    <div className="text-slate-900 font-bold text-sm leading-relaxed">
                      {item.text.split(', ').map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 md:mt-16 p-6 sm:p-10 bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-xl shadow-slate-200 border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-slate-500 group-hover:scale-110 transition-transform">
                <WhatsAppIcon className="w-32 h-32" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4 relative z-10 text-slate-900">{t.common.instantResponse}</h3>
              <p className="text-slate-600 mb-8 text-sm relative z-10 max-w-xs">{t.common.whatsappDesk}</p>
              <a
                href="https://wa.me/917406296116"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-3.5 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-green-600 transition-all shadow-lg shadow-green-500/20 relative z-10"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{t.common.messageNow}</span>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-10 md:p-14 rounded-[2rem] sm:rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-50"
          >
            <h3 className="text-2xl font-display font-bold mb-10 text-slate-900">{t.contact.formTitle}</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">{t.contact.name} *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none font-medium text-slate-900" placeholder={t.common.enterName} required />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">{t.common.mobileNumber} *</label>
                  <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none font-medium text-slate-900" placeholder={t.common.enterMobile} required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">{t.contact.emailLabel} *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none font-medium text-slate-900" placeholder={t.common.enterEmail} required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">{t.common.businessType}</label>
                <div className="relative">
                  <select name="businessType" value={formData.businessType} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none appearance-none font-medium text-slate-900">
                    <option value="" disabled>{t.common.selectBusinessType}</option>
                    {t.common.businessTypes.map((type: string) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <Send size={14} className="rotate-90" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">{t.contact.message}</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all outline-none resize-none font-medium text-slate-900" placeholder={t.common.accountingNeeds}></textarea>
              </div>

              <button type="submit" className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold uppercase text-[11px] tracking-[0.3em] hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3">
                {formStatus === 'sending' ? 'Sending...' : t.contact.send}
              </button>
              {formStatus === 'success' && (
                <p className="text-emerald-600 text-center font-semibold text-sm bg-emerald-50 py-3 px-4 rounded-xl border border-emerald-100 animate-fade-in">Form submitted successfully! We will get back to you soon.</p>
              )}
              {formStatus === 'error' && (
                <div className="text-rose-600 text-center text-xs bg-rose-50 py-4 px-5 rounded-xl border border-rose-100 space-y-2 animate-fade-in">
                  <p className="font-bold uppercase tracking-wider">Submission Failed</p>
                  <p className="opacity-90 leading-relaxed font-medium break-all">{errorDetail}</p>
                  <p className="text-[10px] text-slate-500 font-normal mt-2 leading-relaxed">
                    Please try again after sometime.
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
