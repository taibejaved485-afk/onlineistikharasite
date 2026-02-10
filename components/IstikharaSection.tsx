
import React from 'react';

const IstikharaSection: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Glowing Quran Image */}
          <div className="w-full lg:w-1/2 relative group animate-fade-in-up">
            <div className="absolute -inset-4 bg-cyan-400/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
              <img 
                src="https://i.pinimg.com/736x/84/5b/11/845b1193e5cd04b5c065df25925d13ce.jpg" 
                alt="Holy Quran with divine light" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          {/* Right Side: Text and Buttons */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Iqra Text Header */}
            <div className="mb-10 animate-float flex flex-col items-center lg:items-start">
              <div className="text-[#064e3b] font-amiri font-bold text-5xl md:text-6xl tracking-widest drop-shadow-sm mb-2">
                اِقْرَأْ
              </div>
              <div className="h-1 w-12 bg-[#daa520] rounded-full"></div>
            </div>

            {/* Urdu Hadith */}
            <p className="text-[#064e3b] font-amiri text-xl md:text-2xl leading-relaxed mb-6 dir-rtl text-right lg:text-right w-full">
              حضرت جابر بن عبد اللہؓ سے مروی ہے انہوں نے کہا کہ رسول اللہ ﷺ ہمیں تمام معاملات میں استخارہ کرنے کی اسی طرح تعلیم دیتے تھے جس طرح ہمیں قرآن کی کوئی سورت سکھاتے تھے (بخاری 1162)
            </p>

            {/* English Hadith */}
            <p className="text-gray-600 font-lora text-lg leading-relaxed mb-8 italic">
              "Hadrat Jabir Bin Abdullah (R.A.) narrates this Hadith Prophet Mohammad (PBUH) teach us to do Istikhara for every problem same like that he teach us any Surah of Holy Quran (Bukhari: 1162)"
            </p>

            {/* Urdu Service Text */}
            <p className="text-[#064e3b] font-amiri text-lg md:text-xl leading-relaxed mb-6 dir-rtl text-right lg:text-right w-full border-t border-gray-100 pt-6">
              اگر آپ زندگی کے کسی بھی الجھے ہوئے معاملے میں ہماری ویب سائٹ آن لائن استخارہ سائٹ کے روحانی ایکسپرٹس سے استخارہ کروانا چاہتے ہیں تو دیئے گئے استخارہ فارم کو فل کریں۔
            </p>

            {/* English Service Text */}
            <p className="text-gray-600 font-lora text-base leading-relaxed mb-10">
              If you need online Istikhara Services by Spiritual Experts of (Online Istikhara Site) for any problem of your life then fill the given Istikhara Form.
            </p>

            {/* Blue Action Button */}
            <button className="group relative px-10 py-4 bg-[#0095f6] text-white font-serif-display font-bold rounded-lg shadow-[0_10px_20px_rgba(0,149,246,0.3)] hover:shadow-[0_15px_30px_rgba(0,149,246,0.5)] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Get Isme Azam
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IstikharaSection;
