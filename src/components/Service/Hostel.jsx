import React from "react";
import { useNavigate } from "react-router-dom";
import { Bed, ShieldCheck, MapPin, Wifi, Coffee, Utensils, GraduationCap, Building2 } from "lucide-react";

export default function HostelPage() {
  const navigate = useNavigate();

  const hostels = [
    {
      city: "Tokyo",
      name: "TOKYO-W-inn Asakusa",
      price: "¥2,500+",
      features: ["Traditional Area", "Privacy Curtains", "English Speaking Staff"],
      tag: "Safe & Secure"
    },
    {
      city: "Osaka",
      name: "& AND HOSTEL SHINSAIBASHI",
      price: "¥1,800+",
      features: ["Smart Tech Rooms", "Shared Kitchen", "Near Shopping District"],
      tag: "Reliable"
    },
    {
      city: "Fukuoka",
      name: "WeBase Fukuoka",
      price: "¥2,000+",
      features: ["Modern Design", "Study Lounge", "Central Location"],
      tag: "Student Friendly"
    }
  ];

  return (
    <div className="pt-32 pb-20 font-poppins bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- HEADER WITH PROVIDED CONTENT --- */}
        <header className="mb-20">
          <span className="text-blue-800 text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Accommodation Support</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase leading-tight mb-8">
            Hostel <span className="text-blue-800">Arrangement</span> in Japan
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-blue-50/50 p-8 rounded-[2.5rem] border-l-4 border-blue-800">
              <p className="text-slate-700 text-[13px] font-bold uppercase leading-relaxed">
                To help students and workers settle comfortably in Japan, we assist with safe and reliable hostel and accommodation arrangements. Our goal is to ensure a smooth transition and comfortable stay after arrival.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2.5rem] flex items-start gap-4">
              <GraduationCap className="text-blue-800 shrink-0" size={24} />
              <p className="text-slate-600 text-[11px] font-bold uppercase leading-relaxed">
                Our goal is to help students choose the right institution and program according to their academic background and career goals.
              </p>
            </div>
          </div>
        </header>

        {/* --- HOSTEL CARDS --- */}
        {/* <div className="grid md:grid-cols-3 gap-8 mb-24">
          {hostels.map((hostel, i) => (
            <div key={i} className="group border border-slate-100 rounded-[3rem] p-8 hover:shadow-2xl transition-all duration-500 bg-white hover:border-blue-100">
              <div className="flex justify-between items-start mb-6">
                <span className="px-4 py-1.5 bg-blue-100 text-blue-800 text-[9px] font-black uppercase rounded-full">
                  {hostel.city}
                </span>
                <span className="text-slate-400 font-black text-[10px] uppercase tracking-tighter">{hostel.tag}</span>
              </div>
              <h3 className="text-lg font-black text-slate-900 uppercase mb-2">{hostel.name}</h3>
              <p className="text-blue-800 font-black text-xl mb-6">Starting {hostel.price}<span className="text-[10px] text-slate-400 font-medium"> /night</span></p>
              
              <ul className="space-y-3 mb-10">
                {hostel.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-500 text-[11px] font-bold uppercase">
                    <div className="w-1 h-1 bg-blue-800 rounded-full" /> {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => navigate("/", { state: { scrollTo: "contact" } })}
                className="w-full py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl group-hover:bg-blue-800 transition-colors"
              >
                Inquire for Booking
              </button>
            </div>
          ))}
        </div> */}

        {/* --- AMENITIES & EXPECTATIONS --- */}
        <div className="grid lg:grid-cols-12 gap-10 items-center bg-slate-900 rounded-[4rem] p-10 md:p-16 text-white overflow-hidden relative">
          <div className="lg:col-span-7 relative z-10">
            <h2 className="text-3xl font-black uppercase mb-10">What we <span className="text-blue-400">Provide?</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <ShieldCheck className="text-blue-400 shrink-0" />
                <div>
                  <h5 className="text-[11px] font-black uppercase mb-1">Safe Environments</h5>
                  <p className="text-[9px] text-slate-400 uppercase font-bold">Reliable & verified stays</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="text-blue-400 shrink-0" />
                <div>
                  <h5 className="text-[11px] font-black uppercase mb-1">Easy Transition</h5>
                  <p className="text-[9px] text-slate-400 uppercase font-bold">Smooth arrival process</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Building2 className="text-blue-400 shrink-0" />
                <div>
                  <h5 className="text-[11px] font-black uppercase mb-1">Right Institution</h5>
                  <p className="text-[9px] text-slate-400 uppercase font-bold">Program alignment</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Coffee className="text-blue-400 shrink-0" />
                <div>
                  <h5 className="text-[11px] font-black uppercase mb-1">Comfortable Stay</h5>
                  <p className="text-[9px] text-slate-400 uppercase font-bold">Home-like atmosphere</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm relative z-10">
            <Bed className="text-blue-400 mb-6" size={40} />
            <h4 className="text-lg font-black uppercase mb-4">Namo Buddha Support</h4>
            <p className="text-slate-400 text-[11px] font-bold uppercase leading-relaxed mb-6">
              Our team ensures you are settled in a reliable accommodation that matches your career goals and budget.
            </p>
            <ul className="text-[10px] font-black text-blue-400 uppercase space-y-3 tracking-widest">
              <li className="flex items-center gap-2"> <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"/> Academic Background Check</li>
              <li className="flex items-center gap-2"> <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"/> Career Goal Alignment</li>
              <li className="flex items-center gap-2"> <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"/> Post-Arrival Support</li>
            </ul>
          </div>
          <Building2 className="absolute -right-20 -bottom-20 w-80 h-80 text-white/5 rotate-12 pointer-events-none" />
        </div>

      </div>
    </div>
  );
}