
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
    { role: 'model', text: "Assalam-o-Alaikum! Main aapka Rohani Dost hoon. Aapko kis qism ki rohani madad ya rehnumayi chahiye? (Marriage, Rizq, Protection, etc.)" }
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

    // 1. Check if API Key is configured in environment
    if (!process.env.API_KEY) {
      console.error("CRITICAL ERROR: process.env.API_KEY is not defined. Please check your deployment settings.");
    }

    // 2. Initial UI Update
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    // 3. Connectivity Check
    if (!navigator.onLine) {
      setMessages(prev => [...prev, 
        { role: 'model', text: "No Internet. Please check your connection. 🌐", isError: true }
      ]);
      setIsLoading(false);
      return;
    }

    try {
      /**
       * Initializing with process.env.API_KEY as per core instructions.
       * The SDK handles the x-goog-api-key header automatically.
       */
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are 'Rohani Dost', a spiritual counselor for the Noor Emerald website.
          Respond in Roman Urdu. Guide users to Islamic Taweez, Talismans, and Wazaif categories.
          Be brief and respectful. Always suggest WhatsApp for serious matters.`,
        },
      });

      const botText = response.text || "I couldn't understand. Please try again.";
      setMessages(prev => [...prev, { role: 'model', text: botText }]);

    } catch (error: any) {
      // 4. Detailed Console Logging for Debugging (F12)
      console.group("--- Gemini Debug Info ---");
      console.error("Status Code:", error?.status);
      console.error("Error Message:", error?.message);
      console.error("Full Object:", error);
      console.groupEnd();

      // 5. Short & Clear User Message
      const statusCode = error?.status || "API Blocked";
      const fallbackMessage = `⚠️ Error ${statusCode}: Connection failed. Please use the WhatsApp button below for urgent help.`;
      
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: fallbackMessage,
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
      <div className={`fixed bottom-48 right-4 md:right-8 z-[120] w-[95vw] md:w-[420px] h-[600px] bg-[#f0f9ff] rounded-[35px] shadow-[0_25px_70px_rgba(0,0,0,0.4)] border-2 border-[#daa520]/20 flex flex-col overflow-hidden transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="bg-[#064e3b] p-6 text-white islamic-pattern relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          <div className="relative z-10 flex items-center gap-4">
             <div className="w-12 h-12 bg-[#daa520] rounded-full flex items-center justify-center text-[#064e3b] shadow-lg border-2 border-white/20">
                <i className="fa-solid fa-star-and-crescent text-xl" />
             </div>
             <div>
                <h3 className="font-serif-display font-bold text-xl">Rohani Dost AI</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-[10px] text-[#daa520] uppercase tracking-widest font-bold">Authenticated Mode</p>
                </div>
             </div>
          </div>
        </div>

        {/* Messages area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-white/60 scroll-smooth">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-down`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                ? 'bg-[#064e3b] text-white rounded-tr-none' 
                : msg.isError 
                  ? 'bg-red-50 text-red-700 border border-red-100 rounded-tl-none font-mono text-[11px]'
                  : 'bg-white text-gray-700 border border-blue-100 rounded-tl-none font-lora italic'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-2xl border border-blue-100 flex items-center gap-2">
                <span className="text-xs text-[#064e3b] font-bold italic">Typing...</span>
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
        <div className="p-5 bg-white border-t border-blue-50">
          <div className="flex gap-2 mb-4">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Apna masla likhein..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-sm text-gray-900 focus:outline-none focus:border-[#daa520] transition-all placeholder:text-gray-400 shadow-inner"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="w-14 h-14 bg-[#daa520] text-[#064e3b] rounded-2xl flex items-center justify-center hover:bg-[#064e3b] hover:text-white transition-all disabled:opacity-50 shadow-lg"
              aria-label="Send Message"
            >
              <i className="fa-solid fa-paper-plane text-xl" />
            </button>
          </div>
          
          <a 
            href="https://wa.me/923706487654" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full h-16 flex items-center justify-center gap-4 bg-[#25D366] text-white rounded-2xl font-serif-display font-bold text-lg uppercase tracking-wider hover:scale-[1.02] active:scale-95 transition-all shadow-xl group animate-pulse-gold"
          >
            <i className="fa-brands fa-whatsapp text-3xl" />
            <span>WhatsApp Par Rabta Karein</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
