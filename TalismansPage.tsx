
import React from 'react';
import { ViewType } from './App';

interface TalismansPageProps {
  onNavigate?: (target: ViewType) => void;
}

const TalismansPage: React.FC<TalismansPageProps> = ({ onNavigate }) => {
  const mainCards = [
    {
      title: "Protection",
      icon: "🛡️",
      urdu: "Hifazat-e-Khuda",
      desc: "Sacred protection against evil eye, negative energies, and spiritual attacks. Prepared during specific celestial alignments.",
      features: ["Evil Eye Removal", "Spiritual Shielding", "House Blessings"]
    },
    {
      title: "Prosperity",
      icon: "💰",
      urdu: "Barkat-e-Rizq",
      desc: "Unlock the flow of abundance and success in trade and wealth. Attract positive divine sustenance into your home.",
      features: ["Business Growth", "Debt Relief", "Abundant Earnings"]
    },
    {
      title: "Success",
      icon: "🏆",
      urdu: "Fatah-o-Kamrani",
      desc: "Overcome hurdles in career, education, and legal matters. Designed to align your path with divine victory.",
      features: ["Exam Success", "Career Advancement", "Influence & Power"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#064e3b]">
      {/* Hero Section */}
      <section className="relative pt-44 pb-32 islamic-pattern overflow-hidden text-center border-b border-[#daa520]/20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        
        {/* Back Button */}
        <div className="absolute top-32 left-6 lg:left-12 z-30">
          <button 
            onClick={() => onNavigate?.('home')}
            className="group flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-[#daa520] border border-[#daa520]/40 text-white hover:text-[#064e3b] rounded-full transition-all duration-300 font-serif-display text-sm font-bold shadow-2xl"
          >
            <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10 animate-fade-in-up">
          <div className="flex items-center justify-center gap-6 mb-8 opacity-40">
             <div className="h-px w-24 bg-[#daa520]" />
             <i className="fa-solid fa-moon text-[#daa520] text-2xl" />
             <div className="h-px w-24 bg-[#daa520]" />
          </div>
          
          <h1 className="text-white font-serif-display text-5xl md:text-8xl font-bold mb-6 drop-shadow-[0_10px_30px_rgba(218,165,32,0.3)] tracking-tight">
            Powerful Spiritual <span className="text-[#daa520]">Talismans</span>
          </h1>
          
          <p className="text-[#daa520] font-amiri text-2xl md:text-4xl italic mb-10 drop-shadow-md tracking-widest uppercase">
            Sultanate-e-Noor Emerald
          </p>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-white/80 font-lora text-lg md:text-xl leading-relaxed">
              Every talisman crafted at Noor Emerald is a masterpiece of spiritual engineering. 
              Infused with the highest quality <span className="text-[#daa520] font-bold">Zafran (Saffron)</span>, 
              pure <span className="text-[#daa520] font-bold">Musk</span>, and blessed Rose Water, 
              each naqsh is written during the most auspicious hours of planetary alignment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
            {mainCards.map((card, idx) => (
              <div 
                key={idx}
                className="group relative bg-[#022c22] p-12 rounded-[50px] border border-[#daa520]/20 hover:border-[#daa520] transition-all duration-700 shadow-3xl text-center flex flex-col items-center"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 islamic-pattern opacity-5 group-hover:opacity-10 pointer-events-none rounded-[50px]" />
                
                {/* Icon Container */}
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center text-5xl mb-10 border border-[#daa520]/20 shadow-xl group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(218,165,32,0.3)] transition-all duration-500">
                   {card.icon}
                </div>

                <h3 className="text-[#daa520] font-cinzel text-xl tracking-[0.3em] font-bold mb-2 uppercase">
                   {card.urdu}
                </h3>
                <h2 className="text-white font-serif-display text-3xl font-bold mb-6">
                   {card.title}
                </h2>
                
                <div className="h-px w-16 bg-[#daa520]/30 mb-8" />

                <p className="text-white/60 font-lora text-lg leading-relaxed mb-10 italic">
                  {card.desc}
                </p>

                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  {card.features.map((f, i) => (
                    <span key={i} className="px-4 py-1.5 bg-white/5 rounded-full text-[#daa520] text-xs font-bold uppercase tracking-widest border border-[#daa520]/10">
                      {f}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => {
                    onNavigate?.('home');
                    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }}
                  className="mt-auto w-full py-4 bg-[#daa520] text-[#064e3b] font-serif-display font-bold text-lg rounded-2xl hover:bg-white transition-all duration-300 shadow-2xl"
                >
                  Request Consultation
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Section */}
      <section className="py-24 bg-black/30 border-y border-[#daa520]/10">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2">
                <div className="relative p-2 rounded-[40px] border border-[#daa520]/20">
                   <img 
                    src="https://i.pinimg.com/736x/ea/ac/0f/eaac0ffa26bc86f09672d914c3d9721f.jpg" 
                    alt="Sacred Preparation" 
                    className="w-full h-auto rounded-[35px] opacity-80 group-hover:opacity-100 transition-opacity"
                   />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-8">
                 <h2 className="text-white font-serif-display text-4xl font-bold leading-tight">
                    The Sacred Chemistry of <br />
                    <span className="text-[#daa520]">Zafran & Musk</span> 🖋️
                 </h2>
                 <p className="text-white/70 font-lora text-lg leading-relaxed">
                   Hamare tamam tilismat aur naqsh makhsoos Zafran (Saffron) ki siyah (ink) se tayyar kiye jate hain. Zafran apni rohani quwwat aur pakeezgi ke liye mash'hoor hai. Is mein Musk (Kasturi) ki mehak shamil ki jati hai taake rohani asrat mein be-panah izafa ho sake.
                 </p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white/5 rounded-3xl border-l-4 border-[#daa520]">
                       <h4 className="text-white font-bold mb-1">Genuine Saffron</h4>
                       <p className="text-xs text-white/50">Used for its purifying spiritual vibrations.</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-3xl border-l-4 border-[#daa520]">
                       <h4 className="text-white font-bold mb-1">Natural Musk</h4>
                       <p className="text-xs text-white/50">Attracts positive spiritual entities and angels.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Faith Confirmation */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <p className="text-[#daa520]/40 font-amiri text-3xl italic tracking-widest uppercase">
            Faith is the strongest Shield.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TalismansPage;
