import { useEffect, useState } from "react";
import { GraduationCap, ArrowRight, Star, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next"; // Added
import hero1 from "../../images/tokyohero.jpg";
import hero2 from "../../images/osakahero.jpg";
import hero3 from "../../images/fukakohero.jpg";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const { t } = useTranslation(); // Initialize hook
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  // Moving slides inside the component so they can use the t() function
  const slides = [
    {
      titlePart1: t("hero_title_part1"),
      titlePart2: t("hero_title_part2"),
      description: t("hero_slide0_desc"),
      image: hero1,
      tag: t("hero_slide0_tag")
    },
    {
      titlePart1: t("hero_title_part1"),
      titlePart2: t("hero_title_part2"),
      description: t("hero_slide1_desc"),
      image: hero3,
      tag: t("hero_slide1_tag")
    },
    {
      titlePart1: t("hero_title_part1"),
      titlePart2: t("hero_title_part2"),
      description: t("hero_slide2_desc"),
      image: hero2,
      tag: t("hero_slide2_tag")
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToContact = () => {
    navigate("/", { state: { scrollTo: "contact" } });
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
          
          <div key={index} className="lg:col-span-7 space-y-6 md:space-y-8 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-blue-800/20 px-4 py-2 rounded-full border border-blue-800/30 backdrop-blur-sm">
              <Star size={14} className="text-blue-400" fill="currentColor" />
              <span className="text-blue-100 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                {slides[index].tag}
              </span>
            </div>

            <div className="min-h-[160px] md:min-h-[200px]">
              <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.1]">
                {slides[index].titlePart1} 
                <span className="text-blue-800">{t("hero_work")}</span> 
                {slides[index].titlePart2}
              </h1>
              <p className="mt-6 text-slate-300 text-base md:text-xl max-w-lg leading-relaxed">
                {slides[index].description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={scrollToContact}
                className="group px-8 py-4 bg-blue-800 hover:bg-blue-900 text-white font-bold rounded-2xl transition-all duration-300 flex items-center gap-3 shadow-xl"
              >
                {t("hero_btn_apply")}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:flex justify-end pr-4">
            <div className="relative bg-white/5 border border-white/10 p-10 rounded-[3rem] shadow-2xl w-[400px]">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 bg-blue-800 rounded-2xl flex items-center justify-center">
                  <GraduationCap size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl leading-none">{t("hero_card_title")}</h3>
                  <p className="text-blue-400 text-[10px] mt-2 font-black tracking-[0.25em] uppercase">{t("hero_card_tag")}</p>
                </div>
              </div>

              <ul className="space-y-6">
                {[
                  t("hero_feature1"),
                  t("hero_feature2"),
                  t("hero_feature3"),
                  t("hero_feature4")
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/90">
                    <CheckCircle size={18} className="text-blue-500 flex-shrink-0" />
                    <span className="text-sm font-bold tracking-wide">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="absolute -bottom-6 -right-6 bg-blue-800 p-6 rounded-3xl shadow-2xl border-4 border-slate-950 text-center">
                <p className="text-white font-black text-2xl leading-none">100%</p>
                <p className="text-blue-200 text-[8px] font-bold uppercase mt-1">{t("hero_card_footer")}</p>
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