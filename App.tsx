
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
import Chatbot from './components/Chatbot.tsx';
import IslamicDivider from './components/IslamicDivider.tsx';

declare var Quill: any;

export type TaweezCategory = 'jadu' | 'sehat' | 'mohabbat' | 'kamyabi' | 'rizq' | 'hamal' | 'wazaif' | 'amazing';
export type TalismanCategory = 'success' | 'love' | 'magic' | 'business' | 'pregnancy' | 'pray' | 'ismeazam' | 'guidance' | 'istikhara';
export type ViewType = 'home' | 'about' | 'faq' | 'testimonials' | 'privacy' | 'disclaimer' | 'return' | 'pregnancy' | 'taweez' | 'taweez-sub' | 'talisman-sub' | 'talismans-main' | 'counseling';

function App() {
  const [view, setView] = useState<ViewType>('home');
  const [taweezSubCategory, setTaweezSubCategory] = useState<TaweezCategory | null>(null);
  const [talismanSubCategory, setTalismanSubCategory] = useState<TalismanCategory | null>(null);
  
  // Admin & Blog State
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminPass, setAdminPass] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loginError, setLoginError] = useState(false);

  // Quill Editor References
  const quillRef = useRef<any>(null);
  const editorContainerRef = useRef<HTMLDivElement>(null);

  // Blog Form State - Default category updated
  const [newBlog, setNewBlog] = useState({ title: '', category: 'Istikhara', img: '', content: '' });

  useEffect(() => {
    // Initial Load from LocalStorage
    const saved = localStorage.getItem('noor_emerald_blogs');
    if (saved) setBlogs(JSON.parse(saved));

    const handleLocationChange = (isInitial = false) => {
      const hash = window.location.hash;
      
      // If it's the very first load and no hash or just a '#' is present, 
      // explicitly stay at the top and don't trigger any scroll logic.
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
      else if (hash === '#blogs-section') {
        setView('home');
        // Only scroll to blogs if specifically targeted
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
      
      if (hash && hash !== '#blogs-section' && !isInitial) window.scrollTo(0, 0);
    };

    handleLocationChange(true); // Pass true for initial load
    window.addEventListener('hashchange', () => handleLocationChange(false));
    return () => window.removeEventListener('hashchange', () => handleLocationChange(false));
  }, []);

  // Initialize Quill when modal is open and authenticated
  useEffect(() => {
    if (isAdminModalOpen && isAdminAuthenticated && editorContainerRef.current && !quillRef.current) {
      const Font = Quill.import('formats/font');
      Font.whitelist = [
        'open-sans', 'roboto', 'lato', 'montserrat', 'poppins', 
        'inter', 'merriweather', 'playfair-display', 'lora', 'oswald'
      ];
      Quill.register(Font, true);

      quillRef.current = new Quill(editorContainerRef.current, {
        theme: 'snow',
        placeholder: 'Apna rohani blog content likhein...',
        modules: {
          toolbar: [
            [{ 'font': Font.whitelist }],
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'align': [] }],
            ['clean']
          ]
        }
      });
      
      if (quillRef.current.root.innerHTML === '<p><br></p>') {
        quillRef.current.format('font', 'poppins');
      }
    }
    
    if (!isAdminModalOpen) {
      quillRef.current = null;
    }
  }, [isAdminModalOpen, isAdminAuthenticated]);

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

  const handleAdminLogin = () => {
    if (adminPass.trim() === 'admin123') {
      setIsAdminAuthenticated(true);
      setLoginError(false);
      setAdminPass('');
    } else {
      setLoginError(true);
      setTimeout(() => setLoginError(false), 3000);
    }
  };

  const saveBlog = () => {
    const editorHtml = quillRef.current ? quillRef.current.root.innerHTML : '';
    
    if (!newBlog.title || editorHtml === '<p><br></p>') {
      return alert("Title aur Content dono zaroori hain!");
    }

    const entry = { 
      ...newBlog, 
      content: editorHtml, 
      id: Date.now(), 
      date: new Date().toLocaleDateString() 
    };
    
    const updated = [entry, ...blogs];
    setBlogs(updated);
    localStorage.setItem('noor_emerald_blogs', JSON.stringify(updated));
    
    setNewBlog({ title: '', category: 'Istikhara', img: '', content: '' });
    if (quillRef.current) {
        quillRef.current.root.innerHTML = '';
        quillRef.current.format('font', 'poppins');
    }
    
    alert("Blog published with selected category!");
  };

  const deleteBlog = (id: number) => {
    const updated = blogs.filter(b => b.id !== id);
    setBlogs(updated);
    localStorage.setItem('noor_emerald_blogs', JSON.stringify(updated));
  };

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
        {view === 'taweez-sub' && taweezSubCategory && <TaweezSubPage category={taweezSubCategory} onNavigate={navigateTo} />}
        {view === 'talisman-sub' && talismanSubCategory && <TalismanSubPage category={talismanSubCategory} onNavigate={navigateTo} />}
      </main>

      {/* Admin Modal */}
      {isAdminModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#064e3b]/80 backdrop-blur-sm" onClick={() => setIsAdminModalOpen(false)} />
          <div className="relative w-full max-w-6xl max-h-[95vh] overflow-y-auto bg-white rounded-[40px] shadow-2xl border-2 border-[#daa520]/30 islamic-pattern p-6 md:p-12 animate-fade-in-up">
            
            <button onClick={() => { setIsAdminModalOpen(false); setIsAdminAuthenticated(false); }} className="absolute top-8 right-8 text-gray-400 hover:text-[#064e3b]">
              <i className="fa-solid fa-circle-xmark text-3xl" />
            </button>

            {!isAdminAuthenticated ? (
              <div className="max-w-md mx-auto py-10 text-center">
                <div className="w-20 h-20 bg-[#064e3b] rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl border-2 border-[#daa520]/40">
                  <i className="fa-solid fa-user-shield text-[#daa520] text-3xl" />
                </div>
                <h2 className="text-[#064e3b] font-serif-display text-3xl font-bold mb-2">Typography Dashboard</h2>
                <p className="text-gray-500 italic mb-8">Login to create rich-formatted blogs</p>
                
                <div className="relative mb-4">
                  <input 
                    type={showPass ? "text" : "password"} 
                    placeholder="Enter Password (admin123)" 
                    value={adminPass}
                    onChange={(e) => setAdminPass(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#daa520] transition-all text-center text-[#064e3b] font-bold"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#daa520]"
                  >
                    <i className={`fa-solid ${showPass ? 'fa-eye-slash' : 'fa-eye'}`} />
                  </button>
                </div>

                <button onClick={handleAdminLogin} className="w-full py-4 bg-[#daa520] text-[#064e3b] font-bold rounded-2xl hover:bg-[#064e3b] hover:text-white transition-all shadow-lg active:scale-95">
                  Launch Editor
                </button>
                
                {loginError && <p className="text-red-500 mt-4 animate-bounce font-bold">Incorrect Passcode! admin123</p>}
              </div>
            ) : (
              <div className="space-y-10">
                <div className="flex justify-between items-center border-b border-gray-100 pb-6">
                  <h2 className="text-[#064e3b] font-serif-display text-3xl font-bold">Rich Blog <span className="text-[#daa520]">Editor</span></h2>
                  <button onClick={() => setIsAdminAuthenticated(false)} className="text-xs font-bold uppercase tracking-widest text-[#daa520] hover:text-[#064e3b] bg-[#064e3b]/5 px-4 py-2 rounded-full">Sign Out</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="text-xs font-bold uppercase text-[#064e3b]/60 ml-1">Blog Title</label>
                      <input type="text" placeholder="Title..." value={newBlog.title} onChange={e => setNewBlog({...newBlog, title: e.target.value})} className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-[#daa520] outline-none text-[#064e3b] font-bold" />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-[#064e3b]/60 ml-1">Category</label>
                      <select value={newBlog.category} onChange={e => setNewBlog({...newBlog, category: e.target.value})} className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-[#daa520] outline-none appearance-none text-[#064e3b] font-bold">
                        <option value="Istikhara">Istikhara</option>
                        <option value="Wazaif">Wazaif</option>
                        <option value="Jadu ka Tor">Jadu ka Tor</option>
                        <option value="Nuri Ilaj">Nuri Ilaj</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-[#064e3b]/60 ml-1">Featured Image</label>
                      <input type="text" placeholder="https://..." value={newBlog.img} onChange={e => setNewBlog({...newBlog, img: e.target.value})} className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-[#daa520] outline-none text-[#064e3b]" />
                    </div>
                  </div>
                  
                  {/* Quill.js Rich Text Editor Container */}
                  <div className="md:col-span-2 flex flex-col">
                    <label className="text-xs font-bold uppercase text-[#064e3b]/60 ml-1 mb-2">Full Article Content (Choose Fonts from Toolbar)</label>
                    <div ref={editorContainerRef} className="bg-white rounded-2xl border border-gray-200"></div>
                  </div>
                </div>

                <button onClick={saveBlog} className="w-full py-5 bg-[#064e3b] text-white font-serif-display text-xl font-bold rounded-2xl hover:bg-[#daa520] hover:text-[#064e3b] transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95">
                  <i className="fa-solid fa-feather-pointed" /> Publish Formatted Blog
                </button>

                <div className="pt-10 border-t border-gray-100">
                  <h3 className="text-[#064e3b] font-bold mb-4 uppercase text-xs tracking-[0.2em]">Manage Published Blogs</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {blogs.map(blog => (
                      <div key={blog.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl group border border-transparent hover:border-[#daa520]/30 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#064e3b] shadow-sm"><i className="fa-solid fa-file-pen" /></div>
                          <div>
                            <p className="font-bold text-sm text-[#064e3b]">{blog.title}</p>
                            <p className="text-[10px] text-gray-400">{blog.category}</p>
                          </div>
                        </div>
                        <button onClick={() => deleteBlog(blog.id)} className="text-gray-300 hover:text-red-500 transition-colors"><i className="fa-solid fa-trash-can" /></button>
                      </div>
                    ))}
                    {blogs.length === 0 && <p className="col-span-2 text-center text-gray-300 italic py-4">No content found in repository.</p>}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/923706487654" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse-gold"
        title="WhatsApp Support"
      >
        <i className="fa-brands fa-whatsapp text-4xl" />
      </a>

      {/* AI Rohani Dost Chatbot */}
      <Chatbot />
      
      <Footer onNavigate={navigateTo} onAdminClick={() => setIsAdminModalOpen(true)} />
    </div>
  );
}

export default App;
