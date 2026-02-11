
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
    significance: "Victory and success are blessings that require the right spiritual alignment. Many people work hard but find their paths blocked by invisible hurdles. Introduction: This Talisman is crafted using the sacred numerical secrets of the great names of Allah that govern success and victory. It is designed to clear the path of the wearer and attract positive spiritual energies. Aksar auqat hamari mehnat hasad ki wajah se zaya ho jati hai, ye tilism hasad ke asrat ko khatam karta hai. Solution: In the Quran, Allah says, 'Victory is only from Allah.' Our method involves identifying the specific spiritual blockages in your career or education and providing a tailored Naqsh that serves as a divine key. Hum Ism-e-Azam ke aadaad ko makhsoos tariqay se muratab karte hain. Benefits: Whether it is a promotion you seek, an exam you wish to clear, or a business deal you want to close, this Talisman provides the necessary spiritual boost. It enhances your aura, making you more influential and respected in social and professional circles. It is a shield against the envy (Hasad) of competitors that often stops progress. Isse aapki shakhsiyat mein kashish paida hoti hai aur log aapki baat ko tawajjo se sunte hain. Kamyabi ke darwazay wahan se khulte hain jahan se aapne socha bhi nahi hota.",
    urdu: "Mehnat aur koshish ke bawajood kamyabi na milne ki surat mein ye Tilism rasta saaf karne aur fateh pane mein madadgar hota hai. Ism-e-Azam ki barkat se har darwaza khul jata hai aur hasideen ki chalen nakaam ho jati hain.",
    benefit: "Confidence mein izafa aur har maidan mein fateh o kamyabi.",
    details: [
      "Exam success aur zehni focus mein be-panah izafa.",
      "Job promotions aur office mein izzat o martaba ka husool.",
      "Competitive business environment mein ghalba aur tarraqi.",
      "Legal masail aur court cases mein fateh ka mustaqil rohani hal.",
      "Personality mein kashish aur rohani quwwat mein izafa.",
      "Sitaron ki gardish aur rukawaton ka mukammal khatma."
    ]
  },
  love: {
    title: "Muhabbat aur Gharelu Ittefaq",
    subtitle: "Talisman for Love & Harmony",
    icon: "❤️",
    significance: "A peaceful home is a reflection of Jannah on Earth. Introduction: When hearts grow cold and misunderstandings arise, the entire family suffers. Often, this is caused by external spiritual attacks intended to break families. Ghaibi quwwatein aksar hasad ki wajah se gharon mein larayi dalwati hain. Solution: Our Talisman for Love is based on the verses of 'Mawaddah' and 'Rahmah'. It is written with pure Saffron and Musk to infuse the environment with spiritual warmth. Is tilism mein Surah-e-Ikhlas aur makhsoos mohabbat ki ayaat ka istemal hota hai. Benefits: It heals broken relationships between husband and wife, resolves conflicts with parents or in-laws, and brings a sense of serenity to the home. It is strictly for lawful (halal) purposes and aims to bring hearts together for the sake of Allah. It acts as a barrier against those who try to create divisions. Isse ghar mein barkat aati hai aur miyan biwi ke darmiyan aik naya aur mazboot rishta qaim hota hai jo waqt ke sath mazeed gehra hota jata hai.",
    urdu: "Rishton mein darar khatam karne aur jayiz mohabbat paida karne ke liye makhsoos Qurani amliyat aur Naqsh-e-Hub. Ghar mein sakoon Allah ki bari nemat hai aur hum is nemat ki bahaali mein aapki madad karte hain.",
    benefit: "Rishton mein darar ka khatma aur dilon mein mohabbat ki barkat.",
    details: [
      "Miyan biwi ke darmiyan shadeed mohabbat aur mustaqil ittefaq.",
      "Sasural mein izzat, maqam aur mohabbat hasil karne ka hal.",
      "Pasand ki shadi mein anay wali rukawaton ka sharai o rohani tor.",
      "Bhaiyon aur rishtedaron ke darmiyan purani dushmani ka khatma.",
      "Ghar mein sakoon aur lari jhagray se mukammal nijaat ka rasta.",
      "Negative energy aur shaitani waswaso se rishton ki hifazat."
    ]
  },
  magic: {
    title: "Jadu aur Nazr-e-Bad se Hifazat",
    subtitle: "Talisman for Protection",
    icon: "🛡️",
    significance: "Spiritual warfare is a reality that many ignore until it is too late. Introduction: Black magic (Kala Jadu) can destroy a person's health, wealth, and sanity. It is a dark energy that needs a powerful light to be dismantled. Hasid ki nazar pathar ko tor deti hai, to insan kya cheez hai. Solution: Our 'Loh-e-Hifazat' is a master talisman that combines the power of Ayat-ul-Kursi, the four Quls, and the secret numbers of protection. Hum har taweez ko mareez ke naam se 'Zakat' ada kar ke tayyar karte hain. Benefits: It provides a 24/7 spiritual shield around the wearer and their home. It returns the negative energy to its source and cleanses the soul from the effects of the evil eye (Nazar-e-Bad). This is essential for anyone who feels they are being held back by unseen forces. It provides peace of mind and allows you to live without fear. Isse dushman ka har waar palat jata hai aur aap hamesha Allah ki amaan mein rehte hain. Ghar mein asrat aur saye ka mukammal khatma hota hai.",
    urdu: "Kala jadu aur nazr-e-bad se mukammal chhutkara aur mustaqil hifazati shield. Har qism ki bandish ka rohani tor sirf Quran se hi mumkin hai aur hum ye Quran-o-Sunnat ke mutabiq karte hain.",
    benefit: "Har qism ki rohani bandish aur jadu ka mukammal khatma.",
    details: [
      "Kalay jadu aur sifli ilm ka 100% kaat (tor) aur hifazat.",
      "Nazar-e-bad aur hasideen ki jalan se hamesha ke liye bachao.",
      "Saye, asrat aur khaufnaq khwabon se mukammal nijaat ka naqsh.",
      "Ghar aur karobar ki hifazati rohani dhaal aur barkat.",
      "Dushman ki buri chalon se hamesha ke liye ghaibi bachao.",
      "Zehni bechaini aur darr ko sukoon mein tabdeel karne ka hal."
    ]
  },
  business: {
    title: "Karobari Barkat aur Rizq",
    subtitle: "Talisman for Business",
    icon: "💰",
    significance: "Financial stability allows a believer to focus on their faith and serve the community. Introduction: Many businesses fail despite good management because the spiritual 'Barkat' is missing or has been blocked by jealousy. Karobar ki bandish aaj kal boht aam hai jo hasad ki wajah se ki jati hai. Solution: This Talisman is based on the numerical grid of Surah Al-Waqiah and the 'Ism-e-Rizq'. It acts as a magnet for prosperity and new opportunities. Hum barkat ke liye makhsoos 'Sa'at' mein Zafran se ye naqsh likhte hain. Benefits: It removes the 'Bandish' on earnings, protects the business from sudden losses, and attracts loyal customers. It ensures that the money you earn stays blessed and fulfills your needs without stress. It is a must-have for shopkeepers, entrepreneurs, and anyone struggling with debt. Isse karobar mein izafa hota hai aur aapki amdani ke naye zariye peda hote hain. Karobari dushman nakaam hote hain aur aapka naam market mein roshan hota hai.",
    urdu: "Rizq ki tangi door karne aur karobar mein barkat ke liye makhsoos rohani hal. Karobari bandish khatam ho kar rizq ke darwazay khul jate hain aur ghaib se madad aati hai.",
    benefit: "Karobar mein barkat aur rizq mein be-panah farawani.",
    details: [
      "Karobari nuqsan aur bandish ka mukammal aur yaqeeni khatma.",
      "Naye gahakon (customers) ki tawajjo aur sale mein be-panah izafa.",
      "Qarz se nijaat aur mali mustahkami ka makhsoos rohani hal.",
      "Dukan aur office ki barkat ke liye khas noori naqsh-e-rizq.",
      "Sudden financial losses se hamesha ke liye rohani hifazat.",
      "Amdaani ke naye aur jayiz raste khulne ka noori wazifa."
    ]
  },
  pregnancy: {
    title: "Aulaad ki Nemat aur Hamal ki Hifazat",
    subtitle: "Talisman for Pregnancy",
    icon: "🌸",
    significance: "The blessing of a child is the greatest joy for a family. Introduction: Infertility or repeated miscarriages are often linked to spiritual blockages in the reham (womb). These asrat prevent a healthy life from blooming. Buri nazar aur asrat aksar hamal ko nuqsan pohanchate hain. Solution: We provide a specialized Talisman prepared with 'Ayaat-e-Hamal'. It cleanses the mother's body and creates a protected spiritual environment for the unborn child. Hum maa aur bache ke hifazati hisaar ke liye makhsoos duain damm karte hain. Benefits: It helps in successful conception, ensures the safety of the pregnancy for the full nine months, and leads to a healthy delivery. It protects the child from the evil eye even before they are born. This is a source of hope for those who have lost hope after many medical treatments. Isse aulaad-e-saaleh naseeb hoti hai aur ghar mein khushiyan wapas aati hain. Maa ki sehat bhi hamal ke doran behtar rehti hai.",
    urdu: "Hamal ki hifazat aur aulaad ki nemat ke liye Ism-e-Azam ki barkat se tayyar karda tilism. Maa aur bacha dono Allah ki hifazat mein rehte hain aur har shar se mehfooz rehte hain.",
    benefit: "Hamal ka safe rehna aur aulaad ki nemat se jholi bharna.",
    details: [
      "Be-auladi ka rohani ilaj aur conceiving mein ghaibi madad.",
      "Miscarriage (hamal girne) se mukammal aur mustaqil hifazat.",
      "Dauran-e-hamal maa ki sehat, sakoon aur tawanayi ka hal.",
      "Bache ki rohani hifazat aur pedaishi buri nazar se bachao.",
      "Delivery mein asani aur sehat mand aulaad ki khas Qurani dua.",
      "Womb (reham) se manfi asrat aur bandish ka mukammal khatma."
    ]
  },
  pray: {
    title: "Khasusi Dua ki Darkhwast",
    subtitle: "Special Prayer Request",
    icon: "🤲",
    significance: "The weapon of a believer is Dua. Introduction: Sometimes your own prayers feel unanswered because of a heavy spiritual burden or a lack of focus. Collective prayer or prayer by those who dedicate their lives to spiritual practice has a special weight. Allah Ta'ala farmata hai ke 'Mujhse dua karo main qabool karunga'. Solution: You can submit your specific concern to us. Our team performs 'Khasusi Dua' during Tahajjud and other blessed hours, making your request a priority in our spiritual circles. Hum Ism-e-Azam ke sath aapka naam lekar ilteja karte hain. Benefits: This service provides a powerful intercession. We use the 'Waseela' of the righteous and the power of 'Ism-e-Azam' to knock at the door of Allah's mercy for your specific need. Many have seen miracles happen through these focused spiritual sessions. Isse aapke dil ko sukoon milta hai aur mushkil kaam asaan hone lagte hain. Aapki har jayiz hajat ke liye hum Allah ke huzoor gir-gira kar dua karte hain.",
    urdu: "Hamare rohani mahireen se makhsoos dua karwane ke liye apni darkhwast bhejien. Allah ke huzoor gir-gira kar dua karna har mushkil ka hal hai aur hum is mein aapka sath dete hain.",
    benefit: "Direct spiritual connection aur Allah ki ghaibi madad ka husool.",
    details: [
      "Tahajjud ke mubarak auqat mein khasusi dua aur ilteja ka ehtamam.",
      "Mushkil tareen masail ke liye makhsoos aur lambay dua sessions.",
      "Gharelu aur karobari pareshaniyon ke liye collective spiritual prayer.",
      "Bimariyon se shifa ke liye makhsoos Qurani damm aur ilteja.",
      "Har jayiz hajat ki jald takmeel ke liye khas rohani sifarish.",
      "Zehni sakoon aur mushkilat se nijaat ki makhsoos dua."
    ]
  },
  ismeazam: {
    title: "Ism-e-Azam ki Rohani Quwwat",
    subtitle: "Your Personal Ism-e-Azam",
    icon: "✨",
    significance: "Every person has a unique spiritual key connected to their name and character. Introduction: This is known as your personal 'Ism-e-Azam'. When you call upon Allah using the name that resonates with your soul's vibration, the response is swift. Aapka naam aapki shakhsiyat ka aaina hota hai aur Ism-e-Azam uski taqat. Solution: We calculate your specific Ism-e-Azam using 'Abjad' (Numerical calculation) and ancient spiritual mathematics. We then provide you with the correct method (Wird) and timings to practice it. Isse aapki rooh ko jala milti hai. Benefits: It brings clarity to your mind, opens doors of luck, and provides a direct line to divine assistance in times of crisis. Practicing your Ism-e-Azam daily acts as a spiritual battery, keeping your aura strong and protected from all negativity. Isse aapki duain jald qabool hoti hain aur dunya aapki izzat karti hai. Har mushkil waqt mein Allah ki ghaibi madad aapke sath hoti hai.",
    urdu: "Apne naam ke mutabiq makhsoos Ism-e-Azam maloom karein jo har mushkil ki kunji hai. Ye aapki rohani quwwat ko jala bakhshta hai aur aapki shakhsiyat ko pur-asar banata hai.",
    benefit: "Zindagi mein asani, barkat aur har mushkil ka fori hal.",
    details: [
      "Personalized Ism-e-Azam calculation (Abjad ke usoolon ke mutabiq).",
      "Ism-e-Azam parhne ka sahi aur asar-andaz tarika o auqat.",
      "Zehni quwwat aur rohani kashish mein be-panah o mustaqil izafa.",
      "Har dua ki jald qabooliyat ka asan aur authentic rohani rasta.",
      "Personality alignment with divine names for social success.",
      "Hifazati hisaar (Spiritual Protection) jo hamesha sath rahe."
    ]
  },
  guidance: {
    title: "Mukammal Rohani Guidance",
    subtitle: "Complete Spiritual Guidance",
    icon: "🧭",
    significance: "Confusion is a tool of Shaitaan. Introduction: Many people make wrong life decisions because they lack spiritual clarity. Whether it's marriage, a career shift, or moving abroad, a wrong step can lead to years of regret. Ghalat faislay aksar bandish ki wajah se hote hain. Solution: Our guidance service offers a deep analysis of your spiritual state. We use Istikhara and 'Kashf' (Spiritual Insight) principles to show you the truth behind the veils. Hum aapko batate hain ke konsa rasta aapke liye 'Khair' hai. Benefits: You gain the confidence to move forward. We provide you with a 'Roadmap' for your spiritual and worldly success, ensuring that your decisions are aligned with Allah's will. This service is like a lighthouse in the dark ocean of life's complexities. Isse aapka waqt aur sarmaya dono mehfooz rehte hain aur aap hamesha sukoon mein rehte hain.",
    urdu: "Zindagi ke pechida masail mein Quran-o-Sunnat ki roshni mein behtareen mashwara aur renumayi. Ghalat faislo se bachna hi asli kamyabi hai aur hum is mein aapke madadgar hain.",
    benefit: "Faislo mein yaqeen, sukoon aur ghalat raste se mukammal hifazat.",
    details: [
      "Career aur Business decisions mein behtareen rohani mashwara.",
      "Rishto aur shadi ke mamlat mein gehri aur makhsoos renumayi.",
      "Zehni kashmakash aur confusion ka mustaqil rohani hal.",
      "Zindagi ke naye safar se pehle Allah ki raza maloom karne ka tariqa.",
      "Spiritual growth aur Allah se qurbat hasil karne ka authentic rasta.",
      "Dushman aur dost ki pehchan mein rohani madad aur jaiza."
    ]
  },
  istikhara: {
    title: "Online Istikhara (Mashwara-e-Ilahi)",
    subtitle: "Divine Consultation",
    icon: "🔮",
    significance: "Istikhara is the beautiful Sunnah of asking Allah for the best choice. Introduction: Most people do Istikhara when it's too late. The correct way is to seek guidance before you commit to a decision. Istikhara momin ka hathiyar hai jo use ghalat raste se bachata hai. Solution: Our experts perform the 'Masnoon Istikhara' on your behalf with the utmost sincerity, purity and focused spiritual energy. Hum Quran aur Sunnat ke bataye huye tariqay se mashwara karte hain. Benefits: You receive a clear indication of whether a path is good (Khair) or harmful (Shar) for you. It saves you from future heartache, financial loss, and wasted years. Our report provides context and guidance on how to proceed based on the spiritual signals received during the process. It is the ultimate insurance for a believer's peace of mind. Aapka dil mutmain ho jata hai aur raste asaan ho jate hain.",
    urdu: "Naye kaam ya faislay se pehle Allah ki barkat aur raza maloom karne ka sharai tarika. Istikhara momin ka aik azeem hathiyar hai jo use kabhi mayoos nahi karta.",
    benefit: "Allah ki marzi maloom hona aur har ghalat kadam se yaqeeni bachat.",
    details: [
      "Marriage (Shadi) ke liye makhsoos aur nihayat tafseeli Istikhara.",
      "Business aur investment se pehle Allah ka mashwara aur barkat.",
      "Safar (Travel) aur relocation ke liye rohani jaiza aur renumayi.",
      "Khwab ki tabeer aur unka Istikhara se taluq maloom karna.",
      "Written or Audio report of the Istikhara result with guidance.",
      "Har qism ki uljhan door karne ke liye authentic 'Istikhara-e-Noori'."
    ],
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
                <h2 className="text-[#064e3b] font-serif-display text-4xl font-bold mb-6 italic">Spiritual Analysis & Deep Understanding</h2>
                <div className="w-24 h-1.5 bg-[#daa520] rounded-full" />
              </div>

              <div className="bg-white p-10 rounded-[40px] border-2 border-gray-100 shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#daa520]/5 rounded-full group-hover:scale-110 transition-transform duration-700" />
                <p className="text-gray-600 font-lora text-xl leading-relaxed relative z-10 first-letter:text-5xl first-letter:text-[#064e3b] first-letter:font-serif-display first-letter:mr-3 first-letter:float-left">
                  {content.significance}
                </p>
              </div>

              <div className="p-10 bg-[#064e3b] text-white rounded-[40px] shadow-2xl border-l-[12px] border-[#daa520] relative">
                <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />
                <h3 className="text-[#daa520] font-serif-display text-2xl font-bold mb-6 text-right font-amiri tracking-widest uppercase">مقصد اور روحانی فوائد</h3>
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
                   <h3 className="text-[#064e3b] font-serif-display text-3xl font-bold">Primary Benefit 💠</h3>
                </div>
                
                <div className="bg-[#daa520]/5 p-8 rounded-3xl border border-[#daa520]/20 mb-10">
                   <p className="text-[#064e3b] font-serif-display text-2xl font-bold italic text-center">
                     "{content.benefit}"
                   </p>
                </div>

                <h4 className="text-[#064e3b] font-serif-display text-xl font-bold mb-6 italic">Specific Solutions:</h4>
                <ul className="space-y-6 mb-12">
                  {content.details.map((detail: string, i: number) => (
                    <li key={i} className="flex gap-4 items-center group">
                      <div className="w-6 h-6 rounded-full bg-[#064e3b] flex items-center justify-center text-[#daa520] shrink-0 group-hover:bg-[#daa520] group-hover:text-white transition-all">
                        <i className="fa-solid fa-star-and-crescent text-[10px]" />
                      </div>
                      <span className="text-gray-700 font-lora text-lg font-bold">{detail}</span>
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
                  Consult Now
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
                  
                  <div className={`transition-all duration-500 ease-in-out ${openFaq === idx ? 'max-h-[500px] opacity-100 pb-8 px-8' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#daa520]/20 to-transparent mb-6" />
                    <p className="text-gray-600 font-lora text-lg leading-relaxed italic border-l-4 border-blue-200 pl-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
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
