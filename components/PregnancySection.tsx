
import React from 'react';

const PREGNANCY_SERVICES = [
  {
    title: 'Hamal Tehrane Ka Powerful Naqsh',
    category: 'Hamal',
    image: 'https://i.pinimg.com/1200x/20/2f/7d/202f7da4444ed11df87eaf4b491158fc.jpg', // Updated thematic image
  },
  {
    title: 'Water In Womb During Pregnancy',
    category: 'Hamal',
    image: 'https://i.pinimg.com/736x/3d/34/74/3d34745e89a719b3149909b8980f8571.jpg', // Updated thematic image
  },
  {
    title: 'Pregnancy With PCOS Treatment',
    category: 'Hamal',
    image: 'https://i.pinimg.com/1200x/51/b8/9f/51b89f517aeaec23387009e4d8ff78b2.jpg', // Updated thematic image
  }
];

const PregnancySection: React.FC = () => {
  return (
    <section className="py-10 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header with Top-Right Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-[#064e3b] font-serif-display text-3xl md:text-5xl font-bold mb-4">
              Get Qurani Taweezat - Hammal
            </h2>
            <div className="h-1 w-24 bg-blue-200 mx-auto md:mx-0 rounded-full" />
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
          {PREGNANCY_SERVICES.map((item, idx) => (
            <div 
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden border border-blue-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,149,246,0.1)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Card Content */}
              <div className="p-8 text-center">
                <span className="inline-block px-4 py-1 bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase rounded-full mb-4">
                  Category: {item.category}
                </span>
                
                <h3 className="text-[#064e3b] font-serif-display text-xl md:text-2xl font-bold mb-8 min-h-[64px] leading-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                {/* View Details Button with Glow Effect */}
                <button className="relative w-full py-4 bg-white text-[#064e3b] border-2 border-blue-50 font-serif-display font-bold rounded-xl overflow-hidden group/btn transition-all duration-300">
                  <span className="relative z-10 group-hover/btn:text-white transition-colors">View Details</span>
                  {/* Glow/Hover background */}
                  <div className="absolute inset-0 bg-[#0095f6] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                  {/* Shadow glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 shadow-[0_0_30px_rgba(0,149,246,0.4)] transition-opacity" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Bottom pattern */}
        <div className="mt-12 flex justify-center opacity-10">
          <div className="w-16 h-16 rounded-full border-4 border-dashed border-blue-400 animate-spin-slow" />
        </div>
      </div>
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PregnancySection;
