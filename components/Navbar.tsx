
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
      {/* Top Bar with Bismillah */}
      <div className={`w-full bg-[#064e3b] text-[#fbbf24] transition-all duration-500 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-24 md:h-16 opacity-100 border-b border-[#daa520]/20'} pointer-events-auto`}>
        <div className="container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-center md:justify-between relative">
          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 text-2xl md:text-3xl font-amiri tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] order-1">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </div>
          <div className="text-[0.8rem] md:text-sm font-amiri font-bold text-[#fbbf24] tracking-wider mt-2.5 md:mt-0 md:ml-auto order-2">
            {hijriDate}
          </div>
          <div className="hidden md:block w-32 order-0"></div>
        </div>
      </div>

      {/* Main Nav Container */}
      <nav className={`mx-auto max-w-full lg:max-w-7xl transition-all duration-700 rounded-xl shadow-2xl border-b-2 border-[#daa520] pointer-events-auto mt-2 lg:mt-4 ${
        isScrolled 
        ? 'bg-[#064e3b]/95 backdrop-blur-md py-2' 
        : 'bg-[#064e3b] py-3'
      } relative overflow-visible mx-4 md:mx-auto`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative z-10">
          
          {/* Column 1: Logo (Left) */}
          <div className="flex-1 flex justify-start flex-shrink-0">
            <a href="#" onClick={handleLogoClick} className="flex items-center gap-3 group cursor-pointer whitespace-nowrap">
              <div className="w-9 h-9 md:w-11 md:h-11 bg-gradient-to-br from-[#daa520] to-[#b8860b] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-moon text-[#064e3b] text-xl" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-white font-serif-display text-base md:text-lg font-bold leading-tight tracking-wider">
                  ONLINE <span className="text-[#daa520]">ISTIKHARA</span>
                </h1>
                <p className="text-[8px] text-[#daa520]/80 font-amiri uppercase tracking-[0.2em] -mt-1 font-semibold">
                  Rohani Masail Ka Hal
                </p>
              </div>
            </a>
          </div>

          {/* Column 2: Nav Links (Center) */}
          <div className="hidden lg:flex flex-[2] items-center justify-center gap-[20px] px-4">
            {MENU_DATA.map((item, idx) => (
              <React.Fragment key={idx}>
                {item.children ? (
                  <DropdownMenu item={item} onNavigate={onNavigate} />
                ) : (
                  <a 
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.label)}
                    className={`px-1 py-2 font-serif-display text-[14px] transition-all duration-300 relative group whitespace-nowrap ${
                      item.label === 'Spiritual Counseling' ? 'text-[#daa520] font-bold' : ''
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
                    <span className={`absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#daa520] transition-transform duration-500 origin-center ${
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
          </div>

          {/* Column 3: Contact Button (Right) */}
          <div className="hidden lg:flex flex-1 justify-end flex-shrink-0">
            <button 
              onClick={() => { onNavigate?.('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
              className="bg-[#daa520] text-[#064e3b] px-5 py-2.5 rounded-lg font-serif-display font-bold tracking-widest hover:bg-white hover:text-[#064e3b] transition-all duration-500 uppercase text-[10px] shadow-lg whitespace-nowrap"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-[#daa520] p-2 hover:bg-white/5 rounded-lg transition-colors flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </nav>

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
