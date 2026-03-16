import React from "react";
import { 
  Briefcase, FileText, UserCheck, ShieldCheck, 
  Settings, ChefHat, Building, Sprout, CheckCircle2, HeartPulse,
  PlaneTakeoff, ClipboardCheck, Landmark, Wallet, HelpCircle, Info,
  Search, ScrollText, MessageSquare, Fingerprint
} from "lucide-react";

// --- IMPORT YOUR OWN IMAGE HERE ---
import sswHeroImg from "../../images/Visa.jpg"; 

export default function SSWPage() {
  return (
    <div className="pt-20 pb-20 font-poppins bg-slate-900 text-white">
      
      {/* SECTION 1: HERO */}
      <div className="w-full h-[50vh] md:h-[65vh] relative mb-24">
        <div className="w-full h-full overflow-hidden relative">
          <img 
            src={sswHeroImg} 
            alt="Skilled Professionals in Japan" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20">
             <span className="text-blue-400 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">Professional Migration</span>
             <h1 className="text-5xl md:text-5xl font-black uppercase leading-none mb-6">
                SSW Visa <br/> <span className="text-blue-500">Assistance</span>
             </h1>
             <p className="max-w-xl text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                Expert guidance for the Specified Skilled Worker (SSW) program, empowering Nepali professionals to build long-term careers across diverse Japanese industries.
             </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION 2: PROFESSIONAL ASSISTANCE SERVICES (NEW) */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black uppercase mb-4">Our <span className="text-blue-500">Expert Services</span></h2>
            <p className="text-slate-400 text-[11px] font-black uppercase tracking-widest">Comprehensive support from eligibility to departure</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { icon: <Search />, title: "Eligibility Guidance", desc: "Assessment of skills and requirements." },
              { icon: <ScrollText />, title: "Documentation Prep", desc: "Meticulous organization of legal papers." },
              { icon: <ClipboardCheck />, title: "Application Support", desc: "Seamless handling of visa paperwork." },
              { icon: <MessageSquare />, title: "Interview Prep", desc: "Mock sessions for employer success." },
              { icon: <Fingerprint />, title: "Visa Processing", desc: "End-to-end embassy coordination." }
            ].map((service, i) => (
              <div key={i} className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 hover:border-blue-500/50 transition-all group">
                <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                  {React.cloneElement(service.icon, { size: 28 })}
                </div>
                <h4 className="text-[10px] font-black uppercase mb-2 text-white">{service.title}</h4>
                <p className="text-[9px] text-slate-500 font-bold uppercase leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* SECTION 3: SSW CATEGORY BREAKDOWN */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <div className="p-12 bg-white/5 rounded-[4rem] border border-white/10 hover:bg-white/[0.08] transition-all">
            <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-black uppercase text-blue-400">SSW (i)</h2>
                <span className="px-3 py-1 bg-blue-400/10 text-blue-400 text-[9px] font-black uppercase rounded-full">Entry Level</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed uppercase font-bold mb-8 tracking-wide">
              The primary pathway for most Nepali applicants. Allows for a 5-year stay with the possibility of switching to SSW (ii).
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-slate-200">
                <CheckCircle2 className="text-blue-500" size={16} /> JFT-Basic or JLPT N4 Required
              </li>
              <li className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-slate-200">
                <CheckCircle2 className="text-blue-500" size={16} /> Sector-Specific Skill Test Required
              </li>
              <li className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-slate-200">
                <CheckCircle2 className="text-blue-500" size={16} /> No Family Sponsorship (Initially)
              </li>
            </ul>
          </div>
          <div className="p-12 bg-blue-900 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-black uppercase text-white">SSW (ii)</h2>
                <span className="px-3 py-1 bg-white/20 text-white text-[9px] font-black uppercase rounded-full">Expert Level</span>
            </div>
            <p className="text-blue-100 text-xs leading-relaxed uppercase font-bold mb-8 tracking-wide">
              For highly experienced workers. This status effectively functions like permanent residency.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-white">
                <CheckCircle2 className="text-blue-300" size={16} /> Unlimited Visa Renewals
              </li>
              <li className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-white">
                <CheckCircle2 className="text-blue-300" size={16} /> Bring Your Family to Japan
              </li>
              <li className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-white">
                <CheckCircle2 className="text-blue-300" size={16} /> Higher Salary Brackets
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 4: FINANCIAL EXPECTATIONS */}
        {/* <div className="mb-32">
            <div className="text-center mb-12">
                <h3 className="text-2xl font-black uppercase tracking-widest">Financial <span className="text-blue-500">Expectations</span></h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { label: "Average Monthly Salary", value: "¥180,000 - ¥250,000", desc: "Before tax and insurance deductions." },
                    { label: "Estimated Savings", value: "¥80,000 - ¥120,000", desc: "Potential monthly savings after expenses." },
                    { label: "Overtime (Zangyo)", value: "1.25x Hourly Rate", desc: "Additional pay for hours worked beyond 40 hrs/week." }
                ].map((item, i) => (
                    <div key={i} className="p-10 bg-white/5 rounded-[3rem] text-center border border-white/5">
                        <Wallet className="mx-auto text-blue-500 mb-4" size={32} />
                        <h5 className="text-[10px] font-black uppercase text-slate-400 mb-2">{item.label}</h5>
                        <p className="text-xl font-black text-white mb-2">{item.value}</p>
                        <p className="text-[9px] text-slate-500 font-bold uppercase">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div> */}

        {/* SECTION 5: SECTOR GRID */}
        <div className="mb-32 text-center">
          <h3 className="text-2xl font-black uppercase mb-12 tracking-widest">Target <span className="text-blue-500">Industries</span></h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: <HeartPulse />, name: "Nursing Care" },
              { icon: <ChefHat />, name: "Food Service" },
              { icon: <Building />, name: "Construction" },
              { icon: <Settings />, name: "Manufacturing" },
              { icon: <Sprout />, name: "Agriculture" },
              { icon: <Landmark />, name: "Hospitality" }
            ].map((sector, i) => (
              <div key={i} className="p-8 bg-white/5 rounded-[2.5rem] flex flex-col items-center gap-4 hover:scale-105 transition-transform cursor-default group">
                <div className="text-blue-500 group-hover:text-white transition-colors">{sector.icon}</div>
                <span className="text-[9px] font-black uppercase tracking-tighter text-slate-400 group-hover:text-white">{sector.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 6: THE PROCESS ROADMAP */}
        <div className="bg-white rounded-[5rem] p-12 md:p-20 text-slate-900 mb-20 relative overflow-hidden">
          <div className="relative z-10 lg:flex items-center gap-16">
            <div className="lg:w-1/2">
               <h3 className="text-3xl font-black uppercase mb-8">The <span className="text-blue-800">Process</span></h3>
               <div className="space-y-8">
                 {[
                   { step: "01", title: "Language Proficiency", desc: "Pass JFT-Basic or JLPT N4." },
                   { step: "02", title: "Skill Assessment", desc: "Pass the Prometric Skill Test in your sector." },
                   { step: "03", title: "Employer Interview", desc: "Connect with Japanese companies through our network." },
                   { step: "04", title: "CoE & Visa", desc: "Official processing and visa issuance." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6">
                      <span className="text-2xl font-black text-blue-800 opacity-20">{item.step}</span>
                      <div>
                        <h5 className="text-xs font-black uppercase mb-1">{item.title}</h5>
                        <p className="text-[11px] text-slate-500 font-bold uppercase tracking-tight leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
               <div className="bg-slate-50 p-10 rounded-[4rem] border border-slate-100 shadow-inner">
                  <div className="flex items-center gap-3 justify-center mb-6">
                    <Info className="text-blue-800" size={20} />
                    <h4 className="text-lg font-black uppercase">Work Benefits</h4>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Standard Japanese Salary Brackets",
                      "Full Social & Health Insurance",
                      "Paid annual leave benefits",
                      "Eligibility for bonuses",
                      "Relocation support"
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm text-[10px] font-black uppercase text-slate-600">
                        <ShieldCheck className="text-blue-800" size={16} /> {benefit}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-10 w-full py-5 bg-blue-800 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-900 transition-all">
                    Inquire for SSW 2026
                  </button>
               </div>
            </div>
          </div>
          <PlaneTakeoff className="absolute -right-10 -bottom-10 text-slate-100 w-80 h-80 -rotate-12" />
        </div>

      </div>
    </div>
  );
}