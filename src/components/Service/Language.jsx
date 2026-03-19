import React from "react";
import { useTranslation } from "react-i18next";
import { 
  Languages, Briefcase, ShieldCheck, ArrowRight, 
  Wallet, Calendar, Clock, CheckCircle2, MapPin, 
  FileText, GraduationCap, Mic2, Ear, BookOpen, PenTool 
} from "lucide-react";
import { NavHashLink } from 'react-router-hash-link';

import languageSchoolImg from "../../images/classroom.jpg"; 

export default function LanguageSchoolPage() {
  const { t } = useTranslation();

  const skills = [
    { icon: <Mic2 size={20}/>, label: t("lang_skill_1") },
    { icon: <Ear size={20}/>, label: t("lang_skill_2") },
    { icon: <BookOpen size={20}/>, label: t("lang_skill_3") },
    { icon: <PenTool size={20}/>, label: t("lang_skill_4") }
  ];

  const sidePills = [
    { icon: <Languages size={24}/>, title: t("lang_pill_1"), color: "bg-blue-50 text-blue-800" },
    { icon: <Briefcase size={24}/>, title: t("lang_pill_2"), color: "bg-slate-50 text-slate-900" },
    { icon: <ShieldCheck size={24}/>, title: t("lang_pill_3"), color: "bg-blue-50 text-blue-800" }
  ];

  return (
    <div className="pt-0 pb-20 font-poppins bg-white">
      {/* SECTION 1: HERO */}
      <div className="w-full mb-20">
        <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
          <img 
            src={languageSchoolImg} 
            alt="Japanese Language School" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/50 to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-24">
             <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-blue-400"></div>
                <span className="text-blue-400 text-[10px] md:text-xs font-black tracking-[0.4em] uppercase">{t("lang_hero_sub")}</span>
             </div>
             <h1 className="text-4xl md:text-6xl lg:text-5xl font-black text-white uppercase leading-[0.9]">
                {t("lang_hero_title_1")} <br/> 
                <span className="text-blue-400">{t("lang_hero_title_2")}</span>
             </h1>
             <p className="text-slate-300 max-w-xl mt-10 text-[11px] font-bold uppercase leading-relaxed hidden md:block tracking-widest opacity-80">
                {t("lang_hero_desc")}
             </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* SECTION 2: THE BRIDGE & SKILLS */}
        <div className="grid lg:grid-cols-12 gap-16 mb-32 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase mb-8 leading-tight">
              {t("lang_comm_title")} <br/> <span className="text-blue-800">{t("lang_comm_title_2")}</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-[13px] font-bold uppercase leading-relaxed mb-12">
              <p>{t("lang_comm_desc")}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
               {skills.map((skill, i) => (
                 <div key={i} className="bg-slate-50 p-6 rounded-[2.5rem] flex flex-col items-center justify-center border border-slate-100 hover:bg-blue-800 hover:text-white transition-all group duration-500 cursor-default">
                    <div className="text-blue-800 group-hover:text-white mb-3 transition-colors duration-500">{skill.icon}</div>
                    <span className="text-[10px] font-black uppercase tracking-widest">{skill.label}</span>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 space-y-4">
              {sidePills.map((item, i) => (
                <div key={i} className={`${item.color} p-8 rounded-[3rem] flex items-center gap-6 transition-all hover:translate-x-2 duration-300 border border-transparent hover:border-blue-200`}>
                   <div className="shrink-0">{item.icon}</div>
                   <h5 className="text-xs font-black uppercase tracking-widest">{item.title}</h5>
                </div>
              ))}
          </div>
        </div>

        {/* SECTION 4: LIFE & FUTURE */}
        <div className="grid md:grid-cols-2 gap-10 mb-32">
          <div className="bg-slate-900 p-12 md:p-16 rounded-[5rem] text-white">
            <h3 className="text-2xl font-black uppercase mb-8">{t("lang_work_title")} <span className="text-blue-400">{t("lang_work_title_2")}</span></h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <Wallet className="text-blue-400 shrink-0" />
                <div>
                  <h5 className="text-xs font-black uppercase mb-1">{t("lang_work_item_1_t")}</h5>
                  <p className="text-[11px] text-slate-400 leading-relaxed uppercase font-bold">{t("lang_work_item_1_d")}</p>
                </div>
              </div>
              <div className="flex gap-6">
                <FileText className="text-blue-400 shrink-0" />
                <div>
                  <h5 className="text-xs font-black uppercase mb-1">{t("lang_work_item_2_t")}</h5>
                  <p className="text-[11px] text-slate-400 leading-relaxed uppercase font-bold">{t("lang_work_item_2_d")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-800 p-12 md:p-16 rounded-[5rem] text-white shadow-xl relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-2xl font-black uppercase mb-6">{t("lang_future_title")}</h3>
              <p className="text-blue-100 text-[11px] font-bold uppercase leading-relaxed mb-10 opacity-80">
                {t("lang_future_desc")}
              </p>
              
              <NavHashLink 
                smooth 
                to="/#contact"
                className="inline-block w-full py-5 bg-white text-blue-800 text-center text-[11px] font-black uppercase tracking-[0.2em] rounded-3xl hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-lg"
              >
                {t("lang_future_btn")}
              </NavHashLink>
            </div>
            <GraduationCap className="absolute -right-8 -bottom-8 text-white/10 w-48 h-48 group-hover:scale-110 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </div>
  );
}