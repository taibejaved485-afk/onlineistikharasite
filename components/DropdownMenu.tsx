
import React, { useState } from 'react';
import { NavItem } from '../types';
import { ViewType, TaweezCategory, TalismanCategory } from '../App';

interface DropdownMenuProps {
  item: NavItem;
  onNavigate?: (target: ViewType, category?: TaweezCategory | TalismanCategory) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ item, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMainClick = (e: React.MouseEvent) => {
    if (item.label === 'Islamic Taweez') {
      e.preventDefault();
      onNavigate?.('taweez');
    } else if (item.label === 'Talismans') {
      e.preventDefault();
      onNavigate?.('talismans-main');
    }
  };

  const handleChildClick = (e: React.MouseEvent, child: NavItem) => {
    if (child.href.startsWith('#taweez-')) {
      e.preventDefault();
      const category = child.href.replace('#taweez-', '') as TaweezCategory;
      onNavigate?.('taweez-sub', category);
      setIsOpen(false);
    } else if (child.href.startsWith('#talisman-')) {
      e.preventDefault();
      const category = child.href.replace('#talisman-', '') as TalismanCategory;
      onNavigate?.('talisman-sub', category);
      setIsOpen(false);
    }
  };

  return (
    <div 
      className="relative h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        onClick={handleMainClick}
        className={`flex items-center gap-1.5 px-4 py-2 text-white/90 font-serif-display text-lg transition-all duration-300 ${isOpen ? 'text-[#daa520]' : 'hover:text-[#daa520]'}`}
      >
        {item.label}
        <svg 
          className={`w-3.5 h-3.5 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Container */}
      <div 
        className={`absolute top-[100%] left-0 w-80 pt-6 z-[100] transition-all duration-300 ${
          isOpen 
          ? 'opacity-100 pointer-events-auto block animate-slide-down' 
          : 'opacity-0 pointer-events-none hidden'
        }`}
      >
        <div className="glass-dropdown shadow-[0_30px_60px_rgba(0,0,0,0.6)] rounded-[24px] overflow-hidden border-t-4 border-[#daa520]">
          <div className="py-6 relative z-10 flex flex-col">
            {item.children?.map((child, idx) => (
              <a
                key={idx}
                href={child.href}
                onClick={(e) => handleChildClick(e, child)}
                className="group flex items-center px-10 py-4.5 text-base text-white/90 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-[#daa520] mr-5 scale-0 group-hover:scale-100 transition-transform duration-300" />
                <span className="group-hover:text-[#daa520] group-hover:translate-x-2 transition-all duration-300 font-serif-display font-medium tracking-wide leading-tight">
                  {child.label}
                </span>
              </a>
            ))}
          </div>
          <div className="h-1.5 bg-gradient-to-r from-transparent via-[#daa520]/40 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
