import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slidesTop = [
  { id: "slide1", img: "/assets/sliders-img/slider (1).jpg" },
  { id: "slide2", img: "/assets/sliders-img/slider (2).jpg" },
  { id: "slide3", img: "/assets/sliders-img/slider (3).jpg" },
  { id: "slide4", img: "/assets/sliders-img/slider (6).jpg" },
];

const slidesBottom = [
  { id: "slide4", img: "/assets/sliders-img/slider (4).jpg" },
  { id: "slide5", img: "/assets/sliders-img/slider (5).jpg" },
  { id: "slide6", img: "/assets/sliders-img/slider (6).jpg" },
  { id: "slide6", img: "/assets/sliders-img/slider (2).jpg" },
];

const DoubleSlider = () => {
  return (
    <div className="w-full bg-white py-10 overflow-hidden">
      <h2 className="text-center text-xl md:text-3xl font-semibold mb-10 tracking-widest">
        CHOOSE THE RIGHT PLAN FOR YOU
      </h2>

      {/* Top Swiper (Right to Left) */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        className="mb-8"
      >
        {slidesTop.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.img}
              alt={slide.id}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Swiper (Left to Right - reverseDirection) */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          reverseDirection: true,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
      >
        {slidesBottom.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.img}
              alt={slide.id}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DoubleSlider;
