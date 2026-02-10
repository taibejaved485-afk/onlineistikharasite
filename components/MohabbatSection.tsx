
import React from 'react';

const MOHABBAT_SERVICES = [
  {
    title: 'Pasand Ki Shadi Ka Wazifa',
    category: 'Love & Marriage',
    image: 'https://i.pinimg.com/736x/45/1a/9b/451a9b12402e92ee98d8c8f6ca8c4300.jpg',
  },
  {
    title: 'Mian Biwi Mein Mohabbat Ka Naqsh',
    category: 'Love & Marriage',
    image: 'https://i.pinimg.com/736x/1a/5a/3e/1a5a3ee991891b54b032ae8a26415b10.jpg',
  },
  {
    title: 'Hub Ka Khaas Taweez',
    category: 'Love & Marriage',
    image: 'https://i.pinimg.com/736x/2e/a6/0e/2ea60e92fd63640cfd9a4e7cf9c00ef8.jpg',
  }
];

const MohabbatSection: React.FC = () => {
  return (
    <section id="mohabbat" className="py-10 bg-white relative overflow-hidden">
      {/* Decorative Rose Gold Accents */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-rose-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-[#9f1239] font-serif-display text-3xl md:text-5xl font-bold mb-4">
              Mohabbat
            </h2>
            <div className="h-1 w-24 bg-rose-200 mx-auto md:mx-0 rounded-full" />
          </div>
          
          <div className="flex justify-center md:block">
            <a 
              href="#" 
              className="px-8 py-3 bg-[#e11d48] text-white font-serif-display font-bold text-sm tracking-widest uppercase rounded-full shadow-[0_10px_20px_rgba(225,29,72,0.2)] hover:shadow-[0_15px_30px_rgba(225,29,72,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
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
          {MOHABBAT_SERVICES.map((item, idx) => (
            <div 
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden border border-rose-100 shadow-[0_15px_45px_rgba(159,18,57,0.04)] hover:shadow-[0_25px_60px_rgba(159,18,57,0.12)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#9f1239]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-8 text-center">
                <span className="inline-block px-4 py-1 bg-rose-50 text-rose-600 text-xs font-bold tracking-widest uppercase rounded-full mb-4">
                  Category: {item.category}
                </span>
                
                <h3 className="text-[#064e3b] font-serif-display text-xl md:text-2xl font-bold mb-8 min-h-[64px] leading-tight group-hover:text-rose-600 transition-colors">
                  {item.title}
                </h3>

                <button className="relative w-full py-4 bg-white text-[#9f1239] border-2 border-rose-50 font-serif-display font-bold rounded-xl overflow-hidden group/btn transition-all duration-300">
                  <span className="relative z-10 group-hover/btn:text-white transition-colors">View Details</span>
                  <div className="absolute inset-0 bg-[#e11d48] translate-y-full group-hover:btn:translate-y-0 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MohabbatSection;
