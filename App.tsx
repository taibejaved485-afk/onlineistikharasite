
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IstikharaSection from './components/IstikharaSection';
import ServicesSection from './components/ServicesSection';
import GenderConsultation from './components/GenderConsultation';
import TalismanCards from './components/TalismanCards';
import PregnancySection from './components/PregnancySection';
import KalaJaduSection from './components/KalaJaduSection';
import MohabbatSection from './components/MohabbatSection';
import RizqSection from './components/RizqSection';
import SehatSection from './components/SehatSection';
import AboutSection from './components/AboutSection';
import ConsultationSection from './components/ConsultationSection';
import Footer from './components/Footer';
import AboutPage from './AboutPage';
import FAQPage from './FAQPage';
import TestimonialsPage from './TestimonialsPage';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import DisclaimerPage from './DisclaimerPage';
import ReturnPolicyPage from './ReturnPolicyPage';
import PregnancyPage from './PregnancyPage';
import TaweezPage from './TaweezPage';
import TaweezSubPage from './TaweezSubPage';
import TalismanSubPage from './TalismanSubPage';
import TalismansPage from './TalismansPage';
import CounselingPage from './CounselingPage';

export type TaweezCategory = 'jadu' | 'sehat' | 'mohabbat' | 'kamyabi' | 'rizq' | 'hamal' | 'wazaif' | 'amazing';
export type TalismanCategory = 'success' | 'love' | 'magic' | 'business' | 'pregnancy' | 'pray' | 'ismeazam' | 'guidance' | 'istikhara';

export type ViewType = 'home' | 'about' | 'faq' | 'testimonials' | 'privacy' | 'disclaimer' | 'return' | 'pregnancy' | 'taweez' | 'taweez-sub' | 'talisman-sub' | 'talismans-main' | 'counseling';

function App() {
  const [view, setView] = useState<ViewType>('home');
  const [taweezSubCategory, setTaweezSubCategory] = useState<TaweezCategory | null>(null);
  const [talismanSubCategory, setTalismanSubCategory] = useState<TalismanCategory | null>(null);

  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash;
      if (hash === '#about-page') {
        setView('about');
      } else if (hash === '#faq-page') {
        setView('faq');
      } else if (hash === '#testimonials-page') {
        setView('testimonials');
      } else if (hash === '#privacy-page') {
        setView('privacy');
      } else if (hash === '#disclaimer-page') {
        setView('disclaimer');
      } else if (hash === '#return-page') {
        setView('return');
      } else if (hash === '#pregnancy-page') {
        setView('pregnancy');
      } else if (hash === '#taweez-page') {
        setView('taweez');
      } else if (hash === '#talismans-page') {
        setView('talismans-main');
      } else if (hash === '#counseling-page') {
        setView('counseling');
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
      }
      window.scrollTo(0, 0);
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    return () => window.removeEventListener('hashchange', handleLocationChange);
  }, []);

  const navigateTo = (target: ViewType, category?: TaweezCategory | TalismanCategory) => {
    if (target === 'about') {
      window.location.hash = 'about-page';
    } else if (target === 'faq') {
      window.location.hash = 'faq-page';
    } else if (target === 'testimonials') {
      window.location.hash = 'testimonials-page';
    } else if (target === 'privacy') {
      window.location.hash = 'privacy-page';
    } else if (target === 'disclaimer') {
      window.location.hash = 'disclaimer-page';
    } else if (target === 'return') {
      window.location.hash = 'return-page';
    } else if (target === 'pregnancy') {
      window.location.hash = 'pregnancy-page';
    } else if (target === 'taweez') {
      window.location.hash = 'taweez-page';
    } else if (target === 'talismans-main') {
      window.location.hash = 'talismans-page';
    } else if (target === 'counseling') {
      window.location.hash = 'counseling-page';
    } else if (target === 'taweez-sub' && category) {
      window.location.hash = `taweez-${category}`;
    } else if (target === 'talisman-sub' && category) {
      window.location.hash = `talisman-${category}`;
    } else {
      window.location.hash = '';
      if (view === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setView(target);
    if (target === 'taweez-sub' && category) setTaweezSubCategory(category as TaweezCategory);
    if (target === 'talisman-sub' && category) setTalismanSubCategory(category as TalismanCategory);
  };

  return (
    <div className="min-h-screen bg-[#fdfdfc] selection:bg-[#daa520] selection:text-white font-serif">
      <Navbar onNavigate={navigateTo} currentView={view} />
      
      <main className="transition-opacity duration-500">
        {view === 'home' && (
          <>
            <Hero />
            <AboutSection />
            <IstikharaSection />
            <ServicesSection />
            <GenderConsultation />
            <TalismanCards />
            <PregnancySection />
            <KalaJaduSection />
            <MohabbatSection />
            <RizqSection />
            <SehatSection />
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
      
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
