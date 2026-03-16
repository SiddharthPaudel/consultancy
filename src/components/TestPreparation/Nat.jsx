import React from "react";
import { 
  Calendar, Clock, ClipboardCheck, BarChart, 
  Zap, BookOpen, Target, CheckCircle2, 
  ArrowRight, FileText, Timer
} from "lucide-react";
// 1. Import HashLink
import { NavHashLink } from 'react-router-hash-link';
import img from "../../images/class2.jpg";

export default function NatTestPage() {
  return (
    <div className="pt-20 pb-20 font-poppins bg-white">
      {/* SECTION 1: SHARP HERO */}
      <div className="w-full h-[50vh] relative mb-24 overflow-hidden">
        <img src={img} className="w-full h-full object-cover" alt="NAT Test Preparation" />
        <div className="absolute inset-0 bg-blue-900/70 flex flex-col justify-center px-8 md:px-20 text-white">
          <div className="max-w-4xl">
            <span className="text-blue-300 text-xs font-black tracking-[0.4em] uppercase mb-4 block">Accelerated Certification</span>
            <h1 className="text-5xl md:text-5xl font-black uppercase leading-tight">
              NAT <span className="text-blue-300">Test</span>
            </h1>
            <p className="text-blue-100 max-w-xl mt-6 text-sm md:text-base leading-relaxed">
              The high-frequency alternative to the JLPT. Designed for students in Nepal who need certified proficiency results on a strict deadline.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* SECTION 2: WHY NAT-TEST (Grid Layout) */}
        <div className="bg-slate-50 rounded-[4rem] p-12 md:p-20 mb-32 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black uppercase text-slate-900 mb-6">Linguistic <br/><span className="text-blue-800">Advantages</span></h2>
            <div className="space-y-8">
              {[
                { icon: <Calendar/>, title: "6 Times Yearly", desc: "Held every even month (Feb, Apr, Jun, Aug, Oct, Dec). Never miss an intake." },
                { icon: <Clock/>, title: "15-Day Results", desc: "Receive your score report and certificate in roughly 2-3 weeks." },
                { icon: <ClipboardCheck/>, title: "Syllabus Match", desc: "Covers the same Kanji and Grammar as JLPT, making your prep dual-purpose." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-blue-800 shrink-0">{item.icon}</div>
                  <div>
                    <h5 className="text-xs font-black uppercase mb-1 tracking-widest">{item.title}</h5>
                    <p className="text-[11px] text-slate-500 font-bold uppercase leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-800 rounded-[3rem] p-12 text-white relative overflow-hidden">
            <BarChart size={120} className="absolute -right-10 -bottom-10 opacity-10" />
            <h4 className="text-xl font-black uppercase mb-4">Official Validity</h4>
            <p className="text-sm text-blue-100 leading-relaxed font-medium mb-6">
              The NAT-TEST follows the same 5-level difficulty scale as the JLPT. It is a government-recognized document for:
            </p>
            <ul className="space-y-3">
               {["Certificate of Eligibility (COE)", "Student Visa Stamping", "Language School Admissions"].map((list, i) => (
                 <li key={i} className="flex items-center gap-2 text-[10px] font-black uppercase text-white">
                    <CheckCircle2 size={14} className="text-blue-300" /> {list}
                 </li>
               ))}
            </ul>
          </div>
        </div>

        {/* SECTION 3: STRATEGIC TEST PREP */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-slate-900 uppercase mb-4">Fast-Track <span className="text-blue-800">Preparation</span></h3>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Optimized training for rapid success</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="p-10 bg-slate-900 rounded-[3.5rem] text-white">
               <Timer className="text-blue-400 mb-6" size={32} />
               <h4 className="text-lg font-black uppercase mb-4">Speed Training</h4>
               <p className="text-[11px] text-slate-400 font-bold uppercase leading-relaxed mb-6">
                 NAT-TEST listening and reading sections move quickly. We focus on "Rapid Comprehension" drills to ensure you don't get stuck on a single question.
               </p>
            </div>

            <div className="p-10 bg-blue-50 rounded-[3.5rem] border border-blue-100">
               <FileText className="text-blue-800 mb-6" size={32} />
               <h4 className="text-lg font-black uppercase mb-4 text-slate-900">Vocabulary Focus</h4>
               <p className="text-[11px] text-slate-600 font-bold uppercase leading-relaxed mb-6">
                 Because NAT is held frequently, the vocabulary rotation is precise. We use "High-Probability" word lists that appear most often in NAT formats.
               </p>
            </div>

            <div className="p-10 bg-slate-50 rounded-[3.5rem] border border-slate-200">
               <Target className="text-blue-800 mb-6" size={32} />
               <h4 className="text-lg font-black uppercase mb-4 text-slate-900">Mock Simulation</h4>
               <p className="text-[11px] text-slate-500 font-bold uppercase leading-relaxed mb-6">
                 Every 2 weeks, we host a full-length NAT-style mock exam with OMR scoring to remove "Exam Hall Anxiety."
               </p>
            </div>
          </div>
        </div>

        {/* SECTION 4: THE LINGUISTIC BALANCE */}
        <div className="p-12 md:p-20 bg-slate-900 rounded-[5rem] text-white mb-20 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-black uppercase text-blue-400 mb-6">How it compares to JLPT?</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-medium mb-8">
                While the linguistic content is identical (Kanji, Grammar, Reading, Listening), the NAT-TEST is often considered slightly more straightforward in its question phrasing. This makes it an excellent "First Exam" for students in Kathmandu to gain confidence before attempting N4 or N3.
              </p>
              <div className="flex flex-wrap gap-4">
                 <div className="px-5 py-3 bg-white/5 rounded-2xl border border-white/10 text-[10px] font-black uppercase tracking-tighter">Accepted by Immigration</div>
                 <div className="px-5 py-3 bg-white/5 rounded-2xl border border-white/10 text-[10px] font-black uppercase tracking-tighter">Fast Certification</div>
                 <div className="px-5 py-3 bg-white/5 rounded-2xl border border-white/10 text-[10px] font-black uppercase tracking-tighter">Standardized Scoring</div>
              </div>
            </div>
            
            {/* 2. UPDATED BUTTON: smooth scroll to home#contact */}
            <div className="md:w-1/3">
               <NavHashLink 
                 smooth 
                 to="/#contact"
                 className="w-full py-6 bg-blue-500 text-slate-900 rounded-[2.5rem] text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg"
               >
                 Register for NAT <ArrowRight size={16} />
               </NavHashLink>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}