import React from "react";
import { CheckCircle2, Award, Users, Landmark, Target, Eye } from "lucide-react";
import aboutImg from "../../images/aboutus.jpg"; 

export default function AboutUsSection() {
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
                <p className="text-[10px] font-bold uppercase tracking-widest mt-1 text-blue-100 italic">Visa Success</p>
              </div>
            </div>
          </div>

          {/* RIGHT: EDITORIAL TEXT CONTENT */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h2 className="text-blue-800 text-[10px] font-black tracking-[0.4em] uppercase">
                Trusted Japan Education Partner
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1]">
                Bridging Your Path to <br /> 
                <span className="text-blue-700">Japanese Excellence.</span>
              </h3>
            </div>

            {/* MAIN DESCRIPTION */}
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed max-w-2xl font-medium">
              <p>
                Namo Buddha Consultancy is a trusted education and career consultancy dedicated to helping individuals achieve their dreams of <strong>studying and working in Japan</strong>. We specialize in providing reliable guidance and complete support for students and professionals looking to build a successful future abroad.
              </p>
              <p className="text-base text-slate-500">
                Our team provides expert counseling for enrollment in Japanese language schools, colleges, and universities. From intensive language training and meticulous documentation to visa processing and travel arrangements, we offer reliable assistance at every step of the journey—from your home in Nepal to your new life in Japan.
              </p>
            </div>

            {/* STATS GRID */}
           

            {/* MISSION & VISION BOXES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-800">
                  <Target size={20} />
                </div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Our Mission</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  To provide reliable guidance and quality opportunities for students and professionals in Japan, while ensuring transparency and professionalism throughout the process.
                </p>
              </div>

              <div className="p-8 bg-blue-800 rounded-[2rem] text-white space-y-3 shadow-xl shadow-blue-900/10">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-blue-100">
                  <Eye size={20} />
                </div>
                <h4 className="text-sm font-black uppercase tracking-widest">Our Vision</h4>
                <p className="text-xs text-blue-100/80 leading-relaxed">
                  To become the most trusted consultancy in Nepal, focusing on Japanese education and careers, helping individuals achieve academic success and global growth.
                </p>
              </div>
            </div>

            {/* QUICK CHECKLIST */}
            <div className="flex flex-wrap gap-y-4 gap-x-8 pt-8 border-t border-slate-100">
              {[
                "Authorized COE Processing", 
                "Japanese Language Training", 
                "Transparent Visa Services"
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