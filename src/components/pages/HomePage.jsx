import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../HeroSection/HeroSection'
import AbroadSection from '../AbroadSection/AbroadSection'
import Enrollment from '../Enrollment/Enrollment'
import ServicesSection from '../Service/Service'
import AboutUsSection from '../AboutUs/AboutUs'
import ExploreActionsSection from '../ExploreSection/ExploreSection'
import ContactUsSection from '../ContactUs/ContactUs'
import BlogSection from '../Blogs/Blogs'
import AbroadProcedure from '../AbroadStep/AbroadStep'

export default function HomePage() {
    const location = useLocation();

    useEffect(() => {
        // 1. Check if we have a scroll request
        if (location.state?.scrollTo) {
            const targetId = location.state.scrollTo;
            
            // 2. We use 600ms to ensure all images above the contact form are loaded
            const timer = setTimeout(() => {
                const element = document.getElementById(targetId);
                
                if (element) {
                    // 3. Calculate position manually for 100% accuracy
                    const headerOffset = 100; // Adjust this for your header height
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }, 600); 

            // 4. Clean up state so it doesn't scroll again on refresh
            window.history.replaceState({}, document.title);
            
            return () => clearTimeout(timer);
        }
    }, [location]);

    return(
        <div className="flex flex-col">
              <Hero/>
              {/* <AbroadSection/> */}
              {/* <Enrollment/> */}
              <ServicesSection/>
              <AboutUsSection/>
              <ExploreActionsSection/>
              <AbroadProcedure/>
              
              {/* Added padding to ensure the scroll has enough "room" to land */}
              <div id="contact" className="scroll-mt-24 pt-10">
                <ContactUsSection/>
              </div>

              {/* <BlogSection/> */}
        </div>
    )
}