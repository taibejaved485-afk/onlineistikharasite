
import React from 'react';
import { ViewType } from '../App';

interface FooterProps {
  onNavigate?: (target: ViewType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const quickLinks = [
    { name: 'About us', target: 'about' as ViewType, href: '#about-page' },
    { name: 'Contact', target: 'home' as ViewType, href: '#contact' },
    { name: 'Faq', target: 'faq' as ViewType, href: '#faq-page' },
    { name: 'Testimonials', target: 'testimonials' as ViewType, href: '#testimonials-page' },
    { name: 'Privacy Policy', target: 'privacy' as ViewType, href: '#privacy-page' },
    { name: 'Disclaimer', target: 'disclaimer' as ViewType, href: '#disclaimer-page' },
    { name: 'Return Policy', target: 'return' as ViewType, href: '#return-page' }
  ];

  const handleLinkClick = (e: React.MouseEvent, target: ViewType | undefined, href: string) => {
    if (target && onNavigate) {
      e.preventDefault();
      onNavigate(target);
      
      if (href === '#contact') {
        setTimeout(() => {
          const element = document.getElementById('contact');
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#064e3b] to-black text-white pt-20 relative overflow-hidden islamic-pattern">
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none translate-x-1/3 -translate-y-1/3">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          
          <div className="space-y-6">
            <div onClick={() => onNavigate?.('home')} className="flex items-center gap-3 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-[#daa520] to-[#b8860b] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(218,165,32,0.4)]">
                <span className="text-[#064e3b] font-serif-display font-bold text-2xl">N</span>
              </div>
              <h3 className="text-2xl font-serif-display font-bold tracking-wider">
                NOOR <span className="text-[#daa520]">EMERALD</span>
              </h3>
            </div>
            <p className="text-white/70 font-amiri text-lg leading-relaxed dir-rtl">
              Online Istikhara Site aik Islamic Rohani Website hai jo Quran-o-Sunnat ki roshni mein insani masail ka hal aur behtareen rohani renumayi faraham karti hai.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-[#daa520] to-transparent rounded-full" />
          </div>

          <div>
            <h4 className="text-[#daa520] font-serif-display text-xl font-bold mb-8 relative inline-block">
              Quick Access
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#daa520]/30" />
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.target, link.href)}
                    className="group flex items-center text-white/70 hover:text-[#daa520] transition-colors duration-300"
                  >
                    <i className="fa-solid fa-chevron-right text-[10px] mr-3 text-[#daa520]/50 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:underline underline-offset-4 decoration-[#daa520]/40">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#daa520] font-serif-display text-xl font-bold mb-8 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#daa520]/30" />
            </h4>
            <div className="space-y-6">
              {[
                { label: 'Istikhara Form', email: 'quickistikhara@gmail.com', icon: 'fa-envelope-open-text' },
                { label: 'Isme azam Form', email: 'ismeazam11@gmail.com', icon: 'fa-star-and-crescent' },
                { label: 'Taweez Form', email: 'naqshorder@gmail.com', icon: 'fa-scroll' },
                { label: 'Pray Request', email: 'joinpray@gmail.com', icon: 'fa-hands-praying' }
              ].map((item) => (
                <div key={item.label} className="group flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#daa520] group-hover:bg-[#daa520] group-hover:text-[#064e3b] transition-all duration-300">
                    <i className={`fa-solid ${item.icon}`} />
                  </div>
                  <div>
                    <p className="text-xs text-[#daa520] uppercase font-bold tracking-widest">{item.label}</p>
                    <a href={`mailto:${item.email}`} className="text-white/80 hover:text-white transition-colors text-sm break-all">
                      {item.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h4 className="text-[#daa520] font-serif-display text-xl font-bold mb-8 relative inline-block">
                Stay Connected
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#daa520]/30" />
              </h4>
              <div className="flex gap-4">
                {[
                  { icon: 'fa-facebook-f', color: '#1877F2' },
                  { icon: 'fa-youtube', color: '#FF0000' },
                  { icon: 'fa-tiktok', color: '#000000' },
                  { icon: 'fa-pinterest-p', color: '#E60023' }
                ].map((social, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-white hover:text-[#064e3b] hover:bg-[#daa520] hover:border-[#daa520] transition-all duration-500 shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(218,165,32,0.6)]"
                  >
                    <i className={`fa-brands ${social.icon} text-lg`} />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[#daa520] font-serif-display text-sm font-bold uppercase tracking-widest">Subscribe Newsletter</h4>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#daa520] transition-all"
                />
                <button className="absolute right-2 top-2 bottom-2 px-4 bg-[#daa520] text-[#064e3b] text-xs font-bold rounded-md hover:bg-white transition-all">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 py-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
          <i className="fa-solid fa-kaaba text-[#daa520]/40" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </div>
      </div>

      <div className="bg-black/50 py-4 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/40 font-lora text-sm tracking-widest">
            Copyright © 2026 <span className="text-[#daa520]/60 font-serif-display font-bold">Online Istikhara Site</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
