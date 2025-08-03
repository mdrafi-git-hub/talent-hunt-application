import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Pairs from "./Components/Pairs";
import FreeTrail from "./Components/FreeTrail";
import Works from "./Components/Works";
import Pricess from "./Components/Pricess";
import ChooseUs from "./Components/ChooseUs";
import JoinUs from "./Components/JoinUs";
import FAQComponent from "./Components/FAQComponent";
import SideBarDashboard from "./Components/SideBarDashboard";
import ReviewSection from "./Components/ReviewSection";
import BlogCarousel from "./Components/BlogCarousel";
import Footer from "./Components/Footer";
import HowItWorks from "./Components/HowItWorks";
import CertificateSection from "./Components/Certification";





import Contact from "./Pages/Contact";
import Apply from "./Pages/Apply";



const App = () => {
  
  
  return (
    <Router>
      <Routes>
      
        <Route
          path="/"
          element={
            <div>
              <Navbar />

              <div id="home">
                <Hero />
              </div>

              <div id="pairs">
                <Pairs />
              </div>

              <div id="free-trial">
                <FreeTrail  />
              </div>

              <div id="how-it-works">
                <HowItWorks />
              </div>

              <div id="certificate">
                <CertificateSection />
              </div>

              <div id="choose-us">
                <ChooseUs />
              </div>

             

              <div id="join-us">
                <JoinUs />
              </div>

              <div id="faqs">
                <FAQComponent />
              </div>

              <div id="dashboard">
                {/* <SideBarDashboard /> */}
              </div>

              <div id="reviews">
                <ReviewSection />
              </div>

              <div id="blogs">
                <BlogCarousel />
              </div>

              <div id="contact">
                <Contact />
              </div>


              <div id="footer">
                <Footer />
              </div>
              
            </div>
          }
        />

   
        <Route path="/Apply" element={<Apply />} />
        <Route path="/Contact" element={<Contact />} />
        
      </Routes>
    </Router>
  );
};

export default App;


