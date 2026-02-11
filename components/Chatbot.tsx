
import React, { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const QUICK_REPLIES = [
  { label: 'Istikhara ka tareeqa?', response: 'Istikhara ke liye aap hamari "Services" section check karein ya direct WhatsApp par raabta karein. Hum aapki behtareen rehnumayi karenge.' },
  { label: 'Aaj ka Wazifa', response: 'Har qism ke masail ke liye hamare "Blog" section mein tajweez karda makhsoos wazaif mojood hain jo Quran-o-Sunnat ke mutabiq hain.' },
  { label: 'Contact Expert', response: 'Aap hamare "Contact Us" page par ja kar form fill kar sakte hain ya niche diye gaye WhatsApp icon par click karke direct mahireen se baat karein.' },
  { label: 'Fees & Charges', response: 'Hamari basic maloomat aur mashwara bilkul muft hain, lekin makhsoos rohani ilaj ya taweezat ke hadiya ke liye aap admin se WhatsApp par raabta kar sakte hain.' }
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: "Assalam-o-Alaikum! Main aapka Rohani Dost hoon. Aapko kis qism ki rohani madad ya rehnumayi chahiye? Niche diye gaye menu se bhi muntakhib kar sakte hain." 
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
    const text = userInput.toLowerCase().trim();
    
    // Greetings Logic: Salam
    if (text.includes('assalam') || text.includes('salam') || text.includes('slam')) {
      return "Walaikum Assalam! Noor Emerald mein khush-amdeed. Main aapki kya madad kar sakta hoon?";
    }

    // Greetings Logic: Hello/Hi
    if (text === 'hello' || text === 'hi' || text.startsWith('hi ') || text.startsWith('hello ')) {
      return "Hello! Umeed hai aap khairiyat se honge. Main aapki rohani masail mein madad ke liye hazir hoon.";
    }

    // Basic Q&A: Who are you?
    if (text.includes('kaun') || text.includes('koun') || text.includes('who are you') || text.includes('what is this site') || text.includes('site kya hai')) {
      return "Main Noor Emerald ka digital assistant hoon. Main aapko Istikhara, Wazaif, aur Rohani ilaj ke bare mein maloomat de sakta hoon.";
    }
    
    // Keyword: Jadu / Tawiz / Tor
    if (text.includes('jadu') || text.includes('taveez') || text.includes('tawiz') || text.includes('tor')) {
      return "Hum Quran-o-Sunnah ki roshni mein har qism ke jadu, taveez aur bandish ka mukammal kaat (tor) karte hain. Mazeed tafseel aur apna masla bayan karne ke liye niche diye gaye WhatsApp button par click karein.";
    }
    
    // Keyword: Karobar / Rizq / Bandish / Business
    if (text.includes('rizq') || text.includes('karobar') || text.includes('paisa') || text.includes('business') || text.includes('tangee') || text.includes('tang')) {
      return "Karobari bandish aur rizq ki tangee ke liye hamare khas 'Talismans' aur 'Wazaif' mojud hain. InshaAllah aapka karobar din dugni raat chugni taraqqi karega. Rabtay ke liye WhatsApp par aayen.";
    }
    
    // Keyword: Shadi / Rishta / Nikah / Pabandi
    if (text.includes('shadi') || text.includes('rishta') || text.includes('nikah') || text.includes('pabandi')) {
      return "Pasand ki shadi ho ya rishton mein pabandi, hamare rohani amliyat se hazaron logon ko kamyabi mili hai. Aap apna aur apni walida ka naam likh kar WhatsApp karein taake hum check kar sakein.";
    }

    // Keyword: Ghar / Khauf / Jhagray
    if (text.includes('ghar') || text.includes('khauf') || text.includes('jhagra') || text.includes('jhagray')) {
      return "Ghar se nahoosat aur jhagron ke khatmay ke liye khas 'Rohani Hisar' aur 'Pani par dam' karne ka tariqa bataya jata hai. Abhi WhatsApp par rabta karein.";
    }

    // Keyword: Istikhara
    if (text.includes('istikhara')) {
      return "Ji bilkul, hum shadi, safar aur karobar ke liye 'Masnoon Istikhara' ki saholat dete hain. Apna masla likh kar WhatsApp par bhejein, aapko jald jawab mil jayega.";
    }

    // Fallback Message
    return "Behtreen rehnumayi ke liye aap hamare 'Contact Us' button par click karke direct raabta kar sakte hain.";
  };

  const processResponse = (userMsg: string, isManual: boolean = true) => {
    if (isManual) {
      setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    }
    
    setIsTyping(true);

    const delay = Math.min(Math.max(userMsg.length * 20, 1000), 2500);

    setTimeout(() => {
      let botResponse = "";
      const quickMatch = QUICK_REPLIES.find(qr => qr.label === userMsg);
      if (quickMatch) {
        botResponse = quickMatch.response;
      } else {
        botResponse = getStaticResponse(userMsg);
      }

      setMessages(prev => [...prev, { role: 'model', text: botResponse }]);
      setIsTyping(false);
    }, delay);
  };

  const handleSend = () => {
    const userMsg = input.trim();
    if (!userMsg) return;
    setInput('');
    processResponse(userMsg);
  };

  const handleQuickReply = (qr: typeof QUICK_REPLIES[0]) => {
    setMessages(prev => [...prev, { role: 'user', text: qr.label }]);
    processResponse(qr.label, false);
  };

  return (
    <>
      {/* Floating Toggle Button - Aligned 15px above WhatsApp Button (bottom-8 + height-16 + 15px gap approx bottom-28) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-[111px] right-8 z-[150] w-14 h-14 bg-[#064e3b] text-[#fbbf24] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-[#fbbf24]/50 ${isOpen ? 'rotate-90' : ''}`}
        aria-label="Toggle Chat"
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-comment-dots'} text-2xl`} />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-48 right-4 md:right-8 z-[160] w-[95vw] md:w-[420px] h-[660px] bg-white rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.6)] border-2 border-[#064e3b]/10 flex flex-col overflow-hidden transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="bg-[#064e3b] p-6 text-white islamic-pattern relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          <div className="relative z-10 flex items-center gap-4">
             <div className="w-12 h-12 bg-[#fbbf24] rounded-full flex items-center justify-center text-[#064e3b] shadow-lg border-2 border-white/20">
                <i className="fa-solid fa-star-and-crescent text-xl" />
             </div>
             <div>
                <h3 className="font-serif-display font-bold text-xl leading-tight">Rohani Dost AI</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-[10px] text-[#fbbf24] uppercase tracking-widest font-bold">Local Assistant</p>
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
                : 'bg-white text-gray-700 border border-[#064e3b]/10 rounded-tl-none italic font-medium'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-2xl border border-[#064e3b]/5 flex items-center gap-3">
                <p className="text-[10px] font-bold text-gray-400 italic uppercase tracking-widest">Bot is typing...</p>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-[#fbbf24] rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-[#fbbf24] rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-[#fbbf24] rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Menu Buttons */}
        <div className="px-5 pt-2 pb-0 flex flex-wrap gap-2">
           {QUICK_REPLIES.map((qr, idx) => (
             <button
               key={idx}
               onClick={() => handleQuickReply(qr)}
               disabled={isTyping}
               className="bg-[#fbbf24] text-[#064e3b] px-4 py-2 rounded-full text-xs font-bold shadow-md hover:bg-white transition-all active:scale-95 border border-[#fbbf24]/50"
             >
               {qr.label}
             </button>
           ))}
        </div>

        {/* Input Area */}
        <div className="p-5 bg-white border-t border-gray-100 space-y-4">
          <div className="flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Sawal likhein ya menu se choose karein..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-[#fbbf24] transition-all shadow-inner"
            />
            <button 
              onClick={handleSend}
              className="w-12 h-12 bg-[#fbbf24] text-[#064e3b] rounded-2xl flex items-center justify-center shadow-md hover:bg-[#064e3b] hover:text-white transition-all active:scale-90"
            >
              <i className="fa-solid fa-paper-plane" />
            </button>
          </div>
          
          <a 
            href="https://wa.me/923706487654?text=Assalam-o-Alaikum!%20Mujhe%20Noor%20Emerald%20se%20rohani%20masail%20ke%20bare%20mein%20maloomat%20chahiye." 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full h-20 flex flex-col items-center justify-center bg-[#25D366] text-white rounded-[30px] font-serif-display font-bold shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-95 group border-4 border-[#fbbf24]/20"
          >
            <div className="flex items-center gap-4">
              <i className="fa-brands fa-whatsapp text-4xl" />
              <div className="text-left">
                <span className="text-xl uppercase tracking-wider block leading-none">WhatsApp Rabta</span>
                <span className="text-[9px] opacity-90 font-lora italic">Direct Spiritual Help</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
