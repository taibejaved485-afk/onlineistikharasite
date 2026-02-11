
import React from 'react';

const VALUES = [
  {
    title: 'Trust (Aitmad)',
    text: 'Hum har user ki privacy aur unki batun ki hifazat ka mukammal khayal rakhte hain.',
    icon: 'fa-shield-halved'
  },
  {
    title: 'Guidance (Rehnumayi)',
    text: 'Har maslay ka hal Quran-o-Sunnat aur sharai usoolon ke mutabiq faraham kiya jata hai.',
    icon: 'fa-book-quran'
  },
  {
    title: 'Innovation (Jiddat)',
    text: 'Modern AI technology ka istemal taake aapko apne masail ka fori aur behtareen jawab milay.',
    icon: 'fa-microchip'
  }
];

const EXPERTISE = [
  { name: 'Online Istikhara', desc: 'Divine guidance for life decisions.' },
  { name: 'Tabeer-e-Khwab', desc: 'Authentic dream interpretations.' },
  { name: 'Rohani Ilaj', desc: 'Spiritual healing through Quranic verses.' }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white relative overflow-hidden islamic-pattern scroll-mt-20">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-[#064e3b] font-serif-display text-4xl md:text-6xl font-bold mb-2">
            Hamare Baray Mein
          </h2>
          <h3 className="text-[#daa520] font-cinzel text-lg md:text-xl tracking-[0.3em] font-bold uppercase">
            Online Istikhara: Rohani Masail Ka Shari Hal
          </h3>
          <div className="mt-6 flex justify-center items-center gap-4">
            <div className="h-px w-16 bg-[#daa520]/40" />
            <i className="fa-solid fa-moon text-[#daa520]" />
            <div className="h-px w-16 bg-[#daa520]/40" />
          </div>
        </div>

        {/* Introduction Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="w-full lg:w-1/2">
            <div className="relative p-2 floral-border">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                        src="https://i.pinimg.com/736x/0e/e1/27/0ee127623546030a9c820a0ee7412e32.jpg" 
                        alt="Islamic Architecture" 
                        className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
                {/* Gold Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-[#daa520] p-6 rounded-2xl shadow-xl animate-float hidden md:block">
                    <p className="text-[#064e3b] font-serif-display font-bold text-center">
                        <span className="block text-3xl">10+</span>
                        <span className="text-xs uppercase tracking-widest">Years of Trust</span>
                    </p>
                </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-[#064e3b] font-amiri text-3xl leading-snug text-right dir-rtl">
              Hamara maqsad logon ki mushkilat ka hal Quran-o-Sunnat aur jadeed AI technology ki madad se nikalna hai.
            </p>
            <p className="text-gray-600 font-lora text-lg leading-relaxed">
              At <span className="text-[#064e3b] font-bold">Online Istikhara</span>, we bridge the gap between traditional spiritual wisdom and modern technological convenience. Our platform is dedicated to providing authentic Islamic guidance that respects the sanctity of Sharia while offering immediate support to the global Ummah.
            </p>
            
            {/* Expertise List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {EXPERTISE.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#064e3b]/5 border-l-4 border-[#daa520]">
                    <h4 className="text-[#064e3b] font-bold font-serif-display">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {VALUES.map((value, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-10 rounded-[32px] border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_70px_rgba(6,78,59,0.15)] transition-all duration-500 hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-[#064e3b]/5 rounded-2xl flex items-center justify-center text-[#daa520] group-hover:bg-[#daa520] group-hover:text-white transition-all duration-300">
                <i className={`fa-solid ${value.icon} text-2xl`} />
              </div>
              <h4 className="text-[#064e3b] font-serif-display text-2xl font-bold mb-4">{value.title}</h4>
              <p className="text-gray-500 font-lora leading-relaxed">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
