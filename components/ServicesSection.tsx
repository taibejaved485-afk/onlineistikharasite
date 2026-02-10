
import React from 'react';

const SERVICES = [
  {
    title: 'Online Istikhara',
    description: 'Seek guidance from Allah in times of confusion. Get online consultation from trusted scholars.',
    icon: (
      <svg className="w-8 h-8 text-[#064e3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Tabeer-e-Khwab',
    description: 'Curious about your dreams? Discover their meaning through Quranic and spiritual insight.',
    icon: (
      <svg className="w-8 h-8 text-[#064e3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
  {
    title: 'Nikah Guidance',
    description: 'Struggling with marriage decisions or relationships? Receive faith-based guidance and support.',
    icon: (
      <svg className="w-8 h-8 text-[#064e3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Spiritual Healing',
    description: 'Get relief from evil eye, stress, or negativity through Quranic healing and prayers.',
    icon: (
      <svg className="w-8 h-8 text-[#064e3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 003.73 9l-.602.028a2 2 0 00-1.664 2.185l.896 8.145a2 2 0 001.54 1.745l.852.174c.527.108 1.07.13 1.607.067a10.03 10.03 0 003.545-.982m9.9 1.214a10.53 10.53 0 00-3.3-13.605m-3.3 15.397a10.05 10.05 0 003.3-15.397m0 0a10.53 10.53 0 00-12.04 4.5m12.04-4.5V4.75A2.25 2.25 0 0015.25 2.5h-1.5a2.25 2.25 0 00-2.25 2.25v.75m-6 3.75v-.75a2.25 2.25 0 012.25-2.25h1.5a2.25 2.25 0 012.25 2.25v.75" />
      </svg>
    ),
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#fcfdfa] relative overflow-hidden">
      {/* Lantern Decorations - Fixed Position Corners */}
      <div className="absolute top-0 left-0 w-32 md:w-48 opacity-20 pointer-events-none">
        <img src="https://i.pinimg.com/originals/9e/84/c6/9e84c6e944b025345718a38d77e40854.png" alt="Decoration" className="w-full h-auto" />
      </div>
      <div className="absolute top-0 right-0 w-32 md:w-48 opacity-20 pointer-events-none scale-x-[-1]">
        <img src="https://i.pinimg.com/originals/9e/84/c6/9e84c6e944b025345718a38d77e40854.png" alt="Decoration" className="w-full h-auto" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-[#064e3b] font-serif-display text-4xl md:text-5xl font-bold mb-4">
            Our Spiritual Services
          </h2>
          <p className="text-[#064e3b]/80 font-lora text-xl md:text-2xl mb-8">
            Helping you make life decisions with divine guidance.
          </p>
          
          {/* Gold Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-[#daa520]" />
            <svg className="w-10 h-10 text-[#daa520]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
            </svg>
            <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-[#daa520]" />
          </div>

          <p className="text-gray-600 font-lora leading-relaxed text-lg">
            Our services are designed to bring spiritual clarity, strengthen your faith, and help you overcome life's challenges with divine support. Whether you are seeking guidance in important decisions, looking for meaning in your dreams, or searching for relief from stress, negativity, and the evil eye — we provide trusted spiritual solutions rooted in the teachings of the Quran and Sunnah.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="group relative h-full p-8 rounded-[30px] transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden islamic-pattern"
              style={{
                background: 'linear-gradient(145deg, #065f46 0%, #064e3b 100%)',
                boxShadow: '0 20px 40px rgba(6, 78, 59, 0.2)'
              }}
            >
              {/* Inner Glow Effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Content Container */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* White Circle Icon Container */}
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>

                <h3 className="text-white font-serif-display text-2xl font-bold mb-4 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-white/80 font-lora text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Optional: Subtle Bottom Line */}
                <div className="h-[2px] w-8 bg-[#daa520] group-hover:w-16 transition-all duration-500 rounded-full" />
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#daa520]/10 rounded-full blur-xl group-hover:bg-[#daa520]/20 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
