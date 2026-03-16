import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link
// Replace these with your Japan-specific images
import tokyo from "../../images/tokyo.jpeg"; 
import osaka from "../../images/osaka.jpeg";
import fukuoka from "../../images/fukaku.jpeg";
import kyoto from "../../images/kyoto.jpeg";

const destinations = [
  {
    name: "Tokyo",
    tagline: "The Global Hub",
    description: "Home to Japan's most prestigious universities and limitless career opportunities in a fast-paced metropolis.",
    image: tokyo,
    path: "/tokyo" // Add the path to your created page
  },
  {
    name: "Osaka",
    tagline: "Culture & Commerce",
    description: "Known as 'Japan's Kitchen,' Osaka offers a friendly atmosphere with top-tier vocational and language schools.",
    image: osaka,
    path: "/osaka"
  },
  {
    name: "Kyoto",
    tagline: "Academic Tradition",
    description: "Study in the cultural heart of Japan, perfect for students seeking a peaceful environment and historic excellence.",
    image: kyoto,
    path: "/kyoto"
  },
  {
    name: "Fukuoka",
    tagline: "Innovation & Growth",
    description: "A rising startup hub with a lower cost of living, making it an ideal choice for international students.",
    image: fukuoka,
    path: "/fukuoka"
  },
];

export default function JapanStudyDestinations() {
  return (
    <section id="studyjapan" className="font-poppins py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.25em] text-blue-800 uppercase mb-3">
            Regional Excellence
          </h2>
          <h3 className="text-3xl md:text-3xl font-black text-slate-900 leading-tight">
            Discover Your Ideal <span className="text-blue-800 ">Japanese City</span>
          </h3>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-sm font-medium">
            From the neon lights of Shinjuku to the quiet temples of Kyoto, find the perfect environment for your studies.
          </p>
          <div className="w-16 h-1 bg-blue-800 mx-auto mt-8 rounded-full opacity-100" />
        </div>

        {/* Cards Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((city, i) => (
            <Link
              to={city.path}
              key={i}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-blue-800/10 hover:shadow-[0_30px_60px_-15px_rgba(30,58,138,0.15)] transition-all duration-500 cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                  <MapPin size={12} className="text-blue-800" />
                  <span className="text-[10px] font-bold text-slate-900 uppercase tracking-tighter">Japan</span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-blue-800 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                  {city.tagline}
                </p>
                <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-800 transition-colors">
                  {city.name}
                </h4>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                  {city.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-50 group-hover:border-blue-50 transition-colors">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-blue-800 transition-colors">
                    Explore Program
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-blue-800 group-hover:text-white group-hover:rotate-12 transition-all duration-500 flex items-center justify-center shadow-sm">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}