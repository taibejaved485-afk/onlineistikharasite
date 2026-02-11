
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
    significance: "Islamic Wazaif are powerful spiritual tools rooted in the divine verses of the Holy Quran and the beautiful names of Allah (Asma-ul-Husna). Zindagi mein kabhi kabhi aisy mawaqay aate hain jab insan zehni dabao aur pareshani ka shikar ho jata hai. Aisy mein Allah ka zikr hi wo wahid rasta hai jo dil ko sakoon deta hai. Hamare tajweez karda wazaif Quran-o-Sunnat ki roshni mein tayyar kiye gaye hain. Introduction: Wazaif ka matlab hai kisi makhsoos kalimay ya ayat ko aik muqarrah tadad mein parhna. Ye rohani qatray ki manind hain jo ahista ahista dil ki sakhti ko khatam karte hain. Solution: Quran-e-Pak mein irshad hai 'Bala bi-dhikrillahi tatma'innul qulub' (Be-shak Allah ke zikr mein hi dilon ka itminan hai). Hum har maslay ke liye makhsoos ayaat ka intikhab karte hain jo aapki rohani quwwat ko jidat bakhshti hain. Benefits: In wazaif ke zariye aapko zehni sakoon milta hai, dushmano ke shar se hifazat hoti hai, aur rizq mein barkat ke darwazay khulte hain. Ye wazaif aapke ghar mein aman aur mohabbat ki faza qaim karne mein madadgar sabit hote hain.",
    urdu: "Har maslay ka hal Quran mein maujood hai. Rozmarra ki pareshaniyon aur mushkilat ke liye makhsoos Qurani kalimat ka wird aapki zindagi mein sakoon aur barkat lata hai. Hum aapko batatay hain ke kis tarah in makhsoos ayaat se aap apni mushkilat ko asan kar sakte hain.",
    details: [
      "Zehni sakoon aur anxiety se mukammal nijaat.",
      "Ghar mein lari jhagray khatam karne ke liye makhsoos azkar.",
      "Dushman aur hasid ki buri nazar se hifazati dhal.",
      "Rizq mein barkat aur karobari bandish ka khatma.",
      "Be-khwabi (Insomnia) aur khauf ka rohani ilaj."
    ]
  },
  mohabbat: {
    title: "Harmonious Relationships",
    subtitle: "Jayiz Mohabbat aur Ittefaq",
    icon: "❤️",
    significance: "In the light of Shariah, love and harmony between family members are the foundation of a peaceful society. Aaj kal ke daur mein gharon mein na-chaqi aur miyan biwi ke darmiyan ikhtelafat aik aam masla ban chuke hain. Introduction: Aksar ye ikhtelafat rohani bandish ya buri nazar ki wajah se hote hain jo hasideen ki wajah se paida ki jati hai. Jab dilon mein dooriyan barh jati hain, to Quran-e-Pak ki ayaat dilon ko jorne ka kaam karti hain. Solution: Allah Ta'ala ne Surah Al-Anfal mein farmaya ke 'Dilon mein mohabbat Allah hi dalta hai'. Hum jayiz mohabbat aur ittefaq ke liye makhsoos Naqsh aur duaen tajweez karte hain jo Shariah ke dairay mein hoti hain. Benefits: In amliyat ke zariye miyan biwi ke darmiyan mohabbat barhti hai, sasural ke masail hal hote hain, aur ghar mein sukoon ki faza qaim hoti hai. Ye solutions un logon ke liye hain jo apni shadi shuda zindagi ko tabahi se bachana chahte hain.",
    urdu: "Miyan-biwi mein ittefaq aur jayiz muhabbat ke rohani amliyat ke zariye hum gharon mein sukoon aur mohabbat paida karne ki koshish karte hain. Hamari renumayi sirf aur sirf jayiz rishton ke liye hai.",
    details: [
      "Miyan biwi ke darmiyan na-chaqi ka mukammal khatma.",
      "Sasural mein izzat aur mohabbat hasil karne ka rohani hal.",
      "Pasand ki shadi mein anay wali rukawaton ka sharai tor.",
      "Gharelu ranjishen aur dushmani khatam karne ke wazaif.",
      "Dilon mein narmi aur hamdardi paida karne ke makhsoos naqsh."
    ]
  },
  sehat: {
    title: "Spiritual Healing for Health",
    subtitle: "Sehat aur Shifa-e-Kamila",
    icon: "💊",
    significance: "Health is a blessing from Allah, and for every illness, He has provided a cure. Rohani ilaj (Spiritual Healing) jismani ilaj ke sath mil kar shifa ki raftar ko barha deta hai. Introduction: Bohat si bimariyan aisi hoti hain jin ki medical report theek aati hai lekin mareez ki halat kharab hoti hai. Ye aksar asrat, saya ya nazar-e-bad ki wajah se hota hai. Solution: Quran mein 'Ayat-e-Shifa' mojood hain jo har tarah ki jismani aur nafsiati bimari ke liye dhaal hain. Hum makhsoos ayaat ka damm aur naqsh faraham karte hain jo Allah ke hukm se mareez ko shifa dete hain. Benefits: Is se mareez ka hosla barhta hai, purani se purani bimari mein afaqah hota hai, aur zehni sukoon milta hai. Ye ilaj har umar ke fard ke liye moassar hai.",
    urdu: "Bimariyon se shifa aur jismani o nafsiati sehat ke liye makhsoos Qurani duain aur rohani ilaj ka bandobast kiya jata hai. Allah ne har bimari ke liye shifa utari hai.",
    details: [
      "Purani aur pechida bimariyon mein rohani madad.",
      "Nafsiati masail aur depression ka Quranic ilaj.",
      "Bachon ki sehat aur hifazat ke liye makhsoos taweezat.",
      "Jism mein taqat aur tawanayi bahal karne ke wazaif.",
      "Buri nazar ke asrat se jism ko pak karne ka tarika."
    ]
  },
  jadu: {
    title: "Protection from Black Magic",
    subtitle: "Jadu ka Tor aur Hifazat",
    icon: "🛡️",
    significance: "Black magic (Kala Jadu) and the Evil Eye (Nazar-e-Bad) are real threats mentioned in the Holy Quran and Hadith. Introduction: Jadu insan ki zindagi ko tabah kar deta hai, karobar band kar deta hai aur sehat ko barbad kar deta hai. Ye hasad ki wajah se kiya jata hai. Solution: Hum Quran-e-Pak ki makhsoos ayaat (Manzil) aur makhsoos aadaad se tayyar karda 'Loh-e-Hifazat' dete hain jo har qism ke jadu ko kaat deta hai. Benefits: Is se aapka karobar khul jata hai, ghar mein barkat aati hai, aur dushman ki har chal nakaam ho jati hai. Aapka ghar aur ahle-khana har qism ke shar se mehfooz rehte hain.",
    urdu: "Nazar-e-bad, har qism ki hifazat, aur bandishon ke khatmay ke liye Quran-o-Sunnat ki roshni mein mazboot rohani hifazati dhal. Jadu ka tor Quran se hi mumkin hai.",
    details: [
      "Kalay jadu aur sifli ilm ka 100% rohani tor.",
      "Karobari bandish aur rizq ki rukawat ka khatma.",
      "Ghar aur dukan ki hifazat ke liye makhsoos naqsh.",
      "Hasid ki buri nazar aur jalan se hifazat.",
      "Sihr-e-mufarriq (rishtey torne wala jadu) ka ilaj."
    ]
  },
  kamyabi: {
    title: "Victory & Career Success",
    subtitle: "Kamyabi aur Fateh",
    icon: "🏆",
    significance: "Success in exams, career, or any life challenge requires both hard work and divine favor. Introduction: Aaj ke muqablay ke daur mein insan mehnat to karta hai lekin naseeb sath nahi deta. Ye aksar rohani rukawaton ki wajah se hota hai jo hasideen ki wajah se paida hoti hain. Solution: Hum Ism-e-Azam ki barkat se aise naqsh tayyar karte hain jo aapki shakhsiyat mein kashish aur raste mein asani paida karte hain. Benefits: Is se aapko naukri mein taraqqi milti hai, imtehanat mein kamyabi milti hai, aur har maidan mein aapka palra bhari rehta hai. Log aapki baat ko tawajjo se sunte hain aur izzat karte hain.",
    urdu: "Imtihan, muqabla, aur zindagi ke har maidan mein fateh pane aur kamyabi hasil karne ke liye authentic rohani rehnumayi aur makhsoos Ism-e-Azam ka wird.",
    details: [
      "Competitive exams aur job interviews mein kamyabi.",
      "Office aur karobar mein izzat o martaba mein izafa.",
      "Legal masail aur court cases mein fateh ka rohani hal.",
      "Dushmanon par ghalba aur unki chalon se hifazat.",
      "Personality development aur confidence mein izafa."
    ]
  },
  rizq: {
    title: "Business & Wealth Blessings",
    subtitle: "Rizq aur Karobar mein Barkat",
    icon: "💰",
    significance: "Rizq (sustenance) is pre-ordained, but its flow can be restricted by spiritual blockages. Introduction: Karobar mein achanak nuqsan, gahakon ki kami, aur paison mein barkat na hona asrat ki alamat ho sakti hai. Solution: Hum Naqsh-e-Sulemani aur makhsoos Barkati ayaat ke zariye rizq ke darwazay kholte hain. Benefits: Is se aapki amdani mein izafa hota hai, be-fuzool kharch khatam hota hai, aur karobar din dugni raat chugni taraqqi karta hai. Karobari dushmani aur jalan ka asar bhi khatam ho jata hai.",
    urdu: "Karobar mein barkat aur tangi-e-rizq door karne ke liye Ism-e-Azam aur makhsoos Qurani barkati naqsh ka istemal. Rizq Allah ke hath mein hai hum sirf rasta dikhate hain.",
    details: [
      "Karobari bandish aur nuqsan ka mukammal khatma.",
      "Naye gahakon ki tawajjo aur sale mein izafa.",
      "Qarz se nijaat aur mali mustahkami ka wazifa.",
      "Dukan aur showroom ki barkat ke liye makhsoos naqsh.",
      "Ghar mein rizq ki farawani aur barkat ki dua."
    ]
  },
  hamal: {
    title: "Pregnancy & Fertility Support",
    subtitle: "Aulaad ki Nemat aur Hifazat",
    icon: "🌸",
    significance: "The journey to parenthood is a blessing and requires spiritual care. Introduction: Be-auladi aik dardnak masla hai jo dilon ko tor deta hai. Aksar medical ilaj ke sath sath rohani madad ki zaroorat hoti hai taake womb (reham) har asar se pak ho sake. Solution: Hum makhsoos Qurani ayaat ke naqsh faraham karte hain jo hamal ko mehfooz banatay hain. Benefits: Maa aur bacha dono sehat mand rehte hain, hamal bar bar girne (miscarriage) ka masla hal hota hai, aur Allah ke fazl se aulaad-e-saaleh naseeb hoti hai.",
    urdu: "Aulaad ki nemat ke liye Qurani duain aur dauran-e-hamal maa o bacha ki hifazat ke liye makhsoos rohani shields. Hamara maqsad har ghar mein khushi lana hai.",
    details: [
      "Be-auladi ka mukammal rohani ilaj aur renumayi.",
      "Hamal bar bar girne se bachane ka khas naqsh.",
      "Dauran-e-hamal maa aur bache ki rohani hifazat.",
      "Aulaad-e-narina ke liye makhsoos Qurani wazaif.",
      "Delivery mein asani aur sehat ke liye khas duain."
    ]
  },
  amazing: {
    title: "Amazing Spiritual Secrets",
    subtitle: "Hairat-angez aur Nayaab Tilismat",
    icon: "✨",
    significance: "This category represents the highest level of our spiritual expertise. Introduction: Kuch masail aisy hote hain jo saloon se hal nahi hote aur har rasta band lagta hai. Ye 'Amazing' category inhi pechida masail ke liye hai. Solution: Hum nayaab aadaad aur nayaab auqat mein aise tilismat tayyar karte hain jo hairat-angez nataij dete hain. Benefits: In se namumkin kaam mumkin ho jate hain, shadeed se shadeed bandish khatam hoti hai, aur zindagi mein aik azeem tabdeeli aati hai. Ye sirf khas logon ke liye hai jo rohaniat ki gehrai ko samajhte hain.",
    urdu: "Wo khas aur nayaab tilismat aur rohani asrat jo hairat-angez nataij dete hain aur namumkin ko mumkin banatay hain. Ye hamari barson ki mehnat ka nichor hai.",
    details: [
      "Nayaab aur qadeem tilismat jo saloon purani bandish kat de.",
      "Zindagi mein achanak bari tabdeeli lane ke amliyat.",
      "Taskheer-e-khalq (logon ko mutasir karne) ka khas naqsh.",
      "Ghaibi madad aur mushkilat se fori nijaat.",
      "Spiritual high-energy rings for protection and luck."
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
                <h2 className="text-[#064e3b] font-serif-display text-4xl font-bold mb-6 italic">Roohani Significance & Detailed Analysis</h2>
                <div className="w-24 h-1.5 bg-[#daa520] rounded-full" />
              </div>

              <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#daa520]/5 rounded-full group-hover:scale-110 transition-transform duration-700" />
                <p className="text-gray-600 font-lora text-xl leading-relaxed relative z-10 first-letter:text-5xl first-letter:text-[#064e3b] first-letter:font-serif-display first-letter:mr-3 first-letter:float-left">
                  {content.significance}
                </p>
              </div>

              <div className="p-10 bg-[#064e3b] text-white rounded-[40px] shadow-2xl border-r-[12px] border-[#daa520] relative">
                <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />
                <h3 className="text-[#daa520] font-serif-display text-2xl font-bold mb-6 text-right font-amiri tracking-widest uppercase">اصل مقصد اور روhani حل</h3>
                <p className="text-3xl font-amiri leading-[1.8] text-right dir-rtl relative z-10">
                  {content.urdu}
                </p>
              </div>
            </div>

            {/* Right: Key Features & Order Button */}
            <div className="sticky top-44 space-y-10">
              <div className="bg-white p-12 rounded-[50px] border-2 border-[#daa520]/10 shadow-3xl space-y-10">
                <h3 className="text-[#064e3b] font-serif-display text-3xl font-bold mb-4 italic">Exclusive Benefits 💠</h3>
                
                <ul className="space-y-8">
                  {content.details.map((detail: string, i: number) => (
                    <li key={i} className="flex gap-5 items-start group">
                      <div className="mt-1.5 w-7 h-7 rounded-full bg-[#daa520] flex items-center justify-center text-[#064e3b] shrink-0 shadow-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                        <i className="fa-solid fa-star-and-crescent text-[12px]" />
                      </div>
                      <span className="text-gray-700 font-lora text-lg leading-relaxed font-bold">{detail}</span>
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
                    Request This Service
                    <i className="fa-solid fa-scroll group-hover:translate-x-2 group-hover:-rotate-12 transition-all duration-300" />
                  </button>
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
