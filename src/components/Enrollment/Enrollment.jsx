import React, { useEffect, useState, useRef } from "react";

const stats = [
  {
    number: 150000,
    suffix: "+",
    label: "International Students Assisted",
  },
  {
    number: 22000,
    suffix: "+",
    label: "Scholarships Approved",
  },
  {
    number: 40000,
    suffix: "+",
    label: "Language Class Enrollments",
  },
];

export default function EnrollmentStats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const startAnimation = () => {
    const duration = 2000; // Faster, snappier duration
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easing function
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const nextCounts = stats.map((stat) => 
        Math.floor(easeProgress * stat.number)
      );

      setCounts(nextCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <section 
      ref={sectionRef} 
      className="bg-white py-20 font-poppins"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 items-start">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group"
            >
              {/* Animated Number: 3xl on mobile, 4xl on desktop */}
              <p className="text-3xl md:text-4xl font-black text-blue-800 tracking-tight mb-2">
                {counts[index].toLocaleString()}
                <span className="text-blue-800">{stat.suffix}</span>
              </p>
              
              {/* Divider Line */}
              <div className="w-12 h-1 bg-blue-800/10 mb-4 group-hover:w-20 group-hover:bg-blue-800 transition-all duration-500 rounded-full" />
              
              {/* Label */}
              <h3 className="text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-slate-500 max-w-[200px] leading-relaxed">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}