import React from "react";
import { useTranslation } from "react-i18next";
import { 
  FileText, Landmark, UserCheck, ShieldCheck, 
  Search, Languages, FileSignature, ArrowRight,
  CheckCircle2, AlertCircle, Info, Laptop, 
  Printer, ScrollText, ClipboardList
} from "lucide-react";
import { NavHashLink } from 'react-router-hash-link';

export default function DocumentationPage() {
  const { t } = useTranslation();

  const auditSteps = [
    { icon: <Search />, label: t("doc_step_1_t"), desc: t("doc_step_1_d") },
    { icon: <Languages />, label: t("doc_step_2_t"), desc: t("doc_step_2_d") },
    { icon: <FileSignature />, label: t("doc_step_3_t"), desc: t("doc_step_3_d") },
    { icon: <ShieldCheck />, label: t("doc_step_4_t"), desc: t("doc_step_4_d") }
  ];

 const documentSections = [
  {
    title: t("doc_sec_1_t"),
    icon: <FileText className="text-blue-600" />,
    items: [
      { name: t("doc_item_transcripts_t"), detail: t("doc_item_transcripts_d") },
      { name: t("doc_item_char_t"), detail: t("doc_item_char_d") },
      { name: t("doc_item_lang_t"), detail: t("doc_item_lang_d") },
      { name: t("doc_item_work_t"), detail: t("doc_item_work_d") }
    ]
  },
  {
    title: t("doc_sec_2_t"),
    icon: <Landmark className="text-blue-600" />,
    items: [
      { name: t("doc_item_bank_t"), detail: t("doc_item_bank_d") },
      { name: t("doc_item_statement_t"), detail: t("doc_item_statement_d") },
      { name: t("doc_item_income_t"), detail: t("doc_item_income_d") },
      { name: t("doc_item_tax_t"), detail: t("doc_item_tax_d") }
    ]
  },
  {
    title: t("doc_sec_3_t"),
    icon: <UserCheck className="text-blue-600" />,
    items: [
      { name: t("doc_item_rel_t"), detail: t("doc_item_rel_d") },
      { name: t("doc_item_birth_t"), detail: t("doc_item_birth_d") },
      { name: t("doc_item_prop_t"), detail: t("doc_item_prop_d") },
      { name: t("doc_item_id_t"), detail: t("doc_item_id_d") }
    ]
  }
];

  return (
    <div className="pt-24 pb-20 font-poppins bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="max-w-3xl mb-16">
          <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">{t("doc_hero_sub")}</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase leading-tight mb-6">
            {t("doc_hero_title_1")} <br/> <span className="text-blue-600">{t("doc_hero_title_2")}</span>
          </h1>
          <p className="text-slate-500 text-xs md:text-sm font-bold uppercase leading-relaxed italic">
            {t("doc_hero_quote")}
          </p>
        </div>

        {/* THE AUDIT PROCESS */}
        <div className="grid md:grid-cols-4 gap-4 mb-20">
          {auditSteps.map((step, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center group hover:bg-blue-600 transition-all duration-500">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform shadow-sm">
                {step.icon}
              </div>
              <h5 className="text-[11px] font-black uppercase text-slate-900 group-hover:text-white mb-2 tracking-widest">{step.label}</h5>
              <p className="text-[9px] font-bold uppercase text-slate-400 group-hover:text-blue-100 leading-tight">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* DETAILED DOCUMENT GRIDS */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {documentSections.map((section, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-[3.5rem] p-10 shadow-xl shadow-slate-200/40">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                  {section.icon}
                </div>
                <h3 className="text-sm font-black uppercase tracking-tight text-slate-900">{section.title}</h3>
              </div>
              <div className="space-y-6">
                {section.items.map((item, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-start gap-3 mb-1">
                      <CheckCircle2 size={14} className="text-green-500 shrink-0 mt-0.5" />
                      <span className="text-[10px] font-black uppercase text-slate-800 tracking-wide">{item.name}</span>
                    </div>
                    <p className="pl-7 text-[9px] font-bold text-slate-400 uppercase leading-snug">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* PREPARATION & GUIDANCE */}
        <div className="mb-20 py-16 bg-slate-50 rounded-[4rem] px-10 border border-slate-200/60 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
              <div className="max-w-xl">
                <h3 className="text-2xl font-black uppercase text-slate-900 mb-4 italic underline decoration-blue-600 decoration-4 underline-offset-8">
                  {t("doc_guide_title")} <span className="text-blue-600">{t("doc_guide_title_2")}</span>
                </h3>
                <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{t("doc_guide_sub")}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Laptop className="text-blue-600" />, title: t("doc_guide_1_t"), desc: t("doc_guide_1_d") },
                { icon: <Printer className="text-blue-600" />, title: t("doc_guide_2_t"), desc: t("doc_guide_2_d") },
                { icon: <ClipboardList className="text-blue-600" />, title: t("doc_guide_3_t"), desc: t("doc_guide_3_d") }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="text-[11px] font-black uppercase text-slate-900 mb-3 tracking-wider">{item.title}</h4>
                  <p className="text-[10px] font-bold text-slate-500 uppercase leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <ScrollText className="absolute -right-10 -bottom-10 text-slate-200/50 w-64 h-64 rotate-12" />
        </div>

        {/* ADVISORY BOARD */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-20">
          <div className="bg-slate-900 rounded-[4rem] p-12 text-white">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="text-red-500" />
              <h4 className="text-sm font-black uppercase tracking-widest">{t("doc_trap_title")}</h4>
            </div>
            <p className="text-[11px] font-bold uppercase text-slate-400 leading-loose mb-8">{t("doc_trap_desc")}</p>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
              <p className="text-[10px] font-black text-blue-400 uppercase mb-2">Pro Tip:</p>
              <p className="text-[10px] font-bold text-slate-200 uppercase leading-relaxed italic">{t("doc_trap_tip")}</p>
            </div>
          </div>

          <div className="bg-blue-600 rounded-[4rem] p-12 text-white flex flex-col justify-center text-center">
            <Info className="mx-auto mb-6 opacity-40" size={48} />
            <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter italic">{t("doc_sop_title")}</h4>
            <p className="text-[11px] font-bold uppercase text-blue-100 leading-relaxed mb-10">{t("doc_sop_desc")}</p>
            <NavHashLink smooth to="/#contact" className="w-full py-5 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-white hover:text-blue-600 transition-all">
              {t("doc_btn")}
            </NavHashLink>
          </div>
        </div>

      </div>
    </div>
  );
}