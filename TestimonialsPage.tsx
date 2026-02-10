
import React from 'react';
import { ViewType } from './App';

interface Testimonial {
  name: string;
  city: string;
  text: string;
  rating: number;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: "M. Ahmed",
    city: "Lahore",
    text: "Istikhara ke baad mujhe apne karobar ke liye sahi rasta mila. Boht sukoon mila.",
    rating: 5
  },
  {
    name: "S. Khan",
    city: "Karachi",
    text: "Inki batayi hui duaon se mere ghar ke masail hal ho gaye. Shariah ke mutabiq behtreen rehnumayi.",
    rating: 5
  },
  {
    name: "A. Raza",
    city: "Islamabad",
    text: "Taweezat ka asar fori tha. Allah ka shukr hai ke ab zindagi mein barkat hai.",
    rating: 5
  },
  {
    name: "Fatima",
    city: "Multan",
    text: "Privacy aur ihtiram ka boht khayal rakha jata hai. Main sab ko yehi mashwara doon gi.",
    rating: 5
  }
];

interface TestimonialsPageProps {
  onNavigate?: (target: ViewType) => void;
}

const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-0">
      {/* Hero Header */}
      <section className="relative pt-44 pb-24 bg-[#064e3b] islamic-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
        
        <div className="absolute top-32 left-6 lg:left-12 z-30">
          <button 
            onClick={() => onNavigate?.('home')}
            className="group flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-[#daa520] border border-[#daa520]/30 text-white hover:text-[#064e3b] rounded-full transition-all duration-300 font-serif-display text-sm font-bold shadow-xl"
          >
            <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <h1 className="text-white font-serif-display text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
            Success <span className="text-[#daa520]">Stories</span>
          </h1>
          <p className="text-white/70 font-lora text-lg md:text-xl italic">
            "Alhamdulillah, hamari rohani khidmat se logon ki badalti hui zindagiyan."
          </p>
          <div className="mt-8 flex justify-center items-center gap-4 opacity-30">
             <div className="h-px w-20 bg-[#daa520]" />
             <i className="fa-solid fa-hands-praying text-[#daa520]" />
             <div className="h-px w-20 bg-[#daa520]" />
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 bg-[#fdfdfc]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {TESTIMONIALS_DATA.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white p-8 md:p-10 rounded-[35px] border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_rgba(6,78,59,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Verified Badge */}
                <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 bg-[#064e3b]/5 rounded-full border border-[#064e3b]/10">
                  <span className="text-sm">🛡️</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#064e3b]/60">Verified</span>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, sIdx) => (
                    <i key={sIdx} className="fa-solid fa-star text-[#064e3b] text-sm drop-shadow-sm" />
                  ))}
                </div>

                {/* Review Text */}
                <div className="mb-10 min-h-[100px] relative">
                  <i className="fa-solid fa-quote-left absolute -top-4 -left-4 text-4xl text-[#daa520]/10" />
                  <p className="text-gray-600 font-lora text-lg leading-loose italic relative z-10 dir-rtl text-right">
                    "{item.text}"
                  </p>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-4 border-t border-gray-50 pt-8">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#064e3b] to-[#022c22] flex items-center justify-center text-[#daa520] shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <span className="text-xl font-serif-display font-bold">{item.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-[#064e3b] font-bold font-serif-display text-lg">{item.name}</h4>
                    <p className="text-[#daa520] font-amiri text-sm tracking-widest">{item.city}</p>
                  </div>
                </div>

                {/* Card Background Decoration */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#064e3b]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-16 bg-[#064e3b] text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Happy Souls', value: '15,000+' },
              { label: 'Istikhara Performed', value: '25,000+' },
              { label: 'Countries Served', value: '45+' },
              { label: 'Years of Trust', value: '12+' }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <p className="text-[#daa520] font-serif-display text-3xl md:text-4xl font-bold">{stat.value}</p>
                <p className="text-white/50 text-xs uppercase tracking-[0.2em] font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#fdfdfc] islamic-pattern">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="relative p-12 md:p-16 border-2 border-dashed border-[#daa520]/20 rounded-[50px]">
            <h3 className="text-[#064e3b] font-serif-display text-3xl font-bold mb-6">Apna Masla Share Karein</h3>
            <p className="text-gray-500 font-lora text-lg mb-10 max-w-2xl mx-auto">
              Agar aap bhi kisi maslay mein ghairay hain, to aaj hi hamare mahireen se rabta karein aur Allah ki rehmat se mustafeed hon.
            </p>
            <button 
              onClick={() => onNavigate?.('home')}
              className="px-12 py-4 bg-[#daa520] text-[#064e3b] font-serif-display font-bold rounded-full hover:bg-[#064e3b] hover:text-white transition-all duration-500 shadow-xl"
            >
              Get Spiritual Help Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
