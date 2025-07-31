 import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import VideoSection from "./pages/VideoSection";
import WhatWeDo from "./components/WhatWeDo";
import BrandExperience from "./components/BrandExperience";
import PricingPlans from "./components/PricingPlans";
import DoubleSlider from "./components/DoubleSlider";
import ControlledVideoSwiper from "./components/Testimonials";
import FAQComponent from "./components/FAQComponent";
import PixelNestFooter from "./components/Footer"; 


function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<HeroSection />} />

        {/* Other routes */}
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/herosection" element={<HeroSection />} />
        <Route path="/videosection" element={<VideoSection />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/brandexperience" element={<BrandExperience />} />
        <Route path="/pricingplans" element={<PricingPlans />} />
        <Route path="/doubleslider" element={<DoubleSlider />} />
        <Route path="/controlledvideoswiper" element={<ControlledVideoSwiper />} />
        <Route path="/faqcomponent" element={<FAQComponent />} />
        <Route path="/pixelnestfooter" element={<PixelNestFooter />} />
      </Routes>
    </Router>
  );
}

export default App;
