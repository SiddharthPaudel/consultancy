import { useState,useEffect } from 'react'
import { BrowserRouter, Routes, Route ,useLocation} from "react-router-dom";
import './App.css'
import HomePage from './components/pages/HomePage'
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import AboutUsSection from './components/AboutUs/AboutUs';
import ServicesSection from './components/Service/Service';
import BlogSection from './components/Blogs/Blogs';
import ContactUsSection from './components/ContactUs/ContactUs';
import JLPTPage from './components/TestPreparation/Jlpt';
import NatTestPage from './components/TestPreparation/Nat';
import JLCertPage from './components/TestPreparation/JLcert';
// import COEProcessPage from './components/Ceo/Ceo';
import TokyoPage from './components/Destination/Tokyo';
import OsakaPage from './components/Destination/Osaka';
import FukuokaPage from './components/Destination/Fukuoka';
import KyotoPage from './components/Destination/Kyoto';
import HostelPage from './components/Service/Hostel';
import UniversityPage from './components/Study & Work/Universities';
import EducationPathways from './components/Study & Work/College';
import SSWPage from './components/Study & Work/SswVisa';
import LanguageSchoolPage from './components/Service/Language';
import DocumentationPage from './components/Service/Documentation';
import AirfarePage from './components/Service/AirFare';
import ExploreActionsSection from './components/ExploreSection/ExploreSection';
import VisaAssistancePage from './components/Visa/Visa';
import OrientationPage from './components/Orientation/Orientation';


// Add this to your main App.js or a Layout component
// useEffect(() => {
//   window.googleTranslateElementInit = () => {
//     new window.google.translate.TranslateElement({
//       pageLanguage: 'en',
//       includedLanguages: 'ja,en', // Only show Japanese and English
//       layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//       autoDisplay: false,
//     }, 'google_translate_element');
//   };

//   const addScript = document.createElement('script');
//   addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//   document.body.appendChild(addScript);
// }, []);

// 1. CREATE THE SCROLL UTILITY
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // If the URL has a hash (like #contact), let the HomePage handle it.
    // Otherwise, jump to the very top (0,0) immediately.
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      {/* 2. PLACE IT HERE - INSIDE BROWSERROUTER BUT OUTSIDE ROUTES */}
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/explore-section' element={<ExploreActionsSection/>}/>
        <Route path='/about' element={<AboutUsSection/>}/>
        <Route path='/services' element={<ServicesSection/>}/>
        <Route path='/contact' element={<ContactUsSection/>}/>
        <Route path='/blog' element={<BlogSection/>}/>
        <Route path="/test-preparation/jlpt" element={<JLPTPage />} />
        <Route path="/test-preparation/nat" element={<NatTestPage />} />
        <Route path='/test-preparation/jlcert' element={<JLCertPage/>}/>
        <Route path='/visa-assistance' element={<VisaAssistancePage/>}/>
        <Route path="/tokyo" element={<TokyoPage/>}/>
        <Route path="/osaka" element={<OsakaPage/>}/>
        <Route path="/fukuoka" element={<FukuokaPage/>}/>
        <Route path='/kyoto' element={<KyotoPage/>}/>
        <Route path="/services/hostel" element={<HostelPage />} />
        <Route path="/study-work/universities" element={<UniversityPage />} />
        <Route path="/study-work/college" element={<EducationPathways />} />
        <Route path="/study-work/ssw-visa" element={<SSWPage />} />
        <Route path="/services/language-classes" element={<LanguageSchoolPage />} />
        <Route path="/services/documentation" element={<DocumentationPage />} />
        <Route path="/services/airfare" element={<AirfarePage />} />
        <Route path="/orientation" element={<OrientationPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App