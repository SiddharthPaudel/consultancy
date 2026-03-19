import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Added
import { 
  Stamp, ShieldCheck, FileSearch, MessageSquare, 
  ClipboardCheck, Navigation, Info, CheckCircle, 
  MapPin, Landmark, PhoneCall, Scroll
} from "lucide-react";

export default function VisaAssistancePage() {
  const { t } = useTranslation(); // Initialize hook
  const navigate = useNavigate();

  const assistanceFeatures = [
    {
      title: t("visa_feat_audit_title"),
      desc: t("visa_feat_audit_desc"),
      icon: <FileSearch className="text-blue-600" size={24} />
    },
    {
      title: t("visa_feat_form_title"),
      desc: t("visa_feat_form_desc"),
      icon: <ClipboardCheck className="text-blue-600" size={24} />
    },
    {
      title: t("visa_feat_mock_title"),
      desc: t("visa_feat_mock_desc"),
      icon: <MessageSquare className="text-blue-600" size={24} />
    },
    {
      title: t("visa_feat_travel_title"),
      desc: t("visa_feat_travel_desc"),
      icon: <Navigation className="text-blue-600" size={24} />
    }
  ];

  const guidanceSteps = [
    { label: t("visa_step_1_label"), detail: t("visa_step_1_desc") },
    { label: t("visa_step_2_label"), detail: t("visa_step_2_desc") },
    { label: t("visa_step_3_label"), detail: t("visa_step_3_desc") }
  ];

  return (
    <div className="pt-24 pb-20 font-poppins bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <div className="relative bg-slate-900 rounded-[4rem] p-12 md:p-20 overflow-hidden mb-16 text-white shadow-2xl">
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.5em] block">
                {t("visa_hero_sub")}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-8">
              {t("visa_hero_title_1")} <br/> <span className="text-blue-500">{t("visa_hero_title_2")}</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium mb-10">
              {t("visa_hero_desc")}
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-wider">
                 <ShieldCheck size={14} className="text-blue-400" /> {t("visa_tag_accuracy")}
               </div>
               <div className="flex items-center gap-2 px-5 py-2.5 bg-white/5 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-wider">
                 <MapPin size={14} className="text-blue-400" /> {t("visa_tag_local")}
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
              <h2 className="text-3xl font-black uppercase text-slate-900 mb-4 italic">
                {t("visa_protocol_title")} <span className="text-blue-600">{t("visa_protocol_span")}</span>
              </h2>
              <p className="text-slate-500 text-xs font-bold uppercase leading-loose">
                {t("visa_protocol_desc")}
              </p>
            </div>
            
            <div className="space-y-4">
              {guidanceSteps.map((step, idx) => (
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
                <h3 className="text-2xl font-black uppercase mb-6 leading-tight italic">
                  {t("visa_why_title")}
                </h3>
                <p className="text-slate-400 text-xs font-bold uppercase leading-loose mb-10">
                  {t("visa_why_desc")}
                </p>
                <button 
                  onClick={() => navigate("/", { state: { scrollTo: "contact" } })}
                  className="px-10 py-5 bg-blue-600 hover:bg-white hover:text-blue-600 transition-all rounded-full text-[10px] font-black uppercase tracking-[0.2em]"
                >
                  {t("visa_btn_consult")}
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
                <h4 className="text-xs font-black uppercase">{t("visa_strip_tandi")}</h4>
                <p className="text-[10px] font-bold text-blue-100 uppercase italic">{t("visa_strip_counsel")}</p>
              </div>
           </div>
           <div className="h-px w-full md:h-12 md:w-px bg-white/20"></div>
           <div className="text-center md:text-left">
              <h4 className="text-xs font-black uppercase">{t("visa_strip_embassy")}</h4>
              <p className="text-[10px] font-bold text-blue-100 uppercase">{t("visa_strip_intake")}</p>
           </div>
           <div className="h-px w-full md:h-12 md:w-px bg-white/20"></div>
           <div className="flex flex-col items-center md:items-end">
              <span className="text-[10px] font-black uppercase tracking-widest bg-slate-900 px-4 py-1.5 rounded-full mb-2">
                {t("visa_strip_visit")}
              </span>
              <p className="text-[10px] font-bold uppercase">Tandi, Chitwan</p>
           </div>
        </div>

      </div>
    </div>
  );
}