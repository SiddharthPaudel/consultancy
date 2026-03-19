import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Added
import { 
  Wrench, Zap, Coffee, HeartPulse, BookOpen, 
  GraduationCap, CheckCircle2, ArrowRight, Briefcase,
  Target, TrendingUp, Building2, MapPin, School, Laptop, Globe
} from "lucide-react";

import heroPathwaysImg from "../../images/classroom.jpg"; 

export default function EducationPathways() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const features = [
    { title: t("path_feat_jlpt"), desc: t("path_feat_jlpt_desc") },
    { title: t("path_feat_culture"), desc: t("path_feat_culture_desc") },
    { title: t("path_feat_support"), desc: t("path_feat_support_desc") },
    { title: t("path_feat_ethics"), desc: t("path_feat_ethics_desc") }
  ];

  const technicalFields = [
    { icon: <Wrench />, title: t("field_auto") },
    { icon: <Laptop />, title: t("field_it") },
    { icon: <Coffee />, title: t("field_culinary") },
    { icon: <HeartPulse />, title: t("field_nursing") },
    { icon: <Building2 />, title: t("field_arch") },
    { icon: <Target />, title: t("field_business") }
  ];

  return (
    <div className="pt-20 pb-20 font-poppins bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden mb-24">
        <img src={heroPathwaysImg} alt="Education in Japan" className="w-full h-full object-cover grayscale-[30%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent flex items-center">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 w-full">
            <div className="max-w-2xl text-white space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[2px] bg-blue-500"></span>
                <span className="text-blue-400 text-[10px] font-black tracking-[0.4em] uppercase">{t("path_hero_sub")}</span>
              </div>
              <h1 className="text-5xl md:text-5xl font-black uppercase leading-[0.9]">
                {t("path_hero_title_1")} <br /> 
                <span className="text-blue-500 ">{t("path_hero_title_2")}</span>
              </h1>
              <p className="text-slate-300 text-sm md:text-base font-medium max-w-lg leading-relaxed pt-4">
                {t("path_hero_desc")}
              </p>
              <div className="flex gap-6 pt-8">
                <button 
                  onClick={() => navigate("/#contact")}
                  className="px-8 py-4 bg-blue-600 hover:bg-white hover:text-blue-900 transition-all rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl"
                >
                  {t("path_hero_btn")}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 right-10 hidden lg:block">
           <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <Globe className="text-blue-400 animate-pulse" />
              <p className="text-white text-[9px] font-black uppercase tracking-tighter">{t("path_hero_partner")}</p>
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
                <span className="text-blue-800 text-[10px] font-black tracking-[0.4em] uppercase">{t("path_lang_sub")}</span>
              </div>
              <h2 className="text-4xl font-black text-slate-900 uppercase leading-tight mb-6">
                {t("path_lang_title_1")} <span className="text-blue-800">{t("path_lang_title_2")}</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-[13px] font-bold uppercase leading-relaxed mb-10">
                <p>{t("path_lang_desc")}</p>
                <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100">
                   <h4 className="text-blue-900 text-xs font-black uppercase mb-2">{t("path_lang_gate_title")}</h4>
                   <p className="text-blue-800/80 leading-relaxed">{t("path_lang_gate_desc")}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((item, i) => (
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
                <h3 className="text-lg font-black uppercase mb-8 tracking-tighter">{t("path_cycle_title")}</h3>
                <div className="space-y-6 relative z-10">
                  {[t("path_cycle_apr"), t("path_cycle_jul"), t("path_cycle_oct"), t("path_cycle_jan")].map((term, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-white/10 pb-4">
                      <p className="text-[11px] font-black uppercase">{term}</p>
                    </div>
                  ))}
                  <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-[9px] text-slate-400 font-bold uppercase leading-relaxed">{t("path_cycle_note")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: TECHNICAL INSTITUTES */}
        <div className="mb-24">
          <div className="bg-blue-800 rounded-[5rem] p-10 md:p-20 text-white relative overflow-hidden">
            <TrendingUp className="absolute -right-10 -top-10 text-white/5 w-80 h-80" />
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-blue-400" size={24} />
                  <span className="text-blue-400 text-[10px] font-black tracking-[0.4em] uppercase">{t("path_tech_sub")}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
                  {t("path_tech_title_1")} <br/><span className="text-blue-400">{t("path_tech_title_2")}</span>
                </h2>
                <p className="text-blue-100 text-[13px] font-bold uppercase leading-relaxed mb-8">{t("path_tech_desc")}</p>
                <div className="flex items-center gap-4 p-5 bg-white/10 rounded-2xl backdrop-blur-sm">
                   <Briefcase className="text-blue-400" />
                   <p className="text-[10px] font-black uppercase tracking-widest">{t("path_tech_degree")}</p>
                </div>
              </div>

              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                {technicalFields.map((field, i) => (
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