import React from "react";
import { 
  Languages, Briefcase, ShieldCheck, ArrowRight, 
  Wallet, Calendar, Clock, CheckCircle2, MapPin, 
  FileText, GraduationCap, Mic2, Ear, BookOpen, PenTool 
} from "lucide-react";
import { NavHashLink } from 'react-router-hash-link';

import languageSchoolImg from "../../images/classroom.jpg"; 

export default function LanguageSchoolPage() {
  return (
    <div className="pt-24 pb-20 font-poppins bg-white">
      {/* SECTION 1: HERO */}
      <div className="w-full mb-20">
        <div className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden">
          <img 
            src={languageSchoolImg} 
            alt="Japanese Language School" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-24">
             <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-12 bg-blue-400"></div>
                <span className="text-blue-400 text-xs font-bold tracking-[0.4em] uppercase">Language Excellence</span>
             </div>
             <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-none">
                Japanese <span className="text-blue-400">Language Classes</span>
             </h1>
             <p className="text-slate-300 max-w-xl mt-8 text-[11px] font-bold uppercase leading-relaxed hidden md:block">
                Learning Japanese is essential for studying and working in Japan. We provide training designed to help you build strong communication skills.
             </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* SECTION 2: THE BRIDGE & SKILLS */}
        <div className="grid lg:grid-cols-12 gap-16 mb-32 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase mb-8 leading-tight">
              Build Confidence in <br/> <span className="text-blue-800">Communication</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-[13px] font-bold uppercase leading-relaxed mb-12">
              <p>
                Namo Buddha Consultancy provides Japanese language training programs designed to help students build strong communication skills. Our training helps students communicate confidently and adapt easily to life in Japan.
              </p>
            </div>

            {/* NEW: FOUR PILLARS OF TRAINING */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
               {[
                 { icon: <Mic2 size={20}/>, label: "Speaking" },
                 { icon: <Ear size={20}/>, label: "Listening" },
                 { icon: <BookOpen size={20}/>, label: "Reading" },
                 { icon: <PenTool size={20}/>, label: "Writing" }
               ].map((skill, i) => (
                 <div key={i} className="bg-slate-50 p-6 rounded-[2.5rem] flex flex-col items-center justify-center border border-slate-100 hover:bg-blue-800 hover:text-white transition-all group">
                    <div className="text-blue-800 group-hover:text-white mb-3">{skill.icon}</div>
                    <span className="text-[10px] font-black uppercase tracking-widest">{skill.label}</span>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 space-y-4">
              {[
                { icon: <Languages size={24}/>, title: "Intensive JLPT Prep", color: "bg-blue-50 text-blue-800" },
                { icon: <Briefcase size={24}/>, title: "Part-time Job Support", color: "bg-slate-50 text-slate-900" },
                { icon: <ShieldCheck size={24}/>, title: "100% Visa Guidance", color: "bg-blue-50 text-blue-800" }
              ].map((item, i) => (
                <div key={i} className={`${item.color} p-8 rounded-[3rem] flex items-center gap-6 transition-transform hover:scale-[1.02] duration-300`}>
                   <div className="shrink-0">{item.icon}</div>
                   <h5 className="text-xs font-black uppercase tracking-widest">{item.title}</h5>
                </div>
              ))}
          </div>
        </div>

        {/* SECTION 3: ENROLLMENT CALENDAR */}
        

        {/* SECTION 4: LIFE & FUTURE */}
        <div className="grid md:grid-cols-2 gap-10 mb-32">
          <div className="bg-slate-900 p-12 md:p-16 rounded-[5rem] text-white">
            <h3 className="text-2xl font-black uppercase mb-8">Work <span className="text-blue-400">& Finance</span></h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <Wallet className="text-blue-400 shrink-0" />
                <div>
                  <h5 className="text-xs font-black uppercase mb-1">Arubaito (Part-time)</h5>
                  <p className="text-[11px] text-slate-400 leading-relaxed uppercase font-bold">Earn ¥100k+ per month working the legal 28-hour limit.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <FileText className="text-blue-400 shrink-0" />
                <div>
                  <h5 className="text-xs font-black uppercase mb-1">Tuition & Fees</h5>
                  <p className="text-[11px] text-slate-400 leading-relaxed uppercase font-bold">Flexible installment plans available at select partner schools.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-800 p-12 md:p-16 rounded-[5rem] text-white shadow-xl relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-2xl font-black uppercase mb-6">Future <br/> Pathways</h3>
              <p className="text-blue-100 text-[11px] font-bold uppercase leading-relaxed mb-10 opacity-80">
                After language school, we assist you in transitioning to Vocational (Senmon Gakko) or Universities across Japan.
              </p>
              
              <NavHashLink 
                smooth 
                to="/#contact"
                className="inline-block w-full py-5 bg-white text-blue-800 text-center text-[11px] font-black uppercase tracking-[0.2em] rounded-3xl hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-lg"
              >
                Inquire for 2026
              </NavHashLink>
            </div>
            <GraduationCap className="absolute -right-8 -bottom-8 text-white/10 w-48 h-48 group-hover:scale-110 transition-transform duration-700" />
          </div>
        </div>

        {/* SECTION 5: REGIONAL FOOTPRINT */}
        {/* <div className="text-center mb-10 px-6 py-16 bg-slate-50 rounded-[5rem]">
           <MapPin className="mx-auto text-blue-800 mb-6" size={32} />
           <h3 className="text-2xl font-black uppercase text-slate-900 mb-10">Study Locations</h3>
           <div className="flex flex-wrap justify-center gap-4">
              {["Tokyo", "Osaka", "Nagoya", "Fukuoka", "Kyoto", "Sapporo"].map((city, i) => (
                <span key={i} className="px-8 py-4 bg-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 shadow-sm border border-slate-100">
                  {city}
                </span>
              ))}
           </div>
        </div> */}
      </div>
    </div>
  );
}