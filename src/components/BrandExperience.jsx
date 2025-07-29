import React from "react";

const brandImages = [
    "/src/assets/brands (1).png",
    "/src/assets/brands (2).png",
    "/src/assets/brands (3).png",
    "/src/assets/brands (4).png",
    "/src/assets/brands (5).png",
];

const BrandExperience = () => {
    return (
        <section className="relative w-full bg-white overflow-hidden py-10">
            <h2 className="text-center text-xl md:text-3xl font-semibold mb-10 tracking-widest">
                BRAND EXPERIENCE
            </h2>

            {/* Gradient blur overlays */}
            <div className="absolute top-0 left-0 h-full w-20 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 h-full w-20 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

            {/* Scrolling logos */}
            <div className="overflow-hidden relative">
                <div className="flex gap-12 whitespace-nowrap animate-scroll">
                    {/* Render all logos twice for seamless loop */}
                    {[...brandImages, ...brandImages].map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt="Brands"
                            className="h-20 md:h-24 object-contain"
                        />
                    ))}
                </div>
            </div>

            {/* Custom animation style */}
            <style>
                {`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-scroll {
                        animation: scroll 30s linear infinite;
                    }
                `}
            </style>
        </section>
    );
};

export default BrandExperience;
