
import React, { useState } from 'react';
import { ViewType } from './App';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: string;
  items: FAQItem[];
}

const FAQ_DATA: FAQCategory[] = [
  {
    title: "Rohani Khidmat aur Shariah",
    icon: "🌙",
    items: [
      {
        question: "Kya aapka rohani ilaj aur Istikhara Shariah ke mutabiq hai?",
        answer: "Bilkul, hamari tamam khidmat sirf aur sirf Quran-o-Sunnat aur Ism-e-Azam ki roshni mein hain. Hum kisi bhi ghair-islami ya jadoo-tonay ke sakht khilaf hain."
      }
    ]
  },
  {
    title: "Method aur Waqt (Process)",
    icon: "📜",
    items: [
      {
        question: "Taweezat aur Talismans kitni der mein asar dikhate hain?",
        answer: "Hamare mahireen inhein makhsoos Muraqaba aur mubarak auqat mein tayyar karte hain. Inka asar Allah ke hukm se fori aur mustaqil hota hai."
      }
    ]
  },
  {
    title: "Rabta aur Privacy",
    icon: "🔒",
    items: [
      {
        question: "Kya meri pehchan aur masail raaz mein rakhe jayenge?",
        answer: "Hamari policy ke mutabiq aapka har masla aur zaati maloomat 100% mehfooz aur secret rakhi jati hain."
      }
    ]
  }
];

interface FAQPageProps {
  onNavigate?: (target: ViewType) => void;
}

const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [openItem, setOpenItem] = useState<string | null>("0-0");

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative pt-44 pb-24 bg-[#064e3b] islamic-pattern overflow-hidden">
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

        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <h1 className="text-white font-serif-display text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
            Frequently Asked <span className="text-[#daa520]">Questions</span>
          </h1>
          <p className="text-white/70 font-lora text-lg md:text-xl italic">
            "Aapke masail ke hal ke liye hamare aksar puche gaye sawalat aur unke sharai jawab."
          </p>
          <div className="mt-8 flex justify-center gap-4 opacity-30">
             <div className="h-px w-20 bg-[#daa520]" />
             <i className="fa-solid fa-star-and-crescent text-[#daa520]" />
             <div className="h-px w-20 bg-[#daa520]" />
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          {FAQ_DATA.map((category, catIdx) => (
            <div key={catIdx} className="mb-12 animate-fade-in-up" style={{ animationDelay: `${catIdx * 0.1}s` }}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl filter drop-shadow-md">{category.icon}</span>
                <h2 className="text-[#064e3b] font-serif-display text-2xl font-bold">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item, itemIdx) => {
                  const id = `${catIdx}-${itemIdx}`;
                  const isOpen = openItem === id;
                  
                  return (
                    <div 
                      key={id} 
                      className={`border rounded-2xl transition-all duration-500 overflow-hidden ${
                        isOpen ? 'border-[#daa520] bg-[#fdfdfc] shadow-lg' : 'border-gray-100 bg-white hover:border-[#daa520]/30'
                      }`}
                    >
                      <button 
                        onClick={() => toggleItem(id)}
                        className="w-full text-left px-8 py-6 flex justify-between items-center gap-4 group"
                      >
                        <span className={`text-lg font-bold font-serif-display transition-colors duration-300 ${isOpen ? 'text-[#064e3b]' : 'text-gray-700 group-hover:text-[#064e3b]'}`}>
                          {item.question}
                        </span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#daa520] text-[#064e3b] rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-[#daa520]/10 group-hover:text-[#daa520]'}`}>
                          <i className="fa-solid fa-chevron-down text-xs" />
                        </div>
                      </button>
                      
                      <div 
                        className={`transition-all duration-500 ease-in-out ${
                          isOpen ? 'max-h-[500px] opacity-100 pb-8 px-8' : 'max-h-0 opacity-0 pointer-events-none'
                        }`}
                      >
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#daa520]/20 to-transparent mb-6" />
                        <p className="text-gray-600 font-lora leading-loose text-lg italic border-l-4 border-[#daa520]/40 pl-6">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support Message */}
      <section className="py-20 bg-[#064e3b]/5 islamic-pattern">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="bg-white p-12 rounded-[40px] shadow-xl border border-gray-100">
            <h3 className="text-[#064e3b] font-serif-display text-2xl font-bold mb-4">Mazeed Sawalat?</h3>
            <p className="text-gray-500 font-lora text-lg mb-8">
              Agar aapka sawal yahan darj nahi hai, to humse baraye raast rabta karein. Hum har waqt apki rehnumayi ke liye maujood hain.
            </p>
            <button 
              onClick={() => {
                onNavigate?.('home');
                setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }}
              className="px-10 py-4 bg-[#064e3b] text-white font-serif-display font-bold rounded-full hover:bg-[#daa520] transition-all duration-500 shadow-lg"
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
