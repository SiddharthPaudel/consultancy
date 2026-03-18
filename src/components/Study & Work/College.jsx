import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Wrench, Zap, Coffee, HeartPulse, BookOpen, 
  GraduationCap, CheckCircle2, ArrowRight, Briefcase,
  Target, TrendingUp, Building2, MapPin, School, Laptop, Globe
} from "lucide-react";

// The full-width hero image
import heroPathwaysImg from "../../images/classroom.jpg"; 

export default function EducationPathways() {
  const navigate = useNavigate();

  return (
    <div className="pt-20 pb-20 font-poppins bg-white">
      
      {/* --- FULL WIDTH INITIAL HERO --- */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden mb-24">
        <img 
          src={heroPathwaysImg} 
          alt="Education in Japan" 
          className="w-full h-full object-cover grayscale-[30%]"
        />
        {/* Deep Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent flex items-center">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 w-full">
            <div className="max-w-2xl text-white space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[2px] bg-blue-500"></span>
                <span className="text-blue-400 text-[10px] font-black tracking-[0.4em] uppercase">Academic Excellence</span>
              </div>
              <h1 className="text-5xl md:text-5xl font-black uppercase leading-[0.9]">
                Your Future <br /> 
                <span className="text-blue-500 ">Starts Here.</span>
              </h1>
              <p className="text-slate-300 text-sm md:text-base font-medium max-w-lg leading-relaxed pt-4">
                From specialized Language Schools to high-tech Vocational Institutes, we map out every step of your educational journey in Japan.
              </p>
              <div className="flex gap-6 pt-8">
                <button 
                  onClick={() => navigate("/#contact")}
                  className="px-8 py-4 bg-blue-600 hover:bg-white hover:text-blue-900 transition-all rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl"
                >
                  Start Your Application
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Floating Detail */}
        <div className="absolute bottom-10 right-10 hidden lg:block">
           <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <Globe className="text-blue-400 animate-pulse" />
              <p className="text-white text-[9px] font-black uppercase tracking-tighter">Authorized Partner <br/> for Japanese Institutes</p>
           </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* SECTION 1: LANGUAGE SCHOOLS */}
        <div className="mb-40">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-3/5">
              <div className="flex items-center gap-3 mb-4">
                <School className="text-blue-800" size={24} />
                <span className="text-blue-800 text-[10px] font-black tracking-[0.4em] uppercase">Foundational Level</span>
              </div>
              <h2 className="text-4xl font-black text-slate-900 uppercase leading-tight mb-6">
                Japanese <span className="text-blue-800">Language Schools</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-[13px] font-bold uppercase leading-relaxed mb-10">
                <p>
                  Most students begin their journey at a Japanese Language School. These institutions focus on building strong communication skills and cultural understanding, preparing you for higher education.
                </p>
                <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100">
                   <h4 className="text-blue-900 text-xs font-black uppercase mb-2">The Gateway proficiency</h4>
                   <p className="text-blue-800/80 leading-relaxed">
                     Achieving N2 or N1 proficiency is the essential requirement for enrolling in Japanese technical colleges or finding high-quality employment.
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
                  <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all">
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
                <h3 className="text-lg font-black uppercase mb-8 tracking-tighter">Enrolment Cycles</h3>
                <div className="space-y-6 relative z-10">
                  {["April (Major Intake)", "July (Flexible)", "October (Secondary)", "January (Short Term)"].map((term, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-white/10 pb-4">
                      <p className="text-[11px] font-black uppercase">{term}</p>
                     
                    </div>
                  ))}
                  <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[9px] text-slate-400 font-bold uppercase leading-relaxed">
                      *Applications usually close 5-6 months before the intake date.
                    </p>
                  </div>
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
                  <span className="text-blue-400 text-[10px] font-black tracking-[0.4em] uppercase">Advanced Training</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
                  Specialized <br/><span className="text-blue-400">Technical Colleges</span>
                </h2>
                <p className="text-blue-100 text-[13px] font-bold uppercase leading-relaxed mb-8">
                  Technical Institutes (Senmon Gakko) focus on "Practical Skills." These 2-year programs are designed to turn students into industry-ready professionals.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-4 p-5 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <Briefcase className="text-blue-400" />
                    <p className="text-[10px] font-black uppercase tracking-widest">Industry Recognized Associate Degrees</p>
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
                  <div key={i} className="bg-white p-6 rounded-[2rem] text-center group hover:bg-slate-900 transition-all duration-300">
                    <div className="text-blue-800 group-hover:text-blue-400 flex justify-center mb-4 transition-colors">{field.icon}</div>
                    <h4 className="text-[9px] font-black uppercase text-slate-900 group-hover:text-white transition-colors">{field.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}