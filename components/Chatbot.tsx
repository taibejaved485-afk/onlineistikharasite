
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
  const [hasError, setHasError] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    const userMsg = input.trim();
    if (!userMsg || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);
    setHasError(false);

    // Verification: API Key Check
    if (!process.env.API_KEY) {
      console.error("API Key is missing from environment.");
    }

    try {
      /**
       * Using Gemini 3 Flash for maximum stability and speed in Roman Urdu.
       * The SDK handles the authenticated request structure internally.
       */
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are 'Rohani Dost', the spiritual AI for Noor Emerald.
          STRICT RULES:
          1. Speak ONLY in Roman Urdu.
          2. Topic: Islamic Taweez, Wazaif, and Counseling ONLY.
          3. Guide users to: 'Marriage', 'Wealth', 'Protection', or 'Health' sections.
          4. Be very polite (Janab, MashAllah).
          5. If asked about personal future or deep magic, suggest WhatsApp.`,
          temperature: 0.6,
        },
      });

      const botText = response.text || "Maaf kijiyega, main samajh nahi paya. Dubara likhein.";
      setMessages(prev => [...prev, { role: 'model', text: botText }]);

    } catch (error: any) {
      setHasError(true);
      const statusCode = error?.status || "Error";
      
      console.error(`Connection Failed: ${statusCode}`, error?.message);

      // Short error message for UI
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: `⚠️ Rabta Na-mumkin (${statusCode}). Neeche WhatsApp par click karein.`,
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
        className={`fixed bottom-28 right-8 z-[110] w-14 h-14 bg-[#064e3b] text-[#daa520] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-[#daa520]/50 ${isOpen ? 'rotate-90' : ''}`}
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-comment-dots'} text-2xl`} />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-48 right-4 md:right-8 z-[120] w-[95vw] md:w-[420px] h-[620px] bg-white rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.5)] border-2 border-[#064e3b]/10 flex flex-col overflow-hidden transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90 pointer-events-none'}`}>
        
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
                  <span className={`w-2 h-2 rounded-full animate-pulse ${hasError ? 'bg-red-500' : 'bg-green-400'}`} />
                  <p className="text-[10px] text-[#daa520] uppercase tracking-widest font-bold">
                    {hasError ? 'System Offline' : 'Active & Online'}
                  </p>
                </div>
             </div>
          </div>
        </div>

        {/* Messages area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#f8fafc]">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-down`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                ? 'bg-[#064e3b] text-white rounded-tr-none' 
                : msg.isError 
                  ? 'bg-red-50 text-red-700 border border-red-100 rounded-tl-none font-bold text-[11px]'
                  : 'bg-white text-gray-700 border border-blue-50 rounded-tl-none italic'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
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
        <div className="p-5 bg-white border-t border-gray-100 space-y-3">
          <div className="flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Apna masla likhein..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-[#daa520]"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="w-12 h-12 bg-[#daa520] text-[#064e3b] rounded-2xl flex items-center justify-center shadow-md hover:bg-[#064e3b] hover:text-white transition-all disabled:opacity-50"
            >
              <i className="fa-solid fa-paper-plane" />
            </button>
          </div>
          
          <a 
            href="https://wa.me/923706487654" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`w-full h-20 flex flex-col items-center justify-center bg-[#25D366] text-white rounded-[25px] font-serif-display font-bold shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-95 group ${hasError ? 'animate-pulse-gold scale-105 border-4 border-[#daa520]' : ''}`}
          >
            <div className="flex items-center gap-3">
              <i className="fa-brands fa-whatsapp text-4xl" />
              <span className="text-xl uppercase tracking-wider">WhatsApp Rabta</span>
            </div>
            <p className="text-[10px] opacity-80 font-lora">Click here for Direct Help</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
