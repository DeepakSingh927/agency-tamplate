import React, { useState } from "react";
import { Plus, Minus, Phone, Mail, MapPin } from "lucide-react";

const FAQComponent = () => {
  const [expandedItems, setExpandedItems] = useState([0]); // First item expanded by default

  const faqData = [
    {
      id: 0,
      question: "Why is digital marketing important for my business?",
      answer:
        "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
    },
    {
      id: 1,
      question:
        "How can digital marketing help improve my website's visibility?",
      answer:
        "Digital marketing improves website visibility through SEO optimization, content marketing, social media promotion, paid advertising campaigns, and local search optimization. These strategies help your website rank higher in search results, attract more organic traffic, and increase your online presence across multiple digital channels.",
    },
    {
      id: 2,
      question:
        "How long does it take to see results from digital marketing efforts?",
      answer:
        "Digital marketing results vary depending on the strategy and goals. SEO typically takes 3-6 months for significant results, while PPC campaigns can show immediate traffic. Social media marketing builds momentum over 2-3 months, and content marketing usually shows results within 6-12 months. The key is consistency and patience for long-term success.",
    },
    {
      id: 3,
      question:
        "How do you measure the success of digital marketing campaigns?",
      answer:
        "We measure success through various KPIs including website traffic, conversion rates, lead generation, ROI, click-through rates, engagement metrics, brand awareness, and customer acquisition cost. We use tools like Google Analytics, social media insights, and custom dashboards to provide comprehensive reporting and track campaign performance.",
    },
  ];

  const toggleExpanded = (id) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white px-4 md:px-8 xl:px-14 relative">
      <div className="w-full max-w-7xl mx-auto py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Side - Company Info */}
          <div className="w-full lg:w-2/5">
            <div className="lg:sticky lg:top-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                PixelNest Agency FAQs
              </h1>

              <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6 lg:mb-8">
                As a leading digital marketing agency, we are dedicated to
                providing comprehensive educational resources and answering
                frequently asked questions to help our clients.
              </p>

              {/* More Questions Button */}
              <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3 px-6 rounded-full transition-colors duration-300 mb-8 lg:mb-12 text-sm lg:text-base">
                More Questions
              </button>

              {/* Contact Information */}
              <div className="space-y-4 lg:space-y-6">
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">
                  Contact Us
                </h3>

                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm lg:text-base">(406) 555-0120</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm lg:text-base">
                    info@pixelnest.com
                  </span>
                </div>

                <div className="flex items-start gap-3 text-gray-600">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm lg:text-base leading-relaxed">
                    2972 Westheimer Rd. Santa Ana, Illinois 85486
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="w-full lg:w-3/5">
            <div className="space-y-4">
              {faqData.map((item) => {
                const isExpanded = expandedItems.includes(item.id);

                return (
                  <div key={item.id} className="border-b border-gray-200 pb-4">
                    <button
                      onClick={() => toggleExpanded(item.id)}
                      className="w-full flex justify-between items-start gap-4 text-left group hover:text-gray-700 transition-colors duration-200"
                    >
                      <h3 className="text-base lg:text-lg font-semibold text-gray-900 group-hover:text-gray-700 leading-tight">
                        {item.question}
                      </h3>

                      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                        {isExpanded ? (
                          <Minus className="w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-colors" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-colors" />
                        )}
                      </div>
                    </button>

                    {/* Expandable Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isExpanded
                          ? "max-h-96 opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pr-8">
                        <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
