import React from "react";
import { 
  ShieldCheck, Zap, MessageSquare, Briefcase, 
  Globe, Search, Users, Calculator, ArrowRight 
} from "lucide-react";
// 1. Import HashLink for cross-page navigation
import { NavHashLink } from 'react-router-hash-link';
import pic from "../../images/class.jpeg";

export default function JLCertPage() {
  return (
    <div className="pt-20 pb-20 font-poppins bg-white">
      {/* SECTION 1: SHARP HERO */}
      <div className="w-full h-[50vh] relative mb-24 overflow-hidden">
        <img src={pic} className="w-full h-full object-cover" alt="Professional Japanese" />
        <div className="absolute inset-0 bg-slate-900/80 flex flex-col justify-center px-8 md:px-20 text-white">
          <div className="max-w-4xl">
            <span className="text-blue-400 text-xs font-black tracking-[0.4em] uppercase mb-4 block">Specialized Pathways</span>
            <h1 className="text-5xl md:text-5xl font-black uppercase leading-tight">
              JLCT & <br/><span className="text-blue-400">J-CERT</span>
            </h1>
            <p className="text-slate-300 max-w-xl mt-6 text-sm md:text-base leading-relaxed">
              Where language meets the workplace. These certifications prove you have the "Social Intelligence" to succeed in Japan.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* SECTION 2: LINGUISTIC FOCUS */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="p-12 bg-slate-50 rounded-[4rem] border border-slate-100">
            <h3 className="text-2xl font-black text-blue-800 mb-6 uppercase flex items-center gap-3">
              <Zap size={24} /> JLCT
            </h3>
            <p className="text-slate-600 text-[11px] font-bold uppercase leading-relaxed mb-6">
              Focuses on **Communicative Competence**. It tests whether you can actually "function" in a Japanese store, station, or school using CEFR standards.
            </p>
            <div className="p-4 bg-white rounded-2xl flex items-center gap-3 text-[9px] font-black uppercase text-slate-500">
              <MessageSquare size={14} className="text-blue-800"/> Focus: Natural Conversational Response
            </div>
          </div>

          <div className="p-12 bg-slate-900 rounded-[4rem] text-white">
            <h3 className="text-2xl font-black text-blue-400 mb-6 uppercase flex items-center gap-3">
              <ShieldCheck size={24} /> J-CERT
            </h3>
            <p className="text-slate-400 text-[11px] font-bold uppercase leading-relaxed mb-6">
              Focuses on **Business Etiquette (Keigo)**. This is the certification of choice for vocational specialists and corporate professionals.
            </p>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3 text-[9px] font-black uppercase text-blue-400">
              <Briefcase size={14} className="text-blue-400"/> Focus: Corporate Culture & Manners
            </div>
          </div>
        </div>

        {/* SECTION 3: PRACTICAL TEST PREP */}
        <div className="mb-32 bg-slate-50 rounded-[5rem] p-12 md:p-20">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-black text-slate-900 uppercase mb-4">Vocational <span className="text-blue-800">Test Prep</span></h3>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Training for Workplace Readiness</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users />, title: "Context Analysis", desc: "Learning to identify social hierarchy (Senpai/Kohai) from speech cues." },
              { icon: <MessageSquare />, title: "Role-Play Mock", desc: "Simulating office and service-sector conversations used in JLCT." },
              { icon: <Search />, title: "Technical Lexicon", desc: "Industry-specific vocabulary training for Nursing and Construction." },
              { icon: <Calculator />, title: "Speed Drills", desc: "Improving response time for the fast-paced communicative sections." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
                <div className="text-blue-800 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h5 className="text-[10px] font-black uppercase text-slate-900 mb-2">{item.title}</h5>
                <p className="text-[10px] text-slate-500 font-bold uppercase leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: CALL TO ACTION */}
        <div className="text-center py-20 bg-slate-900 text-white rounded-[5rem] relative overflow-hidden">
          <Globe className="absolute -right-10 -bottom-10 text-white/5 w-64 h-64" />
          <div className="relative z-10 px-6">
            <h3 className="text-3xl font-black uppercase mb-4">Ready for the Professional Step?</h3>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-10 max-w-xl mx-auto leading-relaxed">
              JLCT and J-CERT offer the most direct validation for workers and technical students. Start your specialized training today.
            </p>
            
            {/* 2. UPDATED BUTTON: smooth scroll to home#contact */}
            <NavHashLink 
              smooth 
              to="/#contact"
              className="inline-flex items-center gap-4 mx-auto px-12 py-6 bg-blue-500 text-slate-900 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all cursor-pointer shadow-lg"
            >
              Apply Now for Professional Prep <ArrowRight size={14} />
            </NavHashLink>
          </div>
        </div>
      </div>
    </div>
  );
}