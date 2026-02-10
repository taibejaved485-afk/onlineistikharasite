
import React from 'react';

interface Talisman {
  title: string;
  icon: React.ReactNode;
}

const TALISMANS_DATA: Talisman[] = [
  {
    title: 'Success & Career',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.07 6.361h6.687c.969 0 1.371 1.24.588 1.81l-5.414 3.934 2.07 6.361c.3.921-.755 1.688-1.54 1.11L12 18.57l-5.414 3.934c-.785.578-1.84-.189-1.54-1.11l2.07-6.361-5.414-3.934c-.783-.57-.38-1.81.588-1.81h6.687l2.07-6.361z" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" className="opacity-40" />
      </svg>
    )
  },
  {
    title: 'Love & Marriage',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 11a3 3 0 106 0 3 3 0 00-6 0z" className="opacity-30" />
      </svg>
    )
  },
  {
    title: 'Protection (Black Magic)',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1" className="opacity-40" />
      </svg>
    )
  },
  {
    title: 'Business & Rizq',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  }
];

const TalismanCards: React.FC = () => {
  return (
    <section className="py-24 bg-[#fdfdfc] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#064e3b] font-cinzel text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Popular Talismans & Taweezat
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#daa520]/40" />
            <div className="w-2 h-2 rounded-full bg-[#daa520]" />
            <div className="h-px w-16 bg-[#daa520]/40" />
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {TALISMANS_DATA.map((item, idx) => (
            <div 
              key={idx}
              className="group relative h-[380px] bg-[#1a1a1a] rounded-xl overflow-hidden transition-all duration-700 hover:bg-[#252525] border border-[#daa520]/20 cursor-pointer shadow-2xl"
            >
              {/* Golden Floral Border (Thin) */}
              <div className="absolute inset-2 border border-[#daa520]/10 rounded-lg pointer-events-none group-hover:border-[#daa520]/30 transition-colors duration-500" />
              
              {/* Calligraphy Watermark (Faint) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-700">
                <span className="font-amiri text-8xl text-white transform -rotate-12">بسم الله</span>
              </div>

              {/* Card Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                {/* Icon Container */}
                <div className="mb-8 p-4 text-[#daa520] group-hover:scale-110 group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-white font-cinzel text-xl md:text-2xl font-bold tracking-wide leading-tight group-hover:text-[#daa520] transition-colors duration-500">
                  {item.title}
                </h3>

                {/* AI Request Button (Appears on Hover) */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <button className="w-full py-3 bg-[#daa520] text-[#064e3b] font-cinzel font-bold text-xs tracking-widest uppercase rounded shadow-[0_0_20px_rgba(218,165,32,0.4)] hover:bg-white hover:text-[#064e3b] transition-all duration-300">
                    Request via AI
                  </button>
                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#daa520]/20 rounded-tl-xl m-2 group-hover:border-[#daa520] transition-colors duration-500" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#daa520]/20 rounded-tr-xl m-2 group-hover:border-[#daa520] transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#daa520]/20 rounded-bl-xl m-2 group-hover:border-[#daa520] transition-colors duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#daa520]/20 rounded-br-xl m-2 group-hover:border-[#daa520] transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* Decorative Bottom Pattern */}
        <div className="mt-16 flex justify-center opacity-10">
           <svg width="200" height="40" viewBox="0 0 200 40" fill="currentColor" className="text-[#daa520]">
              <path d="M0 20 C50 0 150 40 200 20" stroke="currentColor" fill="none" strokeWidth="1" strokeDasharray="5,5" />
           </svg>
        </div>
      </div>
    </section>
  );
};

export default TalismanCards;
