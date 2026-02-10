
import React from 'react';

const RIZQ_SERVICES = [
  {
    title: 'Karobar Mein Barkat Ka Taweez',
    category: 'Wealth & Business',
    image: 'https://i.pinimg.com/736x/ea/ac/0f/eaac0ffa26bc86f09672d914c3d9721f.jpg',
  },
  {
    title: 'Rizq Ki Bandish Ka Tor',
    category: 'Wealth & Business',
    image: 'https://i.pinimg.com/736x/a6/0d/89/a60d896f649b9f65da947a7e97a4e67b.jpg',
  },
  {
    title: 'Naye Karobar Ki Kamyabi',
    category: 'Wealth & Business',
    image: 'https://i.pinimg.com/1200x/97/4d/15/974d15cee94ffd06af939ff3663be509.jpg',
  }
];

const RizqSection: React.FC = () => {
  return (
    <section id="rizq" className="py-10 bg-[#fdfdfc] relative overflow-hidden">
      {/* Decorative Gold Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-[#92400e] font-serif-display text-3xl md:text-5xl font-bold mb-4">
              Rizq o Karobar
            </h2>
            <div className="h-1 w-24 bg-amber-200 mx-auto md:mx-0 rounded-full" />
          </div>
          
          <div className="flex justify-center md:block">
            <a 
              href="#" 
              className="px-8 py-3 bg-[#daa520] text-[#064e3b] font-serif-display font-bold text-sm tracking-widest uppercase rounded-full shadow-[0_10px_20px_rgba(218,165,32,0.2)] hover:shadow-[0_15px_30px_rgba(218,165,32,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
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
          {RIZQ_SERVICES.map((item, idx) => (
            <div 
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden border border-amber-100 shadow-[0_15px_45px_rgba(146,64,14,0.04)] hover:shadow-[0_25px_60px_rgba(146,64,14,0.12)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#92400e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-8 text-center">
                <span className="inline-block px-4 py-1 bg-amber-50 text-amber-700 text-xs font-bold tracking-widest uppercase rounded-full mb-4">
                  Category: {item.category}
                </span>
                
                <h3 className="text-[#064e3b] font-serif-display text-xl md:text-2xl font-bold mb-8 min-h-[64px] leading-tight group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>

                <button className="relative w-full py-4 bg-white text-[#92400e] border-2 border-amber-50 font-serif-display font-bold rounded-xl overflow-hidden group/btn transition-all duration-300">
                  <span className="relative z-10 group-hover/btn:text-white transition-colors">View Details</span>
                  <div className="absolute inset-0 bg-[#daa520] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RizqSection;
