
import React from 'react';

const ConsultationSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#fdfdfc] relative overflow-hidden scroll-mt-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#064e3b]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#daa520]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Contact Info & Visual */}
          <div className="w-full lg:w-5/12">
            <div className="bg-[#064e3b] rounded-[40px] p-10 islamic-pattern relative overflow-hidden shadow-2xl group">
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
              
              <div className="relative z-10">
                <span className="inline-block px-4 py-1 bg-white/10 border border-white/20 rounded-full text-[#daa520] text-xs font-bold tracking-[0.2em] uppercase mb-6">
                  Roohani Rabta
                </span>
                
                <h2 className="text-white font-serif-display text-4xl font-bold mb-6 leading-tight">
                  Get in Touch for <br />
                  <span className="text-[#daa520]">Spiritual Guidance</span>
                </h2>
                
                <p className="text-white/70 font-lora text-lg leading-relaxed mb-10">
                  Our experts are here to listen to your problems and provide guidance through Quranic wisdom. All consultations are private and confidential.
                </p>

                <div className="space-y-6">
                  {/* WhatsApp */}
                  <div className="flex items-center gap-5 group/item cursor-pointer">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#daa520] group-hover/item:bg-[#daa520] group-hover/item:text-[#064e3b] transition-all duration-300">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-bold">WhatsApp Us</p>
                      <p className="text-white text-xl font-bold">+92 370 6487654</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-5 group/item cursor-pointer">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-[#daa520] group-hover/item:bg-[#daa520] group-hover/item:text-[#064e3b] transition-all duration-300">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-widest font-bold">Email Support</p>
                      <p className="text-white text-xl font-bold">info@nooremerald.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Mandala */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10 group-hover:scale-110 transition-transform duration-700">
                 <svg viewBox="0 0 100 100" fill="currentColor" className="text-white">
                    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
                 </svg>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-gray-100">
              <div className="mb-10">
                <h3 className="text-[#064e3b] font-serif-display text-3xl font-bold mb-2">Submit a Prayer Request</h3>
                <p className="text-gray-500 font-lora">Humse apna masla bayan karein taake hum apki behtar rehbari kar sakein.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#064e3b]/60 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#daa520] focus:ring-4 focus:ring-[#daa520]/5 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#064e3b]/60 ml-1">WhatsApp Number</label>
                    <input 
                      type="tel" 
                      placeholder="+92 XXX XXXXXXX"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#daa520] focus:ring-4 focus:ring-[#daa520]/5 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#064e3b]/60 ml-1">Category of Problem</label>
                  <select className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#daa520] focus:ring-4 focus:ring-[#daa520]/5 transition-all appearance-none cursor-pointer">
                    <option>Business & Rizq</option>
                    <option>Marriage & Relationships</option>
                    <option>Black Magic / Evil Eye</option>
                    <option>Health & Recovery</option>
                    <option>Child & Pregnancy</option>
                    <option>Other Spiritual Matters</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#064e3b]/60 ml-1">Describe Your Problem</label>
                  <textarea 
                    rows={4}
                    placeholder="Apna masla tafseel se likhein..."
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#daa520] focus:ring-4 focus:ring-[#daa520]/5 transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-5 bg-[#daa520] text-[#064e3b] font-serif-display font-bold text-lg rounded-xl shadow-[0_10px_30px_rgba(218,165,32,0.3)] hover:bg-[#b8860b] hover:shadow-[0_15px_40px_rgba(218,165,32,0.5)] transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-3 group">
                  Send Request Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
