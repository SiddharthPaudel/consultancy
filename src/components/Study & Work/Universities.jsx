import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Added
import { 
  GraduationCap, Award, Library, BookOpen, 
  CheckCircle, Calendar, MapPin, ArrowRight,
  Clock, Coffee, Landmark, Globe, ShieldCheck,
  Search, Users, Briefcase
} from "lucide-react";

import universityImg from "../../images/uni.webp"; 

export default function UniversityPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const counselingPoints = [
    { title: t("uni_focus_1_t"), desc: t("uni_focus_1_d") },
    { title: t("uni_focus_2_t"), desc: t("uni_focus_2_d") },
    { title: t("uni_focus_3_t"), desc: t("uni_focus_3_d") }
  ];

  const admissionEssentials = [
    { title: t("uni_eju_jp"), icon: <BookOpen/> },
    { title: t("uni_eju_math"), icon: <CheckCircle/> },
    { title: t("uni_eju_sci"), icon: <Globe/> },
    { title: t("uni_eju_gen"), icon: <Library/> }
  ];

  return (
    <div className="pt-20 pb-20 font-poppins bg-white">
      {/* SECTION 1: HERO */}
      <div className="w-full h-[60vh] md:h-[95vh] relative mb-24">
        <div className="w-full h-full overflow-hidden shadow-sm relative">
          <img 
            src={universityImg} 
            alt="Japanese University Main Campus" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
          
          <div className="absolute bottom-16 left-8 md:left-20 text-white max-w-4xl px-4">
             <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-12 bg-blue-400"></div>
                <span className="text-blue-400 text-xs font-black tracking-[0.5em] uppercase">{t("uni_hero_sub")}</span>
             </div>
             <h1 className="text-5xl md:text-6xl font-black uppercase leading-[0.9] mb-6">
                {t("uni_hero_title_1")} <span className="text-blue-400">{t("uni_hero_title_2")}</span>
             </h1>
             <p className="text-slate-200 text-[11px] md:text-sm max-w-xl font-black uppercase tracking-widest leading-relaxed opacity-90">
                {t("uni_hero_desc")}
             </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* SECTION 2: PATHWAYS */}
        <div className="grid lg:grid-cols-2 gap-12 mb-32 items-stretch">
          <div className="p-12 bg-slate-50 rounded-[4rem] border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <GraduationCap className="text-blue-800" size={32} />
                <h2 className="text-2xl font-black uppercase text-slate-900">{t("uni_bach_title_1")} <br/> <span className="text-blue-800">{t("uni_bach_title_2")}</span></h2>
              </div>
              <p className="text-slate-600 text-[13px] font-bold uppercase leading-relaxed mb-8">
                {t("uni_bach_desc")}
              </p>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-blue-800">
               <CheckCircle size={16} /> {t("uni_bach_tag")}
            </div>
          </div>

          <div className="p-12 bg-blue-800 rounded-[4rem] text-white flex flex-col justify-between relative overflow-hidden">
            <Library className="absolute -right-10 -bottom-10 text-white/5 w-48 h-48" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <Award className="text-blue-400" size={32} />
                <h2 className="text-2xl font-black uppercase">{t("uni_mast_title_1")} <br/> <span className="text-blue-400">{t("uni_mast_title_2")}</span></h2>
              </div>
              <p className="text-blue-100/80 text-[13px] font-bold uppercase leading-relaxed mb-8">
                {t("uni_mast_desc")}
              </p>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-blue-400 relative z-10">
               <CheckCircle size={16} /> {t("uni_mast_tag")}
            </div>
          </div>
        </div>

        {/* SECTION 3: CAREER COUNSELING */}
        <div className="mb-32">
          <div className="bg-slate-900 rounded-[5rem] p-10 md:p-20 text-white relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <span className="text-blue-400 text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">{t("uni_counsel_sub")}</span>
                <h2 className="text-4xl font-black uppercase mb-6 leading-tight">{t("uni_counsel_title_1")} <br/> <span className="text-blue-400">{t("uni_counsel_title_2")}</span></h2>
                <p className="text-slate-400 text-[13px] font-bold uppercase leading-relaxed mb-10">
                  {t("uni_counsel_desc")}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Search className="text-blue-400" size={20} />
                    <span className="text-[10px] font-black uppercase">{t("uni_counsel_choice")}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="text-blue-400" size={20} />
                    <span className="text-[10px] font-black uppercase">{t("uni_counsel_mentor")}</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 bg-white/5 p-10 rounded-[3rem] border border-white/10">
                <h4 className="text-lg font-black uppercase mb-6 border-b border-white/10 pb-4">{t("uni_counsel_focus")}</h4>
                <ul className="space-y-6">
                  {counselingPoints.map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold shrink-0">{i+1}</div>
                      <div>
                        <h5 className="text-[11px] font-black uppercase text-blue-400">{item.title}</h5>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: THE EJU COMPONENT */}
        <div className="mb-20">
          <h3 className="text-2xl font-black uppercase text-center mb-16 tracking-tighter">
            {t("uni_eju_title_1")} <span className="text-blue-800">{t("uni_eju_title_2")}</span>
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
              {admissionEssentials.map((item, i) => (
                <div key={i} className="text-center p-8 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                   <div className="text-blue-800 flex justify-center mb-4">{item.icon}</div>
                   <h5 className="text-[11px] font-black uppercase tracking-widest text-slate-900">{item.title}</h5>
                </div>
              ))}
          </div>
        </div>

        {/* FOOTER CTA */}
        <div className="bg-blue-800 p-12 md:p-16 rounded-[4rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-black uppercase mb-2">{t("uni_cta_title")}</h3>
            <p className="text-blue-200 text-[10px] font-bold uppercase tracking-widest">{t("uni_cta_desc")}</p>
          </div>
          <button 
            onClick={() => navigate("/#contact")}
            className="px-12 py-6 bg-white text-blue-800 text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-xl"
          >
            {t("uni_cta_btn")}
          </button>
        </div>
      </div>
    </div>
  );
}