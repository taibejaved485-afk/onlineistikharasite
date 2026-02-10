
import React, { useState } from 'react';
import { NavItem } from '../types';
import { ViewType, TaweezCategory, TalismanCategory } from '../App';

interface MobileSidebarProps {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (target: ViewType, category?: TaweezCategory | TalismanCategory) => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ items, isOpen, onClose, onNavigate }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleLinkClick = (e: React.MouseEvent, item: NavItem) => {
    if (item.label === 'Home') {
      e.preventDefault();
      onNavigate?.('home');
      onClose();
    } else if (item.label === 'Pregnancy') {
      e.preventDefault();
      onNavigate?.('pregnancy');
      onClose();
    } else if (item.label === 'Islamic Taweez') {
      e.preventDefault();
      onNavigate?.('taweez');
      onClose();
    } else if (item.label === 'Talismans') {
      e.preventDefault();
      onNavigate?.('talismans-main');
      onClose();
    } else if (item.label === 'Spiritual Counseling') {
      e.preventDefault();
      onNavigate?.('counseling');
      onClose();
    } else if (item.href.startsWith('#taweez-')) {
      e.preventDefault();
      const category = item.href.replace('#taweez-', '') as TaweezCategory;
      onNavigate?.('taweez-sub', category);
      onClose();
    } else if (item.href.startsWith('#talisman-')) {
      e.preventDefault();
      const category = item.href.replace('#talisman-', '') as TalismanCategory;
      onNavigate?.('talisman-sub', category);
      onClose();
    }
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/90 backdrop-blur-md z-50 transition-opacity duration-500 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar Content */}
      <div 
        className={`fixed top-0 left-0 h-full w-[85vw] max-w-[320px] bg-gradient-to-b from-[#064e3b] to-[#011a14] islamic-pattern z-[60] shadow-[10px_0_40px_rgba(0,0,0,0.5)] transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) lg:hidden overflow-y-auto border-r border-[#daa520]/20 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-10">
            <div className="cursor-pointer" onClick={() => { onNavigate?.('home'); onClose(); }}>
               <h2 className="text-white font-serif-display text-xl md:text-2xl font-bold tracking-widest flex flex-wrap items-baseline gap-1">
                NOOR <span className="text-[#daa520] text-lg">EMERALD</span>
              </h2>
              <div className="h-[2px] w-20 bg-gradient-to-r from-[#daa520] to-transparent mt-1" />
            </div>
            <button onClick={onClose} className="text-[#daa520] hover:rotate-90 transition-transform duration-300 p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {items.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="flex justify-between items-center group">
                  <a 
                    href={item.href} 
                    className={`flex-1 text-white text-lg font-serif-display py-4 hover:text-[#daa520] transition-colors leading-tight ${
                      item.label === 'Spiritual Counseling' ? 'text-[#daa520]' : ''
                    }`}
                    onClick={(e) => handleLinkClick(e, item)}
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <button 
                      onClick={() => toggleDropdown(item.label)}
                      className="p-4 text-[#daa520]/60 hover:text-[#daa520] transition-colors"
                    >
                      <svg 
                        className={`w-5 h-5 transition-transform duration-500 ${activeDropdown === item.label ? 'rotate-180 text-[#daa520]' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>

                {item.children && (
                  <div className={`overflow-hidden transition-all duration-500 bg-[#043328]/50 rounded-xl ${
                    activeDropdown === item.label ? 'max-h-[800px] opacity-100 py-3 mb-2 border border-[#daa520]/10' : 'max-h-0 opacity-0'
                  }`}>
                    {item.children.map((child, cIdx) => (
                      <a
                        key={cIdx}
                        href={child.href}
                        className="block px-8 py-3.5 text-white/80 hover:text-[#daa520] hover:translate-x-2 transition-all duration-300 text-base font-medium border-l-2 border-transparent hover:border-[#daa520]"
                        onClick={(e) => handleLinkClick(e, child)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
                <div className="h-px bg-[#daa520]/5" />
              </div>
            ))}
          </nav>

          <div className="mt-16 pt-8 border-t border-[#daa520]/10">
            <button 
              onClick={() => { onNavigate?.('home'); onClose(); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
              className="w-full py-4 bg-[#daa520] text-[#064e3b] rounded-xl font-bold font-serif-display shadow-lg hover:bg-white transition-all btn-gold-glow"
            >
              Contact Us Now
            </button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#daa520]/40 font-amiri text-sm tracking-widest italic">
              Al-Quds Ash-Sharif
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
