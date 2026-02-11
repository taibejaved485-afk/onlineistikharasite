
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
    
    if (text.includes('assalam') || text.includes('salam') || text.includes('slam')) {
      return "Walaikum Assalam! Online Istikhara mein khush-amdeed. Main aapki kya madad kar sakta hoon?";
    }

    if (text === 'hello' || text === 'hi' || text.startsWith('hi ') || text.startsWith('hello ')) {
      return "Hello! Umeed hai aap khairiyat se honge. Main aapki rohani masail mein madad ke liye hazir hoon.";
    }

    if (text.includes('kaun') || text.includes('koun') || text.includes('who are you') || text.includes('what is this site') || text.includes('site kya hai')) {
      return "Main Online Istikhara ka digital assistant hoon. Main aapko Istikhara, Wazaif, aur Rohani ilaj ke bare mein maloomat de sakta hoon.";
    }
    
    if (text.includes('jadu') || text.includes('taveez') || text.includes('tawiz') || text.includes('tor')) {
      return "Hum Quran-o-Sunnah ki roshni mein har qism ke jadu, taveez aur bandish ka mukammal kaat (tor) karte hain. Mazeed tafseel aur apna masla bayan karne ke liye niche diye gaye WhatsApp button par click karein.";
    }
    
    if (text.includes('rizq') || text.includes('karobar') || text.includes('paisa') || text.includes('business') || text.includes('tangee') || text.includes('tang')) {
      return "Karobari bandish aur rizq ki tangee ke liye hamare khas 'Talismans' aur 'Wazaif' mojud hain. Rabtay ke liye WhatsApp par aayen.";
    }
    
    if (text.includes('shadi') || text.includes('rishta') || text.includes('nikah') || text.includes('pabandi')) {
      return "Pasand ki shadi ho ya rishton mein pabandi, hamare rohani amliyat se hazaron logon ko kamyabi mili hai. Aap apna aur apni walida ka naam likh kar WhatsApp karein.";
    }

    if (text.includes('istikhara')) {
      return "Ji bilkul, hum shadi, safar aur karobar ke liye 'Masnoon Istikhara' ki saholat dete hain. Apna masla likh kar WhatsApp par bhejein.";
    }

    return "Behtreen rehnumayi ke liye aap hamare 'Contact Us' button par click karke direct raabta kar sakte hain.";
  };

  const processResponse = (userMsg: string, isManual: boolean = true) => {
    if (isManual) setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);
    setTimeout(() => {
      let botResponse = QUICK_REPLIES.find(qr => qr.label === userMsg)?.response || getStaticResponse(userMsg);
      setMessages(prev => [...prev, { role: 'model', text: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSend = () => {
    const userMsg = input.trim();
    if (!userMsg) return;
    setInput('');
    processResponse(userMsg);
  };

  const waLink = "https://wa.me/923706487654?text=Assalam-o-Alaikum!%20Mujhe%20Online%20Istikhara%20se%20rohani%20masail%20ke%20bare%20mein%20maloomat%20chahiye.";

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-[111px] right-8 z-[150] w-14 h-14 bg-[#064e3b] text-[#fbbf24] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-[#fbbf24]/50 ${isOpen ? 'rotate-90' : ''}`}
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-comment-dots'} text-2xl`} />
      </button>

      <div className={`fixed bottom-48 right-4 md:right-8 z-[160] w-[95vw] md:w-[420px] h-[660px] bg-white rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.6)] border-2 border-[#064e3b]/10 flex flex-col overflow-hidden transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90 pointer-events-none'}`}>
        <div className="bg-[#064e3b] p-6 text-white islamic-pattern relative">
          <div className="relative z-10 flex items-center gap-4">
             <div className="w-12 h-12 bg-[#fbbf24] rounded-full flex items-center justify-center text-[#064e3b] shadow-lg border-2 border-white/20">
                <i className="fa-solid fa-moon text-xl" />
             </div>
             <div>
                <h3 className="font-serif-display font-bold text-xl leading-tight">Rohani Dost AI</h3>
                <p className="text-[10px] text-[#fbbf24] uppercase tracking-widest font-bold">Online Istikhara</p>
             </div>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#f8fafc]">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-down`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-[#064e3b] text-white' : 'bg-white text-gray-700 border'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && <div className="text-xs text-gray-400 italic">Bot is typing...</div>}
        </div>

        <div className="p-5 bg-white border-t space-y-4">
          <div className="flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Sawal likhein..."
              className="flex-1 bg-gray-50 border rounded-2xl px-5 py-3 text-sm"
            />
            <button onClick={handleSend} className="w-12 h-12 bg-[#fbbf24] text-[#064e3b] rounded-2xl flex items-center justify-center">
              <i className="fa-solid fa-paper-plane" />
            </button>
          </div>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full h-16 flex items-center justify-center bg-[#25D366] text-white rounded-2xl font-bold gap-3">
            <i className="fa-brands fa-whatsapp text-2xl" /> WhatsApp Rabta
          </a>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
