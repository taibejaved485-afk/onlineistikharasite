
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import IstikharaSection from './components/IstikharaSection.tsx';
import ServicesSection from './components/ServicesSection.tsx';
import GenderConsultation from './components/GenderConsultation.tsx';
import TalismanCards from './components/TalismanCards.tsx';
import PregnancySection from './components/PregnancySection.tsx';
import KalaJaduSection from './components/KalaJaduSection.tsx';
import MohabbatSection from './components/MohabbatSection.tsx';
import RizqSection from './components/RizqSection.tsx';
import SehatSection from './components/SehatSection.tsx';
import AboutSection from './components/AboutSection.tsx';
import ConsultationSection from './components/ConsultationSection.tsx';
import BlogSection from './components/BlogSection.tsx';
import Footer from './components/Footer.tsx';
import AboutPage from './AboutPage.tsx';
import FAQPage from './FAQPage.tsx';
import TestimonialsPage from './TestimonialsPage.tsx';
import PrivacyPolicyPage from './PrivacyPolicyPage.tsx';
import DisclaimerPage from './DisclaimerPage.tsx';
import ReturnPolicyPage from './ReturnPolicyPage.tsx';
import PregnancyPage from './PregnancyPage.tsx';
import TaweezPage from './TaweezPage.tsx';
import TaweezSubPage from './TaweezSubPage.tsx';
import TalismanSubPage from './TalismanSubPage.tsx';
import TalismansPage from './TalismansPage.tsx';
import CounselingPage from './CounselingPage.tsx';
import MarriagePage from './MarriagePage.tsx';
import Chatbot from './components/Chatbot.tsx';
import IslamicDivider from './components/IslamicDivider.tsx';

export type TaweezCategory = 'jadu' | 'sehat' | 'mohabbat' | 'kamyabi' | 'rizq' | 'hamal' | 'wazaif' | 'amazing';
export type TalismanCategory = 'success' | 'love' | 'magic' | 'business' | 'pregnancy' | 'pray' | 'ismeazam' | 'guidance' | 'istikhara';
export type ViewType = 'home' | 'about' | 'faq' | 'testimonials' | 'privacy' | 'disclaimer' | 'return' | 'pregnancy' | 'taweez' | 'taweez-sub' | 'talisman-sub' | 'talismans-main' | 'counseling' | 'marriage';

function App() {
  const [view, setView] = useState<ViewType>('home');
  const [taweezSubCategory, setTaweezSubCategory] = useState<TaweezCategory | null>(null);
  const [talismanSubCategory, setTalismanSubCategory] = useState<TalismanCategory | null>(null);
  
  // Admin & Blog State
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminPass, setAdminPass] = useState('');
  const [loginError, setLoginError] = useState(false);

  // New Blog Form State
  const [blogForm, setBlogForm] = useState({
    title: '',
    category: 'Istikhara',
    img: '',
    content: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('noor_emerald_blogs');
    if (saved) setBlogs(JSON.parse(saved));

    const handleLocationChange = (isInitial = false) => {
      const hash = window.location.hash;
      
      if (isInitial && (!hash || hash === '#' || hash === '')) {
        window.scrollTo(0, 0);
        setView('home');
        return;
      }

      if (hash === '#about-page') setView('about');
      else if (hash === '#faq-page') setView('faq');
      else if (hash === '#testimonials-page') setView('testimonials');
      else if (hash === '#privacy-page') setView('privacy');
      else if (hash === '#disclaimer-page') setView('disclaimer');
      else if (hash === '#return-page') setView('return');
      else if (hash === '#pregnancy-page') setView('pregnancy');
      else if (hash === '#taweez-page') setView('taweez');
      else if (hash === '#talismans-page') setView('talismans-main');
      else if (hash === '#counseling-page') setView('counseling');
      else if (hash === '#marriage-page') setView('marriage');
      else if (hash === '#blogs-section') {
        setView('home');
        setTimeout(() => document.getElementById('blogs-section')?.scrollIntoView({ behavior: 'smooth' }), 100);
      } else if (hash.startsWith('#taweez-')) {
        const cat = hash.replace('#taweez-', '') as TaweezCategory;
        setTaweezSubCategory(cat);
        setView('taweez-sub');
      } else if (hash.startsWith('#talisman-')) {
        const cat = hash.replace('#talisman-', '') as TalismanCategory;
        setTalismanSubCategory(cat);
        setView('talisman-sub');
      } else {
        setView('home');
        if (!isInitial) window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleLocationChange(true);
    window.addEventListener('hashchange', () => handleLocationChange(false));
    return () => window.removeEventListener('hashchange', () => handleLocationChange(false));
  }, []);

  const navigateTo = (target: ViewType, category?: TaweezCategory | TalismanCategory) => {
    if (target === 'about') window.location.hash = 'about-page';
    else if (target === 'faq') window.location.hash = 'faq-page';
    else if (target === 'testimonials') window.location.hash = 'testimonials-page';
    else if (target === 'privacy') window.location.hash = 'privacy-page';
    else if (target === 'disclaimer') window.location.hash = 'disclaimer-page';
    else if (target === 'return') window.location.hash = 'return-page';
    else if (target === 'pregnancy') window.location.hash = 'pregnancy-page';
    else if (target === 'taweez') window.location.hash = 'taweez-page';
    else if (target === 'talismans-main') window.location.hash = 'talismans-page';
    else if (target === 'counseling') window.location.hash = 'counseling-page';
    else if (target === 'marriage') window.location.hash = 'marriage-page';
    else if (target === 'taweez-sub' && category) window.location.hash = `taweez-${category}`;
    else if (target === 'talisman-sub' && category) window.location.hash = `talisman-${category}`;
    else {
      window.location.hash = '';
      if (view === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setView(target);
    if (target === 'taweez-sub' && category) setTaweezSubCategory(category as TaweezCategory);
    if (target === 'talisman-sub' && category) setTalismanSubCategory(category as TalismanCategory);
  };

  const handleAdminClick = () => {
    setIsAdminModalOpen(true);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPass === 'admin123') {
      setIsAdminAuthenticated(true);
      setLoginError(false);
    } else {
      setLoginError(true);
      setTimeout(() => setLoginError(false), 3000);
    }
  };

  const saveBlog = () => {
    if (!blogForm.title || !blogForm.content) {
      alert("Title aur Content lazmi hai!");
      return;
    }
    const newEntry = {
      ...blogForm,
      id: Date.now(),
      date: new Date().toLocaleDateString()
    };
    const updatedBlogs = [newEntry, ...blogs];
    setBlogs(updatedBlogs);
    localStorage.setItem('noor_emerald_blogs', JSON.stringify(updatedBlogs));
    setBlogForm({ title: '', category: 'Istikhara', img: '', content: '' });
    alert("Blog kamyabi se save ho gaya!");
  };

  const deleteBlog = (id: number) => {
    if (window.confirm("Kya aap waqai ye blog delete karna chahte hain?")) {
      const updated = blogs.filter(b => b.id !== id);
      setBlogs(updated);
      localStorage.setItem('noor_emerald_blogs', JSON.stringify(updated));
    }
  };

  const waLink = "https://wa.me/923706487654?text=Assalam-o-Alaikum!%20Mujhe%20Online%20Istikhara%20se%20rohani%20masail%20ke%20bare%20mein%20maloomat%20chahiye.";

  return (
    <div className="min-h-screen bg-[#fdfdfc] selection:bg-[#daa520] selection:text-white font-serif">
      <Navbar onNavigate={navigateTo} currentView={view} />
      
      <main className="transition-opacity duration-500">
        {view === 'home' && (
          <>
            <Hero />
            <AboutSection />
            <IslamicDivider />
            <IstikharaSection />
            <IslamicDivider />
            <ServicesSection />
            <IslamicDivider />
            <BlogSection blogs={blogs} />
            <IslamicDivider />
            <GenderConsultation />
            <TalismanCards />
            <IslamicDivider />
            <PregnancySection />
            <KalaJaduSection />
            <MohabbatSection />
            <RizqSection />
            <SehatSection />
            <IslamicDivider />
            <ConsultationSection />
          </>
        )}
        {view === 'about' && <AboutPage onNavigate={navigateTo} />}
        {view === 'faq' && <FAQPage onNavigate={navigateTo} />}
        {view === 'testimonials' && <TestimonialsPage onNavigate={navigateTo} />}
        {view === 'privacy' && <PrivacyPolicyPage onNavigate={navigateTo} />}
        {view === 'disclaimer' && <DisclaimerPage onNavigate={navigateTo} />}
        {view === 'return' && <ReturnPolicyPage onNavigate={navigateTo} />}
        {view === 'pregnancy' && <PregnancyPage onNavigate={navigateTo} />}
        {view === 'taweez' && <TaweezPage onNavigate={navigateTo} />}
        {view === 'talismans-main' && <TalismansPage onNavigate={navigateTo} />}
        {view === 'counseling' && <CounselingPage onNavigate={navigateTo} />}
        {view === 'marriage' && <MarriagePage onNavigate={navigateTo} />}
        {view === 'taweez-sub' && taweezSubCategory && <TaweezSubPage category={taweezSubCategory} onNavigate={navigateTo} />}
        {view === 'talisman-sub' && talismanSubCategory && <TalismanSubPage category={talismanSubCategory} onNavigate={navigateTo} />}
      </main>

      {/* Admin Modal */}
      {isAdminModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#064e3b]/80 backdrop-blur-md" onClick={() => setIsAdminModalOpen(false)} />
          <div className="relative bg-white w-full max-w-4xl rounded-[40px] shadow-2xl border-t-8 border-[#daa520] overflow-hidden animate-fade-in-up">
            
            <button onClick={() => setIsAdminModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-[#064e3b] z-10">
              <i className="fa-solid fa-xmark text-2xl" />
            </button>

            {!isAdminAuthenticated ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-[#064e3b] rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[#daa520]">
                  <i className="fa-solid fa-lock text-[#daa520] text-3xl" />
                </div>
                <h2 className="text-3xl font-serif-display text-[#064e3b] mb-2 font-bold">Admin Portal</h2>
                <p className="text-gray-500 mb-8 font-lora">Credentials darj karein</p>
                
                <form onSubmit={handleLogin} className="max-w-sm mx-auto space-y-4">
                  <input 
                    type="password" 
                    placeholder="Password (admin123)" 
                    value={adminPass}
                    onChange={(e) => setAdminPass(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-center focus:outline-none focus:border-[#daa520] transition-all"
                  />
                  <button type="submit" className="w-full py-4 bg-[#daa520] text-[#064e3b] font-bold rounded-2xl hover:bg-[#064e3b] hover:text-white transition-all shadow-lg">
                    Login Dashboard
                  </button>
                  {loginError && <p className="text-red-500 text-sm font-bold animate-pulse">Ghalat Password! Dobara koshish karein.</p>}
                </form>
              </div>
            ) : (
              <div className="flex flex-col h-[80vh]">
                <div className="bg-[#064e3b] p-6 text-white flex justify-between items-center islamic-pattern">
                  <h3 className="text-2xl font-serif-display font-bold">Online <span className="text-[#daa520]">Istikhara</span> Dashboard</h3>
                  <button onClick={() => setIsAdminAuthenticated(false)} className="text-[#daa520] font-bold text-xs uppercase tracking-widest hover:text-white">Logout</button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2 space-y-6">
                    <h4 className="text-xl font-serif-display text-[#064e3b] font-bold border-b pb-2">Naya Blog Likhein</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="Blog Title" 
                        value={blogForm.title}
                        onChange={(e) => setBlogForm({...blogForm, title: e.target.value})}
                        className="col-span-2 px-6 py-4 bg-gray-50 border rounded-2xl focus:border-[#daa520] outline-none"
                      />
                      <select 
                        value={blogForm.category}
                        onChange={(e) => setBlogForm({...blogForm, category: e.target.value})}
                        className="px-6 py-4 bg-gray-50 border rounded-2xl focus:border-[#daa520] outline-none appearance-none"
                      >
                        <option>Istikhara</option>
                        <option>Wazaif</option>
                        <option>Jadu ka Tor</option>
                        <option>Nuri Ilaj</option>
                        <option>Miscellaneous</option>
                      </select>
                      <input 
                        type="text" 
                        placeholder="Image URL" 
                        value={blogForm.img}
                        onChange={(e) => setBlogForm({...blogForm, img: e.target.value})}
                        className="px-6 py-4 bg-gray-50 border rounded-2xl focus:border-[#daa520] outline-none"
                      />
                    </div>
                    <textarea 
                      placeholder="Blog ka content yahan likhein (HTML support mojood hai)..." 
                      rows={8}
                      value={blogForm.content}
                      onChange={(e) => setBlogForm({...blogForm, content: e.target.value})}
                      className="w-full px-6 py-4 bg-gray-50 border rounded-2xl focus:border-[#daa520] outline-none resize-none"
                    />
                    <button onClick={saveBlog} className="w-full py-5 bg-[#064e3b] text-white font-bold rounded-2xl shadow-xl hover:bg-[#daa520] hover:text-[#064e3b] transition-all">
                      Save Blog Entry
                    </button>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xl font-serif-display text-[#064e3b] font-bold border-b pb-2">Sabiqa Blogs ({blogs.length})</h4>
                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                      {blogs.map(blog => (
                        <div key={blog.id} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex justify-between items-center group">
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-[#064e3b] truncate text-sm">{blog.title}</p>
                            <p className="text-[10px] text-gray-400">{blog.category} • {blog.date}</p>
                          </div>
                          <button onClick={() => deleteBlog(blog.id)} className="text-gray-300 hover:text-red-500 p-2">
                            <i className="fa-solid fa-trash-can" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <a 
        href={waLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[150] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        title="WhatsApp Support"
      >
        <i className="fa-brands fa-whatsapp text-4xl" />
      </a>

      <Chatbot />
      
      <Footer onNavigate={navigateTo} onAdminClick={handleAdminClick} />
    </div>
  );
}

export default App;
