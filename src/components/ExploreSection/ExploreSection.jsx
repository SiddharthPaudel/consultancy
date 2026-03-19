import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Added
import { Map, ShieldCheck, FileText, School, ChevronRight } from "lucide-react";
import exploreImg from "../../images/osakahero.jpg"; 

const MotionLink = motion(Link);

export default function ExploreActionsSection() {
  const { t } = useTranslation(); // Initialize hook

  // Moved inside to use t()
  const actionLinks = [
    { label: t("explore_link_lang"), icon: <Map size={18} />, path: "/services/language-schools" },
    { label: t("explore_link_doc"), icon: <ShieldCheck size={18} />, path: "/services/documentation" },
    { label: t("explore_link_ssw"), icon: <FileText size={18} />, path: "/study-work/ssw-vis" },
    { label: t("explore_link_uni"), icon: <School size={18} />, path: "/study-work/universities" },
  ];

  return (
    <section className="relative w-full h-[600px] bg-slate-900 font-poppins overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={exploreImg}
          alt="Japan"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />
      </div>

      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col justify-center">
        
        {/* Header Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="w-8 h-[2px] bg-blue-600" />
            <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em]">
              {t("explore_sub")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 uppercase">
            {t("explore_title_1")} <br/>
            <span className="text-blue-800">Japan</span> {t("explore_title_2")}
          </h2>
        </motion.div>

        {/* Action Links Grid */}
        <div className="w-full overflow-x-auto no-scrollbar pb-4">
          <div className="flex flex-nowrap lg:grid lg:grid-cols-4 gap-4 min-w-max lg:min-w-full">
            {actionLinks.map((item, index) => (
              <MotionLink
                to={item.path}
                key={index}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 px-6 py-5 rounded-2xl bg-white 
                           shadow-2xl shadow-black/20 group transition-all duration-300
                           whitespace-nowrap cursor-pointer"
              >
                <div className="p-2 bg-blue-50 text-blue-800 rounded-xl group-hover:bg-blue-800 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-900 text-sm tracking-tight uppercase">
                    {item.label}
                  </span>
                  <ChevronRight size={14} className="text-slate-300 group-hover:text-blue-800 group-hover:translate-x-1 transition-all" />
                </div>
              </MotionLink>
            ))}
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}