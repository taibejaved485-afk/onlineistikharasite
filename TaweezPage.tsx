
import React from 'react';
import { ViewType } from './App';

interface TaweezPageProps {
  onNavigate?: (target: ViewType) => void;
}

const TaweezPage: React.FC<TaweezPageProps> = ({ onNavigate }) => {
  const categories = [
    {
      title: "Hifazat (Protection) 🛡️",
      icon: "💠",
      desc: "Nazar-e-bad, dushmani aur har qism ke shar se hifazat ke liye Quran-o-Sunnat ki roshni mein tayyar karda naqsh."
    },
    {
      title: "Rizq & Barkat 💰",
      icon: "💠",
      desc: "Karobar mein khush-haali aur rizq mein barkat ke liye makhsoos Qurani ayaat aur wazaif ka majmua."
    },
    {
      title: "Love & Marriage ❤️",
      icon: "💠",
      desc: "Mian biwi mein mohabbat aur pasand ki shadi mein rukawaton ko door karne ke liye sharai hal."
    },
    {
      title: "Shifa (Healing) 💊",
      icon: "💠",
      desc: "Jismani aur nafsiati amraz se shifa ke liye makhsoos rohani ilaj aur ayaat-e-shifa ke taweezat."
    }
  ];

  return (
    <div className="pt-0 bg-[#fcfaf2]"> {/* Vintage Parchment Background */}
      {/* Hero Header */}
      <section className="relative pt-44 pb-32 bg-[#064e3b] islamic-pattern overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        
        <div className="absolute top-32 left-6 lg:left-12 z-30">
          <button 
            onClick={() => onNavigate?.('home')}
            className="group flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-[#daa520] border border-[#daa520]/30 text-white rounded-full transition-all duration-300 font-serif-display text-sm font-bold shadow-xl"
          >
            <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <h1 className="text-white font-serif-display text-4xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            Authentic Islamic <span className="text-[#daa520]">Taweezat</span> 📜
          </h1>
          <p className="text-[#daa520] font-amiri text-2xl md:text-3xl italic mb-8 drop-shadow-md">
            Qurani Aayaat aur Ism-e-Azam ki barkat se tayyar karda authentic Taweezat. ✨
          </p>
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-[#daa520] to-transparent mx-auto" />
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-[#064e3b] font-serif-display text-3xl md:text-5xl font-bold mb-4 italic">Spiritual Categories</h2>
            <div className="w-24 h-1 bg-[#daa520] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <div 
                key={idx} 
                className="group bg-white p-10 rounded-2xl border-2 border-[#064e3b]/10 hover:border-[#daa520] transition-all duration-500 shadow-sm hover:shadow-2xl text-center relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#064e3b]/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                
                <span className="text-4xl mb-6 block group-hover:scale-110 transition-transform">{cat.icon}</span>
                <h3 className="text-[#064e3b] font-serif-display text-xl font-bold mb-4">{cat.title}</h3>
                <p className="text-gray-600 font-lora text-sm leading-relaxed mb-6">
                  {cat.desc}
                </p>
                <div className="h-0.5 w-12 bg-[#daa520]/30 mx-auto group-hover:w-20 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-[#064e3b] text-white relative overflow-hidden islamic-pattern">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-serif-display text-3xl md:text-5xl font-bold leading-tight">
                Our Sacred <span className="text-[#daa520]">Method</span> 🖋️
              </h2>
              <p className="text-white/80 font-lora text-lg leading-relaxed">
                Hamare makhsoos mubarak auqat aur Muraqaba ke sath likhay gaye Taweezat apni misal aap hain.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#daa520]/20 flex items-center justify-center shrink-0 border border-[#daa520]/30">
                    <i className="fa-solid fa-pen-nib text-[#daa520]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-[#daa520]">Authentic amaliyat</h4>
                    <p className="text-white/60 text-sm">Sirf Shariah ke mutabiq aur har qism ke jadoo se pak amaliyat.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#daa520]/20 flex items-center justify-center shrink-0 border border-[#daa520]/30">
                    <i className="fa-solid fa-clock text-[#daa520]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-[#daa520]">Blessed Timings</h4>
                    <p className="text-white/60 text-sm">Taweezat ko makhsoos Sa'at (timings) mein tayyar kiya jata hai.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1.5 h-12 bg-[#daa520]" />
                <h3 className="font-serif-display text-2xl font-bold">100% Shariah Compliant ✅</h3>
              </div>
              <p className="text-white/70 font-amiri text-2xl leading-relaxed text-right dir-rtl mb-10">
                Hum har kisam ke shirkia amliyat se barriy-uz-zimma hain. Hamare tamam naqsh Quran-e-Pak ki ayaat-e-mubaraka aur Allah ke sifaati namon se mush-tamil hain.
              </p>
              <button 
                onClick={() => {
                  onNavigate?.('home');
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
                className="w-full py-4 bg-[#daa520] text-[#064e3b] font-serif-display font-bold text-lg rounded-xl hover:bg-white transition-all shadow-xl"
              >
                Request Custom Taweez
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Decorative Pattern */}
      <div className="h-24 bg-gradient-to-b from-[#064e3b] to-[#fcfaf2] islamic-pattern opacity-10" />
    </div>
  );
};

export default TaweezPage;
