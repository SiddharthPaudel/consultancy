import React from "react";
import { ArrowRight, Calendar } from "lucide-react";
import blog1 from "../../images/blog.jpeg";
import blog2 from "../../images/blog2.jpeg";
import blog3 from "../../images/blog5.jpeg";

const blogs = [
  {
    title: "JLPT vs NAT-Test: Which one for your COE?",
    description: "A detailed comparison of the most common Japanese language proficiency exams for student visa eligibility.",
    image: blog1,
    date: "Jan 12, 2026",
    category: "Exam Prep"
  },
  {
    title: "Living in Osaka vs Tokyo as a Student",
    description: "Cost of living, part-time job opportunities, and lifestyle differences between Japan's two biggest cities.",
    image: blog2,
    date: "Feb 03, 2026",
    category: "Student Life"
  },
  {
    title: "Understanding the COE Documentation",
    description: "A complete guide on the Certificate of Eligibility (COE) process and how to avoid common rejection reasons.",
    image: blog3,
    date: "Feb 18, 2026",
    category: "Visa Guide"
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="bg-white py-20 font-poppins">
      <div className="max-w-7xl mx-auto px-6">

        {/* COMPACT HEADER */}
        <div className="text-center mb-16">
          <p className="text-blue-800 font-black uppercase tracking-[0.4em] text-[10px] mb-3">
            Knowledge Hub
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-5">
            Latest Blogs & <span className="text-blue-800">Updates</span>
          </h2>
          <div className="w-12 h-1 bg-blue-800 mx-auto rounded-full opacity-30" />
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <article key={index} className="flex flex-col group cursor-pointer">
              
              {/* Image Container - Solid & Clean */}
              <div className="relative w-full h-64 rounded-[1.5rem] overflow-hidden mb-6 border border-slate-100 shadow-sm">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 object-top"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Metadata - Tiny & Professional */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[9px] font-black uppercase tracking-widest text-blue-800 bg-blue-50 px-2 py-1 rounded">
                  {blog.category}
                </span>
                <div className="flex items-center gap-1 text-slate-400">
                  <Calendar size={12} />
                  <span className="text-[10px] font-bold">{blog.date}</span>
                </div>
              </div>

              {/* Title - Scaled Down */}
              <h3 className="text-lg font-black text-slate-900 leading-tight mb-3 group-hover:text-blue-800 transition-colors duration-300">
                {blog.title}
              </h3>

              {/* Description - Smaller text */}
              <p className="text-slate-500 text-xs leading-relaxed mb-5 line-clamp-2">
                {blog.description}
              </p>

              {/* Read More Link */}
              {/* <div className="mt-auto flex items-center gap-2 text-blue-800 font-black text-[10px] uppercase tracking-widest group-hover:gap-3 transition-all">
                Read Full Article 
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </div> */}
            </article>
          ))}
        </div>

        {/* Centered Bottom CTA */}
        {/* <div className="mt-16 text-center">
          <button className="px-8 py-3.5 bg-blue-800 text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-xl hover:bg-slate-900 transition-all duration-300 shadow-lg shadow-blue-800/10">
            View All Insights
          </button>
        </div> */}

      </div>
    </section>
  );
}