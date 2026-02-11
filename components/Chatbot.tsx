
import React, { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const QUICK_REPLIES = [
  { label: 'Istikhara ka tareeqa?', response: 'Istikhara ke liye aap hamari "Services" section check karein ya direct WhatsApp par raabta karein. Hum aapki behtareen rehnumayi karenge.' },
  { label: 'Aaj ka Wazifa', response: 'Har qism ke masail ke liye hamare "Blog" section mein tajweez karda makhsoos wazaif mojood hain jo Quran-o-Sunnat ke mutabiq hain.' },
  { label: 'Contact Expert', response: 'Aap hamare "Contact Us" page par ja kar form fill kar sakte hain ya niche diye gaye WhatsApp icon par click karke direct mahireen se baat karein.' },
  { label: 'Fees & Charges', response: 'Hamara Online Istikhara mukammal tor par Fi-Sabilillah hai. Rohani amliyat aur taweezat ke liye hadiya maslay ki nauiyat ke mutabiq hota hai jo ke sirf zaroori ikhrajat ke liye liya jata hai. Mazeed tafseel ke liye aap hamare WhatsApp par rabta kar sakte hain.' }
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
    
    // Privacy Triggers
    if (text.includes('privacy') || text.includes('raaz') || text.includes('parda') || text.includes('confidential')) {
      return "Hamari Service ki Privacy Policy:\n\n100% Confidentiality: Aapka naam, masla, aur tamam guftagu mukammal tor par raaz mein rakhi jati hai.\n\nData Protection: Hum kisi bhi client ka data kisi teesray shakhs (third party) ke sath share nahi karte.\n\nDirect Contact: Aapki tamam baatchit sirf hamaray makhsoos rohani mahir (Expert) tak mehdood rehti hai.\n\nShariat Compliance: Hum shariat ke mutabiq logon ki parda-poshi ka sakhti se dehan rakhte hain.\n\nAap be-fiker ho kar rabta kar sakte hain, aapka aitemad hamari awaleen tarjih hai.";
    }

    // Fee/Hadiya Triggers
    if (text.includes('hadiya') || text.includes('fees') || text.includes('charges') || text.includes('paise')) {
      return "Hamara Online Istikhara mukammal tor par Fi-Sabilillah hai. Rohani amliyat aur taweezat ke liye hadiya maslay ki nauiyat ke mutabiq hota hai jo ke sirf zaroori ikhrajat ke liye liya jata hai. Mazeed tafseel ke liye aap hamare WhatsApp par rabta kar sakte hain.";
    }

    // Duration/Time Triggers
    if (text.includes('waqt') || text.includes('kitni der') || text.includes('how long') || text.includes('time')) {
      return "Istikhara ki report aam tor par 24 se 48 ghanton mein de di jati hai. Rohani ilaj ya bandish ke tor mein maslay ki pechidgi ke mutabiq waqt lag sakta hai.";
    }

    // Process/Method Triggers
    if (text.includes('tariqa') || text.includes('kaise karte ho') || text.includes('process')) {
      return "Hamara tamam kaam Quran-o-Sunnat aur jayez rohani amliyat ki roshni mein hota hai. Hum kisi bhi qism ka ghair-shari ya kala jadu nahi karte, balkay sirf noori ilm se madad lete hain.";
    }

    // Standard Greetings & Basic Queries
    if (text.includes('assalam') || text.includes('salam') || text.includes('slam')) {
      return "Walaikum Assalam! Online Istikhara mein khush-amdeed. Main aapki kya madad kar sakta hoon?";
    }
    if (text === 'hello' || text === 'hi' || text.startsWith('hi ') || text.startsWith('hello ')) {
      return "Hello! Umeed hai aap khairiyat se honge. Main aapki rohani masail mein madad ke liye hazir hoon.";
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
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${msg.role === 'user' ? 'bg-[#064e3b] text-white' : 'bg-white text-gray-700 border'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && <div className="text-xs text-gray-400 italic px-4">Bot is typing...</div>}
        </div>

        <div className="p-5 bg-white border-t space-y-4">
          <div className="flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Sawal likhein..."
              className="flex-1 bg-gray-50 border rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-[#daa520]"
            />
            <button onClick={handleSend} className="w-12 h-12 bg-[#fbbf24] text-[#064e3b] rounded-2xl flex items-center justify-center hover:bg-[#064e3b] hover:text-white transition-all">
              <i className="fa-solid fa-paper-plane" />
            </button>
          </div>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full h-14 flex items-center justify-center bg-[#25D366] text-white rounded-2xl font-bold gap-3 shadow-lg hover:scale-[1.02] transition-transform">
            <i className="fa-brands fa-whatsapp text-2xl" /> WhatsApp Rabta
          </a>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
