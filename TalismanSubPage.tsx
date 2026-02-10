
import React, { useState } from 'react';
import { ViewType, TalismanCategory } from './App';

interface TalismanSubPageProps {
  category: TalismanCategory;
  onNavigate?: (target: ViewType, category?: TalismanCategory) => void;
}

const TALISMAN_CONTENT: Record<TalismanCategory, any> = {
  success: {
    title: "Kamyabi aur Kamrani ka Tilism",
    subtitle: "Talisman for Success",
    icon: "🏆",
    significance: "Zindagi ke har maidan, imtihan, aur muqabla mein fateh pane ke liye Ism-e-Azam aur makhsoos aadaad se tayyar karda naqsh. Ye un logon ke liye hai jo mehnat ke bawajood kamyabi se door hain. Spiritual energy helps align your efforts with divine favor, unlocking doors that previously seemed shut.",
    urdu: "Mehnat aur koshish ke bawajood kamyabi na milne ki surat mein ye Tilism rasta saaf karne aur fateh pane mein madadgar hota hai.",
    benefit: "Confidence mein izafa aur rasta saaf hona.",
    details: ["Exam success wazaif", "Career growth talismans", "Social influence", "Overcoming hurdles"]
  },
  love: {
    title: "Muhabbat aur Gharelu Ittefaq",
    subtitle: "Talisman for Love & Harmony",
    icon: "❤️",
    significance: "Miyan-biwi ke darmiyan na-chaqi khatam karne aur ghar mein sukoon o mohabbat paida karne ke liye Qurani ayat ki barkat. Sirf jayiz aur Shariah ke mutabiq maqasid ke liye. It aims to heal broken relationships and restore the warmth of affection within the family circle.",
    urdu: "Rishton mein darar khatam karne aur jayiz mohabbat paida karne ke liye makhsoos Qurani amliyat.",
    benefit: "Rishton mein darar ka khatma aur mohabbat ki barkat.",
    details: ["Marital harmony", "Family peace", "Halal marriage support", "Conflict resolution"]
  },
  magic: {
    title: "Jadu, Sifli Ilm aur Nazr-e-Bad se Hifazat",
    subtitle: "Talisman for Protection",
    icon: "🛡️",
    significance: "Har qism ki bandish, purane se purana jadu, aur hasideen ki nazr-e-bad ko jarr se khatam karne ke liye 'Loh-e-Hifazat'. Ye ek mazboot rohani dhaal (shield) ka kaam karta hai. Protection is built upon the solid foundation of Quranic verses that act as a barrier against negative metaphysical forces.",
    urdu: "Kala jadu aur nazr-e-bad se mukammal chhutkara aur mustaqil hifazati shield.",
    benefit: "Har qism ki rohani bandish ka mukammal khatma.",
    details: ["Anti-evil eye naqsh", "Jadu ka tor", "Spiritual shield", "House protection"]
  },
  business: {
    title: "Karobari Barkat aur Rizq",
    subtitle: "Talisman for Business",
    icon: "💰",
    significance: "Karobar mein rukawat aur nuqsan se bachne ke liye makhsoos 'Naqsh-e-Sulemani'. Ye Tilism rizq mein barkat aur naye gahak (customers) khinchne ke liye intehayi muassar hai. It addresses financial blockages and invites prosperity through blessed numerical configurations.",
    urdu: "Rizq ki tangi door karne aur karobar mein barkat ke liye makhsoos rohani hal.",
    benefit: "Karobar mein barkat aur bandish ka khulna.",
    details: ["Customer attraction", "Business growth naqsh", "Protection from loss"]
  },
  pregnancy: {
    title: "Aulaad ki Nemat aur Hamal ki Hifazat",
    subtitle: "Talisman for Pregnancy",
    icon: "🌸",
    significance: "Be-auladi ke liye rohani ilaj aur dauran-e-hamal maa aur bache ki har qism ke nuqsan aur dushwari se hifazat ke liye makhsoos duain aur tilismat. We provide spiritual support to safeguard the delicate phase of motherhood and ensure the well-being of the unborn.",
    urdu: "Hamal ki hifazat aur aulaad ki nemat ke liye Ism-e-Azam ki barkat se tayyar karda tilism.",
    benefit: "Hamal ka safe rehna aur aulaad ki nemat.",
    details: ["Fertility support", "Safe delivery prayers", "Protection from evil eye", "Healthy child"]
  },
  pray: {
    title: "Khasusi Dua ki Darkhwast",
    subtitle: "Special Prayer Request",
    icon: "🤲",
    significance: "Agar aap kisi makhsoos maslay ke liye hamari taraf se makhsoos auqat mein dua karwana chahte hain, to apni tafseel bhejien. Hamare mahireen aap ke liye Allah ke huzoor ilteja karenge. We believe in the power of collective and expert intercession in the most blessed hours of the day.",
    urdu: "Hamare rohani mahireen se makhsoos dua karwane ke liye apni darkhwast bhejien.",
    benefit: "Direct spiritual connection and powerful intercession.",
    details: ["Personalized prayers", "Tahajjud supplications", "Group dhikr inclusion", "Urgent matters"]
  },
  ismeazam: {
    title: "Ism-e-Azam ki Rohani Quwwat",
    subtitle: "Your Personal Ism-e-Azam",
    icon: "✨",
    significance: "Har insan ke naam aur sitaray ke mutabiq ek makhsoos 'Ism-e-Azam' hota hai jis ka wird har mushkil ko asan kar deta hai. Apna asal Ism-e-Azam maloom karne ke liye rabta karein. Knowing your personal spiritual key allows you to focus your prayers with maximum efficiency.",
    urdu: "Apne naam ke mutabiq makhsoos Ism-e-Azam maloom karein jo har mushkil ki kunji hai.",
    benefit: "Direct path to spiritual ease and problem-solving.",
    details: ["Name analysis", "Calculation of numbers (Abjad)", "Specific wird instructions", "Daily routine guide"]
  },
  guidance: {
    title: "Mukammal Rohani Guidance",
    subtitle: "Complete Spiritual Guidance",
    icon: "🧭",
    significance: "Zindagi ke mushkil faislon mein pareshani? Hamari rohani team aap ko Quran-o-Sunnat ki roshni mein behtreen mashwara aur rasta dikhane ke liye mojood hai. Guidance is provided with empathy and deep understanding of both worldly and spiritual complications.",
    urdu: "Zindagi ke pechida masail mein Quran-o-Sunnat ki roshni mein behtareen mashwara.",
    benefit: "Clarity in decision making and peace of mind.",
    details: ["Career advice", "Marriage matching", "Spiritual pathfinding", "Personal development"]
  },
  istikhara: {
    title: "Online Istikhara (Mashwara-e-Ilahi)",
    subtitle: "Divine Consultation",
    icon: "🔮",
    significance: "Shadi, safar, ya naye karobar se pehle Allah ki raza maloom karne ke liye hamara 'Online Istikhara' service use karein. Takmeel ke baad aap ko mukammal report di jayegi. Istikhara is the sunnah method of asking for divine goodness in any decision.",
    urdu: "Naye kaam ya faislay se pehle Allah ki barkat aur raza maloom karne ka sharai tarika.",
    benefit: "Confidence in God's will and avoiding bad decisions.",
    details: ["Marriage Istikhara", "Business Istikhara", "Dream analysis", "Detailed reports"],
    faqs: [
      {
        question: "What is Online Istikhara and how does it work?",
        answer: "Online Istikhara Allah se kisi bhi kaam (shadi, karobar, safar) mein behtari aur rasta maloom karne ka ek rohani zariya hai. Aap apni tafseelat bhejte hain aur hamare mahireen aapki taraf se dua aur istikhara kar ke aapko Allah ki raza se agah karte hain."
      },
      {
        question: "How can I request an Istikhara?",
        answer: "Aap hamari website par diye gaye 'Request Istikhara' form ko fill kar sakte hain ya seedha hamare WhatsApp number par apna naam, walida ka naam aur apna masla bhej sakte hain."
      },
      {
        question: "Is Online Istikhara reliable and safe?",
        answer: "Beshak, hum sirf Quran-o-Sunnah ke mutabiq sharai istikhara karte hain. Aapki tamam maloomat 100% raaz (confidential) rakhi jati hain."
      },
      {
        question: "How long will it take to get an Istikhara result?",
        answer: "Aam taur par Istikhara ka natija 24 se 48 ghanton ke darmiyan aapko WhatsApp ya Email ke zariye bhej diya jata hai."
      },
      {
        question: "Do you provide follow-up support after Istikhara?",
        answer: "Ji haan, natija aane ke baad agar aapko mazeed rehnumayi ya kisi rohani ilaj (Wazifa/Taweez) ki zaroorat ho, to hamari team aapki mukammal madad karti hai."
      },
      {
        question: "Can I request multiple Istikharas?",
        answer: "Ji, aap alag alag maqasid ya masail ke liye ek se zyada dafa bhi Istikhara ki request kar sakte hain."
      }
    ]
  }
};

const TalismanSubPage: React.FC<TalismanSubPageProps> = ({ category, onNavigate }) => {
  const content = TALISMAN_CONTENT[category];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!content) return (
    <div className="pt-60 text-center min-h-screen">
      <h2 className="text-3xl text-gray-400">Section Under Development</h2>
      <button onClick={() => onNavigate?.('home')} className="mt-8 text-[#daa520] underline">Back to Home</button>
    </div>
  );

  return (
    <div className="pt-0 bg-[#fcfaf2]">
      {/* Hero Header */}
      <section className="relative pt-44 pb-32 bg-[#064e3b] islamic-pattern overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        
        <div className="absolute top-32 left-6 lg:left-12 z-30">
          <button 
            onClick={() => onNavigate?.('home')}
            className="group flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-[#daa520] border border-[#daa520]/30 text-white rounded-full transition-all duration-300 font-serif-display text-sm font-bold shadow-2xl"
          >
            <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10 animate-fade-in-up">
          <div className="text-7xl mb-8 filter drop-shadow-xl animate-float">{content.icon}</div>
          <h1 className="text-white font-serif-display text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
            {content.title}
          </h1>
          <p className="text-[#daa520] font-amiri text-2xl md:text-3xl italic mb-10 drop-shadow-md">
            {content.subtitle}
          </p>
          <div className="h-1.5 w-64 bg-gradient-to-r from-transparent via-[#daa520] to-transparent mx-auto" />
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            {/* Left Column: Details */}
            <div className="space-y-12">
              <div className="relative">
                <h2 className="text-[#064e3b] font-serif-display text-4xl font-bold mb-6">Spiritual Significance</h2>
                <div className="w-24 h-1.5 bg-[#daa520] rounded-full" />
              </div>

              <div className="bg-white p-10 rounded-[40px] border-2 border-gray-100 shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#daa520]/5 rounded-full group-hover:scale-110 transition-transform duration-700" />
                <p className="text-gray-600 font-lora text-xl leading-relaxed relative z-10">
                  {content.significance}
                </p>
              </div>

              <div className="p-10 bg-[#064e3b] text-white rounded-[40px] shadow-2xl border-l-[12px] border-[#daa520] relative">
                <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />
                <h3 className="text-[#daa520] font-serif-display text-2xl font-bold mb-6 text-right font-amiri tracking-widest">مقصد اور فوائد</h3>
                <p className="text-3xl font-amiri leading-[1.8] text-right dir-rtl relative z-10">
                  {content.urdu}
                </p>
              </div>
            </div>

            {/* Right Column: Key Benefits & Action */}
            <div className="sticky top-44 space-y-10">
              <div className="bg-white p-12 rounded-[50px] border-2 border-[#daa520]/10 shadow-3xl">
                <div className="flex items-center gap-4 mb-10">
                   <div className="w-1.5 h-10 bg-[#daa520]" />
                   <h3 className="text-[#064e3b] font-serif-display text-3xl font-bold">Key Benefit</h3>
                </div>
                
                <div className="bg-[#daa520]/5 p-8 rounded-3xl border border-[#daa520]/20 mb-10">
                   <p className="text-[#064e3b] font-serif-display text-2xl font-bold italic text-center">
                     "{content.benefit}"
                   </p>
                </div>

                <h4 className="text-[#064e3b] font-serif-display text-xl font-bold mb-6 italic">What We Offer:</h4>
                <ul className="space-y-6 mb-12">
                  {content.details.map((detail: string, i: number) => (
                    <li key={i} className="flex gap-4 items-center group">
                      <div className="w-6 h-6 rounded-full bg-[#064e3b] flex items-center justify-center text-[#daa520] shrink-0">
                        <i className="fa-solid fa-star-and-crescent text-[10px]" />
                      </div>
                      <span className="text-gray-700 font-lora text-lg font-medium">{detail}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => {
                    onNavigate?.('home');
                    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }}
                  className="w-full py-6 bg-[#064e3b] text-white font-serif-display font-bold text-2xl rounded-2xl hover:bg-[#daa520] hover:text-[#064e3b] transition-all duration-500 shadow-2xl flex items-center justify-center gap-5 group"
                >
                  How to Order
                  <i className="fa-solid fa-scroll group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Istikhara FAQ Section - Specific to Istikhara category */}
      {category === 'istikhara' && content.faqs && (
        <section className="py-24 bg-[#f0f9ff] islamic-pattern">
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-[#064e3b] font-serif-display text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
               <p className="text-gray-500 font-lora text-lg italic">Common queries about our Istikhara consultation process.</p>
               <div className="w-24 h-1.5 bg-[#daa520] mx-auto mt-6 rounded-full" />
            </div>

            <div className="space-y-4">
              {content.faqs.map((faq: any, idx: number) => (
                <div 
                  key={idx}
                  className={`bg-white rounded-2xl overflow-hidden border-2 transition-all duration-500 ${openFaq === idx ? 'border-[#daa520] shadow-xl' : 'border-blue-100 hover:border-blue-300'}`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-8 py-6 flex justify-between items-center group"
                  >
                    <span className={`text-xl font-serif-display font-bold transition-colors ${openFaq === idx ? 'text-[#daa520]' : 'text-[#064e3b]'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#064e3b] transition-transform duration-500 ${openFaq === idx ? 'rotate-180 bg-[#daa520] text-white' : ''}`}>
                       <i className="fa-solid fa-chevron-down text-xs" />
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-500 ease-in-out ${openFaq === idx ? 'max-h-[300px] opacity-100 pb-8 px-8' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#daa520]/20 to-transparent mb-6" />
                    <p className="text-gray-600 font-lora text-lg leading-relaxed italic border-l-4 border-blue-200 pl-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
               <p className="text-gray-500 font-amiri text-2xl italic tracking-widest uppercase">
                 Istikhara is the key to Divine Goodness.
               </p>
            </div>
          </div>
        </section>
      )}

      {/* Footer Decorative Pattern */}
      <div className="h-24 bg-gradient-to-b from-[#fcfaf2] to-[#064e3b] islamic-pattern opacity-5" />
    </div>
  );
};

export default TalismanSubPage;
