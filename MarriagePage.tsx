
import React from 'react';
import { ViewType } from './App';

interface MarriagePageProps {
  onNavigate?: (target: ViewType) => void;
}

const MarriagePage: React.FC<MarriagePageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-0 bg-[#fdfdfc]">
      {/* Hero Header */}
      <section className="relative pt-44 pb-32 bg-[#064e3b] islamic-pattern overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        
        {/* Back Button */}
        <div className="absolute top-32 left-6 lg:left-12 z-30">
          <button 
            onClick={() => onNavigate ? onNavigate('home') : (window.location.href = 'index.html')}
            className="group flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-[#daa520] border border-[#daa520]/30 text-white rounded-full transition-all duration-300 font-serif-display text-sm font-bold shadow-2xl"
          >
            <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10 animate-fade-in-up">
          <div className="text-6xl mb-8 filter drop-shadow-xl animate-float">💍</div>
          <h1 className="text-white font-serif-display text-4xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            Online Istikhara for <span className="text-[#daa520]">Love Marriage</span>
          </h1>
          <p className="text-[#daa520] font-amiri text-2xl md:text-3xl italic mb-10 drop-shadow-md">
            Pasand ki Shadi Mein Rukawat Ka Rohani Hal
          </p>
          <div className="h-1.5 w-64 bg-gradient-to-r from-transparent via-[#daa520] to-transparent mx-auto" />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-12">
              <div className="relative">
                <h2 className="text-[#064e3b] font-serif-display text-3xl md:text-4xl font-bold mb-4">Umeed ki Kiran ✨</h2>
                <div className="w-20 h-1 bg-rose-400 rounded-full" />
              </div>

              <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-2xl space-y-6">
                <p className="text-gray-600 font-lora text-lg leading-relaxed">
                  Pasand ki shadi har insan ka aik khwab hota hai, lekin aksar auqat is raaste mein bohat si mushkilat aur rukawatein pesh aati hain. Hamari website **Online Istikhara** aapko Quran-o-Sunnat ki roshni mein aik aisi rohani renumayi faraham karti hai jo aapke dil ko sukoon aur aapke raste ko asan bana deti hai.
                </p>
                <p className="text-[#064e3b] font-amiri text-2xl leading-relaxed text-right dir-rtl p-6 bg-[#064e3b]/5 rounded-2xl border-r-4 border-[#daa520]">
                  "Agar aap shadi ke mamlay mein pareshan hain ya faisla nahi kar pa rahe, to Istikhara Allah ki taraf se behtareen mashwara hai."
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="relative">
                <h2 className="text-[#064e3b] font-serif-display text-3xl md:text-4xl font-bold mb-4">Hamari Khidmat 📜</h2>
                <div className="w-20 h-1 bg-rose-400 rounded-full" />
              </div>

              <ul className="space-y-6">
                {[
                  "Love Marriage ke liye makhsoos Masnoon Istikhara.",
                  "Rishton mein bandish aur rukawaton ka rohani tor.",
                  "Mian-biwi aur hone wale shareek-e-hayat ke darmiyan mohabbat ka wazifa.",
                  "Gharelu mukhalifat aur walidain ko raazi karne ke liye sharai mashwaray.",
                  "Pasand ki shadi mein kamyabi ke liye Ism-e-Azam ka wird."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <i className="fa-solid fa-heart text-[10px]" />
                    </div>
                    <span className="text-gray-700 font-medium font-lora text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#064e3b] islamic-pattern relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-md p-12 md:p-16 rounded-[50px] border border-white/20 shadow-2xl">
             <h3 className="text-[#daa520] font-serif-display text-3xl md:text-4xl font-bold mb-6">Aaj Hi Raabta Karein</h3>
             <p className="text-white/80 font-lora text-lg md:text-xl mb-10 max-w-2xl mx-auto">
               Apne masail ko mazeed na barhaein. Allah par tawakkul karein aur hamare rohani experts se behtareen mashwara hasil karein.
             </p>
             <button 
               onClick={() => {
                 onNavigate ? onNavigate('home') : (window.location.href = 'index.html#contact');
               }}
               className="px-12 py-5 bg-[#daa520] text-[#064e3b] rounded-full font-serif-display font-bold text-xl tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-[0_15px_30px_rgba(218,165,32,0.4)]"
             >
               Consult an Expert Now
             </button>
          </div>
        </div>
      </section>

      {/* Footer Decoration */}
      <div className="h-24 bg-white islamic-pattern opacity-10" />
    </div>
  );
};

export default MarriagePage;
