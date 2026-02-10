
import React from 'react';

const SOLUTIONS = [
  {
    title: 'Karobar Mein Barkat',
    subtitle: 'Business Success',
    description: 'Special wazaif and spiritual guidance for growth and prosperity in your business and daily earnings.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Shadi ki Rukawat',
    subtitle: 'Marriage Issues',
    description: 'Spiritual solutions for removing obstacles in marriage and fostering harmony in marital relationships.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Sehat aur Shifa',
    subtitle: 'Health & Healing',
    description: 'Quranic prayers and spiritual practices for physical and mental well-being and recovery.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Dushmani Se Hifazat',
    subtitle: 'Protection',
    description: 'Powerful shields through divine names to protect you and your family from negative energies and enemies.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
];

const SolutionsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative floral motifs in corners */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] pointer-events-none rotate-180">
        <img src="https://www.transparentpng.com/download/floral/gold-floral-pattern-decoration-free-png-iN7Wn7.png" alt="" />
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-[0.03] pointer-events-none">
        <img src="https://www.transparentpng.com/download/floral/gold-floral-pattern-decoration-free-png-iN7Wn7.png" alt="" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 border border-[#daa520]/30 rounded-full mb-4">
             <span className="text-[#daa520] font-amiri text-sm tracking-widest uppercase">Momeeneen ki Rehbari</span>
          </div>
          <h2 className="text-[#064e3b] font-serif-display text-4xl md:text-5xl font-bold mb-4">
            Spiritual Solutions for Every Problem
          </h2>
          <div className="h-1 w-24 bg-[#daa520] mx-auto mb-8 rounded-full" />
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SOLUTIONS.map((solution, index) => (
            <div 
              key={index}
              className="group relative bg-[#fcfdfa] p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#daa520] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              {/* Background Emerald Glow on Hover */}
              <div className="absolute inset-0 bg-[#064e3b] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

              <div className="relative z-10">
                {/* Icon Circle */}
                <div className="w-20 h-20 bg-[#064e3b]/5 rounded-xl flex items-center justify-center mb-6 text-[#daa520] group-hover:bg-white/10 group-hover:text-white transition-colors duration-500">
                  {solution.icon}
                </div>

                <h3 className="text-[#064e3b] font-amiri text-3xl font-bold mb-1 group-hover:text-white transition-colors">
                  {solution.title}
                </h3>
                
                <h4 className="text-[#daa520] font-serif-display text-sm font-bold uppercase tracking-widest mb-4 group-hover:text-white/70 transition-colors">
                  {solution.subtitle}
                </h4>

                <p className="text-gray-500 font-lora text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                  {solution.description}
                </p>

                {/* Decorative gold dot */}
                <div className="mt-8 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#daa520]" />
                  <div className="h-px flex-1 bg-gray-100 group-hover:bg-white/20 transition-colors" />
                  <span className="text-xs text-gray-400 font-bold group-hover:text-white/50">Read More</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
