import React from "react";
import { 
  CheckCircle2, BookOpen, Target, Clock, 
  Type, Languages, MessageSquare, Brain,
  Search, Calculator, ArrowRight, GraduationCap,
  PenTool, Mic2, Layers
} from "lucide-react";
import { NavHashLink } from 'react-router-hash-link';
import img from "../../images/classroom.jpg"; 

export default function JLPTPage() {
  return (
    <div className="pt-20 pb-20 font-poppins bg-white">
      {/* SECTION 1: SHARP HERO */}
      <div className="w-full h-[50vh] relative mb-24 overflow-hidden">
        <img src={img} className="w-full h-full object-cover" alt="JLPT Preparation" />
        <div className="absolute inset-0 bg-slate-900/70 flex flex-col justify-center px-8 md:px-20">
          <div className="max-w-4xl">
            <span className="text-blue-400 text-xs font-black tracking-[0.4em] uppercase mb-4 block">The Gold Standard</span>
            <h1 className="text-5xl md:text-5xl font-black text-white uppercase leading-none">
              JLPT <br/> <span className="text-blue-400">Mastery</span>
            </h1>
            <p className="text-slate-200 max-w-xl mt-6 text-sm md:text-base leading-relaxed font-medium">
              The Japanese Language Proficiency Test is a logic-based challenge. Beyond vocabulary, we teach you the linguistic DNA of Japan.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* NEW SECTION: JLPT LEVELS BREAKDOWN */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 uppercase mb-4">Available Course Levels</h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Targeted Preparation for Your Success</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-32">
          {[
            { level: "N5", title: "Beginner", desc: "Understand basic Japanese including typical expressions and phrases written in hiragana, katakana, and basic kanji." },
            { level: "N4", title: "Elementary", desc: "Comprehend passages on familiar daily topics written using basic vocabulary and kanji." },
            { level: "N3", title: "Intermediate", desc: "Bridge the gap to natural Japanese. Understand specific daily situations and follow somewhat complex conversations." }
          ].map((item, i) => (
            <div key={i} className="group p-8 bg-blue-50/50 rounded-[3rem] border border-blue-100 hover:bg-blue-800 transition-all duration-500">
              <div className="w-14 h-14 bg-blue-800 text-white group-hover:bg-white group-hover:text-blue-800 rounded-2xl flex items-center justify-center text-2xl font-black mb-6 transition-colors">
                {item.level}
              </div>
              <h4 className="text-xl font-black text-slate-900 group-hover:text-white mb-3 uppercase">{item.title} Level</h4>
              <p className="text-[11px] text-slate-500 group-hover:text-blue-100 font-bold uppercase leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* SECTION 2: LINGUISTIC CORE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 uppercase mb-4">Linguistic Foundation</h2>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Mastering the Three Scripts</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            { title: "Hiragana", count: "46 Characters", usage: "Phonetic script for native Japanese grammar and particles.", level: "N5 Foundation" },
            { title: "Katakana", count: "46 Characters", usage: "Used for foreign loanwords and scientific terminology.", level: "N5 Foundation" },
            { title: "Kanji", count: "2,000+ Glyphs", usage: "Ideograms representing concepts. N4 requires ~300, N3 requires ~600.", level: "N5 to N1" }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-slate-50 rounded-[4rem] hover:shadow-xl transition-all">
              <Type className="text-blue-800 mb-6" size={32} />
              <h3 className="text-2xl font-black text-slate-900 mb-2">{item.title}</h3>
              <p className="text-blue-800 text-[10px] font-black uppercase mb-4 tracking-widest">{item.count}</p>
              <p className="text-[11px] text-slate-500 font-bold uppercase leading-relaxed mb-6">{item.usage}</p>
              <span className="px-4 py-2 bg-white rounded-full text-[9px] font-black uppercase shadow-sm">{item.level}</span>
            </div>
          ))}
        </div>

        {/* NEW SECTION: CURRICULUM PILLARS */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 bg-slate-900 p-12 md:p-20 rounded-[4rem] text-white">
          <div>
            <h3 className="text-3xl font-black uppercase mb-6 leading-tight">Our Core <br/><span className="text-blue-400">Training Pillars</span></h3>
            <p className="text-slate-400 text-sm font-medium mb-10 leading-relaxed">
              We don't just teach the language; we provide a complete roadmap for exam success through 4 specialized training modules.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: <Layers size={20}/>, title: "Grammar Training", desc: "Master sentence structures and particles that form the backbone of the JLPT." },
                { icon: <PenTool size={20}/>, title: "Vocabulary Development", desc: "Context-based learning for the most frequent words found in past papers." },
                { icon: <Mic2 size={20}/>, title: "Listening Practice", desc: "High-fidelity audio sessions mimicking the real test environment." },
                { icon: <Target size={20}/>, title: "Exam Strategies", desc: "Time management and tactical approaches to complex reading passages." }
              ].map((pill, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="bg-blue-800/50 p-3 rounded-xl text-blue-400">{pill.icon}</div>
                  <div>
                    <h5 className="text-[11px] font-black uppercase tracking-widest mb-1">{pill.title}</h5>
                    <p className="text-[10px] text-slate-400 font-bold uppercase leading-tight">{pill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full"></div>
             <img src={img} alt="Exam Training" className="relative rounded-[3rem] shadow-2xl border border-white/10" />
          </div>
        </div>

        {/* SECTION 3: STRATEGIC TEST PREP */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-black uppercase text-slate-900 mb-6">Strategic <br/><span className="text-blue-800">Exam Preparation</span></h3>
              <p className="text-slate-500 text-[11px] font-bold uppercase leading-relaxed mb-8">
                JLPT success depends on "Exam Logic." Our coaching focuses on high-speed recognition and accuracy under pressure.
              </p>
              <div className="space-y-4">
                {[
                  { title: "SOV Syntax Mastery", desc: "Training for the Subject-Object-Verb structure where the action is always at the end." },
                  { title: "The 'Elimination' Method", desc: "Teaching students how to quickly spot 'distractor' answers in multiple-choice sections." },
                  { title: "Listening Stamina", desc: "Progressive audio sessions to ensure focus during the intense 40-minute listening block." }
                ].map((pill, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-[2rem] border-l-4 border-blue-800">
                    <div className="mt-1"><Brain size={18} className="text-blue-800" /></div>
                    <div>
                      <h5 className="text-[11px] font-black uppercase text-slate-900 mb-1">{pill.title}</h5>
                      <p className="text-[10px] text-slate-500 font-bold uppercase leading-tight">{pill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="p-10 bg-slate-900 text-white rounded-[3.5rem] text-center">
                <h4 className="text-4xl font-black mb-2 text-blue-400">10yr</h4>
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Past Papers Analyzed</p>
              </div>
              <div className="p-10 bg-blue-800 text-white rounded-[3.5rem] text-center">
                <h4 className="text-4xl font-black mb-2">95%</h4>
                <p className="text-[9px] font-black uppercase tracking-widest text-blue-200">Pass Rate Goal</p>
              </div>
              <div className="col-span-2 p-8 bg-slate-100 rounded-[3rem] flex items-center gap-6">
                <Calculator className="text-blue-800" size={32} />
                <p className="text-[10px] text-slate-500 font-black uppercase leading-relaxed">
                  We provide weekly mock tests that simulate real JLPT hall conditions, including strict timing and OMR sheet practice.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: FINAL CTA */}
        <div className="p-16 bg-blue-50 rounded-[5rem] text-center">
           <GraduationCap className="mx-auto text-blue-800 mb-6" size={48} />
           <h3 className="text-2xl font-black uppercase text-slate-900 mb-4">Start Your Academic Journey</h3>
           <p className="text-slate-500 text-xs font-bold uppercase mb-8">New batches for N5, N4, and N3 levels are now open.</p>
           
           <NavHashLink 
             smooth 
             to="/#contact"
             className="inline-block px-12 py-5 bg-blue-800 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all cursor-pointer shadow-lg hover:shadow-blue-200"
           >
             Enroll in JLPT Prep
           </NavHashLink>
        </div>
      </div>
    </div>
  );
}