import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Globe, Compass, PlaneTakeoff, ShieldCheck, 
  MapPin, Lightbulb, CheckCircle2, Users, 
  ArrowRight, Landmark, ScrollText
} from "lucide-react";

export default function OrientationPage() {
  const navigate = useNavigate();

  const careerFeatures = [
    {
      title: "Strategic Program Selection",
      desc: "Detailed analysis of academic history to determine the best fit between Language Schools, Senmon Gakko, or Universities.",
      icon: <Landmark className="text-slate-700" size={24} />
    },
    {
      title: "Pathway Comparison",
      desc: "Comparative counseling on SSW (Specified Skilled Worker) vs. Student visa routes based on long-term career goals.",
      icon: <Compass className="text-slate-700" size={24} />
    },
    {
      title: "Industry Insights",
      desc: "Expert briefing on current high-demand sectors in Japan including IT, Engineering, and Hospitality Management.",
      icon: <Lightbulb className="text-slate-700" size={24} />
    }
  ];

  return (
    <div className="pt-24 pb-20 font-poppins bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* MINIMALIST HEADER */}
        <div className="max-w-4xl mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-blue-800"></span>
            <span className="text-blue-800 text-[10px] font-black uppercase tracking-[0.4em]">Professional Guidance</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase leading-[1.1] mb-8">
            Career Strategy & <br/> <span className="text-slate-400">Orientation</span>
          </h1>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium max-w-2xl">
            Beyond the visa, we focus on your long-term success. Our Tandi branch provides the roadmap for your professional journey in Japan, ensuring you arrive prepared, informed, and confident.
          </p>
        </div>

        {/* CAREER COUNSELING - CLEAN GRID */}
        <div className="mb-32">
          <div className="grid md:grid-cols-3 gap-12">
            {careerFeatures.map((item, i) => (
              <div key={i} className="group border-t border-slate-200 pt-10">
                <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </div>
                <h4 className="text-xs font-black uppercase text-slate-900 mb-4 tracking-wider">{item.title}</h4>
                <p className="text-[11px] text-slate-500 font-bold uppercase leading-relaxed tracking-wide">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PRE-DEPARTURE ORIENTATION - REFINED DARK SECTION */}
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white mb-24 relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Final Briefing</span>
              <h3 className="text-3xl font-black uppercase leading-tight mb-8">Pre-Departure <br/> <span className="text-slate-500">Orientation</span></h3>
              <p className="text-slate-400 text-xs font-bold uppercase leading-loose mb-10 italic">
                Mandatory sessions held at our Tandi office for all successful candidates to bridge the cultural and logistical gap between Nepal and Japan.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Social Etiquette", desc: "Mastering Japanese bowing, greetings, and community garbage rules." },
                  { title: "Financial Setup", desc: "Guidance on opening bank accounts and managing yen-based expenses." },
                  { title: "Legal Compliance", desc: "Understanding part-time work limits (28 hours) and visa renewals." }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <CheckCircle2 className="text-blue-500 mt-1" size={16} />
                    <div>
                      <h5 className="text-[10px] font-black uppercase text-white tracking-widest">{step.title}</h5>
                      <p className="text-[9px] text-slate-500 font-bold uppercase mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-sm">
              <ScrollText className="text-blue-500 mb-6" size={32} />
              <h4 className="text-xs font-black uppercase tracking-widest mb-6">Survival Checklist</h4>
              <ul className="space-y-3">
                {["Landing Card Preparation", "Airport Pickup Protocols", "Health Insurance Registration", "Mobile SIM Card Setup"].map((check, i) => (
                  <li key={i} className="flex justify-between items-center text-[9px] font-bold uppercase border-b border-white/5 pb-3">
                    <span className="text-slate-300">{check}</span>
                    <span className="text-blue-500 text-[8px]">Required</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Globe className="absolute -right-20 -bottom-20 w-80 h-80 text-white/5" />
        </div>

        {/* FOOTER CALL TO ACTION */}
        <div className="border border-slate-200 rounded-[3rem] p-12 flex flex-col items-center text-center">
          <MapPin className="text-slate-300 mb-6" size={32} />
          <h2 className="text-2xl font-black uppercase text-slate-900 mb-6">
            Consult with our <br/> Tandi Branch Experts
          </h2>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-10">
            Professional counseling sessions available Monday — Friday
          </p>
          <button 
            onClick={() => navigate("/", { state: { scrollTo: "contact" } })}
            className="px-12 py-5 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-blue-800 transition-all shadow-xl"
          >
            Request Appointment
          </button>
        </div>

      </div>
    </div>
  );
}