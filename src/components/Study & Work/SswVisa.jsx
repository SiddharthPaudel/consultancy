import React from "react";
import { useTranslation } from "react-i18next";
import { 
  Briefcase, FileText, UserCheck, ShieldCheck, 
  Settings, ChefHat, Building, Sprout, CheckCircle2, HeartPulse,
  PlaneTakeoff, ClipboardCheck, Landmark, Wallet, HelpCircle, Info,
  Search, ScrollText, MessageSquare, Fingerprint
} from "lucide-react";

import sswHeroImg from "../../images/Visa.jpg"; 

export default function SSWPage() {
  const { t } = useTranslation();

  const services = [
    { icon: <Search />, title: t("ssw_serv_1_t"), desc: t("ssw_serv_1_d") },
    { icon: <ScrollText />, title: t("ssw_serv_2_t"), desc: t("ssw_serv_2_d") },
    { icon: <ClipboardCheck />, title: t("ssw_serv_3_t"), desc: t("ssw_serv_3_d") },
    { icon: <MessageSquare />, title: t("ssw_serv_4_t"), desc: t("ssw_serv_4_d") },
    { icon: <Fingerprint />, title: t("ssw_serv_5_t"), desc: t("ssw_serv_5_d") }
  ];

  const industries = [
    { icon: <HeartPulse />, name: t("ind_nursing") },
    { icon: <ChefHat />, name: t("ind_food") },
    { icon: <Building />, name: t("ind_const") },
    { icon: <Settings />, name: t("ind_manu") },
    { icon: <Sprout />, name: t("ind_agri") },
    { icon: <Landmark />, name: t("ind_hosp") }
  ];

  const processSteps = [
    { step: "01", title: t("ssw_step1_t"), desc: t("ssw_step1_d") },
    { step: "02", title: t("ssw_step2_t"), desc: t("ssw_step2_d") },
    { step: "03", title: t("ssw_step3_t"), desc: t("ssw_step3_d") },
    { step: "04", title: t("ssw_step4_t"), desc: t("ssw_step4_d") }
  ];

  return (
    <div className="pt-20 pb-20 font-poppins bg-slate-900 text-white">
      
      {/* SECTION 1: HERO */}
      <div className="w-full h-[50vh] md:h-[65vh] relative mb-24">
        <div className="w-full h-full overflow-hidden relative">
          <img src={sswHeroImg} alt="Skilled Professionals" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20">
             <span className="text-blue-400 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">{t("ssw_hero_sub")}</span>
             <h1 className="text-5xl md:text-5xl font-black uppercase leading-none mb-6">
                {t("ssw_hero_title_1")} <br/> <span className="text-blue-500">{t("ssw_hero_title_2")}</span>
             </h1>
             <p className="max-w-xl text-slate-300 text-sm md:text-base leading-relaxed font-medium">{t("ssw_hero_desc")}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION 2: SERVICES */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black uppercase mb-4">{t("ssw_service_title")} <span className="text-blue-500">{t("ssw_service_title_2")}</span></h2>
            <p className="text-slate-400 text-[11px] font-black uppercase tracking-widest">{t("ssw_service_sub")}</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {services.map((service, i) => (
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
        
        {/* SECTION 3: CATEGORIES */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <div className="p-12 bg-white/5 rounded-[4rem] border border-white/10 hover:bg-white/[0.08] transition-all">
            <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-black uppercase text-blue-400">{t("ssw_cat1_title")}</h2>
                <span className="px-3 py-1 bg-blue-400/10 text-blue-400 text-[9px] font-black uppercase rounded-full">{t("ssw_cat1_tag")}</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed uppercase font-bold mb-8 tracking-wide">{t("ssw_cat1_desc")}</p>
            <ul className="space-y-4">
              <li className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-slate-200">
                <CheckCircle2 className="text-blue-500" size={16} /> {t("ssw_cat1_req1")}
              </li>
              <li className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-slate-200">
                <CheckCircle2 className="text-blue-500" size={16} /> {t("ssw_cat1_req2")}
              </li>
              <li className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-slate-200">
                <CheckCircle2 className="text-blue-500" size={16} /> {t("ssw_cat1_req3")}
              </li>
            </ul>
          </div>
          <div className="p-12 bg-blue-900 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-black uppercase text-white">{t("ssw_cat2_title")}</h2>
                <span className="px-3 py-1 bg-white/20 text-white text-[9px] font-black uppercase rounded-full">{t("ssw_cat2_tag")}</span>
            </div>
            <p className="text-blue-100 text-xs leading-relaxed uppercase font-bold mb-8 tracking-wide">{t("ssw_cat2_desc")}</p>
            <ul className="space-y-4">
              <li className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-white">
                <CheckCircle2 className="text-blue-300" size={16} /> {t("ssw_cat2_req1")}
              </li>
              <li className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-white">
                <CheckCircle2 className="text-blue-300" size={16} /> {t("ssw_cat2_req2")}
              </li>
              <li className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-white">
                <CheckCircle2 className="text-blue-300" size={16} /> {t("ssw_cat2_req3")}
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION 5: INDUSTRIES */}
        <div className="mb-32 text-center">
          <h3 className="text-2xl font-black uppercase mb-12 tracking-widest">{t("ssw_ind_title")} <span className="text-blue-500">{t("ssw_ind_title_2")}</span></h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {industries.map((sector, i) => (
              <div key={i} className="p-8 bg-white/5 rounded-[2.5rem] flex flex-col items-center gap-4 hover:scale-105 transition-transform cursor-default group">
                <div className="text-blue-500 group-hover:text-white transition-colors">{sector.icon}</div>
                <span className="text-[9px] font-black uppercase tracking-tighter text-slate-400 group-hover:text-white">{sector.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 6: PROCESS */}
        <div className="bg-white rounded-[5rem] p-12 md:p-20 text-slate-900 mb-20 relative overflow-hidden">
          <div className="relative z-10 lg:flex items-center gap-16">
            <div className="lg:w-1/2">
               <h3 className="text-3xl font-black uppercase mb-8">{t("ssw_proc_title")} <span className="text-blue-800">{t("ssw_proc_title_2")}</span></h3>
               <div className="space-y-8">
                 {processSteps.map((item, i) => (
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
                    <h4 className="text-lg font-black uppercase">{t("ssw_benefit_title")}</h4>
                  </div>
                  <ul className="space-y-4">
                    {[t("ssw_ben_1"), t("ssw_ben_2"), t("ssw_ben_3"), t("ssw_ben_4"), t("ssw_ben_5")].map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm text-[10px] font-black uppercase text-slate-600">
                        <ShieldCheck className="text-blue-800" size={16} /> {benefit}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-10 w-full py-5 bg-blue-800 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-900 transition-all">
                    {t("ssw_btn")}
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