
import React from 'react';

const SERVICES_DATA = [
  {
    title: 'Online Istikhara',
    text: 'Apne mustaqbil ke faislo mein Allah ki rehnumayi hasil karein.',
    icon: (
      <svg className="w-12 h-12 text-[#daa520]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7v5l3 3" />
      </svg>
    )
  },
  {
    title: 'Tabeer-e-Khwab',
    text: 'Apne khwabon ki sahi aur sharai tabeer janiye.',
    icon: (
      <svg className="w-12 h-12 text-[#daa520]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    title: 'Rohani Ilaj',
    text: 'Quran-o-Sunnat ki roshni mein har maslay ka rohani hal.',
    icon: (
      <svg className="w-12 h-12 text-[#daa520]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  }
];

const IslamicServices: React.FC = () => {
  return (
    <section className="py-24 bg-[#fcfdfa] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 islamic-pattern opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#064e3b] font-serif-display text-4xl md:text-5xl font-bold mb-4">Our Premium Services</h2>
          <div className="h-1 w-24 bg-[#daa520] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <div 
              key={idx}
              className="group relative bg-[#064e3b] rounded-[20px] p-10 border border-[#daa520]/20 transition-all duration-500 hover:-translate-y-[10px] hover:shadow-[0_15px_50px_rgba(218,165,32,0.3)] flex flex-col items-center text-center cursor-pointer overflow-hidden shadow-2xl"
            >
              {/* Subtle Pattern inside Card */}
              <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />
              
              {/* Icon Container */}
              <div className="mb-8 p-6 bg-white/5 rounded-full border border-white/10 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>

              <h3 className="text-white font-serif-display text-2xl font-bold mb-4 tracking-wide group-hover:text-[#daa520] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-white/70 font-lora text-lg leading-relaxed mb-10 min-h-[60px]">
                {service.text}
              </p>

              {/* Gold Button */}
              <button className="mt-auto px-10 py-3 bg-[#daa520] text-[#064e3b] font-serif-display font-bold text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-[#064e3b] transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                Explore
              </button>
              
              {/* Corner Glow Effect on Hover */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#daa520]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IslamicServices;
