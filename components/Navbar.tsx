
import React, { useState, useEffect } from 'react';
import { MENU_DATA } from '../constants';
import DropdownMenu from './DropdownMenu';
import MobileSidebar from './MobileSidebar';
import { ViewType } from '../App';

interface NavbarProps {
  onNavigate?: (target: ViewType) => void;
  currentView?: ViewType;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hijriDate, setHijriDate] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Calculate Hijri Date using requested logic
    try {
      const date = new Intl.DateTimeFormat('en-u-ca-islamic-uma', {
        day: 'numeric', 
        month: 'long', 
        year: 'numeric'
      }).format(new Date());
      setHijriDate(date + " AH");
    } catch (e) {
      setHijriDate("Islamic Date Not Available");
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate?.('home');
  };

  const handleLinkClick = (e: React.MouseEvent, label: string) => {
    if (label === 'Home') {
      e.preventDefault();
      onNavigate?.('home');
    } else if (label === 'Blogs') {
      window.location.hash = 'blogs-section';
    } else if (label === 'Pregnancy') {
      e.preventDefault();
      onNavigate?.('pregnancy');
    } else if (label === 'Islamic Taweez') {
      e.preventDefault();
      onNavigate?.('taweez');
    } else if (label === 'Talismans') {
      e.preventDefault();
      onNavigate?.('talismans-main');
    } else if (label === 'Spiritual Counseling') {
      e.preventDefault();
      onNavigate?.('counseling');
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {/* Top Bar with Bismillah and Hijri Date */}
      <div className={`w-full bg-[#064e3b] text-[#fbbf24] transition-all duration-500 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-14 md:h-16 opacity-100 border-b border-[#daa520]/20'} pointer-events-auto`}>
        <div className="container mx-auto px-6 h-full flex items-center justify-between relative">
          {/* Left space for balance */}
          <div className="hidden md:block w-32"></div>
          
          {/* Centered Bismillah */}
          <div className="absolute left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-amiri tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </div>

          {/* Right Aligned Hijri Date */}
          <div className="text-[11px] md:text-sm font-amiri font-bold text-[#fbbf24] tracking-wider md:ml-auto">
            {hijriDate}
          </div>
        </div>
      </div>

      <nav className={`mx-auto max-w-7xl transition-all duration-700 rounded-xl shadow-2xl border-b-2 border-[#daa520] pointer-events-auto mt-2 lg:mt-4 ${
        isScrolled 
        ? 'bg-[#064e3b]/95 backdrop-blur-md py-2' 
        : 'bg-gradient-to-r from-[#064e3b] via-[#043d2e] to-[#022c22] py-4'
      } islamic-pattern relative overflow-visible mx-4 md:mx-auto`}>
        <div className="container mx-auto px-6 flex flex-wrap items-center justify-between relative z-10">
          
          {/* Logo Area */}
          <a href="#" onClick={handleLogoClick} className="flex items-center gap-3 md:gap-4 group cursor-pointer shrink-0">
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#daa520] to-[#b8860b] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(218,165,32,0.4)] group-hover:scale-110 transition-transform duration-500">
                <span className="text-[#064e3b] font-serif-display font-bold text-xl md:text-2xl">N</span>
              </div>
              <div className="absolute -inset-1 border border-[#daa520]/30 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white font-serif-display text-xl md:text-2xl font-bold leading-tight tracking-wider">
                NOOR <span className="text-[#daa520]">EMERALD</span>
              </h1>
              <p className="text-[10px] text-[#daa520]/70 font-amiri uppercase tracking-[0.3em] -mt-1 font-semibold">
                Spiritual Excellence
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2 h-full">
            {MENU_DATA.map((item, idx) => (
              <React.Fragment key={idx}>
                {item.children ? (
                  <DropdownMenu item={item} onNavigate={onNavigate} />
                ) : (
                  <a 
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.label)}
                    className={`px-3 py-2 font-serif-display text-base transition-all duration-300 relative group rounded-lg ${
                      item.label === 'Spiritual Counseling' ? 'btn-gold-glow bg-white/5 border border-[#daa520]/20' : ''
                    } ${
                      (item.label === 'Home' && currentView === 'home') || 
                      (item.label === 'Pregnancy' && currentView === 'pregnancy') ||
                      (item.label === 'Islamic Taweez' && currentView === 'taweez') ||
                      (item.label === 'Talismans' && currentView === 'talismans-main') ||
                      (item.label === 'Spiritual Counseling' && currentView === 'counseling')
                      ? 'text-[#daa520]' : 'text-white/90 hover:text-[#daa520]'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-3 right-3 h-[1px] bg-[#daa520] transition-transform duration-500 origin-center ${
                      (item.label === 'Home' && currentView === 'home') || 
                      (item.label === 'Pregnancy' && currentView === 'pregnancy') ||
                      (item.label === 'Islamic Taweez' && currentView === 'taweez') ||
                      (item.label === 'Talismans' && currentView === 'talismans-main') ||
                      (item.label === 'Spiritual Counseling' && currentView === 'counseling')
                      ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </a>
                )}
              </React.Fragment>
            ))}
            
            <button 
              onClick={() => { onNavigate?.('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
              className="ml-4 bg-[#daa520] text-[#064e3b] px-6 py-2 rounded-lg font-serif-display font-bold tracking-widest hover:bg-white hover:text-[#064e3b] transition-all duration-500 uppercase text-[10px] btn-gold-glow animate-pulse-gold shadow-lg"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="lg:hidden text-[#daa520] p-2 hover:bg-white/5 rounded-full transition-colors shrink-0"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <MobileSidebar 
        items={MENU_DATA} 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        onNavigate={onNavigate}
      />
    </header>
  );
};

export default Navbar;
