import React from "react";
import { useNavigate } from "react-router-dom";
import { Zap, Building2, GraduationCap, MapPin, Briefcase, Train } from "lucide-react";
import tokyoHero from "../../images/tokyohero.jpg"; 

export default function TokyoPage() {
  const navigate = useNavigate();

  const handleInquiry = () => {
    navigate("/", { state: { scrollTo: "contact" } });
  };

  return (
    <div className="pt-24 font-poppins bg-white">
      {/* PROFESSIONAL HERO SECTION */}
      <div className="relative h-[75vh] flex items-center overflow-hidden">
        <img 
          src={tokyoHero} 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Tokyo Cityscape"
        />
        {/* Multilayered Gradient for a "High-End" Look */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10" />
        
        <div className="relative z-20 max-w-[1200px] mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-blue-500" />
              <span className="text-blue-400 text-[11px] font-black tracking-[0.5em] uppercase">The Global Metropolis</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase mb-6 leading-[0.9]">
              Tokyo <br />
              <span className="text-transparent border-t-2 border-b-2 border-blue-500 py-2 inline-block mt-2" style={{ WebkitTextStroke: '1px white' }}>Japan</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg max-w-lg leading-relaxed mb-10 font-medium">
              Join the heart of innovation. Tokyo offers a unique fusion of high-tech lifestyle and ancient traditions, creating the perfect backdrop for your Japanese journey.
            </p>
            <button 
              onClick={handleInquiry}
              className="px-10 py-4 bg-blue-800 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-blue-800 transition-all shadow-2xl shadow-blue-900/40"
            >
              Consult for Tokyo
            </button>
          </div>
        </div>
      </div>

      {/* QUICK STATS BAR */}
      <div className="bg-slate-50 border-b border-slate-100 py-10">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Part-time Wage", value: "¥1,113+" },
            { label: "Language Schools", value: "200+" },
            { label: "Student Population", value: "High" },
            { label: "Global Ranking", value: "#1 City" }
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-slate-900 text-xl font-black uppercase">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid md:grid-cols-12 gap-16">
          
          {/* LEFT: Detailed Info */}
          <div className="md:col-span-8 space-y-20">
            
            <section>
              <h2 className="text-3xl font-black text-slate-900 uppercase mb-8">Why Tokyo is the <span className="text-blue-800 underline decoration-4 underline-offset-8">Golden Path</span></h2>
              <p className="text-slate-600 leading-relaxed text-sm mb-10 font-medium">
                Tokyo isn't just a city; it's the gateway to Japan's future. For international students, it provides the most diverse range of language schools, from intensive academic paths for university entrance to conversation-focused cultural programs.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group">
                  <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 group-hover:bg-white group-hover:shadow-xl transition-all duration-500">
                    <div className="bg-blue-800 w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6">
                      <Briefcase size={24} />
                    </div>
                    <h4 className="text-sm font-black text-slate-900 uppercase mb-3">Professional Hub</h4>
                    <p className="text-slate-500 text-xs leading-relaxed font-medium">Headquarters of global giants and innovative startups, offering unrivaled career networking.</p>
                  </div>
                </div>
                <div className="group">
                  <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 group-hover:bg-white group-hover:shadow-xl transition-all duration-500">
                    <div className="bg-blue-800 w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6">
                      <Train size={24} />
                    </div>
                    <h4 className="text-sm font-black text-slate-900 uppercase mb-3">Superior Transport</h4>
                    <p className="text-slate-500 text-xs leading-relaxed font-medium">The world's most efficient transit system, connecting you to every corner of Japan within hours.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-slate-900 rounded-[3rem] p-12 text-white">
              <h3 className="text-2xl font-black uppercase mb-6">Student Life in Tokyo</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h5 className="text-blue-400 font-bold uppercase text-xs">Shinjuku & Shibuya</h5>
                  <p className="text-slate-400 text-xs leading-relaxed">The vibrant centers of student life, known for shopping, entertainment, and endless part-time work opportunities.</p>
                </div>
                <div className="space-y-4">
                  <h5 className="text-blue-400 font-bold uppercase text-xs">Akihabara & Ueno</h5>
                  <p className="text-slate-400 text-xs leading-relaxed">Perfect for tech enthusiasts and those who appreciate museums, parks, and traditional culture.</p>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT: Quick Inquiry Sidebar */}
          <div className="md:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="bg-slate-50 border border-slate-100 p-10 rounded-[3rem] text-center">
                <GraduationCap className="mx-auto text-blue-800 mb-6" size={40} />
                <h4 className="text-lg font-black text-slate-900 uppercase mb-2">Tokyo Intake</h4>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-8">April • July • Oct • Jan</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-black uppercase py-3 border-b border-slate-200">
                    <span className="text-slate-400">Processing Time</span>
                    <span className="text-slate-900">4-6 Months</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-black uppercase py-3 border-b border-slate-200">
                    <span className="text-slate-400">Success Rate</span>
                    <span className="text-blue-800">High</span>
                  </div>
                </div>
                <button 
                  onClick={handleInquiry}
                  className="w-full mt-10 py-5 bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest rounded-2xl hover:bg-blue-800 transition-all shadow-lg"
                >
                  Start Application
                </button>
              </div>

              <div className="p-8 bg-blue-50 border border-blue-100 rounded-[2.5rem]">
                 <div className="flex items-center gap-3 mb-4">
                    <MapPin className="text-blue-800" size={18} />
                    <span className="text-blue-800 font-black text-[10px] uppercase tracking-wider">Madi Branch Special</span>
                 </div>
                 <p className="text-blue-900/70 text-xs leading-relaxed font-medium italic">
                   "We have direct ties with Tokyo's elite vocational colleges in Koto and Nakano wards."
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}