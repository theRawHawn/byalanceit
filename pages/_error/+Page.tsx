import React from 'react';
import { usePageContext } from 'vike-react/usePageContext';
import { motion } from 'motion/react';
import { useLanguage } from '../../src/context/LanguageContext';
import { AlertCircle, FileQuestion, ArrowLeft, Home } from 'lucide-react';

const errorTranslations: Record<string, { title404: string; desc404: string; title500: string; desc500: string; buttonText: string }> = {
  en: {
    title404: "Page Not Found",
    desc404: "The page you are looking for does not exist or has been moved to another location.",
    title500: "Server Error",
    desc500: "An internal server error occurred. Our technical compliance team is on it.",
    buttonText: "Return to Home"
  },
  hi: {
    title404: "पृष्ठ नहीं मिला",
    desc404: "आप जो पृष्ठ खोज रहे हैं वह मौजूद नहीं है या किसी अन्य स्थान पर स्थानांतरित कर दिया गया है।",
    title500: "सर्वर त्रुटि",
    desc500: "एक आंतरिक सर्वर त्रुटि उत्पन्न हुई। हमारी तकनीकी टीम इसकी जांच कर रही है।",
    buttonText: "मुख्य पृष्ठ पर वापस जाएं"
  },
  kn: {
    title404: "ಪುಟ ಕಂಡುಬಂದಿಲ್ಲ",
    desc404: "ನೀವು ಹುಡುಕುತ್ತಿರುವ ಪುಟ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ ಅಥವಾ ಬೇರೆಡೆಗೆ ಸ್ಥಳಾಂತರಿಸಲಾಗಿದೆ.",
    title500: "ಸರ್ವರ್ ದೋಷ",
    desc500: "ಆಂತರಿಕ ಸರ್ವರ್ ದೋಷ ಸಂಭವಿಸಿದೆ. ನಮ್ಮ ತಾಂತ್ರಿಕ ತಂಡವು ಕಾರ್ಯನಿರತವಾಗಿದೆ.",
    buttonText: "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ"
  },
  te: {
    title404: "పేజీ కనుగొనబడలేదు",
    desc404: "మీరు వెతుకుతున్న పేజీ ఉనికిలో లేదు లేదా మరొక స్థానానికి తరలించబడింది.",
    title500: "సర్వర్ లోపం",
    desc500: "అంతర్గత సర్వర్ లోపం సంభవించింది. మా సాంకేతిక బృందం పని చేస్తోంది.",
    buttonText: "హోమ్ పేజీకి తిరిగి వెళ్ళండి"
  },
  mr: {
    title404: "पृष्ठ आढळले नाही",
    desc404: "आपण शोधत असलेले पृष्ठ अस्तित्त्वात नाही किंवा दुसऱ्या स्थानावर हलवले गेले आहे.",
    title500: "सर्व्हर त्रुटी",
    desc500: "अंतर्गत सर्व्हर त्रुटी आली आहे. आमचे तांत्रिक पथक यावर काम करत आहे.",
    buttonText: "मुख्यपृष्ठावर परत जा"
  },
  ta: {
    title404: "பக்கம் இல்லை",
    desc404: "நீங்கள் தேடும் பக்கம் இல்லை அல்லது வேறு இடத்திற்கு மாற்றப்பட்டுள்ளது.",
    title500: "சர்வர் பிழை",
    desc500: "உள் சர்வர் பிழை ஏற்பட்டது. எங்கள் தொழில்நுட்பக் குழு அதைச் சரிசெய்து வருகிறது.",
    buttonText: "முகப்பு பக்கத்திற்கு திரும்புக"
  }
};

export function Page() {
  const pageContext = usePageContext();
  const { language } = useLanguage();
  
  // Detect if 404, default to 500 otherwise
  const is404 = pageContext.is404;
  
  // Safe language selection fallback
  const langKey = (language && errorTranslations[language]) ? language : 'en';
  const tStrings = errorTranslations[langKey];
  
  const title = is404 ? tStrings.title404 : tStrings.title500;
  const description = is404 ? tStrings.desc404 : tStrings.desc500;

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12 bg-slate-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-xl w-full text-center relative z-10"
      >
        <div className="flex justify-center mb-6">
          <motion.div 
            initial={{ rotate: -10 }}
            animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`p-5 rounded-full ${is404 ? 'bg-blue-50 text-blue-600' : 'bg-rose-50 text-rose-600'} shadow-md`}
          >
            {is404 ? (
              <FileQuestion size={48} className="stroke-[1.5]" />
            ) : (
              <AlertCircle size={48} className="stroke-[1.5]" />
            )}
          </motion.div>
        </div>

        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.3 }}
          className="text-xs font-mono tracking-widest text-slate-500 uppercase block mb-1"
        >
          {is404 ? 'ERROR 404 • COMPLIANCE ROUTE MISSING' : 'ERROR 500 • INTERNAL SYSTEMS BLOCKED'}
        </motion.span>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          {title}
        </h1>
        
        <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              window.history.back();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-2xl transition-all shadow-sm group cursor-pointer"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            <span>Go Back</span>
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-2xl transition-all shadow-md active:scale-95"
          >
            <Home size={18} />
            <span>{tStrings.buttonText}</span>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
