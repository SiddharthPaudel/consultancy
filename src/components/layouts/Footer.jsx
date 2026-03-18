import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import buddhaIcon from "../../icons/NAMOBUDDHA.png";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (path) => {
    // 1. Identify the target ID (e.g., from "/contact" we get "contact")
    // This assumes your sections have id="about", id="contact", etc.
    const targetId = path.split("/").pop(); 
    const element = document.getElementById(targetId);

    // 2. Logic: If element exists on current page, scroll to it.
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } 
    // 3. If not on current page (or not an ID), navigate normally
    else {
      navigate(path);
      // Your ScrollToTop in App.jsx handles the jump to top for new pages
    }
  };

  return (
    <footer className="bg-white font-poppins border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16">

          {/* 1. BRAND IDENTITY */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center p-2 border border-slate-100 shadow-sm">
                <img src={buddhaIcon} alt="Namo Buddha Icon" className="w-full h-full object-contain antialiased" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black leading-none text-slate-900 uppercase tracking-tighter">
                  Namo <span className="text-blue-800">Buddha</span>
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-400 mt-1">
                  Educational Pvt. Ltd.
                </span>
              </div>
            </div>
            
            <p className="text-slate-500 text-xs leading-relaxed font-medium max-w-sm">
              An authorized Japanese language academy dedicated to bridging the gap between Nepalese students and global opportunities. Regulated by the Government of Nepal.
            </p>

            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-[9px] font-black uppercase tracking-widest text-slate-600">Now Accepting 2026 Intakes</span>
              </div>
            </div>
          </div>

          {/* 2. ACADEMIC PROGRAMS */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-900 mb-8 border-b border-slate-100 pb-2">
              Programs
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Language Schools", to: "/study-work/language-schools" },
                { name: "JLPT Prep", to: "/test-preparation/jlpt" },
                { name: "NAT-TEST Training", to: "/test-preparation/nat" },
                { name: "SSW Program", to: "/study-work/ssw-visa" },
                { name: "University Path", to: "/study-work/universities" }
              ].map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => handleLinkClick(link.to)}
                    className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-blue-700 hover:translate-x-1 transition-all flex items-center gap-2 text-left"
                  >
                    <ArrowRight size={10} className="text-slate-300" /> {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. QUICK NAVIGATION - Updated to match App.jsx Routes */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-900 mb-8 border-b border-slate-100 pb-2">
              Resources
            </h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", to: "/about" },
                { name: "Documentation", to: "/services/documentation" },
                { name: "Hostel Facility", to: "/services/hostel" },
                { name: "Airfare Support", to: "/services/airfare" },
                { name: "Contact Hub", to: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => handleLinkClick(link.to)}
                    className="text-slate-500 text-[10px] font-bold uppercase tracking-widest hover:text-blue-700 hover:translate-x-1 transition-all flex items-center gap-2 text-left"
                  >
                    <ArrowRight size={10} className="text-slate-300" /> {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. CONTACT & SUPPORT */}
          <div className="lg:col-span-4">
            <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-900 mb-8 border-b border-slate-100 pb-2">
              Connect With Us
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin size={20} className="text-blue-700 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[11px] font-black text-slate-900 uppercase tracking-tight">Main Campus</span>
                  <span className="text-slate-500 text-[10px] font-bold uppercase leading-relaxed">Ratnanagar-02, Tandi Chowk<br/>Chitwan, Nepal</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={20} className="text-blue-700 shrink-0" />
                <div className="flex flex-col text-[11px] font-black text-slate-900">
                  <a href="tel:056494331" className="hover:text-blue-700 transition-colors">056-494331</a>
                  <a href="tel:9855062451" className="hover:text-blue-700 transition-colors underline underline-offset-4 decoration-blue-200">9855062451</a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail size={20} className="text-blue-700 shrink-0" />
                <a href="mailto:namobuddhaeducationpvtltd@gmail.com" className="text-slate-500 text-[10px] font-bold tracking-tight break-all hover:text-blue-700">
                  namobuddhaeducationpvtltd@gmail.com
                </a>
              </div>

              <div className="flex gap-4">
                <Clock size={20} className="text-blue-700 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">Sun – Fri: 10:00 – 17:00</span>
                  <span className="text-[9px] font-bold text-red-500 uppercase tracking-widest">Closed on Saturdays</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} Namo Buddha Educational Pvt. Ltd.
            </p>
            <p className="text-[8px] font-bold text-slate-300 uppercase tracking-widest">
              Registration No: 310864/079/080 • MOE Authorized
            </p>
          </div>
          
          <div className="flex gap-10 text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
            <button onClick={() => navigate("/")} className="hover:text-blue-700 transition-colors">Privacy Protocols</button>
            <button onClick={() => navigate("/")} className="hover:text-blue-700 transition-colors">Legal Terms</button>
            <span className="text-slate-200">|</span>
            <span className="text-slate-300">ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}