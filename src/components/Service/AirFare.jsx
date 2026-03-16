import React from "react";
import { 
  Plane, Ticket, Luggage, MapPin, 
  Users, ArrowRight, ShieldCheck, 
  Clock, Globe, HeartHandshake,
  Navigation, Info, CreditCard
} from "lucide-react";
import { NavHashLink } from 'react-router-hash-link';
import plane from "../../images/plane.jpg"

export default function AirfarePage() {
  const flightRoutes = [
    { 
      airline: "Nepal Airlines (NAC)", 
      route: "Direct: KTM ✈ NRT", 
      time: "7.5 Hours", 
      advantage: "Zero layovers. Best for first-time flyers." 
    },
    { 
      airline: "Qatar Airways", 
      route: "Via Doha: KTM ✈ DOH ✈ NRT", 
      time: "16 Hours", 
      advantage: "Premium service & extra student baggage (45kg)." 
    },
    { 
      airline: "Cathay Pacific", 
      route: "Via Hong Kong: KTM ✈ HKG ✈ NRT", 
      time: "11 Hours", 
      advantage: "Fastest transit with world-class entertainment." 
    }
  ];

  return (
    <div className="pt-24 pb-20 font-poppins bg-[#FBFBFE]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- SIMPLE HERO --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 bg-slate-900 rounded-[3rem] p-8 md:p-16 overflow-hidden">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase leading-none mb-6">
              Fly to <span className="text-blue-500">Japan</span>
            </h1>
            <p className="text-slate-400 text-[11px] font-bold uppercase leading-relaxed mb-8 max-w-sm">
              We bridge the distance between Nepal and Japan with exclusive student rates and group departures.
            </p>
            <NavHashLink smooth to="/#contact" className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all">
              Check Rates
            </NavHashLink>
          </div>
          <div className="relative aspect-video lg:aspect-square rounded-[2rem] overflow-hidden">
            <img src={plane} alt="Flight" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* --- SIMPLIFIED SERVICE SECTION --- */}
        <div className="mb-24 border-l-4 border-blue-600 pl-8">
          <h2 className="text-2xl font-black text-slate-900 uppercase mb-4 flex items-center gap-3">
            <Plane className="text-blue-600" /> International Airfare Assistance
          </h2>
          <p className="text-slate-600 text-[13px] font-bold uppercase leading-relaxed max-w-4xl">
            We provide support with international flight booking and travel arrangements, 
            helping students and workers travel to Japan conveniently and safely.
          </p>
        </div>

        {/* --- ROUTE CARDS --- */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {flightRoutes.map((route, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm">
              <span className="text-blue-600 text-[9px] font-black uppercase tracking-widest block mb-2">{route.airline}</span>
              <h4 className="text-lg font-black text-slate-900 uppercase mb-4 leading-tight">{route.route}</h4>
              <p className="text-slate-500 text-[10px] font-bold uppercase leading-relaxed">{route.advantage}</p>
            </div>
          ))}
        </div>

        {/* --- SIMPLE INFO BLOCKS --- */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-10 rounded-[2.5rem]">
            <h3 className="text-xl font-black text-slate-900 uppercase mb-6">Booking Steps</h3>
            <div className="space-y-4">
              {[
                "Send Visa & Passport copy to Tandi Office",
                "Receive 3 price & baggage options",
                "E-Ticket issued within 60 minutes",
                "Pre-Flight briefing at our academy"
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-[10px] font-black shrink-0">{i+1}</div>
                  <p className="text-[11px] font-black text-slate-700 uppercase">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 p-10 rounded-[2.5rem] border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
               <Info className="text-blue-600" size={20} />
               <h3 className="text-lg font-black text-blue-900 uppercase">Traveler Tip</h3>
            </div>
            <p className="text-blue-700/80 text-[11px] font-bold uppercase leading-relaxed">
              Always book your ticket immediately after getting your Visa. Prices for Kathmandu to Narita increase significantly if booked less than 10 days before departure.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}