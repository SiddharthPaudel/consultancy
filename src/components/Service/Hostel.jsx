import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Bed, ShieldCheck, MapPin, Wifi, Coffee, Utensils, GraduationCap, Building2 } from "lucide-react";

export default function HostelPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Note: If you uncomment the hostels array later, 
  // ensure you add translation keys for city names and features too.

  return (
    <div className="pt-32 pb-20 font-poppins bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <header className="mb-20">
          <span className="text-blue-800 text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">
            {t("hostel_hero_sub")}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase leading-tight mb-8">
            {t("hostel_hero_title_1")} <span className="text-blue-800">{t("hostel_hero_title_2")}</span> {t("hostel_hero_title_3")}
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-blue-50/50 p-8 rounded-[2.5rem] border-l-4 border-blue-800">
              <p className="text-slate-700 text-[13px] font-bold uppercase leading-relaxed">
                {t("hostel_desc_main")}
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2.5rem] flex items-start gap-4">
              < GraduationCap className="text-blue-800 shrink-0" size={24} />
              <p className="text-slate-600 text-[11px] font-bold uppercase leading-relaxed">
                {t("hostel_desc_sub")}
              </p>
            </div>
          </div>
        </header>

        {/* --- AMENITIES & EXPECTATIONS --- */}
        <div className="grid lg:grid-cols-12 gap-10 items-center bg-slate-900 rounded-[4rem] p-10 md:p-16 text-white overflow-hidden relative">
          <div className="lg:col-span-7 relative z-10">
            <h2 className="text-3xl font-black uppercase mb-10">
              {t("hostel_prov_title")} <span className="text-blue-400">{t("hostel_prov_title_2")}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <ShieldCheck className="text-blue-400 shrink-0" />
                <div>
                  <h5 className="text-[11px] font-black uppercase mb-1">{t("hostel_prov_1_t")}</h5>
                  <p className="text-[9px] text-slate-400 uppercase font-bold">{t("hostel_prov_1_d")}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="text-blue-400 shrink-0" />
                <div>
                  <h5 className="text-[11px] font-black uppercase mb-1">{t("hostel_prov_2_t")}</h5>
                  <p className="text-[9px] text-slate-400 uppercase font-bold">{t("hostel_prov_2_d")}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Building2 className="text-blue-400 shrink-0" />
                <div>
                  <h5 className="text-[11px] font-black uppercase mb-1">{t("hostel_prov_3_t")}</h5>
                  <p className="text-[9px] text-slate-400 uppercase font-bold">{t("hostel_prov_3_d")}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Coffee className="text-blue-400 shrink-0" />
                <div>
                  <h5 className="text-[11px] font-black uppercase mb-1">{t("hostel_prov_4_t")}</h5>
                  <p className="text-[9px] text-slate-400 uppercase font-bold">{t("hostel_prov_4_d")}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm relative z-10">
            <Bed className="text-blue-400 mb-6" size={40} />
            <h4 className="text-lg font-black uppercase mb-4">{t("hostel_support_title")}</h4>
            <p className="text-slate-400 text-[11px] font-bold uppercase leading-relaxed mb-6">
              {t("hostel_support_desc")}
            </p>
            <ul className="text-[10px] font-black text-blue-400 uppercase space-y-3 tracking-widest">
              <li className="flex items-center gap-2"> <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"/> {t("hostel_list_1")}</li>
              <li className="flex items-center gap-2"> <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"/> {t("hostel_list_2")}</li>
              <li className="flex items-center gap-2"> <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"/> {t("hostel_list_3")}</li>
            </ul>
          </div>
          <Building2 className="absolute -right-20 -bottom-20 w-80 h-80 text-white/5 rotate-12 pointer-events-none" />
        </div>

      </div>
    </div>
  );
}