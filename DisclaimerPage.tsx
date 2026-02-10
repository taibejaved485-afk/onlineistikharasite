
import React from 'react';
import { ViewType } from './App';

interface DisclaimerPageProps {
  onNavigate?: (target: ViewType) => void;
}

const DisclaimerPage: React.FC<DisclaimerPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-0">
      {/* Header Section */}
      <section className="relative pt-44 pb-20 bg-[#064e3b] islamic-pattern overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        
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
          <h1 className="text-white font-serif-display text-4xl md:text-6xl font-bold mb-4 drop-shadow-2xl">
            Legal <span className="text-[#daa520]">Disclaimer</span>
          </h1>
          <p className="text-white/60 font-amiri text-2xl italic">
            Zaroori Hadayaat aur Wazahat
          </p>
        </div>
      </section>

      {/* Notice Body */}
      <section className="py-24 bg-[#fffbeb] relative"> {/* Soft Yellow background */}
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-[0_30px_100px_rgba(218,165,32,0.1)] border-2 border-dashed border-[#daa520]/20 relative">
            
            {/* Warning Icon Badge */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#daa520] rounded-3xl rotate-45 flex items-center justify-center shadow-xl border-4 border-white">
               <i className="fa-solid fa-triangle-exclamation text-white text-3xl -rotate-45" />
            </div>

            <div className="space-y-16 mt-6">
              
              {/* Point 1: No Guarantees */}
              <div className="group">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">🌙</span>
                  <h2 className="text-[#064e3b] font-serif-display text-3xl font-bold">No Guarantees</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <p className="text-gray-600 font-lora text-lg leading-loose border-l-2 border-[#daa520]/20 pl-6">
                    Spiritual healing and results of prayers are subject to the will of Almighty Allah. While we provide authentic guidance, we do not offer a 100% guarantee of specific outcomes.
                  </p>
                  <p className="text-[#064e3b] font-amiri text-2xl leading-relaxed text-right dir-rtl bg-[#064e3b]/5 p-6 rounded-2xl">
                    Rohani ilaj aur duaon ke nataij Allah ke hukm se hotay hain. Hum kisi makhsoos natijay ki 100% guarantee nahi dete.
                  </p>
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent" />

              {/* Point 2: Not Medical Advice */}
              <div className="group">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">🏥</span>
                  <h2 className="text-[#064e3b] font-serif-display text-3xl font-bold">Not Medical Advice</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <p className="text-gray-600 font-lora text-lg leading-loose border-l-2 border-[#daa520]/20 pl-6">
                    Our services are spiritual in nature and should not be considered a substitute for professional medical treatment or diagnosis. Always consult a doctor for serious medical concerns.
                  </p>
                  <p className="text-[#064e3b] font-amiri text-2xl leading-relaxed text-right dir-rtl bg-[#064e3b]/5 p-6 rounded-2xl">
                    Hamari khidmat kisi doctor ya ilaj ka badal nahi hain. Sanjeeda masail mein doctor se ruju lazmi karein.
                  </p>
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent" />

              {/* Point 3: User Responsibility */}
              <div className="group">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">🛡️</span>
                  <h2 className="text-[#064e3b] font-serif-display text-3xl font-bold">User Responsibility</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <p className="text-gray-600 font-lora text-lg leading-loose border-l-2 border-[#daa520]/20 pl-6">
                    The decision to follow the information provided on this website rests solely with the user. We assume no liability for the choices made based on our spiritual guidance.
                  </p>
                  <p className="text-[#064e3b] font-amiri text-2xl leading-relaxed text-right dir-rtl bg-[#064e3b]/5 p-6 rounded-2xl">
                    Website par di gayi maloomat par amal karna user ka apna faisla hota hai.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Footer in Box */}
            <div className="mt-20 pt-10 border-t border-gray-100 text-center">
               <p className="text-[#daa520] font-amiri text-2xl font-bold mb-2">JazakAllah Khair</p>
               <p className="text-gray-400 font-lora text-sm uppercase tracking-widest">Trust & Faith Above All</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle Pattern Strip */}
      <section className="py-12 bg-[#064e3b] islamic-pattern opacity-90">
        <div className="container mx-auto px-6 text-center">
           <button 
             onClick={() => onNavigate?.('home')}
             className="px-12 py-4 bg-[#daa520] text-[#064e3b] rounded-full font-serif-display font-bold text-lg tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-2xl"
           >
             I Understand & Return Home
           </button>
        </div>
      </section>
    </div>
  );
};

export default DisclaimerPage;
