import React from "react";
import { useTranslation } from "react-i18next"; // Added
import { CheckCircle2, Award, Target, Eye } from "lucide-react";
import aboutImg from "../../images/aboutus.jpg"; 

export default function AboutUsSection() {
  const { t } = useTranslation(); // Initialize hook

  return (
    <section id="about" className="bg-white py-24 font-poppins overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT: ARCHITECTURAL IMAGE DESIGN */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-24">
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-50 rounded-2xl -z-10" />
            
            <div className="relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white transform translate-z-0">
                <img
                  src={aboutImg}
                  alt="Namo Buddha Consultancy Office"
                  className="w-full h-[550px] object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Floating Success Badge */}
              <div className="absolute -right-8 bottom-12 bg-blue-800 p-6 rounded-3xl shadow-xl text-white max-w-[160px] animate-fadeInUp">
                <Award className="mb-2 text-blue-300" size={32} />
                <p className="text-2xl font-black leading-none">98%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-blue-100 italic">
                  {t("about_badge_text")}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: EDITORIAL TEXT CONTENT */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h2 className="text-blue-800 text-[10px] font-black tracking-[0.4em] uppercase">
                {t("about_sub")}
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1]">
                {t("about_title_part1")} <br /> 
                <span className="text-blue-800">{t("about_title_part2")}</span>
              </h3>
            </div>

            {/* MAIN DESCRIPTION */}
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed max-w-2xl font-medium">
              <p>{t("about_desc_1")}</p>
              <p className="text-base text-slate-500">{t("about_desc_2")}</p>
            </div>

            {/* MISSION & VISION BOXES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              
              {/* MISSION BOX */}
              <div className="group p-8 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-3 hover:bg-blue-800 hover:border-blue-800 transition-all duration-500 cursor-default shadow-sm hover:shadow-xl hover:shadow-blue-900/20">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-800 group-hover:bg-white/20 group-hover:text-white transition-colors duration-500">
                  <Target size={20} />
                </div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest group-hover:text-white transition-colors duration-500">
                  {t("about_mission_title")}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed group-hover:text-blue-100/90 transition-colors duration-500">
                  {t("about_mission_desc")}
                </p>
              </div>

              {/* VISION BOX */}
              <div className="group p-8 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-3 hover:bg-blue-800 hover:border-blue-800 transition-all duration-500 cursor-default shadow-sm hover:shadow-xl hover:shadow-blue-900/20">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-800 group-hover:bg-white/20 group-hover:text-white transition-colors duration-500">
                  <Eye size={20} />
                </div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest group-hover:text-white transition-colors duration-500">
                  {t("about_vision_title")}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed group-hover:text-blue-100/90 transition-colors duration-500">
                  {t("about_vision_desc")}
                </p>
              </div>
            </div>

            {/* QUICK CHECKLIST */}
            <div className="flex flex-wrap gap-y-4 gap-x-8 pt-8 border-t border-slate-100">
              {[
                t("about_check_1"), 
                t("about_check_2"), 
                t("about_check_3")
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-700 flex-shrink-0" size={18} />
                  <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}