
import React from 'react';
import { ViewType } from './App';

interface AboutPageProps {
  onNavigate?: (target: ViewType) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-0">
      {/* Hero Intro Section */}
      <section className="relative pt-44 pb-32 bg-[#064e3b] islamic-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
        
        {/* Back to Home Button */}
        <div className="absolute top-32 left-6 lg:left-12 z-30">
          <button 
            onClick={() => onNavigate?.('home')}
            className="group flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-[#daa520] border border-[#daa520]/30 text-white hover:text-[#064e3b] rounded-full transition-all duration-300 font-serif-display text-sm font-bold shadow-xl"
          >
            <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-[#daa520] font-amiri text-3xl md:text-5xl font-bold mb-8 drop-shadow-lg leading-tight">
              In the Name of Allah, the Most Gracious, the Most Merciful
            </h2>
            
            <div className="h-1 w-24 bg-[#daa520] mx-auto mb-10 rounded-full" />
            
            <p className="text-white text-xl md:text-3xl font-serif-display italic leading-relaxed mb-8">
              "If you are entangled in life’s problems… If every path seems blocked and your heart longs for peace, know that the Word of Allah is the greatest support."
            </p>
            
            <p className="text-white/80 font-lora text-lg md:text-xl max-w-4xl mx-auto leading-loose">
              <span className="text-[#daa520] font-bold">whitesmoke-seal-966629.hostingersite.com</span> is a trusted online spiritual healing platform, operating strictly according to Islamic Shariah principles. We provide authentic Istikhara services, Qur’anic talismans, and Islamic spiritual solutions to guide you toward peace, blessings, and success — all in the light of the Holy Qur’an and Sunnah.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section: Two Columns */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Column 1: What We Do */}
            <div className="space-y-12">
              <div className="relative">
                <h3 className="text-[#064e3b] font-serif-display text-3xl font-bold mb-4">Our Services – Islamic Spiritual Solutions You Can Trust</h3>
                <div className="w-20 h-1 bg-[#daa520]" />
              </div>
              
              <p className="text-gray-600 font-lora text-lg leading-relaxed">
                We offer a wide range of Shariah-compliant services, including:
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "Qur’anic Wazaif", text: "Authentic Islamic supplications and Qur’anic prayers for every life need." },
                  { title: "Ism-e-Azam Consultation", text: "Resolving personal, family, and financial difficulties through the blessings of Ism-e-Azam." },
                  { title: "Blessed Talismans", text: "Qur’anic talismans for protection, sustenance, love, marriage, and success." },
                  { title: "Shariah Istikhara", text: "Online Istikhara services in accordance with Shariah guidelines." },
                  { title: "Spiritual Healing", text: "Spiritual healing through Hadith and the sayings of Masoomeen A.S." },
                  { title: "Spiritual Rings", text: "Special Spiritual Rings for healing, blessings, and protection." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-[#064e3b]/10 flex items-center justify-center text-[#daa520] group-hover:bg-[#daa520] group-hover:text-white transition-all">
                      <i className="fa-solid fa-check text-xs" />
                    </div>
                    <div>
                      <h4 className="text-[#064e3b] font-bold font-serif-display text-xl mb-1">{item.title}</h4>
                      <p className="text-gray-500 font-lora leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Our Spiritual Method */}
            <div className="space-y-12">
              <div className="relative">
                <h3 className="text-[#064e3b] font-serif-display text-3xl font-bold mb-4">Our Method – How We Ensure Spiritual Effectiveness</h3>
                <div className="w-20 h-1 bg-[#daa520]" />
              </div>

              <p className="text-gray-600 font-lora text-lg leading-relaxed">
                Our spiritual experts carefully prepare Qur’anic talismans at specific blessed times, following all spiritual principles, and under deep Muraqaba (Islamic spiritual meditation). This ensures the spiritual power of each talisman is instant and lasting.
              </p>

              <div className="bg-[#064e3b]/5 p-8 rounded-[32px] border border-[#064e3b]/10 space-y-6">
                <h4 className="text-[#064e3b] font-bold font-serif-display text-xl">Our talismans address a variety of concerns:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Breaking black magic",
                    "Pregnancy & fertility",
                    "Protection from jinn",
                    "Relationship harmony",
                    "Attracting love & sustenance",
                    "Divine blessings"
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                      <div className="w-2 h-2 rounded-full bg-[#daa520]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                
                <p className="text-gray-600 font-lora italic border-t border-gray-100 pt-6">
                  We also create talismans based on the 99 Names of Allah and every Surah of the Holy Qur’an. Clients can request these talismans on blessed paper or set within a custom spiritual ring.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission Section: Gold Quote Box */}
      <section className="py-24 bg-[#fdfdfc] islamic-pattern">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="relative bg-gradient-to-br from-[#daa520] to-[#b8860b] p-12 md:p-20 rounded-[50px] shadow-2xl text-center overflow-hidden group">
            {/* Decorative Background Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
              <i className="fa-solid fa-mosque text-[20rem] text-white" />
            </div>

            <div className="relative z-10">
              <h3 className="text-[#064e3b] font-cinzel text-xl md:text-2xl font-bold tracking-[0.3em] uppercase mb-8">
                Our Mission
              </h3>
              
              <div className="mb-10 text-[#064e3b]">
                <i className="fa-solid fa-quote-left text-5xl opacity-30 mb-6 block" />
                <p className="text-[#064e3b] font-serif-display text-3xl md:text-5xl font-bold italic leading-tight">
                  “To serve the creation of Allah, bring hearts closer to Him, and promote love and peace in the world.”
                </p>
                <i className="fa-solid fa-quote-right text-5xl opacity-30 mt-6 block" />
              </div>

              <div className="h-px w-32 bg-[#064e3b]/30 mx-auto mb-10" />

              <p className="text-[#064e3b]/80 font-lora text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                At Online Istikhara Site, every service is performed with sincerity, faith, and dedication — so that every prayer becomes a source of healing, protection, and divine blessings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="bg-[#064e3b] py-12 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <button 
            onClick={() => onNavigate?.('home')}
            className="px-12 py-4 bg-[#daa520] text-[#064e3b] rounded-full font-serif-display font-bold text-lg tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-2xl"
          >
            Start Your Journey to Peace
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
