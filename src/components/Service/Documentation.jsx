import React from "react";
import { 
  FileText, Landmark, UserCheck, ShieldCheck, 
  Search, Languages, FileSignature, ArrowRight,
  CheckCircle2, AlertCircle, Info, Laptop, 
  Printer, ScrollText, ClipboardList
} from "lucide-react";
import { NavHashLink } from 'react-router-hash-link';

export default function DocumentationPage() {
  const documentSections = [
    {
      title: "Applicant's Academic Profile",
      icon: <FileText className="text-blue-600" />,
      items: [
        { name: "Academic Transcripts", detail: "SLC/SEE, +2, and Bachelor's (if applicable)" },
        { name: "Character Certificates", detail: "Originals from last attended institutions" },
        { name: "Japanese Language", detail: "150 Hours study certificate or JLPT/NAT results" },
        { name: "Work Experience", detail: "Letters to justify any study gaps over 1 year" }
      ]
    },
    {
      title: "Sponsor's Financial Strength",
      icon: <Landmark className="text-blue-600" />,
      items: [
        { name: "Bank Balance Certificate", detail: "Recommended NPR 25-30 Lakhs" },
        { name: "6-Month Bank Statement", detail: "To show consistency and source of funds" },
        { name: "Annual Income Proof", detail: "Salary, House Rent, or Business income for 3 years" },
        { name: "Tax Clearance", detail: "Official Nepal Govt. proof of tax payment" }
      ]
    },
    {
      title: "Legal & Relationship Docs",
      icon: <UserCheck className="text-blue-600" />,
      items: [
        { name: "Relationship Verification", detail: "Woda Patra document linking student to sponsor" },
        { name: "Birth Certificate", detail: "English/Japanese translated version" },
        { name: "Property Valuation", detail: "Assets valuation by a certified engineer" },
        { name: "Citizenship/Passport", detail: "Precise color scans of all relevant pages" }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 font-poppins bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="max-w-3xl mb-16">
          <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Zero-Error Protocol</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase leading-tight mb-6">
            Full Documentation <br/> <span className="text-blue-600">Support System</span>
          </h1>
          <p className="text-slate-500 text-xs md:text-sm font-bold uppercase leading-relaxed italic">
            "Your COE success depends on the details. One wrong spelling can lead to a rejection. We ensure perfection."
          </p>
        </div>

        {/* THE AUDIT PROCESS */}
        <div className="grid md:grid-cols-4 gap-4 mb-20">
          {[
            { icon: <Search />, label: "Profile Audit", desc: "Reviewing academic history and study gaps." },
            { icon: <Languages />, label: "Translation", desc: "Certified Japanese translation of all Nepali docs." },
            { icon: <FileSignature />, label: "SOP Writing", desc: "Drafting a professional Statement of Purpose." },
            { icon: <ShieldCheck />, label: "Final Verification", desc: "Triple-check against Immigration guidelines." }
          ].map((step, i) => (
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

        {/* NEW SECTION: PREPARATION & VALIDATION GUIDANCE */}
        <div className="mb-20 py-16 bg-slate-50 rounded-[4rem] px-10 border border-slate-200/60 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
              <div className="max-w-xl">
                <h3 className="text-2xl font-black uppercase text-slate-900 mb-4 italic underline decoration-blue-600 decoration-4 underline-offset-8">Preparation <span className="text-blue-600">& Guidance</span></h3>
                <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Ensuring every file meets Japanese Immigration standards</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Laptop className="text-blue-600" />,
                  title: "Digital Standardization",
                  desc: "We provide high-resolution color scanning and digital cleanup of all documents to ensure legibility for Immigration officers."
                },
                {
                  icon: <Printer className="text-blue-600" />,
                  title: "Notary & Translation",
                  desc: "Every Nepali document is translated into Japanese by certified professionals and notarized for legal validity."
                },
                {
                  icon: <ClipboardList className="text-blue-600" />,
                  title: "Consistency Check",
                  desc: "We manually verify that names, dates, and addresses match across every single page to prevent technical rejections."
                }
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

        {/* INFO ADVISORY BOARD */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-20">
          <div className="bg-slate-900 rounded-[4rem] p-12 text-white">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="text-red-500" />
              <h4 className="text-sm font-black uppercase tracking-widest">The "COE Rejection" Trap</h4>
            </div>
            <p className="text-[11px] font-bold uppercase text-slate-400 leading-loose mb-8">
              Japanese Immigration maintains a permanent digital record of every file submitted. If you provide conflicting information (e.g., different parents' names or inconsistent income) even once, getting a visa in the future becomes extremely difficult. 
            </p>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
              <p className="text-[10px] font-black text-blue-400 uppercase mb-2">Pro Tip:</p>
              <p className="text-[10px] font-bold text-slate-200 uppercase leading-relaxed italic">
                "Always check that your name spelling on your Citizenship matches your SLC Certificate exactly before applying for a Passport."
              </p>
            </div>
          </div>

          <div className="bg-blue-600 rounded-[4rem] p-12 text-white flex flex-col justify-center text-center">
            <Info className="mx-auto mb-6 opacity-40" size={48} />
            <h4 className="text-2xl font-black uppercase mb-4 tracking-tighter italic">Professional SOP Writing</h4>
            <p className="text-[11px] font-bold uppercase text-blue-100 leading-relaxed mb-10">
              Our experts help you draft a high-impact Statement of Purpose (SOP) that highlights your academic intent and clear financial background—a key factor for your COE approval.
            </p>
            <NavHashLink smooth to="/#contact" className="w-full py-5 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-white hover:text-blue-600 transition-all">
              Request Document Checklist
            </NavHashLink>
          </div>
        </div>

      </div>
    </div>
  );
}