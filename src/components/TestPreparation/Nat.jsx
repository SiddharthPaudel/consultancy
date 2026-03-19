import React from "react";
import { useTranslation } from "react-i18next";
import { 
  Calendar, Clock, ClipboardCheck, BarChart, 
  Zap, BookOpen, Target, CheckCircle2, 
  ArrowRight, FileText, Timer
} from "lucide-react";
import { NavHashLink } from 'react-router-hash-link';
import img from "../../images/class2.jpg";

export default function NatTestPage() {
  const { t } = useTranslation();

  const advantages = [
    { icon: <Calendar/>, title: t("nat_adv_1_t"), desc: t("nat_adv_1_d") },
    { icon: <Clock/>, title: t("nat_adv_2_t"), desc: t("nat_adv_2_d") },
    { icon: <ClipboardCheck/>, title: t("nat_adv_3_t"), desc: t("nat_adv_3_d") }
  ];

  const prepModules = [
    { icon: <Timer className="text-blue-400 mb-6" size={32} />, title: t("nat_prep_1_t"), desc: t("nat_prep_1_d"), theme: "bg-slate-900 text-white", text: "text-slate-400" },
    { icon: <FileText className="text-blue-800 mb-6" size={32} />, title: t("nat_prep_2_t"), desc: t("nat_prep_2_d"), theme: "bg-blue-50 border border-blue-100", text: "text-slate-600" },
    { icon: <Target className="text-blue-800 mb-6" size={32} />, title: t("nat_prep_3_t"), desc: t("nat_prep_3_d"), theme: "bg-slate-50 border border-slate-200", text: "text-slate-500" }
  ];

  return (
    <div className="pt-20 pb-20 font-poppins bg-white">
      {/* SECTION 1: HERO */}
      <div className="w-full h-[50vh] relative mb-24 overflow-hidden">
        <img src={img} className="w-full h-full object-cover" alt="NAT Test Preparation" />
        <div className="absolute inset-0 bg-blue-900/70 flex flex-col justify-center px-8 md:px-20 text-white">
          <div className="max-w-4xl">
            <span className="text-blue-300 text-xs font-black tracking-[0.4em] uppercase mb-4 block">{t("nat_hero_sub")}</span>
            <h1 className="text-5xl md:text-5xl font-black uppercase leading-tight">
              {t("nat_hero_title_1")} <span className="text-blue-300">{t("nat_hero_title_2")}</span>
            </h1>
            <p className="text-blue-100 max-w-xl mt-6 text-sm md:text-base leading-relaxed">
              {t("nat_hero_desc")}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* SECTION 2: WHY NAT-TEST */}
        <div className="bg-slate-50 rounded-[4rem] p-12 md:p-20 mb-32 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black uppercase text-slate-900 mb-6">{t("nat_adv_title")} <br/><span className="text-blue-800">{t("nat_adv_title_2")}</span></h2>
            <div className="space-y-8">
              {advantages.map((item, i) => (
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
            <h4 className="text-xl font-black uppercase mb-4">{t("nat_valid_title")}</h4>
            <p className="text-sm text-blue-100 leading-relaxed font-medium mb-6">{t("nat_valid_desc")}</p>
            <ul className="space-y-3">
               {[t("nat_valid_list_1"), t("nat_valid_list_2"), t("nat_valid_list_3")].map((list, i) => (
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
            <h3 className="text-3xl font-black text-slate-900 uppercase mb-4">{t("nat_prep_title")} <span className="text-blue-800">{t("nat_prep_title_2")}</span></h3>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{t("nat_prep_sub")}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {prepModules.map((item, i) => (
              <div key={i} className={`p-10 rounded-[3.5rem] ${item.theme}`}>
                 {item.icon}
                 <h4 className={`text-lg font-black uppercase mb-4 ${item.theme.includes('slate-900') ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                 <p className={`text-[11px] font-bold uppercase leading-relaxed mb-6 ${item.text}`}>
                   {item.desc}
                 </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: COMPARISON & CTA */}
        <div className="p-12 md:p-20 bg-slate-900 rounded-[5rem] text-white mb-20 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-black uppercase text-blue-400 mb-6">{t("nat_comp_title")}</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-medium mb-8">
                {t("nat_comp_desc")}
              </p>
              <div className="flex flex-wrap gap-4">
                 {[t("nat_comp_tag_1"), t("nat_comp_tag_2"), t("nat_comp_tag_3")].map((tag, i) => (
                   <div key={i} className="px-5 py-3 bg-white/5 rounded-2xl border border-white/10 text-[10px] font-black uppercase tracking-tighter">{tag}</div>
                 ))}
              </div>
            </div>
            <div className="md:w-1/3">
               <NavHashLink 
                 smooth 
                 to="/#contact"
                 className="w-full py-6 bg-blue-500 text-slate-900 rounded-[2.5rem] text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg"
               >
                 {t("nat_btn")} <ArrowRight size={16} />
               </NavHashLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}