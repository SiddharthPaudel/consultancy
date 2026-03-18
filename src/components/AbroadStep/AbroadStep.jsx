import React from 'react';
import { CheckCircle2, MoveRight } from "lucide-react";
import step1 from "../../images/step1.jpeg";
import step2 from "../../images/japanese.jpeg";
import step3 from "../../images/step.jpeg";
import step4 from "../../images/step4.jpeg";
import step5 from "../../images/step5.jpeg";

const steps = [
  { id: 1, title: "Consultation & Evaluation", position: 'top', img: step1 },
  { id: 2, title: "Program Application", position: 'bottom', img: step2 },
  { id: 3, title: "Documentation & Verification", position: 'top', img: step3 },
  { id: 4, title: "Visa Processing", position: 'bottom', img: step4 },
  { id: 5, title: "Pre-Departure Preparation", position: 'top', img: step5 }
];

const reasons = [
  "Experienced & Professional Counselors",
  "Transparent & Reliable Process",
  "Complete Application-to-Departure Guidance",
  "Specialized Focus on Japan Opportunities",
  "Language Training & Exam Preparation",
  "Personalized Support for Every Applicant"
];

const AbroadStep = () => {
  return (
    <div className="w-full bg-white py-24 overflow-x-hidden font-poppins">
      
      {/* --- WHY CHOOSE US SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-block px-4 py-1.5 bg-blue-50 rounded-full mb-6">
              <span className="text-[10px] font-black text-blue-800 tracking-[0.4em] uppercase">
                Excellence Guaranteed
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-8 uppercase  tracking-tighter">
              Why Choose <br /> <span className="text-blue-800">Namo Buddha?</span>
            </h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-sm mb-8">
              We don't just process applications; we build careers. Our specialized focus on Japan ensures you get the most accurate guidance available.
            </p>
            <button className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-800 transition-all group">
              Get Started <MoveRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 group"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-800 group-hover:bg-blue-800 group-hover:text-white transition-all">
                  <CheckCircle2 size={20} />
                </div>
                <span className="text-[11px] font-black text-slate-800 uppercase tracking-tight leading-tight">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* --- THE PROCESS SECTION (WHITE BG) --- */}
      <div className="max-w-7xl mx-auto py-15 relative">
        <div className="text-center mb-24 px-4">
          <h2 className="text-[10px] font-black text-blue-800 tracking-[0.5em] uppercase mb-4">
            The Roadmap
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase ">
            Your Seamless <span className="text-blue-800">Journey</span>
          </h3>
          <div className="w-16 h-1.5 bg-blue-800 mx-auto mt-8 rounded-full" />
        </div>

        <div className="max-w-[1440px] mx-auto relative px-6">
          
          {/* DESKTOP WAVY PATH - Subtle Blue Dash */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none px-4">
            <svg viewBox="0 0 1400 300" className="w-full overflow-visible opacity-10">
              <path
                d="M 0 150 Q 175 350, 350 150 T 700 150 T 1050 150 T 1400 150"
                fill="transparent"
                stroke="#1e40af" 
                strokeWidth="2.5"
                strokeDasharray="12 12"
              />
            </svg>
          </div>

          {/* MOBILE VERTICAL LINE */}
          <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-800/5 -translate-x-1/2 z-0" />

          {/* STEPS CONTENT */}
          <div className="flex flex-col md:flex-row justify-between items-center relative w-full gap-20 md:gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center w-full md:w-1/5 z-10 group">
                
                <div className={`flex flex-col items-center ${
                  step.position === 'top' ? 'md:flex-col' : 'md:flex-col-reverse'
                }`}>
                  
                  {/* Image Circle */}
                  <div className={`relative ${step.position === 'top' ? 'mb-8' : 'mt-8'} md:mb-0`}>
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-[8px] border-white shadow-2xl shadow-blue-900/10 overflow-hidden group-hover:scale-105 transition-all duration-700 relative ring-1 ring-slate-100">
                      <img 
                        src={step.img} 
                        alt={step.title} 
                        className="w-full h-full object-cover group-hover:rotate-3 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors" />
                    </div>
                    
                    {/* Floating Step Number */}
                    <div className="absolute -top-2 -right-2 w-11 h-11 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black shadow-xl border-[4px] border-white group-hover:bg-blue-800 transition-colors">
                      {step.id}
                    </div>
                  </div>

                  {/* Text Description */}
                  <div className={`text-center h-16 flex flex-col justify-center ${step.position === 'top' ? 'md:mt-10' : 'md:mb-10'}`}>
                    <h4 className="font-black text-slate-900 text-[11px] md:text-[10px] uppercase tracking-[0.15em] leading-tight max-w-[150px] mx-auto group-hover:text-blue-800 transition-colors">
                      {step.title}
                    </h4>
                    <div className="w-0 group-hover:w-1/2 h-0.5 bg-blue-800/30 mx-auto mt-2 transition-all duration-500" />
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-full border border-slate-100">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
             <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest">
               Average Success Rate: 98% for Visa Approvals
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbroadStep;