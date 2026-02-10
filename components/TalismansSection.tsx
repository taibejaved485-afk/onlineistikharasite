
import React from 'react';

const TALISMANS = [
  {
    label: 'Depression',
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 17l1 1h2l1-1" />
      </svg>
    ),
  },
  {
    label: 'Panic Attacks',
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    label: 'Black Magic',
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.364-6.364l-.707-.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M12 18v3" />
        <path d="M9 11l6 6m0-6l-6 6" />
      </svg>
    ),
  },
  {
    label: 'Love',
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const TalismansSection: React.FC = () => {
  return (
    <section className="relative py-24 min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image of Mosque Interior */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/03/a9/c0/03a9c0bd87e9476c3973f2f20fab9fa9.jpg')" }}
      >
        {/* Dark Emerald Overlay for Readability */}
        <div className="absolute inset-0 bg-black/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#064e3b]/85 via-black/50 to-[#064e3b]/85" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-white font-serif-display text-4xl md:text-5xl font-bold tracking-[0.15em] uppercase mb-6">
            Most Popular Talismans
          </h2>
          
          {/* Gold Decorative Line */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-24 bg-[#daa520]" />
            <div className="w-8 h-8 border-2 border-[#daa520] rotate-45 flex items-center justify-center">
                <div className="w-2 h-2 bg-[#daa520] rounded-full" />
            </div>
            <div className="h-[2px] w-24 bg-[#daa520]" />
          </div>
        </div>

        {/* Circular Items Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Curved Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none opacity-40">
            <svg width="100%" height="100" viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0,50 C200,100 300,0 500,50 C700,100 800,0 1000,50" stroke="#065f46" strokeWidth="4" strokeDasharray="8 8" />
            </svg>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start">
            {TALISMANS.map((talisman, index) => (
              <div key={index} className="flex flex-col items-center group">
                {/* Circle Container */}
                <div className="relative mb-8">
                  {/* Outer Dotted Ring */}
                  <div className="absolute -inset-4 border-2 border-[#065f46] border-dashed rounded-full group-hover:rotate-45 transition-transform duration-1000"></div>
                  
                  {/* Inner Solid Circle (Emerald Green) */}
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-[#064e3b] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(6,78,59,0.5)] border-4 border-[#065f46] relative z-10 transition-all duration-500 group-hover:scale-105 group-hover:border-[#daa520]">
                    {talisman.icon}
                    
                    {/* Inner Glow */}
                    <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                {/* Label */}
                <h3 className="text-white font-serif-display text-xl md:text-2xl font-bold tracking-wide group-hover:text-[#daa520] transition-colors">
                  {talisman.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 islamic-pattern opacity-5 pointer-events-none" />
    </section>
  );
};

export default TalismansSection;
