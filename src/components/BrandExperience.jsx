import React from "react";

const brandImages = [
  "/assets/brands-1.png",
  "/assets/brands-2.png",
  "/assets/brands-3.png",
  "/assets/brands-4.png",
  "/assets/brands-5.png",
];

const BrandExperience = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-10">
      <h2 className="text-center text-xl md:text-3xl font-semibold mb-10 tracking-widest">
        BRAND EXPERIENCE
      </h2>

      {/* Gradient blur overlays */}
      <div className="absolute top-0 left-0 h-full w-16 sm:w-20 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-16 sm:w-20 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

      {/* Scrolling logos container */}
      <div className="overflow-hidden relative">
        <div className="flex gap-8 sm:gap-12 md:gap-16 whitespace-nowrap animate-scroll">
          {/* Render logos multiple times for seamless infinite loop */}
          {[...brandImages, ...brandImages, ...brandImages].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Brand ${(idx % brandImages.length) + 1}`}
              className="h-16 sm:h-20 md:h-24 object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Custom animation styles with responsive speeds */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 15s linear infinite;
        }

        /* Faster animation on mobile */
        @media (max-width: 640px) {
          .animate-scroll {
            animation: scroll 8s linear infinite;
          }
        }

        /* Medium speed on tablets */
        @media (min-width: 641px) and (max-width: 1024px) {
          .animate-scroll {
            animation: scroll 12s linear infinite;
          }
        }

        /* Slower on large screens */
        @media (min-width: 1025px) {
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default BrandExperience;
