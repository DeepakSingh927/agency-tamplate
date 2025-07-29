import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Make sure the path is correct
import HeroSection from "./pages/HeroSection";
import VideoSection from "./pages/VideoSection";
import WhatWeDo from "./components/WhatWeDo";
import BrandExperience from "./components/BrandExperience";
import PricingPlans from "./components/PricingPlans";
import DoubleSlider from "./components/DoubleSlider"; 
import  ControlledVideoSwiper from "./components/Testimonials"; 

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/herosection" element={<HeroSection />} />
        <Route path="/videosection" element={<VideoSection />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/brandexperience" element={<BrandExperience />} />
        <Route path="/PricingPlans" element={<PricingPlans />} />
        <Route path="/doubleslider" element={<DoubleSlider />} />
        <Route path="/controlledvideoswiper" element={< ControlledVideoSwiper />} />






        {/* <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
