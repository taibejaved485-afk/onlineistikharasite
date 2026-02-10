
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
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

    // 1. Pre-flight Internet Check
    if (!navigator.onLine) {
      setMessages(prev => [...prev, 
        { role: 'user', text: userMsg },
        { role: 'model', text: "Internet ka masla hai. Apne connection ko check karein aur dobara koshish karein. 🌐" }
      ]);
      setInput('');
      return;
    }

    // 2. Clear input and show user message
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // 3. Check for API Key presence
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error("API_KEY is missing. Please check your environment variables.");
      }

      // 4. Initialize SDK and call model
      // Using gemini-3-flash-preview as mandated
      const ai = new GoogleGenAI({ apiKey: apiKey });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are a 'Rohani Counselor' for the Noor Emerald website. 
          Expert in Islamic Taweez, Talismans, and Wazaif. 
          Respond in Roman Urdu. Be empathetic and religious. 
          Suggest relevant website categories (Marriage, Rizq, Jadu ka tor, etc.) 
          and invite users to use the WhatsApp link for direct help.`,
          temperature: 0.7,
          topP: 0.95,
        },
      });

      // 5. Success - Render response
      const botText = response.text || "Maaf kijiyega, main samajh nahi paya. Dobara bhejien.";
      setMessages(prev => [...prev, { role: 'model', text: botText }]);

    } catch (error: any) {
      // 6. Detailed Error Logging for Developers (Inspect via F12)
      console.group("--- Gemini AI Connectivity Error ---");
      console.error("Status Code:", error?.status || "N/A");
      console.error("Error Name:", error?.name);
      console.error("Error Message:", error?.message);
      console.error("Full Error Object:", error);
      console.groupEnd();

      // 7. Context-Aware User Messaging
      let errorMessage = "Server se rabta nahi ho pa raha. Aap WhatsApp par rabta kar sakte hain.";
      
      const status = error?.status || (error?.message?.includes("403") ? 403 : error?.message?.includes("429") ? 429 : 500);

      if (status === 403 || error.message?.includes("API_KEY_INVALID")) {
        errorMessage = "Technical issue (API Key invalid). Hamari team isay jald theek kar degi. Tab tak WhatsApp use karein. 🛠️";
      } else if (status === 429) {
        errorMessage = "Abhi boht zyada log rabta kar rahe hain. 1 minute baad dobara message karein. ⏳";
      } else if (status === 400) {
        errorMessage = "Request mein koi ghalti hai. Kuch aur likh kar check karein. ⚠️";
      } else if (error.message?.includes("fetch") || error.name === "TypeError") {
        errorMessage = "Network block ho raha hai ya CORS ka masla hai. Local environment check karein. 📡";
      }

      setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
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
      <div className={`fixed bottom-48 right-4 md:right-8 z-[120] w-[90vw] md:w-[400px] h-[550px] bg-[#f0f9ff] rounded-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] border-2 border-[#daa520]/20 flex flex-col overflow-hidden transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="bg-[#064e3b] p-6 text-white islamic-pattern relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          <div className="relative z-10 flex items-center gap-4">
             <div className="w-10 h-10 bg-[#daa520] rounded-full flex items-center justify-center text-[#064e3b] shadow-lg">
                <i className="fa-solid fa-star-and-crescent" />
             </div>
             <div>
                <h3 className="font-serif-display font-bold text-lg">Rohani Dost AI</h3>
                <p className="text-[10px] text-[#daa520] uppercase tracking-widest font-bold">Online Counselor</p>
             </div>
          </div>
        </div>

        {/* Messages area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-white/50 scroll-smooth">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-down`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                ? 'bg-[#064e3b] text-white rounded-tr-none' 
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
        <div className="p-4 bg-white border-t border-blue-50">
          <div className="flex gap-2 mb-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Apna masla likhein..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#daa520] focus:ring-2 focus:ring-[#daa520]/10 transition-all placeholder:text-gray-400"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="w-12 h-12 bg-[#daa520] text-[#064e3b] rounded-xl flex items-center justify-center hover:bg-[#064e3b] hover:text-white transition-all disabled:opacity-50"
              aria-label="Send Message"
            >
              <i className="fa-solid fa-paper-plane" />
            </button>
          </div>
          
          <a 
            href="https://wa.me/923706487654" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 py-3 bg-[#25D366] text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-lg group"
          >
            <i className="fa-brands fa-whatsapp text-lg" />
            Direct WhatsApp Rabta
          </a>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
