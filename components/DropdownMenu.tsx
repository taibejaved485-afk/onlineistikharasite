
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
        className={`flex items-center gap-1.5 px-4 py-2 text-white/90 font-serif-display text-lg transition-all duration-300 ${isOpen ? 'text-[#fbbf24]' : 'hover:text-[#fbbf24]'}`}
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

      {/* Dropdown Container - High Z-Index & Transition */}
      <div 
        className={`absolute top-[100%] left-0 w-72 pt-2 z-[500] transition-all duration-300 ${
          isOpen 
          ? 'opacity-100 pointer-events-auto block animate-slide-down' 
          : 'opacity-0 pointer-events-none hidden'
        }`}
      >
        <div className="bg-[#064e3b] shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[8px] overflow-hidden border border-[#fbbf24]">
          <div className="py-2 flex flex-col">
            {item.children?.map((child, idx) => (
              <a
                key={idx}
                href={child.href}
                onClick={(e) => handleChildClick(e, child)}
                className="px-[15px] py-[10px] text-white font-amiri text-lg transition-all duration-300 hover:bg-[#fbbf24] hover:text-[#064e3b] flex items-center justify-between group/item"
              >
                <span>{child.label}</span>
                <i className="fa-solid fa-chevron-right text-[10px] opacity-0 group-hover/item:opacity-100 transition-opacity translate-x-[-5px] group-hover/item:translate-x-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
