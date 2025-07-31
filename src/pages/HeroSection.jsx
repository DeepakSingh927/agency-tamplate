import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import WhatWeDo from "../components/WhatWeDo";
import VideoSection from "./VideoSection";
import BrandExperience from "../components/BrandExperience";
import PricingPlans from "../components/PricingPlans";
import DoubleSlider from "../components/DoubleSlider";
import ControlledVideoSwiper from "../components/Testimonials";
import FAQComponent from "../components/FAQComponent";
import PixelNestFooter from "../components/Footer";

export default function HeroSection() {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      headingRef.current,
      { y: -90, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5 }
    ).fromTo(
      subheadingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.5" // overlap animation
    );
  }, []);
  return (
    <>
      <Navbar />
      <section className="bg-white text-center px-4 pt-10 md:pt-20 pb-0 md:pb-0">
        <div className="w-full max-w-6xl mx-auto">
          {/* Heading */}
          <h1
            ref={headingRef}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-inter text-black leading-tight md:leading-[1.1]"
          >
            WE CREATE <span className="text-lime-400">FAST & POWERFUL</span>
            <br />
            WEBSITES FOR AGENCY
          </h1>

          {/* Subheading */}
          <p
            ref={subheadingRef}
            className="text-gray-900 mt-6 md:mt-8 text-lg md:text-2xl font-inter max-w-3xl mx-auto leading-relaxed"
          >
            Growing a business is hard. We make it easier, more predictable,
            less stressful—and actually fun.
          </p>

          {/* Input + Button */}
          <div className="mt-8 sm:mt-12 px-4 w-full font-inter flex justify-center">
            <div className="flex w-full max-w-[90%] sm:max-w-2xl mx-auto rounded-full overflow-hidden">
              {/* Input Side */}
              <div className="flex flex-1 items-center bg-[#151515] px-4 sm:px-6 py-3 sm:py-4">
                <span className="text-xl sm:text-2xl mr-2">👋</span>
                <input
                  type="text"
                  placeholder="Enter your Email or Phone Number here"
                  className="w-full bg-transparent text-white placeholder:text-gray-300 text-base sm:text-lg focus:outline-none"
                />
              </div>

              {/* Button Side */}
              <button className="bg-lime-400 hover:bg-lime-300 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition whitespace-nowrap">
                Do it
              </button>
            </div>
          </div>

          {/* Stars + Reviews */}
          <div className="mt-8 text-lg text-gray-900 flex justify-center items-center gap-2">
            <div className="text-yellow-400 text-xl">★★★★★</div>
            <span>4.9 stars out of 6,273 reviews</span>
          </div>
        </div>
      </section>
      <VideoSection />
      <WhatWeDo />
      <BrandExperience />
      <PricingPlans />
      <DoubleSlider />
      <ControlledVideoSwiper />
      <FAQComponent />
      <PixelNestFooter />
    </>
  );
}
