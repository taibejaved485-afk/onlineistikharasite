
import React, { useState } from 'react';
import { ViewType } from './App';

interface CounselingPageProps {
  onNavigate?: (target: ViewType) => void;
}

const FAQS = [
  {
    question: "What is Online Istikhara and how does it work?",
    answer: "Ye Allah se rasta maloom karne ka rohani zariya hai. Hamare mahireen aapki taraf se dua aur istikhara karte hain."
  },
  {
    question: "How can I request an Istikhara?",
    answer: "Aap form fill karein ya WhatsApp par apna naam aur masla bhej dein."
  },
  {
    question: "Is it reliable and safe?",
    answer: "Beshak, hum sirf Quran-o-Sunnah ke mutabiq kaam karte hain aur aapki raazdari (privacy) hamari priority hai."
  },
  {
    question: "Result Time?",
    answer: "24 se 48 ghanton mein natija bhej diya jata hai."
  },
  {
    question: "Follow-up support?",
    answer: "Ji haan, natijay ke baad bhi hum mukammal rohani rehnumayi dete hain."
  }
];

const CounselingPage: React.FC<CounselingPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-0 bg-[#f0f9ff]"> {/* Light Blue / Peace Theme */}
      {/* Hero Header */}
      <section className="relative pt-44 pb-32 islamic-pattern overflow-hidden text-center border-b border-[#064e3b]/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e0f2fe] to-[#f0f9ff] pointer-events-none opacity-90" />
        
        {/* Back Button */}
        <div className="absolute top-32 left-6 lg:left-12 z-30">
          <button 
            onClick={() => onNavigate?.('home')}
            className="group flex items-center gap-2 px-6 py-3 bg-[#064e3b]/10 hover:bg-[#064e3b] border border-[#064e3b]/20 text-[#064e3b] hover:text-white rounded-full transition-all duration-300 font-serif-display text-sm font-bold shadow-sm"
          >
            <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10 animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-10 opacity-60">
             <div className="h-px w-20 bg-[#064e3b]" />
             <i className="fa-solid fa-dove text-[#064e3b] text-2xl" />
             <div className="h-px w-20 bg-[#064e3b]" />
          </div>
          
          <h1 className="text-[#064e3b] font-serif-display text-4xl md:text-7xl font-bold mb-8 leading-tight">
            Personalized Spiritual <br />
            <span className="text-[#daa520]">Counseling & Guidance</span> 🧘‍♂️
          </h1>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-gray-700 font-lora text-xl leading-relaxed mb-6">
              Zindagi ki uljhanon aur zehni dabao se nijaat paane ke liye hamari rohani team se rabta karein. 
              Hum Quran-o-Sunnat ki roshni mein aapki rehnumayi karte hain.
            </p>
            <div className="p-8 bg-white/60 backdrop-blur-md rounded-[30px] border border-white shadow-xl">
               <p className="text-[#064e3b] font-amiri text-3xl md:text-4xl italic leading-relaxed dir-rtl">
                 "Pareshan na hon, har mushkil ka hal rohaniat mein mojood hai." 🕊️
               </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
             {['100% Confidentiality', 'Online Sessions', 'Experienced Mentors'].map((feature, i) => (
               <div key={i} className="px-6 py-3 bg-white rounded-full border border-blue-100 text-[#064e3b] font-bold text-sm tracking-widest uppercase flex items-center gap-3 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#daa520]" />
                  {feature}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Main Body Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Side: Illustration or Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-100 rounded-[50px] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-[40px] overflow-hidden border-4 border-white shadow-2xl">
                 <img 
                  src="https://i.pinimg.com/736x/0a/72/ce/0a72ce33d28e9e7c8891db01f83282e3.jpg" 
                  alt="Peaceful Spiritual Setting" 
                  className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/60 to-transparent" />
                 <div className="absolute bottom-10 left-10 right-10">
                    <p className="text-white font-serif-display text-2xl font-bold italic leading-tight">
                      Find clarity amidst the chaos of life.
                    </p>
                 </div>
              </div>
            </div>

            {/* Right Side: Detailed Features */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-[#064e3b] font-serif-display text-4xl font-bold">Personalized Sessions</h2>
                <div className="w-24 h-1.5 bg-[#daa520] rounded-full" />
                <p className="text-gray-600 font-lora text-xl leading-relaxed">
                  One-on-one guftagu jahan aapka masla raaz mein rakha jata hai. Hamara maqsad aapke dil ko sukoon aur dimagh ko tawayun faraham karna hai. 🔒
                </p>
              </div>

              <div className="space-y-8">
                 <div className="flex gap-6 items-start group">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#064e3b] shrink-0 shadow-sm group-hover:bg-[#064e3b] group-hover:text-white transition-all duration-300">
                       <i className="fa-solid fa-brain text-2xl" />
                    </div>
                    <div>
                       <h4 className="text-[#064e3b] font-serif-display text-2xl font-bold mb-2">Common Concerns</h4>
                       <p className="text-gray-500 font-lora leading-relaxed">
                         Depression, zehni dabao (stress), aur mustaqbil ki fikar ka rohani hal. Hum aapko makhsoos azkar aur wazaif ke sath jadeed rehnumayi dete hain. 🧠
                       </p>
                    </div>
                 </div>

                 <div className="flex gap-6 items-start group">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#064e3b] shrink-0 shadow-sm group-hover:bg-[#064e3b] group-hover:text-white transition-all duration-300">
                       <i className="fa-solid fa-shield-heart text-2xl" />
                    </div>
                    <div>
                       <h4 className="text-[#064e3b] font-serif-display text-2xl font-bold mb-2">Soulful Connection</h4>
                       <p className="text-gray-500 font-lora leading-relaxed">
                         Align your spirit with divine wisdom. Our mentors help you understand the deeper meanings of life's challenges through the lens of faith.
                       </p>
                    </div>
                 </div>
              </div>

              {/* Call to Action Button */}
              <div className="pt-8 text-center lg:text-left">
                <button 
                  onClick={() => {
                    onNavigate?.('home');
                    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }}
                  className="w-full md:w-auto px-12 py-6 bg-[#064e3b] text-white font-serif-display font-bold text-2xl rounded-2xl hover:bg-[#daa520] transition-all duration-500 shadow-[0_20px_40px_rgba(6,78,59,0.2)] flex items-center justify-center gap-6 group"
                >
                  Book My Session 📅
                  <i className="fa-solid fa-calendar-check group-hover:scale-110 transition-transform" />
                </button>
                <p className="mt-6 text-gray-400 font-lora italic text-sm">
                  * All sessions are strictly private and conducted via encrypted platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Accordion) */}
      <section className="py-24 bg-[#f0f9ff] islamic-pattern relative">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-[#064e3b] font-serif-display text-4xl md:text-5xl font-bold mb-4">Common Questions</h2>
            <p className="text-gray-500 font-lora text-lg italic">Frequently asked questions about our spiritual process.</p>
            <div className="w-24 h-1.5 bg-[#daa520] mx-auto mt-6 rounded-full" />
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className={`bg-white rounded-2xl overflow-hidden border-2 transition-all duration-500 ${
                  openFaq === idx ? 'border-[#daa520] shadow-xl' : 'border-blue-100 hover:border-blue-300'
                }`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center group"
                >
                  <span className={`text-xl font-serif-display font-bold transition-colors ${
                    openFaq === idx ? 'text-[#daa520]' : 'text-[#064e3b]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#064e3b] transition-transform duration-500 ${
                    openFaq === idx ? 'rotate-180 bg-[#daa520] text-white' : ''
                  }`}>
                    <i className="fa-solid fa-chevron-down text-xs" />
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    openFaq === idx ? 'max-h-[500px] opacity-100 pb-8 px-8' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#daa520]/20 to-transparent mb-6" />
                  <p className="text-gray-600 font-lora text-lg leading-relaxed italic border-l-4 border-blue-100 pl-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 font-amiri text-2xl italic tracking-widest uppercase">
              Har Mushkil Ka Hal Rohaniat Mein Hai
            </p>
          </div>
        </div>
      </section>

      {/* Faith Reflection Strip */}
      <section className="py-20 bg-blue-100/50">
        <div className="container mx-auto px-6 text-center">
           <p className="text-[#064e3b]/40 font-cinzel text-sm tracking-[0.4em] uppercase font-bold mb-4">Aman-o-Sakoon</p>
           <h3 className="text-[#064e3b] font-amiri text-3xl italic">"Verily, in the remembrance of Allah do hearts find rest."</h3>
        </div>
      </section>
    </div>
  );
};

export default CounselingPage;
