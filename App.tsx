
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

    handleLocationChange(true);
    window.addEventListener('hashchange', () => handleLocationChange(false));
    return () => window.removeEventListener('hashchange', () => handleLocationChange(false));
  }, []);

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

  const waLink = "https://wa.me/923706487654?text=Assalam-o-Alaikum!%20Mujhe%20Noor%20Emerald%20se%20rohani%20masail%20ke%20bare%20mein%20maloomat%20chahiye.";

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

      {/* Admin Modal omitted for brevity, same as previous */}
      {/* ... */}

      {/* Floating WhatsApp Button - Optimized Position & Alignment */}
      <a 
        href={waLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[150] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse-gold"
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
