
import React, { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: "Assalam-o-Alaikum! Main aapka Rohani Dost hoon. Aapko kis qism ki rohani madad ya rehnumayi chahiye? (Maslan: Jadu, Shadi, ya Rizq ke masail)" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const getStaticResponse = (userInput: string): string => {
    const text = userInput.toLowerCase();
    
    if (text.includes('jadu') || text.includes('tawiz') || text.includes('taweez')) {
      return "Hum Quran-o-Sunnah ke mutabiq jadu ka tor karte hain. Aap hamari website par 'Jadu ka tor' wala page dekhein ya foran niche diye gaye WhatsApp button par rabta karein.";
    }
    
    if (text.includes('shadi') || text.includes('rishta') || text.includes('nikah')) {
      return "Shadi mein rukawat ya pasand ki shadi ke liye hamare khas Qurani wazaif mojud hain. Kya main aapko mazeed maloomat bhejoon? Behtar hoga ke aap WhatsApp par rabta karein.";
    }
    
    if (text.includes('rizq') || text.includes('karobar') || text.includes('paisa') || text.includes('business')) {
      return "Karobar ki barkat aur rizq ki bandish khatam karne ke liye hamare 'Talismans' boht mufeed hain. InshAllah aapka masla hal ho jayega.";
    }

    return "Maazrat, main aapki baat poori tarah samajh nahi saka. Aap behtar rehnumayi ke liye niche diye gaye WhatsApp Button par click kar ke hamare rohani mahireen se rabta karein.";
  };

  const handleSend = () => {
    const userMsg = input.trim();
    if (!userMsg) return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    // Simulate thinking delay
    setTimeout(() => {
      const botResponse = getStaticResponse(userMsg);
      setMessages(prev => [...prev, { role: 'model', text: botResponse }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-28 right-8 z-[110] w-14 h-14 bg-[#064e3b] text-[#daa520] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-[#daa520]/50 ${isOpen ? 'rotate-90' : ''}`}
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-comment-dots'} text-2xl`} />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-48 right-4 md:right-8 z-[120] w-[95vw] md:w-[420px] h-[640px] bg-white rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.6)] border-2 border-[#064e3b]/10 flex flex-col overflow-hidden transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="bg-[#064e3b] p-6 text-white islamic-pattern relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          <div className="relative z-10 flex items-center gap-4">
             <div className="w-12 h-12 bg-[#daa520] rounded-full flex items-center justify-center text-[#064e3b] shadow-lg border-2 border-white/20">
                <i className="fa-solid fa-star-and-crescent text-xl" />
             </div>
             <div>
                <h3 className="font-serif-display font-bold text-xl leading-tight">Rohani Dost AI</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-[10px] text-[#daa520] uppercase tracking-widest font-bold">Always Online</p>
                </div>
             </div>
          </div>
        </div>

        {/* Messages area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#f8fafc] scroll-smooth">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-down`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                ? 'bg-[#064e3b] text-white rounded-tr-none' 
                : 'bg-white text-gray-700 border border-[#064e3b]/10 rounded-tl-none italic'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-2xl border border-blue-50 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-[#daa520] rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-[#daa520] rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-[#daa520] rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input & WhatsApp Link */}
        <div className="p-5 bg-white border-t border-gray-100 space-y-4">
          <div className="flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Sawal likhein (e.g. Shadi, Rizq...)"
              className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-[#daa520] transition-all"
            />
            <button 
              onClick={handleSend}
              className="w-12 h-12 bg-[#daa520] text-[#064e3b] rounded-2xl flex items-center justify-center shadow-md hover:bg-[#064e3b] hover:text-white transition-all"
            >
              <i className="fa-solid fa-paper-plane" />
            </button>
          </div>
          
          <a 
            href="https://wa.me/923706487654" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full h-24 flex flex-col items-center justify-center bg-[#25D366] text-white rounded-[30px] font-serif-display font-bold shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-95 group animate-pulse-gold border-4 border-[#daa520]/20"
          >
            <div className="flex items-center gap-4">
              <i className="fa-brands fa-whatsapp text-5xl" />
              <div className="text-left">
                <span className="text-2xl uppercase tracking-wider block leading-none">WhatsApp Rabta</span>
                <span className="text-[11px] opacity-90 font-lora italic">Click here for Urgent Spiritual Help</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
