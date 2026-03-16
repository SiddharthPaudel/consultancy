import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X, Send, Phone, MapPin, Globe } from "lucide-react";
import buddhaIcon from "../../icons/NAMOBUDDHA.png"; 

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const shouldShowBg = isScrolled || !isHomePage;

  const links = [
    
    {
      name: "Study & Work",
      dropdown: [
        { name: "Schools & Colleges", to: "/study-work/college" },
        { name: "Universities", to: "/study-work/universities" },
        { name: "SSW Visa Assistance", to: "/study-work/ssw-visa" },
      ],
    },
    {
      name: "Test Prep",
      dropdown: [
        { name: "Levels: N3, N4, N5", to: "/test-preparation/jlpt" },
        { name: "JLPT / NAT", to: "/test-preparation/nat" },
        { name: "JLCT / J-CERT", to: "/test-preparation/jlcert" },
      ],
    },
    {
      name: "Services",
      dropdown: [
         { name: "Japanese Language Classes", to: "/services/language-schools" },
        { name: "Documentation Guidance & Preparation ", to: "/services/documentation" },
        { name: "Hostel in Japan", to: "/services/hostel" },
        { name: "International Airfare", to: "/services/airfare" },
      ],
    },
    { name: "Visa Assistance", to: "/visa-assistance" },
    { name: "About", id: "about" },
  ];

  const handleClick = (link) => {
    if (link.to) {
      navigate(link.to);
      window.scrollTo(0, 0); 
    } else if (link.id) {
      if (!isHomePage) {
        navigate("/", { state: { scrollTo: link.id } });
      } else {
        const element = document.getElementById(link.id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: "smooth"
          });
        }
      }
    }
  };

  return (
    <header className={`fixed top-0 w-full z-[100] transition-all duration-500 font-poppins ${
        shouldShowBg ? "bg-white py-2 shadow-md" : "bg-transparent py-4"
      }`}>
      
      {/* DESKTOP TOP BAR */}
      {!isScrolled && isHomePage && (
        <div className="hidden lg:block border-b border-white/10 pb-2 mb-2">
          <div className="max-w-[1440px] mx-auto px-12 flex justify-between text-[9px] font-bold text-white/90 uppercase tracking-widest">
            <div className="flex gap-8">
              <span className="flex items-center gap-2"><Phone size={12} className="text-blue-400"/> 056-494331, 9855062451</span>
              <span className="flex items-center gap-2"><MapPin size={12} className="text-blue-400"/> Tandi Chowk, Chitwan</span>
            </div>
            <div className="flex items-center gap-2"><Globe size={12} className="text-blue-400"/> Study & Work In Japan</div>
          </div>
        </div>
      )}

      <div className="max-w-[1440px] mx-auto px-5 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* CIRCULAR CLEAR LOGO SECTION */}
          <button 
  onClick={() => {
    if (isHomePage) {
      // If already home, scroll to top smoothly
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If on another page, navigate home and scroll to top
      navigate("/");
      window.scrollTo(0, 0);
    }
  }} 
  className="flex items-center gap-3 md:gap-5 group z-[110] outline-none"
>
            {/* Perfectly Circular Container */}
            <div className="relative w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-xl border-[3px] border-blue-50 p-1.5 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-100">
              <img 
                src={buddhaIcon} 
                alt="Namo Buddha Logo" 
                className="w-full h-full object-contain antialiased"
                style={{ imageRendering: 'auto' }} 
              />
            </div>

            {/* Typography Lockup */}
            <div className="flex flex-col items-start">
              <span className={`text-xl md:text-2xl font-black tracking-tighter leading-none transition-colors duration-300 ${shouldShowBg || open ? "text-slate-900" : "text-white"}`}>
                NAMO <span className="text-blue-800">BUDDHA</span>
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className={`text-[7px] md:text-[9px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${shouldShowBg || open ? "text-slate-500" : "text-blue-200"}`}>
                  Educational Consultancy
                </span>
                <div className={`h-[1px] flex-grow min-w-[20px] transition-all duration-500 ${shouldShowBg || open ? "bg-blue-800" : "bg-white/40"}`}></div>
              </div>
            </div>
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center space-x-1">
            {links.map((link) => (
              <div key={link.name} className="relative group px-2">
                {link.dropdown ? (
                  <>
                    <button className={`flex items-center gap-1 font-bold text-[10px] uppercase tracking-wider transition-colors ${
                      shouldShowBg ? "text-slate-600 hover:text-blue-800" : "text-slate-100 hover:text-white"
                    }`}>
                      {link.name} <ChevronDown size={12} className="opacity-50 group-hover:rotate-180 transition-transform" />
                    </button>
                    <div className="absolute left-0 top-full pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <div className="bg-white border border-slate-100 rounded-2xl shadow-2xl p-2">
                        {link.dropdown.map((item) => (
                          <button key={item.name} onClick={() => handleClick(item)} className="block w-full text-left px-4 py-3 text-slate-600 hover:bg-blue-50 hover:text-blue-800 rounded-xl transition-all text-[10px] font-bold uppercase tracking-wide">
                            {item.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <button onClick={() => handleClick(link)} className={`font-bold text-[10px] uppercase tracking-wider transition-colors ${
                    shouldShowBg ? "text-slate-600 hover:text-blue-800" : "text-slate-100 hover:text-white"
                  }`}>
                    {link.name}
                  </button>
                )}
              </div>
            ))}
            <button onClick={() => {if(!isHomePage) navigate("/"); setTimeout(() => document.getElementById("contact")?.scrollIntoView({behavior:"smooth"}), 100)}} className="ml-4 px-8 py-3 bg-blue-800 text-white text-[10px] font-black uppercase tracking-[0.15em] rounded-full shadow-lg hover:bg-slate-900 transition-all transform hover:-translate-y-0.5 active:scale-95">
              Apply Now
            </button>
          </nav>

          {/* MOBILE TOGGLE BUTTON */}
          <button onClick={() => setOpen(!open)} className={`lg:hidden z-[110] p-2.5 rounded-full transition-colors ${shouldShowBg || open ? "text-slate-900 bg-slate-100 shadow-sm" : "text-white bg-white/10"}`}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[100] transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full pt-32 px-8 pb-10 overflow-y-auto">
          <div className="space-y-1">
            {links.map((link) => (
              <div key={link.name} className="border-b border-slate-50 last:border-0">
                {link.dropdown ? (
                  <>
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      className="flex justify-between items-center w-full py-5 text-slate-900 font-black text-sm uppercase tracking-widest"
                    >
                      {link.name}
                      <ChevronDown size={18} className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180 text-blue-800" : "opacity-20"}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ${activeDropdown === link.name ? "max-h-[500px] mb-4" : "max-h-0"}`}>
                      <div className="grid gap-2 pl-2">
                        {link.dropdown.map((item) => (
                          <button key={item.name} onClick={() => handleClick(item)} className="text-left py-4 px-5 bg-slate-50 text-slate-600 font-bold text-[11px] uppercase rounded-2xl tracking-wide active:bg-blue-100 transition-colors">
                            {item.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <button onClick={() => handleClick(link)} className="block w-full text-left py-5 text-slate-900 font-black text-sm uppercase tracking-widest">
                    {link.name}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto pt-10 space-y-4">
            <div className="p-7 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl shadow-slate-200">
              <p className="text-[10px] font-black text-blue-400 uppercase mb-3 tracking-[0.25em]">Direct Consultation</p>
              <div className="space-y-1">
                <p className="font-black text-xl tracking-tight">056-494331</p>
                <p className="font-black text-xl tracking-tight text-blue-400">9855062451</p>
              </div>
            </div>
            <button onClick={() => {setOpen(false); if(!isHomePage) navigate("/"); setTimeout(() => document.getElementById("contact")?.scrollIntoView({behavior:"smooth"}), 100)}} className="w-full py-5 bg-blue-800 text-white rounded-[2rem] font-black uppercase text-xs tracking-[0.2em] shadow-xl shadow-blue-900/30 active:scale-95 transition-transform">
              Free Assessment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}