
import React from 'react';

const TESTIMONIALS = [
  {
    name: "Z. Khan",
    location: "Lahore, PK",
    text: "Alhamdulillah, meri pasand ki shadi mein boht rukawatein thi. Online Istikhara ke baad jo rahnumayi mili, us se raste asan ho gaye. Aaj main apni zindagi mein khush hoon.",
    stars: 5
  },
  {
    name: "M. Arshad",
    location: "Karachi, PK",
    text: "Main boht pareshan tha ke karobar mein barkat kyun nahi ho rahi. Istikhara karwaya aur bataye gaye rohani hal par amal kiya, boht farq para.",
    stars: 5
  },
  {
    name: "Fatima",
    location: "London, UK",
    text: "Sab se achi baat ye hai ke privacy ka boht khayal rakha jata hai aur jawab boht jaldi milta hai. Shariat ke mutabiq sahi guide kiya gaya.",
    stars: 5
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#064e3b] font-serif-display text-4xl md:text-5xl font-bold mb-4">
            Success <span className="text-[#daa520]">Stories</span>
          </h2>
          <p className="text-gray-500 font-lora text-lg max-w-2xl mx-auto italic">
            "Alhamdulillah, hamari rohani khidmat se logon ki badalti hui zindagiyan."
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-[#daa520]/40" />
            <i className="fa-solid fa-hands-praying text-[#daa520]" />
            <div className="h-px w-16 bg-[#daa520]/40" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS.map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-[#fcfdfa] p-10 rounded-[40px] border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(6,78,59,0.12)] transition-all duration-500 hover:-translate-y-2 relative"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.stars)].map((_, sIdx) => (
                  <i key={sIdx} className="fa-solid fa-star text-[#daa520] text-sm" />
                ))}
              </div>

              {/* Verified Badge */}
              <div className="absolute top-8 right-8 flex items-center gap-1 bg-[#064e3b]/5 px-3 py-1 rounded-full border border-[#064e3b]/10">
                 <i className="fa-solid fa-check-double text-[10px] text-[#064e3b]" />
                 <span className="text-[10px] font-bold uppercase tracking-widest text-[#064e3b]/70">Verified</span>
              </div>

              {/* Content (Urdu Reviews) */}
              <div className="mb-8 min-h-[120px]">
                <p className="text-gray-700 font-amiri text-2xl leading-relaxed dir-rtl text-right">
                  "{item.text}"
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4 border-t border-gray-100 pt-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#064e3b] to-[#022c22] rounded-full flex items-center justify-center text-[#daa520] font-bold text-xl shadow-lg">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-[#064e3b] font-bold font-serif-display text-lg">{item.name}</h4>
                  <p className="text-[#daa520] text-xs font-bold uppercase tracking-widest">{item.location}</p>
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#daa520]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <p className="text-gray-400 font-amiri text-xl italic tracking-widest uppercase">
             Shifa aur Kamyabi sirf Allah ke hath mein hai
           </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
