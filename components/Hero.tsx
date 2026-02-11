
import React, { useState, useEffect } from 'react';

const IMAGES = [
  'https://i.pinimg.com/736x/0e/e1/27/0ee127623546030a9c820a0ee7412e32.jpg',
  'https://i.pinimg.com/736x/4f/63/14/4f6314757ad31c75c6cde54457609c86.jpg',
  'https://i.pinimg.com/736x/f4/2b/82/f42b82d5bf92bebd39871e16b9f1e011.jpg',
  'https://i.pinimg.com/736x/0a/72/ce/0a72ce33d28e9e7c8891db01f83282e3.jpg'
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAiHovered, setIsAiHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % IMAGES.length);
    }, 6000); 

    return () => clearInterval(timer);
  }, []);

  const waLink = "https://wa.me/923706487654?text=Assalam-o-Alaikum!%20Mujhe%20Noor%20Emerald%20se%20rohani%20masail%20ke%20bare%20mein%20maloomat%20chahiye.";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {IMAGES.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-105 transition-transform duration-[6000ms]' : 'opacity-0 scale-100'
            }`}
            style={{ 
              backgroundImage: `url('${img}')` 
            }}
          />
        ))}
      </div>
      
      {/* Linear Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#011a14]/90 via-[#064e3b]/60 to-transparent" />

      {/* Hero Content */}
      <div className={`container mx-auto px-6 relative z-20 text-center mt-20 transition-all duration-700 py-16 rounded-[40px] max-w-5xl ${
        isAiHovered ? 'backdrop-blur-md bg-white/5 ring-1 ring-white/10 shadow-2xl' : 'backdrop-blur-none bg-transparent'
      }`}>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#daa520]/40" />
            <span className="text-[#daa520] font-serif-display text-sm font-bold tracking-[0.4em] uppercase">
              Bismillah-ir-Rahman-ir-Rahim
            </span>
            <div className="h-[1px] w-12 bg-[#daa520]/40" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif-display font-bold text-white mb-8 leading-[1.2] drop-shadow-2xl">
            Roohani Masail ka Hal <br />
            <span className="italic text-[#daa520] font-amiri block md:inline">Quran-o-Sunnat ki Roshni Mein</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 font-lora leading-relaxed mb-12 max-w-3xl mx-auto font-medium drop-shadow-md">
            Seek authentic guidance and spiritual clarity through the light of divine wisdom. 
            We provide traditional solutions for the modern seeker's heart.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {/* WhatsApp Button with Pre-filled Message */}
            <a 
              href={waLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-serif-display font-bold rounded-lg shadow-xl hover:bg-[#1ebd5a] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Get Instant Help
            </a>

            {/* AI Assistant Button */}
            <button 
              onMouseEnter={() => setIsAiHovered(true)}
              onMouseLeave={() => setIsAiHovered(false)}
              className="group flex items-center gap-3 px-8 py-4 bg-[#daa520] text-[#064e3b] font-serif-display font-bold rounded-lg shadow-xl gold-glow hover:bg-[#b8860b] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 relative z-30"
            >
              <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.364-6.364l-.707-.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M12 18v3m4.673-4h-4.673A4.947 4.947 0 017 12.028a5 5 0 0110 0 4.947 4.947 0 01-2.327 4.972z" />
              </svg>
              AI Roohani Dost
            </button>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 transition-all duration-500 rounded-full ${
                index === currentSlide ? 'w-12 bg-[#daa520]' : 'w-6 bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating AI Tooltip */}
      <div className={`absolute bottom-10 right-10 z-30 animate-float hidden md:block transition-opacity duration-500 ${isAiHovered ? 'opacity-100' : 'opacity-60'}`}>
        <div className="relative group">
          <div className="bg-[#daa520] text-[#064e3b] px-6 py-3 rounded-full font-serif-display font-bold shadow-2xl border-2 border-white/20 flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform">
             <div className="w-2 h-2 bg-[#064e3b] rounded-full animate-ping"></div>
             Mujhse apna koi bhi khwab ya masla share karein
          </div>
          <div className="absolute -bottom-2 right-10 w-4 h-4 bg-[#daa520] rotate-45"></div>
        </div>
      </div>

      <div className="absolute inset-0 z-10 islamic-pattern opacity-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
