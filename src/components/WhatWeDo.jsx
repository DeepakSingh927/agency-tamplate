import { FaShopify, FaWordpressSimple } from "react-icons/fa";
import { PiBrowsersThin } from "react-icons/pi";
import { FiArrowRight } from "react-icons/fi";

const WhatWeDo = () => {
  const services = [
    {
      title: "Shopify Development",
      description:
        "Craft high-performance Shopify stores that boost your sales and turn visitors into loyal customers",
      icon: <FaShopify size={28} />,
      bg: "bg-[#EEEEEE] text-black",
      hover: "hover:bg-black hover:text-lime-300",
    },
    {
      title: "WordPress Development",
      description:
        "Build sleek, SEO-friendly WordPress sites that scale with your business.",
      icon: <FaWordpressSimple size={28} />,
      bg: "bg-[#EEEEEE] text-black",
      hover: "hover:bg-black hover:text-lime-300",
    },
    {
      title: "UI/UX Design",
      description:
        "Designs that delight — modern, mobile-first, and made for maximum user engagement.",
      icon: <PiBrowsersThin size={28} />,
      bg: "bg-[#EEEEEE] text-black",
      hover: "hover:bg-black hover:text-lime-300",
    },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-white via-lime-40 to-white px-6">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wider mb-10 text-black">
          WHAT WE DO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer ${service.bg} ${service.hover} group`}
              style={{
                boxShadow:
                  "0 4px 24px 0 rgba(0,0,0,0.08), 0 1.5px 6px 0 rgba(0,0,0,0.03)",
              }}
            >
              <div className="flex flex-col gap-4 text-left">
                <div className="text-2xl group-hover:text-lime-300 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-lime-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm group-hover:text-lime-100 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
              <div className="mt-6">
                <button className="bg-lime-300 w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-lime-400 transition-all duration-200 group-hover:rotate-45">
                  <FiArrowRight className="text-black text-xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
