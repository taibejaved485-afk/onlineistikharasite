
import React from 'react';
import { ViewType, TaweezCategory } from './App';

interface TaweezSubPageProps {
  category: TaweezCategory;
  onNavigate?: (target: ViewType, category?: TaweezCategory) => void;
}

const CATEGORY_CONTENT: Record<TaweezCategory, any> = {
  wazaif: {
    title: "Daily Islamic Wazaif",
    subtitle: "Rozmarra ki Mushkilat ka Qurani Hal",
    icon: "📖",
    significance: "Islamic Wazaif are powerful spiritual tools rooted in the verses of the Holy Quran and the beautiful names of Allah (Asma-ul-Husna). They serve as a constant source of divine assistance for overcoming daily hurdles, mental stress, and spiritual blockages. By performing these makhsoos Qurani kalimat with pure intention, one can invite infinite blessings into their life.",
    urdu: "Har maslay ka hal Quran mein maujood hai. Rozmarra ki pareshaniyon aur mushkilat ke liye makhsoos Qurani kalimat ka wird aapki zindagi mein sakoon aur barkat lata hai.",
    details: [
      "Authentic wazaif for mental peace and anxiety relief.",
      "Specific supplications for protection from unseen dangers.",
      "Guidance on the proper times (auqat) and methods for effective wird.",
      "Customized spiritual routines for personal and family wellbeing."
    ]
  },
  mohabbat: {
    title: "Harmonious Relationships",
    subtitle: "Jayiz Mohabbat aur Ittefaq",
    icon: "❤️",
    significance: "In the light of Shariah, love and harmony between spouses (Mian-Biwi) and family members are sacred. Our spiritual solutions focus on removing misunderstandings, softening hearts, and fostering mutual respect through permissible (halal) Quranic prayers. These treatments are specifically designed to bring peace to broken homes and strengthen the bond of marriage.",
    urdu: "Miyan-biwi mein ittefaq aur jayiz muhabbat ke rohani amliyat ke zariye hum gharon mein sukoon aur mohabbat paida karne ki koshish karte hain.",
    details: [
      "Spiritual solutions for marital disputes and misunderstandings.",
      "Quranic prayers to soften hearts and create mutual love.",
      "Halal amliyat for resolving family conflicts and rivalries.",
      "Removing spiritual obstacles in lawful (halal) marriage proposals."
    ]
  },
  sehat: {
    title: "Spiritual Healing for Health",
    subtitle: "Sehat aur Shifa-e-Kamila",
    icon: "💊",
    significance: "Health is a blessing from Allah, and for every illness, He has provided a cure. Spiritual healing (Rohani Ilaj) works alongside medical treatment to rejuvenate the body and soul. Using the 'Ayaat-e-Shifa' (Verses of Healing), we help individuals recover from physical ailments and psychological distress that medical science sometimes struggles to address.",
    urdu: "Bimariyon se shifa aur jismani o nafsiati sehat ke liye makhsoos Qurani duain aur rohani ilaj ka bandobast kiya jata hai.",
    details: [
      "Spiritual healing for chronic physical diseases.",
      "Relief from psychological issues, depression, and insomnia.",
      "Ayaat-e-Shifa water (Damm) and makhsoos Shifa Taweezat.",
      "Strengthening the immune system through spiritual energy."
    ]
  },
  jadu: {
    title: "Protection from Black Magic",
    subtitle: "Jadu ka Tor aur Hifazat",
    icon: "🛡️",
    significance: "Black magic (Kala Jadu) and the Evil Eye (Nazar-e-Bad) are real threats mentioned in our faith. Protection involves creating a spiritual 'shield' using the powerful verses of 'Ayat-ul-Kursi' and the 'Char Qul'. Our taweezat are prepared to dismantle the darkest of spells and return the individual to a state of purity and divine protection.",
    urdu: "Nazar-e-bad, har qism ki hifazat, aur bandishon ke khatmay ke liye Quran-o-Sunnat ki roshni mein mazboot rohani hifazati dhal.",
    details: [
      "Dismantling severe black magic and evil spells.",
      "Protection from jealous eyes (Nazar-e-bad) and envious people.",
      "Cleansing homes and workplaces from negative spiritual entities.",
      "Permanent protection shields (Naqsh-e-Hifazat) for individuals."
    ]
  },
  kamyabi: {
    title: "Victory & Career Success",
    subtitle: "Kamyabi aur Fateh",
    icon: "🏆",
    significance: "Success in exams, career, or any life challenge requires both hard work and divine favor. By tapping into the spiritual power of specific Ism-e-Azam, we help seekers find favor in the eyes of others and overcome competition. These talismans are designed to unlock your potential and clear the path toward your goals.",
    urdu: "Imtihan, muqabla, aur zindagi ke har maidan mein fateh pane aur kamyabi hasil karne ke liye authentic rohani rehnumayi.",
    details: [
      "Spiritual support for competitive exams and interviews.",
      "Gaining favor and respect in social and professional circles.",
      "Removing hurdles that block professional growth and promotion.",
      "Enhancing confidence and focus through spiritual meditation."
    ]
  },
  rizq: {
    title: "Business & Wealth Blessings",
    subtitle: "Rizq aur Karobar mein Barkat",
    icon: "💰",
    significance: "Rizq (sustenance) is pre-ordained, but its flow can be restricted by spiritual blockages or lack of blessings (barkat). Using the power of the Great Name (Ism-e-Azam), we provide solutions to remove the 'bandish' (blockage) on wealth and business. Our focus is to invite prosperity that is pure (Tayyab) and lasting.",
    urdu: "Karobar mein barkat aur tangi-e-rizq door karne ke liye Ism-e-Azam aur makhsoos Qurani barkati naqsh ka istemal.",
    details: [
      "Removing business blockages (Karobari bandish) and losses.",
      "Attracting new opportunities and profitable ventures.",
      "Barkat in savings and daily income through spiritual wazaif.",
      "Protection from financial jealousy and corporate evil eye."
    ]
  },
  hamal: {
    title: "Pregnancy & Fertility Support",
    subtitle: "Aulaad ki Nemat aur Hifazat",
    icon: "🌸",
    significance: "The journey to parenthood is one of faith. For those struggling with infertility or facing complications during pregnancy, spiritual support offers a beacon of hope. We provide specialized naqsh to ensure the safety of both mother and child (Maa o Bacha) and remove any spiritual barriers preventing conception.",
    urdu: "Aulaad ki nemat ke liye Qurani duain aur dauran-e-hamal maa o bacha ki hifazat ke liye makhsoos rohani shields.",
    details: [
      "Spiritual assistance for individuals facing infertility (Be-auladi).",
      "Ensuring a safe pregnancy and healthy delivery of the child.",
      "Protection from negative energies that affect the womb.",
      "Prayers for the righteous and healthy upbringing of children."
    ]
  },
  amazing: {
    title: "Amazing Spiritual Secrets",
    subtitle: "Hairat-angez aur Nayaab Tilismat",
    icon: "✨",
    significance: "Our 'Amazing' category includes rare and unique spiritual solutions derived from the ancient wisdom of Sufis and scholars. These talismans are prepared under rare celestial alignments and offer extraordinary results for complex problems that seem impossible to solve. They represent the pinnacle of our spiritual expertise.",
    urdu: "Wo khas aur nayaab tilismat aur rohani asrat jo hairat-angez nataij dete hain aur namumkin ko mumkin banatay hain.",
    details: [
      "Rare talismans prepared during specific celestial alignments.",
      "Solutions for highly complex and long-standing life problems.",
      "Special spiritual rings with extraordinary protective properties.",
      "One-on-one Muraqaba guidance for advanced spiritual seekers."
    ]
  }
};

const TaweezSubPage: React.FC<TaweezSubPageProps> = ({ category, onNavigate }) => {
  const content = CATEGORY_CONTENT[category];

  if (!content) return (
    <div className="pt-60 text-center min-h-screen">
      <h2 className="text-3xl text-gray-400">Section Under Development</h2>
      <button onClick={() => onNavigate?.('taweez')} className="mt-8 text-[#daa520] underline">Back to Taweezat</button>
    </div>
  );

  return (
    <div className="pt-0 bg-[#fdfdfc]">
      {/* Hero Header */}
      <section className="relative pt-44 pb-32 bg-[#064e3b] islamic-pattern overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        
        <div className="absolute top-32 left-6 lg:left-12 z-30">
          <button 
            onClick={() => onNavigate?.('taweez')}
            className="group flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-[#daa520] border border-[#daa520]/30 text-white rounded-full transition-all duration-300 font-serif-display text-sm font-bold shadow-2xl"
          >
            <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
            Back to All Taweezat
          </button>
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10 animate-fade-in-up">
          <div className="text-7xl mb-8 filter drop-shadow-xl animate-float">{content.icon}</div>
          <h1 className="text-white font-serif-display text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            {content.title}
          </h1>
          <p className="text-[#daa520] font-amiri text-3xl md:text-4xl italic mb-10 drop-shadow-md">
            {content.subtitle}
          </p>
          <div className="h-1 w-64 bg-gradient-to-r from-transparent via-[#daa520] to-transparent mx-auto" />
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            
            {/* Left: Significance Content */}
            <div className="space-y-12">
              <div className="relative">
                <h2 className="text-[#064e3b] font-serif-display text-4xl font-bold mb-6">Spiritual Significance</h2>
                <div className="w-24 h-1.5 bg-rose-400 rounded-full" />
              </div>

              <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#daa520]/5 rounded-full group-hover:scale-110 transition-transform duration-700" />
                <p className="text-gray-600 font-lora text-xl leading-relaxed relative z-10 first-letter:text-5xl first-letter:text-[#064e3b] first-letter:font-serif-display first-letter:mr-3 first-letter:float-left">
                  {content.significance}
                </p>
              </div>

              <div className="p-10 bg-[#064e3b] text-white rounded-[40px] shadow-2xl border-r-[12px] border-[#daa520] relative">
                <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />
                <h3 className="text-[#daa520] font-serif-display text-2xl font-bold mb-6 text-right">اصل مقصد (اردو)</h3>
                <p className="text-3xl font-amiri leading-[1.8] text-right dir-rtl relative z-10">
                  {content.urdu}
                </p>
              </div>
            </div>

            {/* Right: Key Features & Order Button */}
            <div className="sticky top-44 space-y-10">
              <div className="bg-white p-12 rounded-[50px] border-2 border-[#daa520]/10 shadow-3xl space-y-10">
                <h3 className="text-[#064e3b] font-serif-display text-3xl font-bold mb-4 italic">How We Assist You 💠</h3>
                
                <ul className="space-y-8">
                  {content.details.map((detail: string, i: number) => (
                    <li key={i} className="flex gap-5 items-start group">
                      <div className="mt-1.5 w-7 h-7 rounded-full bg-[#daa520] flex items-center justify-center text-[#064e3b] shrink-0 shadow-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                        <i className="fa-solid fa-star-and-crescent text-[12px]" />
                      </div>
                      <span className="text-gray-700 font-lora text-lg leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-12 border-t border-gray-100">
                  <div className="mb-8 text-center">
                     <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#064e3b]/50 mb-2">Ready for a solution?</p>
                     <h4 className="text-[#064e3b] font-serif-display text-xl font-bold italic">Secure Your Consultation Today</h4>
                  </div>
                  <button 
                    onClick={() => {
                      onNavigate?.('home');
                      setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                    }}
                    className="w-full py-6 bg-[#064e3b] text-white font-serif-display font-bold text-2xl rounded-[24px] hover:bg-[#daa520] hover:text-[#064e3b] transition-all duration-500 shadow-2xl flex items-center justify-center gap-5 group"
                  >
                    Consult an Expert Now
                    <i className="fa-solid fa-scroll group-hover:translate-x-2 group-hover:-rotate-12 transition-all duration-300" />
                  </button>
                  <p className="mt-6 text-center text-gray-400 text-sm font-lora italic">
                    * Personalized according to your name and specific spiritual needs.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Faith Confirmation Strip */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-6 opacity-30">
            <div className="h-px w-24 bg-gray-400" />
            <p className="text-gray-600 font-amiri text-2xl italic tracking-widest uppercase">
              Shifa aur Kamyabi sirf Allah ke hath mein hai
            </p>
            <div className="h-px w-24 bg-gray-400" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaweezSubPage;
