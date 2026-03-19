import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Added
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import buddhaIcon from "../../icons/NAMOBUDDHA.png";

export default function Footer() {
  const { t } = useTranslation(); // Initialize hook
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (path) => {
    const targetId = path.split("/").pop(); 
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  const programLinks = [
    { name: t("prog_lang_schools"), to: "/services/language-classes" },
    { name: t("prog_jlpt"), to: "/test-preparation/jlpt" },
    { name: t("prog_nat"), to: "/test-preparation/nat" },
    { name: t("prog_ssw"), to: "/study-work/ssw-visa" },
    { name: t("prog_uni"), to: "/study-work/universities" }
  ];

  const resourceLinks = [
    { name: t("res_about"), to: "/about" },
    { name: t("res_doc"), to: "/services/documentation" },
    { name: t("res_hostel"), to: "/services/hostel" },
    { name: t("res_airfare"), to: "/services/airfare" },
    { name: t("res_contact"), to: "/contact" }
  ];

  return (
    <footer className="bg-white font-poppins border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16">

          {/* 1. BRAND IDENTITY */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center p-2 border border-slate-100 shadow-sm">
                <img src={buddhaIcon} alt="Namo Buddha Icon" className="w-full h-full object-contain antialiased" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black leading-none text-slate-900 uppercase tracking-tighter">
                  Namo <span className="text-blue-800">Buddha</span>
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-400 mt-1">
                  Educational Pvt. Ltd.
                </span>
              </div>
            </div>
            
            <p className="text-slate-500 text-xs leading-relaxed font-medium max-w-sm">
              {t("footer_brand_desc")}
            </p>

            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-[9px] font-black uppercase tracking-widest text-slate-600">
                   {t("footer_intake_note")}
                 </span>
              </div>
            </div>
          </div>

          {/* 2. ACADEMIC PROGRAMS */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-900 mb-8 border-b border-slate-100 pb-2">
              {t("footer_head_programs")}
            </h4>
            <ul className="space-y-4">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => handleLinkClick(link.to)}
                    className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-blue-700 hover:translate-x-1 transition-all flex items-center gap-2 text-left"
                  >
                    <ArrowRight size={10} className="text-slate-300" /> {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. QUICK NAVIGATION */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-900 mb-8 border-b border-slate-100 pb-2">
              {t("footer_head_resources")}
            </h4>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => handleLinkClick(link.to)}
                    className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-blue-700 hover:translate-x-1 transition-all flex items-center gap-2 text-left"
                  >
                    <ArrowRight size={10} className="text-slate-300" /> {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. CONTACT & SUPPORT */}
          <div className="lg:col-span-4">
            <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-900 mb-8 border-b border-slate-100 pb-2">
              {t("footer_head_connect")}
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin size={20} className="text-blue-700 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[11px] font-black text-slate-900 uppercase tracking-tight">{t("footer_label_campus")}</span>
                  <span className="text-slate-500 text-[10px] font-bold uppercase leading-relaxed">Ratnanagar-02, Tandi Chowk<br/>Chitwan, Nepal</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={20} className="text-blue-700 shrink-0" />
                <div className="flex flex-col text-[11px] font-black text-slate-900">
                  <a href="tel:056494331" className="hover:text-blue-700 transition-colors">056-494331</a>
                  <a href="tel:9855062451" className="hover:text-blue-700 transition-colors underline underline-offset-4 decoration-blue-200">9855062451</a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail size={20} className="text-blue-700 shrink-0" />
                <a href="mailto:namobuddhaeducationpvtltd@gmail.com" className="text-slate-500 text-[10px] font-bold tracking-tight break-all hover:text-blue-700">
                  namobuddhaeducationpvtltd@gmail.com
                </a>
              </div>

              <div className="flex gap-4">
                <Clock size={20} className="text-blue-700 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">Sun – Fri: 10:00 – 17:00</span>
                  <span className="text-[9px] font-bold text-red-500 uppercase tracking-widest">{t("footer_label_closed")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
              {t("footer_copyright", { year: new Date().getFullYear() })}
            </p>
            <p className="text-[8px] font-bold text-slate-300 uppercase tracking-widest">
              {t("footer_reg_no")}
            </p>
          </div>
          
         
        </div>
      </div>
    </footer>
  );
}