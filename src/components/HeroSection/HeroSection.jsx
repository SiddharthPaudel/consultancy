import { useEffect, useState } from "react";
import { GraduationCap, ArrowRight, Star, CheckCircle } from "lucide-react";
import hero1 from "../../images/tokyohero.jpg";
import hero2 from "../../images/osakahero.jpg";
import hero3 from "../../images/fukakohero.jpg";
import { useNavigate } from "react-router-dom"; // Use navigate for internal state

const slides = [
  {
    title: "Your Gateway to Study and Work Opportunities in Japan ",
    description: "Master the JLPT and secure your place in Japan's prestigious universities and language schools.",
    image: hero1,
    tag: "Authorized Japan Partner"
  },
  {
    title: "Your Gateway to Study and Work Opportunities in Japan ",
    description: "Expert guidance for MEXT Scholarships and specialized vocational training in the heart of Japan.",
    image: hero3,
    tag: "98% COE Approval Rate"
  },
  {
    title: "Your Gateway to Study and Work Opportunities in Japan ",
    description: "From N5 preparation to Certificate of Eligibility (COE) processing, we handle every detail.",
    image: hero2,
    tag: "Certified Language Experts"
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7500);
    return () => clearInterval(timer);
  }, []);

  // --- SCROLL HANDLERS ---

  // 1. For "Apply for 2026 Intake" -> Scroll to Contact
  const scrollToContact = () => {
    // We navigate to the same page but pass the state your HomePage.jsx expects
    navigate("/", { state: { scrollTo: "contact" } });
  };

  // 2. For "Explore Cities" -> Scroll to AbroadSection
  const scrollToAbroad = () => {
    const element = document.getElementById("studyjapan"); // This is the ID in your AbroadSection/JapanStudyDestinations
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative h-[90vh] md:h-[100vh] w-full overflow-hidden bg-slate-950 font-poppins">
      
      {/* Background Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-linear ${
            index === i ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
          }`}
          style={{ willChange: 'opacity' }} 
        >
          <img 
            src={slide.image} 
            alt="Study in Japan" 
            className="w-full h-full object-cover object-top"
            loading={i === 0 ? "eager" : "lazy"} 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
        </div>
      ))}

      <div className="relative z-20 h-full max-w-[1440px] mx-auto px-6 md:px-16 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          
          <div 
            key={index} 
            className="lg:col-span-7 space-y-6 md:space-y-8 animate-fadeInUp"
          >
            <div className="inline-flex items-center gap-2 bg-blue-800/20 px-4 py-2 rounded-full border border-blue-800/30 backdrop-blur-sm">
              <Star size={14} className="text-blue-400" fill="currentColor" />
              <span className="text-blue-100 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                {slides[index].tag}
              </span>
            </div>

            <div className="min-h-[160px] md:min-h-[200px]">
              <h1 className="text-4xl md:text-4xl font-black text-white leading-[1.1]">
                {slides[index].title.split("Japan").map((text, i, arr) => (
                  <span key={i}>
                    {text}
                    {i !== arr.length - 1 && <span className="text-blue-800">Japan</span>}
                  </span>
                ))}
              </h1>
              <p className="mt-6 text-slate-300 text-base md:text-xl max-w-lg leading-relaxed">
                {slides[index].description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {/* UPDATED BUTTON 1 */}
              <button 
                onClick={scrollToContact}
                className="group px-8 py-4 bg-blue-800 hover:bg-blue-900 text-white font-bold rounded-2xl transition-all duration-300 flex items-center gap-3 shadow-xl"
              >
                Apply for 2026 Intake
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* UPDATED BUTTON 2 */}
              {/* <button 
                onClick={scrollToAbroad}
                className="px-8 py-4 border-2 border-white/10 hover:border-blue-800 hover:bg-blue-800/10 text-white font-bold rounded-2xl transition-all duration-300"
              >
                Explore Cities
              </button> */}
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:flex justify-end pr-4">
            <div className="relative bg-white/5 border border-white/10 p-10 rounded-[3rem] shadow-2xl w-[400px]">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 bg-blue-800 rounded-2xl flex items-center justify-center">
                  <GraduationCap size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl leading-none">Why Japan?</h3>
                  <p className="text-blue-400 text-[10px] mt-2 font-black tracking-[0.25em] uppercase">Trusted Pathway</p>
                </div>
              </div>

              <ul className="space-y-6">
                {[
                  "JLPT N5 to N1 Preparation",
                  "COE & Visa Documentation",
                  "Part-time Job Assistance",
                  "Scholarship Support (MEXT)"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/90">
                    <CheckCircle size={18} className="text-blue-500 flex-shrink-0" />
                    <span className="text-sm font-bold tracking-wide">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="absolute -bottom-6 -right-6 bg-blue-800 p-6 rounded-3xl shadow-2xl border-4 border-slate-950">
                <p className="text-white font-black text-2xl leading-none">100%</p>
                <p className="text-blue-200 text-[8px] font-bold uppercase mt-1">Free Consultation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 md:left-16 flex items-center gap-4 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all duration-300 rounded-full h-1.5 ${
              index === i ? "w-12 bg-blue-800" : "w-3 bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}