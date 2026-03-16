import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Wrench, Zap, Coffee, HeartPulse, BookOpen, 
  GraduationCap, CheckCircle2, ArrowRight, Briefcase,
  Target, TrendingUp, Building2, MapPin, School, Laptop
} from "lucide-react";

export default function EducationPathways() {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-20 font-poppins bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <span className="text-blue-800 text-[10px] font-black tracking-[0.4em] uppercase mb-4 block underline underline-offset-8 decoration-2">Education in Japan</span>
          <h1 className="text-4xl md:text-4xl font-black text-slate-900 uppercase leading-tight mb-8">
            Academic <span className="text-blue-800">& Technical</span> Pathways
          </h1>
          <p className="text-slate-500 text-[13px] font-bold uppercase leading-relaxed">
            We help students navigate the transition from language schools to specialized colleges, ensuring a smooth path toward professional success in Japan.
          </p>
        </div>

        {/* SECTION 1: SCHOOLS IN JAPAN (LANGUAGE SCHOOLS) */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-3/5">
              <div className="flex items-center gap-3 mb-4">
                <School className="text-blue-800" size={24} />
                <span className="text-blue-800 text-[10px] font-black tracking-[0.4em] uppercase">Schools in Japan</span>
              </div>
              <h2 className="text-4xl font-black text-slate-900 uppercase leading-tight mb-6">
                Japanese <span className="text-blue-800">Language Schools</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-[13px] font-bold uppercase leading-relaxed mb-10">
                <p>
                  Most students begin their journey at a Japanese Language School. These institutions focus on building strong communication skills and cultural understanding, preparing you for higher education.
                </p>
                <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100">
                   <h4 className="text-blue-900 text-xs font-black uppercase mb-2">Foundation for Success</h4>
                   <p className="text-blue-800/80">
                     Achieving N2 or N1 proficiency is the essential gateway to enrolling in Japanese colleges and finding high-quality employment.
                   </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Intensive JLPT", desc: "Focused training for N3, N2, and N1 levels." },
                  { title: "Cultural Immersion", desc: "Understanding Japanese ethics and social norms." },
                  { title: "Daily Support", desc: "Guidance on local registration and student life." },
                  { title: "Career Ethics", desc: "Professional behavior training for the workplace." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-2xl">
                    <CheckCircle2 size={18} className="text-blue-800 shrink-0" />
                    <div>
                      <h4 className="text-[10px] font-black uppercase text-slate-900">{item.title}</h4>
                      <p className="text-[9px] text-slate-400 font-bold uppercase">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-2/5 w-full">
              <div className="bg-slate-900 rounded-[3.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
                <BookOpen className="absolute -right-4 -bottom-4 text-white/5 w-40 h-40" />
                <h3 className="text-lg font-black uppercase mb-8">Enrolment Cycles</h3>
                <div className="space-y-6 relative z-10">
                  {["April (2 Years)", "July (1.9 Years)", "October (1.5 Years)", "January (1.3 Years)"].map((term, idx) => (
                    <div key={idx} className="flex items-center gap-4 border-b border-white/10 pb-4">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <p className="text-[11px] font-black uppercase">{term}</p>
                    </div>
                  ))}
                  <button onClick={() => navigate("/#contact")} className="w-full mt-4 py-5 bg-blue-600 hover:bg-white hover:text-blue-900 transition-all rounded-2xl text-[10px] font-black uppercase tracking-widest">Book Consultation</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: COLLEGES AND TECHNICAL INSTITUTES */}
        <div className="mb-24">
          <div className="bg-blue-800 rounded-[5rem] p-10 md:p-20 text-white relative overflow-hidden">
            <TrendingUp className="absolute -right-10 -top-10 text-white/5 w-80 h-80" />
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-blue-400" size={24} />
                  <span className="text-blue-400 text-[10px] font-black tracking-[0.4em] uppercase">Specialized Education</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
                  Colleges & <br/><span className="text-blue-400">Technical Institutes</span>
                </h2>
                <p className="text-blue-100 text-[13px] font-bold uppercase leading-relaxed mb-8">
                  Technical Institutes (Senmon Gakko) focus on "Practical Skills." These 2-year programs are designed to turn students into industry-ready professionals with high employment rates.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-4 p-5 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <Briefcase className="text-blue-400" />
                    <p className="text-[10px] font-black uppercase tracking-widest">Technical Associate Degree Status</p>
                  </div>
                  <div className="flex items-center gap-4 p-5 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <TrendingUp className="text-blue-400" />
                    <p className="text-[10px] font-black uppercase tracking-widest">Direct Pathways to Work Visa</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                {[
                  { icon: <Wrench />, title: "Automobile" },
                  { icon: <Laptop />, title: "IT & Software" },
                  { icon: <Coffee />, title: "Culinary Arts" },
                  { icon: <HeartPulse />, title: "Nursing Care" },
                  { icon: <Building2 />, title: "Architecture" },
                  { icon: <Target />, title: "Business" }
                ].map((field, i) => (
                  <div key={i} className="bg-white p-6 rounded-[2rem] text-center group hover:scale-105 transition-all">
                    <div className="text-blue-800 flex justify-center mb-4">{field.icon}</div>
                    <h4 className="text-[9px] font-black uppercase text-slate-900">{field.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER CALL TO ACTION */}
        <div className="p-12 bg-slate-900 rounded-[4rem] text-white flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-black uppercase mb-2">Choose Your Institution</h3>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Based on your academic background and career goals.</p>
          </div>
          <button onClick={() => navigate("/#contact")} className="flex items-center gap-4 group">
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 group-hover:text-white transition-colors">Apply for 2026</span>
            <div className="p-4 bg-blue-600 rounded-full group-hover:translate-x-2 transition-transform">
              <ArrowRight size={20} />
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}