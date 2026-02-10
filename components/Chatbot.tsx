
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: "Assalam-o-Alaikum! Main aapka Rohani Dost hoon. Aapko kis qism ki rohani madad ya rehnumayi chahiye? (Marriage, Rizq, Protection, etc.)" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    const userMsg = input.trim();
    if (!userMsg || isLoading) return;

    // 1. Initial State
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      /**
       * Initialization using environment variable as per platform standards.
       * This ensures the key is picked up securely from your settings.
       */
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are 'Rohani Dost', the official AI counselor for Noor Emerald.
          RULES:
          1. Speak ONLY in Roman Urdu (mixed with English terms where common).
          2. Your expertise is Islamic Taweez, Talismans, Wazaif, and Spiritual Counseling.
          3. Guide users to relevant sections: Marriage (Mohabbat), Wealth (Rizq), Protection (Hifazat), or Health (Sehat).
          4. Be extremely respectful, using terms like 'Janab', 'MashAllah', and 'InshAllah'.
          5. If a problem is complex, strongly suggest clicking the WhatsApp button for direct human expert contact.`,
          temperature: 0.7,
        },
      });

      const botText = response.text || "Maaf kijiyega, main samajh nahi paya. Dobara bhejien.";
      setMessages(prev => [...prev, { role: 'model', text: botText }]);

    } catch (error: any) {
      // 2. Exact Error Tracking for Deployment
      const statusCode = error?.status || "Connection Error";
      const errorMsg = error?.message || "Check API Key and Internet";
      
      console.group("--- Rohani Dost Debug ---");
      console.error("Status:", statusCode);
      console.error("Detail:", errorMsg);
      console.groupEnd();

      const fallbackText = `⚠️ Server Rabta Fail (${statusCode}): ${errorMsg.slice(0, 50)}...\n\nMaazrat! System busy hai. Foran WhatsApp par rabta karein.`;
      
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: fallbackText,
        isError: true 
      }]);

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-28 right-8 z-[110] w-14 h-14 bg-[#064e3b] text-[#daa520] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-[#daa520]/50 ${isOpen ? 'rotate-90' : ''}`}
        aria-label="Toggle Chat"
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-comment-dots'} text-2xl`} />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-48 right-4 md:right-8 z-[120] w-[95vw] md:w-[420px] h-[600px] bg-white rounded-[35px] shadow-[0_25px_70px_rgba(0,0,0,0.4)] border-2 border-[#064e3b]/10 flex flex-col overflow-hidden transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="bg-[#064e3b] p-6 text-white islamic-pattern relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          <div className="relative z-10 flex items-center gap-4">
             <div className="w-12 h-12 bg-[#daa520] rounded-full flex items-center justify-center text-[#064e3b] shadow-lg border-2 border-white/20">
                <i className="fa-solid fa-star-and-crescent text-xl" />
             </div>
             <div>
                <h3 className="font-serif-display font-bold text-xl leading-tight">Rohani Dost AI</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-[10px] text-[#daa520] uppercase tracking-widest font-bold">Roman Urdu Assistant</p>
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
                : msg.isError 
                  ? 'bg-red-50 text-red-700 border border-red-100 rounded-tl-none font-mono text-[11px]'
                  : 'bg-white text-gray-700 border border-blue-50 rounded-tl-none font-lora italic'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-2xl border border-blue-50 flex items-center gap-2">
                <span className="text-xs text-[#064e3b] font-bold italic">Sawal ka jaiza liya ja raha hai...</span>
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
        <div className="p-5 bg-white border-t border-gray-100">
          <div className="flex gap-2 mb-4">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Apna masla bayan karein..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm text-gray-900 focus:outline-none focus:border-[#daa520] transition-all shadow-inner"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="w-14 h-14 bg-[#daa520] text-[#064e3b] rounded-2xl flex items-center justify-center hover:bg-[#064e3b] hover:text-white transition-all disabled:opacity-50 shadow-lg"
            >
              <i className="fa-solid fa-paper-plane text-xl" />
            </button>
          </div>
          
          <a 
            href="https://wa.me/923706487654" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full h-16 flex items-center justify-center gap-4 bg-[#25D366] text-white rounded-2xl font-serif-display font-bold text-lg uppercase tracking-wider hover:scale-[1.02] active:scale-95 transition-all shadow-xl group"
          >
            <i className="fa-brands fa-whatsapp text-3xl" />
            <span>WhatsApp Rabta (Direct)</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
