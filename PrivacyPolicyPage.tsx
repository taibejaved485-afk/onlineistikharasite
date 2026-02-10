
import React from 'react';
import { ViewType } from './App';

interface PrivacyPolicyPageProps {
  onNavigate?: (target: ViewType) => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-0">
      {/* Hero Header */}
      <section className="relative pt-44 pb-24 bg-[#064e3b] islamic-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
        
        <div className="absolute top-32 left-6 lg:left-12 z-30">
          <button 
            onClick={() => onNavigate?.('home')}
            className="group flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-[#daa520] border border-[#daa520]/30 text-white hover:text-[#064e3b] rounded-full transition-all duration-300 font-serif-display text-sm font-bold shadow-xl"
          >
            <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <h1 className="text-white font-serif-display text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
            Privacy <span className="text-[#daa520]">Policy</span>
          </h1>
          <p className="text-white/70 font-lora text-lg md:text-xl italic">
            "Your trust is our sacred responsibility. We ensure your information remains 100% private."
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-600 font-lora leading-relaxed">
            
            <div className="mb-16">
              <h2 className="text-[#064e3b] font-serif-display text-3xl font-bold mb-6 flex items-center gap-4">
                <i className="fa-solid fa-user-shield text-[#daa520]" />
                Introduction
              </h2>
              <p>
                At Online Istikhara Site, we value your trust more than anything. Spiritual guidance is a matter of heart and faith, and we understand that the problems you share with us are deeply personal. This Privacy Policy outlines how we protect and manage your information when you seek our rohani services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="bg-[#064e3b]/5 p-8 rounded-[30px] border border-[#064e3b]/10">
                <h3 className="text-[#064e3b] font-serif-display text-2xl font-bold mb-4">Core Principles</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <i className="fa-solid fa-circle-check text-[#daa520] mt-1.5" />
                    <span><strong>100% Confidentiality:</strong> All spiritual consultations and personal details are kept strictly private.</span>
                  </li>
                  <li className="flex gap-3">
                    <i className="fa-solid fa-circle-check text-[#daa520] mt-1.5" />
                    <span><strong>No Third-Party Sharing:</strong> We do not sell, trade, or share your data with any external companies.</span>
                  </li>
                  <li className="flex gap-3">
                    <i className="fa-solid fa-circle-check text-[#daa520] mt-1.5" />
                    <span><strong>Safe Storage:</strong> Your information is stored in secured systems with advanced encryption.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#daa520]/5 p-8 rounded-[30px] border border-[#daa520]/10">
                <h3 className="text-[#064e3b] font-serif-display text-2xl font-bold mb-4">Information Usage</h3>
                <p className="mb-4">Information shared during Istikhara or healing sessions is used exclusively to:</p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <i className="fa-solid fa-star text-[#daa520] mt-1.5" />
                    <span>Provide more accurate spiritual guidance and Istikhara results.</span>
                  </li>
                  <li className="flex gap-3">
                    <i className="fa-solid fa-star text-[#daa520] mt-1.5" />
                    <span>Prepare personalized Qur'anic talismans (Naqsh) for your specific needs.</span>
                  </li>
                  <li className="flex gap-3">
                    <i className="fa-solid fa-star text-[#daa520] mt-1.5" />
                    <span>Better understand the spiritual root of your problems.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-[#064e3b] font-serif-display text-3xl font-bold mb-6 flex items-center gap-4">
                <i className="fa-solid fa-lock text-[#daa520]" />
                Security Measures
              </h2>
              <p className="mb-6">
                We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your details.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Secure Transmission", text: "All communication between you and our experts via the website is encrypted." },
                  { title: "Limited Access", text: "Only senior rohani experts directly involved in your case have access to your details." },
                  { title: "No Permanent Logs", text: "We do not keep permanent records of personal conversations unless requested for ongoing spiritual follow-ups." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 rounded-xl bg-[#064e3b] flex items-center justify-center text-white shrink-0 group-hover:bg-[#daa520] transition-colors">
                      <span className="font-bold">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-[#064e3b] font-bold text-xl mb-1">{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#064e3b] text-white p-10 rounded-[40px] text-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 islamic-pattern opacity-10" />
              <h3 className="text-[#daa520] font-serif-display text-2xl font-bold mb-4 relative z-10">Your Consent</h3>
              <p className="relative z-10 font-medium">
                By using our spiritual services, you consent to our website's privacy policy. We reserve the right to update this policy, and any changes will be posted on this page.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Decoration */}
      <section className="py-12 bg-[#fdfdfc] border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 font-amiri italic tracking-widest uppercase text-sm">
            Hifazat-e-Raaz Hamara Farz Hai
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
