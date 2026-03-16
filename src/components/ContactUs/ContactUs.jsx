import React from "react";
import { Phone, Clock, MapPin, MessageSquare, ArrowRight, Compass } from "lucide-react";
import contactImg from "../../images/service2.png";

export default function ContactUsSection() {
  return (
    <section id="contact" className="bg-white font-poppins py-16 md:py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* --- MAIN HEADER --- */}
        <div className="text-center mb-10">
          <span className="text-blue-800 text-[10px] font-black tracking-[0.4em] uppercase mb-3 block">
            Nepal Office
          </span>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight uppercase">
            Namo Buddha <span className="text-blue-800">Tandi Center</span>
          </h3>
          <div className="w-10 h-0.5 bg-blue-800 mx-auto mt-4 rounded-full" />
        </div>

        {/* --- GRID CONTAINER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* LEFT SIDE (8 Columns) */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            
            {/* JOURNEY CTA CARD */}
            <div className="bg-slate-900 p-7 rounded-[2rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Compass size={60} className="text-white" />
              </div>
              <div className="relative z-10">
                <h4 className="text-white text-base font-black mb-3 uppercase tracking-tight">
                  Start Your Journey to Japan Today 🇯🇵
                </h4>
                <p className="text-slate-400 text-[10px] font-bold uppercase leading-relaxed tracking-wider max-w-2xl">
                  If you are planning to study in Japan or explore career opportunities, 
                  our professional support and personalized guidance help turn your dreams into reality.
                </p>
              </div>
            </div>

            {/* CONTACT INFO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Phone Card */}
              <div className="bg-blue-50/50 p-6 rounded-[2rem] border border-blue-100">
                <div className="bg-blue-800 w-10 h-10 rounded-xl flex items-center justify-center text-white mb-4">
                  <Phone size={18} />
                </div>
                <h4 className="text-[9px] font-black text-blue-900 mb-2 uppercase tracking-widest">Call Counselors</h4>
                <div className="space-y-0.5">
                  <p className="text-slate-900 font-black text-lg tracking-tight leading-none">056-494331</p>
                  <p className="text-slate-900 font-black text-lg tracking-tight">9855062451</p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-blue-800 p-6 rounded-[2rem] text-white flex flex-col justify-between">
                <div>
                  <div className="bg-white/10 w-10 h-10 rounded-xl flex items-center justify-center text-white mb-4">
                    <MessageSquare size={18} />
                  </div>
                  <h4 className="text-[9px] font-black mb-1 uppercase tracking-widest text-blue-100">Online Support</h4>
                  <p className="text-[10px] font-black truncate mb-4 opacity-80">namobuddhaeducationpvtltd@gmail.com</p>
                </div>
                <a 
                  href="https://wa.me/9779855062451" 
                  className="flex items-center justify-center gap-2 bg-white text-blue-800 py-2.5 rounded-lg font-black text-[9px] uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all"
                >
                  WhatsApp Now <ArrowRight size={12} />
                </a>
              </div>

              {/* Location Card */}
              <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 flex items-start gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 shrink-0">
                  <MapPin size={20} className="text-blue-800" />
                </div>
                <div>
                  <h4 className="text-[9px] font-black text-slate-900 uppercase tracking-widest mb-1">Location</h4>
                  <p className="text-[11px] text-slate-700 font-black uppercase leading-tight">
                    Ratnanagar-02, Tandi Chowk,<br/> Chitwan, Nepal
                  </p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 flex items-start gap-4">
                <div className="bg-blue-100/50 p-3 rounded-xl shrink-0 border border-blue-100">
                  <Clock size={20} className="text-blue-800" />
                </div>
                <div>
                  <h4 className="text-[9px] font-black text-blue-800 uppercase tracking-widest mb-1">Office Hours</h4>
                  <p className="text-slate-900 font-black text-[11px] uppercase tracking-tight">
                    Sun — Fri
                  </p>
                  <p className="text-blue-800 font-black text-[13px] uppercase tracking-tighter mt-1">10:00 AM — 5:00 PM</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE (4 Columns) - Shorter Image Height */}
          <div className="lg:col-span-4 flex flex-col lg:justify-start">
            <div className="relative w-full aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden border border-slate-100 shadow-md group">
              <img 
                src={contactImg} 
                alt="Namo Buddha Tandi Center" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6">
                <div className="bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full flex items-center gap-2 border border-slate-100 shadow-sm">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[8px] font-black text-slate-900 uppercase tracking-widest">Active</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}