
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
    if (!input.trim() || isLoading) return;

    // 1. Connectivity Check
    if (!navigator.onLine) {
      setMessages(prev => [...prev, 
        { role: 'user', text: input.trim() },
        { role: 'model', text: "Internet ka masla lag raha hai. Apna connection check karein. 🌐" }
      ]);
      setInput('');
      return;
    }

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // 2. Initialize Google GenAI SDK
      // Note: We use process.env.API_KEY as per system requirements.
      // We use 'gemini-3-flash-preview' as 'gemini-1.5-flash' is deprecated/prohibited.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are a 'Rohani Counselor' and expert in 'Islamic Taweez', 'Talismans', and 'Wazaif' for the Noor Emerald website.
          Your goal is to help users with their spiritual problems using Roman Urdu (mix of Urdu and English).
          Be empathetic, respectful, and religious in tone.
          
          Website Categories to guide users towards:
          - Islamic Taweez: Wazaif, Mohabbat, Sehat, Jadu ka tor, Kamyabi, Rizq, Hamal.
          - Talismans: Success, Love, Black Magic, Karobar, Pregnancy, Pray Request, Get Ism-e-Azam, Guidance, Istikhara.
          
          Action: Suggest specific categories and invite them to use the WhatsApp link or Contact Form for detailed help.`,
        },
      });

      // 3. Extract generated text
      const botText = response.text || "Maaf kijiyega, main samajh nahi paya. Dobara bhejien.";
      setMessages(prev => [...prev, { role: 'model', text: botText }]);

    } catch (error: any) {
      // 4. Detailed Error Logging for Debugging
      console.error("--- DEBUG: Gemini API Error ---");
      console.error("Full Error Object:", error);
      
      // Extracting status code if possible from SDK error structure
      const statusCode = error?.status || (error?.message?.match(/\d{3}/) ? error.message.match(/\d{3}/)[0] : "Unknown");
      console.error("Detected Status Code:", statusCode);
      console.error("Error Message String:", error.message);

      let userFriendlyError = "Server se rabta nahi ho pa raha. Aap WhatsApp par rabta kar sakte hain.";

      // Specific handling for common API errors
      if (statusCode === "403" || error.message?.includes("API_KEY_INVALID")) {
        userFriendlyError = "Technical issue: API Key ka masla hai. Hum jald theek kar rahe hain. 🛠️";
      } else if (statusCode === "429") {
        userFriendlyError = "Boht zyada requests bhenji gayi hain. Thori der baad koshish karein. ⏳";
      } else if (statusCode === "400") {
        userFriendlyError = "Request mein koi ghalti hai. Kuch aur likh kar check karein. ⚠️";
      }

      setMessages(prev => [...prev, { role: 'model', text: userFriendlyError }]);
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
              <div className="bg-white p-4 rounded-2xl border border-blue-100 flex gap-1">
                <div className="w-1.5 h-1.5 bg-[#daa520] rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-[#daa520] rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 bg-[#daa520] rounded-full animate-bounce [animation-delay:0.4s]" />
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
            >
              <i className="fa-solid fa-paper-plane" />
            </button>
          </div>
          
          {/* WhatsApp Direct Link Button */}
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
