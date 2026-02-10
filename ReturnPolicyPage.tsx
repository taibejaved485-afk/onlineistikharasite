
import React from 'react';
import { ViewType } from './App';

interface ReturnPolicyPageProps {
  onNavigate?: (target: ViewType) => void;
}

const ReturnPolicyPage: React.FC<ReturnPolicyPageProps> = ({ onNavigate }) => {
  const policies = [
    {
      title: "Service Nature",
      icon: "📜",
      english: "Due to the spiritual nature and specialized effort required for prayers and talismans, physical returns are not possible.",
      urdu: "Rohani khidmat aur Taweezat makhsoos waqt aur mehnat se tayyar hotay hain, is liye in par 'Physical Return' mumkin nahi."
    },
    {
      title: "Refund Eligibility",
      icon: "🔄",
      english: "If an error occurs on our part (e.g., incorrect talisman sent), we will replace it without any additional fees.",
      urdu: "Agar koi ghalti hamari taraf se hui ho (maslan ghalat taweez bhej dia gaya), to hum usay baghair kisi izafi fees ke tabdeel karenge."
    },
    {
      title: "Consultation Fees",
      icon: "⚖️",
      english: "Istikhara and consultation fees are non-refundable as they represent the expert's time and guidance provided.",
      urdu: "Istikhara aur consultation ki fees 'Non-Refundable' hoti hai kyunke wo waqt aur rehnumayi ke liye li jati hai."
    },
    {
      title: "Re-evaluation Support",
      icon: "🤝",
      english: "If you are not satisfied, we offer a re-evaluation service instead of a refund to better understand and address your concerns.",
      urdu: "Agar aap mutmain nahi hain, to refund ke bajaye hum 'Re-evaluation' (dubara jaiza) ki sahulat dete hain."
    }
  ];

  return (
    <div className="pt-0">
      {/* Hero Header */}
      <section className="relative pt-44 pb-24 bg-[#064e3b] islamic-pattern overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
        
        <div className="absolute top-32 left-6 lg:left-12 z-30">
          <button 
            onClick={() => onNavigate?.('home')}
            className="group flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-[#daa520] border border-[#daa520]/30 text-white hover:text-[#064e3b] rounded-full transition-all duration-300 font-serif-display text-sm font-bold shadow-xl"
          >
            <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <h1 className="text-white font-serif-display text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
            Return & <span className="text-[#daa520]">Refund</span>
          </h1>
          <p className="text-white/70 font-lora text-lg md:text-xl italic">
            "Transparency and fairness in our spiritual services."
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-[#064e3b] font-serif-display text-3xl font-bold mb-4">Refund Policy Overview</h2>
            <p className="text-gray-500 font-lora text-lg leading-relaxed">
              We aim to provide the highest level of spiritual satisfaction. Due to the unique nature of our work, we have established the following guidelines.
            </p>
            <div className="mt-6 h-1 w-24 bg-[#daa520] mx-auto rounded-full" />
          </div>

          <div className="space-y-10">
            {policies.map((policy, idx) => (
              <div 
                key={idx} 
                className="group bg-[#fdfdfc] p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row gap-8 items-start md:items-center"
              >
                <div className="w-20 h-20 bg-[#064e3b]/5 rounded-3xl flex items-center justify-center text-4xl shadow-inner group-hover:bg-[#064e3b] group-hover:text-white transition-all duration-500">
                  {policy.icon}
                </div>
                
                <div className="flex-1 space-y-4">
                  <h3 className="text-[#064e3b] font-serif-display text-2xl font-bold">{policy.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                    <p className="text-gray-600 font-lora leading-relaxed border-l-2 border-[#daa520]/20 pl-4">
                      {policy.english}
                    </p>
                    <p className="text-[#064e3b] font-amiri text-xl leading-relaxed text-right dir-rtl bg-white/50 p-4 rounded-2xl">
                      {policy.urdu}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 bg-[#064e3b] rounded-[40px] text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-[#daa520] font-serif-display text-2xl font-bold mb-4">Need Clarification?</h3>
              <p className="text-white/80 font-lora text-lg mb-8 max-w-xl mx-auto">
                Agar aapko kisi policy se mutalliq mazeed maloomat chahiye, to hamari support team se rabta karein.
              </p>
              <button 
                onClick={() => {
                  onNavigate?.('home');
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
                className="px-10 py-4 bg-[#daa520] text-[#064e3b] rounded-full font-serif-display font-bold tracking-widest uppercase hover:bg-white transition-all duration-300"
              >
                Contact Support
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Decorative Strip */}
      <section className="py-12 bg-[#fdfdfc] border-t border-gray-50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 font-amiri italic tracking-widest uppercase text-sm">
            Adl-o-Insaaf Hamara Shewa Hai
          </p>
        </div>
      </section>
    </div>
  );
};

export default ReturnPolicyPage;
