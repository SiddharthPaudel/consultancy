import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ArrowUpRight, BookOpen, GraduationCap, FileCheck, Home, Globe, Languages } from "lucide-react";
import bgImage from "../../images/service1.png";

const services = [
  {
    icon: <Languages size={24} />,
    title: "Japanese Language Classes",
    description: "Core training in Speaking, Listening, Reading, and Writing. Build the confidence to adapt easily to life in Japan.",
    to: "/services/language-schools" // Existing path
  },
  {
    icon: <BookOpen size={24} />,
    title: "Language Test Prep",
    description: "Professional preparation for JLPT, NAT-TEST, JLCT, and J-CERT (N5, N4, N3) with proven exam strategies.",
    to: "/test-preparation/jlpt" // Added path
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Academic Enrollment",
    description: "Placement into Language Schools, Colleges, and Universities for Bachelor's, Master's, and Graduate programs.",
    to: "/study-work/college" // Added path
  },
  {
    icon: <FileCheck size={24} />,
    title: "Documentation & Visa",
    description: "End-to-end support for admission processing, documentation guidance, and expert visa application assistance.",
    to: "/services/documentation" // Path to your new Visa page
  },
  {
    icon: <Home size={24} />,
    title: "Hostel Arrangement",
    description: "Safe and reliable accommodation arrangements in Japan to ensure a smooth transition and comfortable stay.",
    to: "/services/hostel" // Added path
  },
  {
    icon: <Globe size={24} />,
    title: "Career & Orientation",
    description: "Professional career counseling and pre-departure orientations to help you choose the right program for your goals.",
    to: "/orientation" // Added path
  },
];

export default function ServicesSection() {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <section id="services" className="bg-white py-24 font-poppins overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 border-l-4 border-blue-800 pl-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-800 text-[10px] font-black tracking-[0.5em] uppercase mb-4">
              Our Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] uppercase ">
              Premium <span className="text-blue-800 underline decoration-blue-100 underline-offset-8">Japan</span> Admission Services
            </h3>
          </div>
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest leading-relaxed max-w-sm">
            Namo Buddha Consultancy provides end-to-end solutions for students aiming for excellence in the Land of the Rising Sun.
          </p>
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[4rem] bg-slate-50 shadow-2xl shadow-blue-900/5 border border-slate-100">
          
          {/* LEFT: IMAGE SECTION */}
          <div className="lg:col-span-5 relative min-h-[500px] lg:min-h-full">
            <img 
              src={bgImage} 
              alt="Study in Japan" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-slate-900/80 backdrop-blur-[1px] flex flex-col justify-end p-12">
              <div className="space-y-4">
                <div className="w-16 h-1.5 bg-blue-500 rounded-full" />
                <h4 className="text-white text-3xl font-black uppercase italic leading-tight">
                  Start Your <br /> Global Career <br /> With Us.
                </h4>
                <p className="text-blue-100/70 text-[10px] font-black uppercase tracking-[0.2em]">
                  Trusted by 1000+ Successful Students
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: SERVICE CARDS */}
          <div className="lg:col-span-7 p-8 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  onClick={() => navigate(service.to)} // Entire card is now clickable
                  className="group flex flex-col items-start cursor-pointer"
                >
                  <div className="flex justify-between items-center w-full mb-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-800 shadow-sm border border-slate-100 group-hover:bg-blue-800 group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <span className="text-3xl font-black text-slate-200 group-hover:text-blue-100 transition-colors">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-black text-slate-900 mb-3 group-hover:text-blue-800 transition-colors duration-300 uppercase tracking-tight">
                    {service.title}
                  </h4>
                  <p className="text-slate-500 text-[10px] leading-relaxed font-bold uppercase tracking-wider mb-6">
                    {service.description}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-blue-800 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-[9px] font-black uppercase tracking-tighter">Read More</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}