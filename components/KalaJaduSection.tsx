
import React from 'react';

const KALA_JADU_SERVICES = [
  {
    title: 'Jadu Bandish Se Nijat Ka Taweez',
    category: 'Kala Jadu',
    image: 'https://i.pinimg.com/1200x/44/64/fa/4464fa9fa98e2bc02297d3fe688b757a.jpg',
  },
  {
    title: 'Kalay Jadu Aur bad Asrat Ka 100% Tor',
    category: 'Kala Jadu',
    image: 'https://i.pinimg.com/736x/c3/d0/0d/c3d00d9de92c0294b21e9148ad157ce2.jpg',
  },
  {
    title: 'Ayat Ul Khursi Ka Rohani Naqsh',
    category: 'Kala Jadu',
    image: 'https://i.pinimg.com/736x/13/a3/c0/13a3c01f7a503972dc925c038a5d8e9a.jpg',
  }
];

const KalaJaduSection: React.FC = () => {
  return (
    <section className="py-10 bg-[#f8fafc] relative overflow-hidden">
      {/* Decorative Deep Blue Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header with Top-Right Button (Symmetric with Hammal Section) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-[#1e3a8a] font-serif-display text-3xl md:text-5xl font-bold mb-4">
              Kala Jadu
            </h2>
            <div className="h-1 w-24 bg-blue-300 mx-auto md:mx-0 rounded-full" />
          </div>
          
          <div className="flex justify-center md:block">
            <a 
              href="#" 
              className="px-8 py-3 bg-[#0095f6] text-white font-serif-display font-bold text-sm tracking-widest uppercase rounded-full shadow-[0_10px_20px_rgba(0,149,246,0.2)] hover:shadow-[0_15px_30px_rgba(0,149,246,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              View More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {KALA_JADU_SERVICES.map((item, idx) => (
            <div 
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden border border-blue-50 shadow-[0_15px_45px_rgba(30,58,138,0.06)] hover:shadow-[0_25px_60px_rgba(30,58,138,0.12)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container with Smooth Zoom */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Card Content (Symmetric styling) */}
              <div className="p-8 text-center">
                <span className="inline-block px-4 py-1 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full mb-4">
                  Category: {item.category}
                </span>
                
                <h3 className="text-[#064e3b] font-serif-display text-xl md:text-2xl font-bold mb-8 min-h-[64px] leading-tight group-hover:text-[#1e3a8a] transition-colors">
                  {item.title}
                </h3>

                {/* View Details Button (Blue glow matching the theme) */}
                <button className="relative w-full py-4 bg-white text-[#1e3a8a] border-2 border-blue-50 font-serif-display font-bold rounded-xl overflow-hidden group/btn transition-all duration-300">
                  <span className="relative z-10 group-hover/btn:text-white transition-colors">View Details</span>
                  {/* Hover background slide */}
                  <div className="absolute inset-0 bg-[#1e3a8a] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                  {/* Shadow glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 shadow-[0_0_20px_rgba(30,58,138,0.3)] transition-opacity" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Decorative End Element */}
        <div className="mt-12 flex justify-center opacity-[0.05]">
          <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor" className="text-[#1e3a8a]">
             <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default KalaJaduSection;
