import React from "react";
import { useNavigate } from "react-router-dom";
import { Utensils, Users, Landmark, Wallet, Coffee, Heart } from "lucide-react";
import osakaHero from "../../images/osakahero.jpg"; 

export default function OsakaPage() {
  const navigate = useNavigate();

  const handleInquiry = () => {
    navigate("/", { state: { scrollTo: "contact" } });
  };

  return (
    <div className="pt-24 font-poppins bg-white">
      {/* PROFESSIONAL HERO SECTION */}
      <div className="relative h-[75vh] flex items-center overflow-hidden">
        <img 
          src={osakaHero} 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Osaka Dotonbori"
        />
        {/* Deep Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10" />
        
        <div className="relative z-20 max-w-[1200px] mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-blue-500" />
              <span className="text-blue-400 text-[11px] font-black tracking-[0.5em] uppercase">The Heart of Kansai</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase mb-6 leading-[0.9]">
              Osaka <br />
              <span className="text-transparent border-t-2 border-b-2 border-blue-500 py-2 inline-block mt-2" style={{ WebkitTextStroke: '1px white' }}>Kansai</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg max-w-lg leading-relaxed mb-10 font-medium">
              Where tradition meets a vibrant, modern soul. Experience Japan’s friendliest city, famous for its world-class street food and thriving economy.
            </p>
            <button 
              onClick={handleInquiry}
              className="px-10 py-4 bg-blue-800 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-blue-800 transition-all shadow-2xl shadow-blue-900/40"
            >
              Explore Kansai Path
            </button>
          </div>
        </div>
      </div>

      {/* QUICK STATS BAR */}
      <div className="bg-slate-50 border-b border-slate-100 py-10">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Living Cost", value: "20% Lower" },
            { label: "Community", value: "Extremely Friendly" },
            { label: "Vocational Focus", value: "Hospitality/Tech" },
            { label: "Vibe", value: "Energetic" }
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left border-l-2 border-blue-100 pl-6">
              <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-slate-900 text-xl font-black uppercase">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid md:grid-cols-12 gap-16">
          
          <div className="md:col-span-8 space-y-20">
            {/* WHY OSAKA */}
            <section>
              <h2 className="text-3xl font-black text-slate-900 uppercase mb-8">
                Why Students Love <span className="text-blue-800 underline decoration-4 underline-offset-8">Osaka</span>
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm mb-10 font-medium">
                Osaka is widely regarded as the most welcoming city in Japan for international residents. Its central location in the Kansai region allows you to live in a modern city while being just 30 minutes away from the historic temples of Kyoto and Nara.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                  <Utensils className="text-blue-800 mb-6" size={28} />
                  <h4 className="text-sm font-black text-slate-900 uppercase mb-3">Culinary Capital</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">Known as "Tenka no Daidokoro" (The Nation's Kitchen), Osaka offers the best affordable food in Japan.</p>
                </div>
                <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                  <Heart className="text-blue-800 mb-6" size={28} />
                  <h4 className="text-sm font-black text-slate-900 uppercase mb-3">Friendly Locals</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">Osakans are known for their humor and openness, making it easier for students to make local friends.</p>
                </div>
              </div>
            </section>

            {/* COST OF LIVING TABLE */}
            <section className="bg-slate-900 rounded-[3rem] p-12 text-white">
              <h3 className="text-2xl font-black uppercase mb-8 flex items-center gap-3">
                <Wallet className="text-blue-400" /> Living in Osaka
              </h3>
              <div className="space-y-6">
                {[
                  { item: "Average Rent (Monthly)", cost: "¥35,000 - ¥55,000", tokyo: "¥65,000+" },
                  { item: "Food & Groceries", cost: "¥25,000 - ¥35,000", tokyo: "¥40,000+" },
                  { item: "Transport", cost: "¥5,000 - ¥10,000", tokyo: "¥12,000+" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-white/10">
                    <span className="text-xs font-bold uppercase">{row.item}</span>
                    <div className="text-right">
                      <span className="text-blue-400 font-black text-sm block">{row.cost}</span>
                      <span className="text-slate-500 text-[9px] uppercase">vs Tokyo: {row.tokyo}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* SIDEBAR */}
          <div className="md:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="bg-white border-2 border-blue-800/10 p-10 rounded-[3rem] text-center shadow-xl">
                <Landmark className="mx-auto text-blue-800 mb-6" size={40} />
                <h4 className="text-lg font-black text-slate-900 uppercase mb-2">Kansai Gateway</h4>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-8">Osaka • Kyoto • Kobe</p>
                
                <div className="p-6 bg-blue-50 rounded-2xl mb-8">
                  <p className="text-blue-900 text-[10px] leading-relaxed font-bold uppercase italic">
                    "Ideal for students looking for Vocational Schools (Senmon Gakko) in Design and Tourism."
                  </p>
                </div>

                <button 
                  onClick={handleInquiry}
                  className="w-full py-5 bg-blue-800 text-white text-[11px] font-black uppercase tracking-widest rounded-2xl hover:bg-slate-900 transition-all shadow-lg"
                >
                  Apply for Osaka
                </button>
              </div>

              <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white flex items-center gap-4">
                <Coffee className="text-blue-400" size={24} />
                <div>
                  <h5 className="text-[10px] font-black uppercase">Free Counseling</h5>
                  <p className="text-[9px] text-slate-400 uppercase">Available at Madi Branch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}