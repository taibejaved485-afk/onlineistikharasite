
import React from 'react';

const GenderConsultation: React.FC = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 islamic-pattern opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        {/* Golden Subheading */}
        <h4 className="text-[#daa520] font-serif-display text-lg md:text-xl font-bold tracking-widest uppercase mb-8">
          Direct Consultation
        </h4>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          
          {/* Male Consultation Button */}
          <a 
            href="https://wa.me/923010147869" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex-1 flex items-center justify-center gap-4 px-8 py-5 bg-[#064e3b] text-white border-2 border-[#daa520] rounded-2xl shadow-xl hover:shadow-[0_15px_30px_rgba(6,78,59,0.3)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="bg-white/10 p-3 rounded-full animate-wobble-hover">
              <svg className="w-8 h-8 text-[#daa520]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="text-left">
              <span className="block text-xs text-[#daa520] font-bold tracking-[0.2em] uppercase">For Males</span>
              <span className="text-lg md:text-xl font-serif-display font-bold">Consultation For Males</span>
            </div>
          </a>

          {/* Female Consultation Button */}
          <a 
            href="https://wa.me/923064151113" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex-1 flex items-center justify-center gap-4 px-8 py-5 bg-[#8b1d1d] text-white border-2 border-[#daa520] rounded-2xl shadow-xl hover:shadow-[0_15px_30px_rgba(139,29,29,0.3)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="bg-white/10 p-3 rounded-full animate-wobble-hover">
              <svg className="w-8 h-8 text-[#daa520]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11h.01" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
              </svg>
            </div>
            <div className="text-left">
              <span className="block text-xs text-[#daa520] font-bold tracking-[0.2em] uppercase">For Females</span>
              <span className="text-lg md:text-xl font-serif-display font-bold">Consultation For Females</span>
            </div>
          </a>

        </div>

        {/* Decorative Bottom Glow */}
        <div className="mt-12 flex justify-center opacity-30">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#daa520] to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default GenderConsultation;
