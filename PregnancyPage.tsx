
import React from 'react';
import { ViewType } from './App';

interface PregnancyPageProps {
  onNavigate?: (target: ViewType) => void;
}

const PregnancyPage: React.FC<PregnancyPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-0">
      {/* Hero Header */}
      <section className="relative pt-44 pb-32 bg-[#fdf2f8] overflow-hidden"> {/* Soft Pink */}
        <div className="absolute inset-0 islamic-pattern opacity-[0.05] pointer-events-none" />
        
        {/* Back Button */}
        <div className="absolute top-32 left-6 lg:left-12 z-30">
          <button 
            onClick={() => onNavigate?.('home')}
            className="group flex items-center gap-2 px-5 py-2.5 bg-[#064e3b] hover:bg-[#daa520] text-white rounded-full transition-all duration-300 font-serif-display text-sm font-bold shadow-xl"
          >
            <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <div className="animate-fade-in-up">
            <h4 className="text-[#064e3b] font-amiri text-2xl md:text-3xl font-bold mb-4 drop-shadow-sm">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </h4>
            <h1 className="text-[#064e3b] font-serif-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Spiritual Support for <br />
              <span className="text-rose-500 italic">Pregnancy & Fertility</span> 🌸
            </h1>
            
            <div className="bg-white/40 backdrop-blur-sm p-8 rounded-[40px] border border-rose-100 shadow-sm max-w-3xl mx-auto">
              <p className="text-[#064e3b] font-amiri text-3xl md:text-4xl leading-relaxed dir-rtl mb-4">
                "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ"
              </p>
              <p className="text-gray-600 font-lora text-lg italic leading-relaxed">
                "O my Lord! Grant me a righteous son." (Surah As-Saffat, 100)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-[#f0fdf4]"> {/* Pastel Green */}
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-12">
              <div className="relative">
                <h2 className="text-[#064e3b] font-serif-display text-3xl md:text-4xl font-bold mb-4">Understanding Common Challenges 🛡️</h2>
                <div className="w-20 h-1 bg-rose-400 rounded-full" />
              </div>

              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: "Be-auladi (Infertility)", text: "Addressing rohani obstacles and medical blockages through specialized Qur'anic prayers." },
                  { title: "Hamal ki Hifazat (Protection)", text: "Divine shields and wazaif to ensure a safe journey for both mother and child during the nine months." },
                  { title: "Pregnancy Obstacles", text: "Removing spiritual and physical hurdles that prevent successful conception or healthy birth." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-rose-50 hover:shadow-md transition-shadow">
                    <h4 className="text-[#064e3b] font-bold text-xl mb-2">{item.title}</h4>
                    <p className="text-gray-600 font-lora leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div className="relative">
                <h2 className="text-[#064e3b] font-serif-display text-3xl md:text-4xl font-bold mb-4">Our Rohani Solutions 📜</h2>
                <div className="w-20 h-1 bg-rose-400 rounded-full" />
              </div>

              <p className="text-gray-700 font-lora text-lg leading-relaxed">
                We provide a combination of Shariah-compliant spiritual treatments that have helped thousands of families find joy.
              </p>

              <ul className="space-y-6">
                {[
                  "Khas Qurani Wazaif tailored for each individual's spiritual state.",
                  "Makhsoos Talismans (Naqsh) prepared during blessed hours.",
                  "Rohani Ilaj (Spiritual Healing) to cleanse the womb and body from negativity.",
                  "Personalized consultation to understand the spiritual roots of issues."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-lg">
                      <i className="fa-solid fa-heart text-[10px]" />
                    </div>
                    <span className="text-gray-700 font-medium font-lora leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hope & Faith Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <div className="bg-[#fdf2f8] p-12 md:p-16 rounded-[50px] border border-rose-100 shadow-2xl group">
             <span className="text-rose-500 text-5xl mb-6 block animate-float">🕊️</span>
             <h3 className="text-[#064e3b] font-serif-display text-3xl md:text-4xl font-bold mb-6">Hope & Faith</h3>
             <p className="text-[#064e3b] font-amiri text-2xl md:text-3xl leading-relaxed mb-8 dir-rtl">
               "Shifa sirf Allah ke hath mein hai, hum sirf waseela hain."
             </p>
             <p className="text-gray-600 font-lora text-lg leading-relaxed mb-10 italic">
               Never lose hope in the mercy of Allah. He is the Giver of life and the Hearer of all prayers. Our role is only to guide you through the spiritual paths established in our faith.
             </p>
             <button 
               onClick={() => {
                 onNavigate?.('home');
                 setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
               }}
               className="px-12 py-4 bg-[#064e3b] text-white rounded-full font-serif-display font-bold text-lg tracking-widest uppercase hover:bg-[#daa520] transition-all duration-300 shadow-xl"
             >
               Consult Now
             </button>
          </div>
        </div>
      </section>

      {/* Footer Note Strip */}
      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 font-lora italic text-sm md:text-base">
            * Note: All spiritual guidance and services are provided for faith purposes. Results depend entirely on Allah’s divine will and decree.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PregnancyPage;
