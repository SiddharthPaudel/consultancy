import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Stamp, ShieldCheck, FileSearch, MessageSquare, 
  ClipboardCheck, Navigation, Info, CheckCircle, 
  MapPin, Landmark, PhoneCall, Scroll
} from "lucide-react";

export default function VisaAssistancePage() {
  const navigate = useNavigate();

  const assistanceFeatures = [
    {
      title: "File Audit & Verification",
      desc: "Comprehensive review of your COE and supporting documents at our Tandi office to ensure absolute consistency.",
      icon: <FileSearch className="text-blue-600" size={24} />
    },
    {
      title: "Embassy Form Precision",
      desc: "Professional filling of the Visa Application Form (VAF) to eliminate technical errors that lead to delays.",
      icon: <ClipboardCheck className="text-blue-600" size={24} />
    },
    {
      title: "Mock Interview Coaching",
      desc: "One-on-one sessions in Chitwan to prepare you for potential phone verifications from the Japanese Embassy.",
      icon: <MessageSquare className="text-blue-600" size={24} />
    },
    {
      title: "Travel & VFS Coordination",
      desc: "Detailed logistics planning for your trip from Tandi to the VFS Global center or Embassy in Kathmandu.",
      icon: <Navigation className="text-blue-600" size={24} />
    }
  ];

  return (
    <div className="pt-24 pb-20 font-poppins bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <div className="relative bg-slate-900 rounded-[4rem] p-12 md:p-20 overflow-hidden mb-16 text-white shadow-2xl">
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.5em] block">Namo Buddha | Tandi Branch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-8">
              Professional <br/> <span className="text-blue-500">Visa Assistance</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium mb-10">
              Getting your COE is just the beginning. Our Tandi-based team provides specialized assistance for the final visa application phase, ensuring every document meets the strict standards of the Japanese Embassy in Nepal.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-wider">
                 <ShieldCheck size={14} className="text-blue-400" /> 100% Document Accuracy
               </div>
               <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-wider">
                 <MapPin size={14} className="text-blue-400" /> Local Support in Tandi
               </div>
            </div>
          </div>
          <Stamp className="absolute -right-16 -bottom-16 w-80 h-80 text-white/5 -rotate-12" />
        </div>

        {/* CORE ASSISTANCE SERVICES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {assistanceFeatures.map((item, i) => (
            <div key={i} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="text-xs font-black uppercase text-slate-900 mb-4 tracking-tight">{item.title}</h4>
              <p className="text-[11px] text-slate-500 font-bold uppercase leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* THE FINAL STEP GUIDANCE */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black uppercase text-slate-900 mb-4 italic">Embassy Ready <span className="text-blue-600">Protocol</span></h2>
              <p className="text-slate-500 text-xs font-bold uppercase leading-loose">
                Once we receive your COE from Japan, our Tandi office initiates the "Final Mile" protocol. We don't just hand you the papers; we walk you through the entire submission process.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { label: "Visa Interview Prep", detail: "Mock calls simulating Embassy verification." },
                { label: "VFS Appointment", detail: "Assistance with scheduling and fee payments." },
                { label: "Post-Visa Briefing", detail: "Guidance on air ticketing and travel insurance." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-5 p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-black uppercase text-slate-900 mb-1">{step.label}</h5>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-[4rem] p-12 text-white relative overflow-hidden">
             <div className="relative z-10">
                <Landmark className="text-blue-500 mb-6" size={40} />
                <h3 className="text-2xl font-black uppercase mb-6 leading-tight italic">Why Local Prep <br/> Matters?</h3>
                <p className="text-slate-400 text-xs font-bold uppercase leading-loose mb-10">
                  Many visa applications fail because of small discrepancies between the COE and the final Visa Form. By handling your prep at Namo Buddha Tandi, you avoid the cost and stress of multiple trips to Kathmandu for document corrections.
                </p>
                <button 
                  onClick={() => navigate("/", { state: { scrollTo: "contact" } })}
                  className="px-10 py-5 bg-blue-600 hover:bg-white hover:text-blue-600 transition-all rounded-full text-[10px] font-black uppercase tracking-[0.2em]"
                >
                  Start Visa Consultation
                </button>
             </div>
             <Scroll className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5 rotate-12" />
          </div>
        </div>

        {/* LOCATION INFO STRIP */}
        <div className="bg-blue-600 rounded-[3rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-4">
              <PhoneCall size={32} className="opacity-50" />
              <div>
                <h4 className="text-xs font-black uppercase">Tandi Branch Support</h4>
                <p className="text-[10px] font-bold text-blue-100 uppercase italic">Contact us for Visa-only counseling</p>
              </div>
           </div>
           <div className="h-px w-full md:h-12 md:w-px bg-white/20"></div>
           <div className="text-center md:text-left">
              <h4 className="text-xs font-black uppercase">Embassy Schedule</h4>
              <p className="text-[10px] font-bold text-blue-100 uppercase">Preparation for April & October Intakes</p>
           </div>
           <div className="h-px w-full md:h-12 md:w-px bg-white/20"></div>
           <div className="flex flex-col items-center md:items-end">
              <span className="text-[10px] font-black uppercase tracking-widest bg-slate-900 px-4 py-1.5 rounded-full mb-2">Visit Office</span>
              <p className="text-[10px] font-bold uppercase">Tandi, Chitwan</p>
           </div>
        </div>

      </div>
    </div>
  );
}