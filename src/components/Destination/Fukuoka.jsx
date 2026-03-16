import React from "react";
import { useNavigate } from "react-router-dom";
import { Sun, Map, Anchor, Rocket, Smile, Compass } from "lucide-react";
import fukuokaHero from "../../images/fukakohero.jpg";

export default function FukuokaPage() {
  const navigate = useNavigate();

  const handleInquiry = () => {
    navigate("/", { state: { scrollTo: "contact" } });
  };

  return (
    <div className="pt-24 font-poppins bg-white">
      {/* PROFESSIONAL HERO SECTION */}
      <div className="relative h-[75vh] flex items-center overflow-hidden">
        <img 
          src={fukuokaHero} 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Fukuoka Coastline"
        />
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-950 z-10" />
        
        <div className="relative z-20 max-w-[1200px] mx-auto px-6 w-full text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-6 h-[1px] bg-blue-500" />
            <span className="text-blue-400 text-[11px] font-black tracking-[0.6em] uppercase">The Gateway to Kyushu</span>
            <div className="w-6 h-[1px] bg-blue-500" />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black text-white uppercase mb-8 leading-none tracking-tighter">
            Fukuoka
          </h1>
          
          <p className="text-slate-200 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-12 font-medium">
            Discover Japan's fastest-growing city. Fukuoka offers a perfect balance of coastal beauty, urban innovation, and a compact lifestyle that students adore.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={handleInquiry}
              className="px-10 py-4 bg-blue-800 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-blue-800 transition-all shadow-2xl"
            >
              Start Your Application
            </button>
            <button 
              onClick={handleInquiry}
              className="px-10 py-4 bg-transparent border border-white/30 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              View Schools
            </button>
          </div>
        </div>
      </div>

      {/* QUICK STATS BAR */}
      <div className="bg-slate-900 py-12">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Visa Success", value: "Very High" },
            { label: "Rent Index", value: "Affordable" },
            { label: "Startup Hub", value: "#1 in Japan" },
            { label: "Commute", value: "15-Min City" }
          ].map((stat, i) => (
            <div key={i} className="text-center md:border-r border-white/10 last:border-0">
              <p className="text-blue-500 text-[9px] font-black uppercase tracking-widest mb-2">{stat.label}</p>
              <p className="text-white text-lg font-black uppercase">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          
          <div className="md:col-span-8 space-y-24">
            {/* THE KYUSHU ADVANTAGE */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-black text-slate-900 uppercase leading-none">
                  The Kyushu <span className="text-blue-800 underline decoration-4 underline-offset-8">Advantage</span>
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm mb-12 font-medium">
                Fukuoka is often called the "15-minute city" because the airport, city center, and beaches are all incredibly close. For international students, this means less time commuting and more time for studies and part-time work.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:shadow-xl transition-shadow">
                  <Rocket className="text-blue-800 mb-6" size={32} />
                  <h4 className="text-sm font-black text-slate-900 uppercase mb-3">Modern Economy</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">As Japan's "Startup City," Fukuoka offers unique opportunities for students in IT and Business.</p>
                </div>
                <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:shadow-xl transition-shadow">
                  <Anchor className="text-blue-800 mb-6" size={32} />
                  <h4 className="text-sm font-black text-slate-900 uppercase mb-3">Coastal Living</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">Enjoy seaside parks and a relaxed atmosphere that helps reduce the stress of international study.</p>
                </div>
              </div>
            </section>

            {/* LIFESTYLE SECTION */}
            <section className="relative overflow-hidden bg-slate-50 rounded-[4rem] p-12 border border-slate-100">
               <div className="relative z-10 grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 uppercase mb-6 flex items-center gap-2">
                      <Smile className="text-blue-800" /> Life as a Student
                    </h3>
                    <ul className="space-y-4">
                      {["Vibrant Yatai Food Stall Culture", "Lowest housing costs among major cities", "Gateway to Seoul and Busan (Short ferry ride)", "Safety and clean air"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs font-bold text-slate-600 uppercase">
                          <div className="w-1.5 h-1.5 bg-blue-800 rounded-full mt-1" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-8 rounded-[2rem] shadow-sm">
                    <p className="text-slate-400 text-[10px] font-black uppercase mb-4 tracking-widest">Counselor's Tip</p>
                    <p className="text-slate-800 text-xs leading-relaxed font-medium italic">
                      "Fukuoka is our top recommendation for students who want a high visa approval rate and a supportive, close-knit international community."
                    </p>
                  </div>
               </div>
            </section>
          </div>

          {/* SIDEBAR */}
          <div className="md:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="bg-slate-900 p-10 rounded-[3rem] text-white text-center shadow-2xl">
                <Compass className="mx-auto text-blue-400 mb-6" size={40} />
                <h4 className="text-lg font-black uppercase mb-2">Explore Kyushu</h4>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-[0.2em] mb-8">Namo Buddha Exclusive Schools</p>
                
                <div className="space-y-4 mb-10">
                  <div className="text-[10px] font-black uppercase text-blue-400 bg-blue-400/10 py-2 rounded-lg">
                    Highest Visa Success Rate
                  </div>
                </div>

                <button 
                  onClick={handleInquiry}
                  className="w-full py-5 bg-blue-800 text-white text-[11px] font-black uppercase tracking-widest rounded-2xl hover:bg-white hover:text-blue-800 transition-all"
                >
                  Contact Fukuoka Expert
                </button>
              </div>

              <div className="p-8 border-2 border-dashed border-slate-200 rounded-[2.5rem] text-center">
                 <p className="text-slate-400 text-[10px] font-black uppercase mb-4">Brochure Available</p>
                 <button className="text-blue-800 font-black text-[10px] uppercase underline decoration-2 underline-offset-4">
                   Download Fukuoka Guide
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}