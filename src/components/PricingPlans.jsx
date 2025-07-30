import React from "react";
import { Check, Flame } from "lucide-react";

export default function PricingPlans() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100  px-4 relative">
      {/* Background Image: above green bg, below cards */}
      <img
        src="/assets/Container.png"
        alt=""
        className="pointer-events-none select-none absolute top-0 left-0 w-full h-full object-cover opacity-90 z-0"
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center pt-10 mb-12">
          <h1 className="text-4xl font-bold text-gray-800 tracking-wider">
            CHOOSE THE RIGHT PLAN FOR YOU
          </h1>
        </div>

        {/* Pricing Cards and Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="flex flex-col">
            {/* Card */}
            <div className="bg-gray-800 rounded-2xl p-6 text-white mb-6">
              <h2 className="text-xl font-semibold text-green-400 mb-2">
                Basic Plan
              </h2>
              <div className="mb-2">
                <span className="text-4xl font-bold">$199</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Billed Yearly*</p>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Perfect for solo creators or businesses starting their digital
                journey.
              </p>

              <button className="w-full bg-lime-400 text-gray-800 py-3 rounded-lg font-semibold hover:bg-lime-300 transition-colors">
                Connect Now
              </button>
            </div>

            {/* Features outside card */}
            <div className="space-y-3">
              <div className="flex items-center gap-3   rounded-lg p-1">
                <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gray-800" />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  1 Website Audit
                </span>
              </div>
              <div className="flex items-center gap-3   rounded-lg p-1">
                <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gray-800" />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  2 Design Revisions
                </span>
              </div>
              <div className="flex items-center gap-3   rounded-lg p-1">
                <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gray-800" />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  Basic Hosting Setup
                </span>
              </div>
              <div className="flex items-center gap-3   rounded-lg p-1">
                <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gray-800" />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  Email Support Only
                </span>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="flex flex-col">
            {/* Card with badge */}
            <div className="relative mb-6">
              {/* Most Popular Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Flame className="w-3 h-3" />
                  MOST POPULAR
                  <Flame className="w-3 h-3" />
                </div>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6 text-white">
                <h2 className="text-xl font-semibold text-green-400 mb-2">
                  Pro Plan
                </h2>
                <div className="mb-2">
                  <span className="text-4xl font-bold">$299</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">Billed Yearly*</p>
                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                  Ideal for startups and agencies scaling their services and
                  looking for efficiency.
                </p>

                <button className="w-full bg-lime-400 text-gray-800 py-3 rounded-lg font-semibold hover:bg-lime-300 transition-colors">
                  Connect Now
                </button>
              </div>
            </div>

            {/* Features outside card */}
            <div className="space-y-3">
              <div className="flex items-center gap-3   rounded-lg p-1">
                <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gray-800" />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  5 Projects per Month
                </span>
              </div>
              <div className="flex items-center gap-3   rounded-lg p-1">
                <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gray-800" />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  Priority Design Revisions
                </span>
              </div>
              <div className="flex items-center gap-3   rounded-lg p-1">
                <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gray-800" />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  WordPress & Shopify Setup
                </span>
              </div>
              <div className="flex items-center gap-3   rounded-lg p-1">
                <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gray-800" />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  SEO Optimization (Basic)
                </span>
              </div>
              <div className="flex items-center gap-3   rounded-lg p-1">
                <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gray-800" />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  Chat + Email Support
                </span>
              </div>
            </div>
          </div>

          {/* Elite Plan */}
          <div className="flex flex-col">
            {/* Card */}
            <div className="bg-gray-800 rounded-2xl p-6 text-white mb-6">
              <h2 className="text-xl font-semibold text-green-400 mb-2">
                Elite Plan
              </h2>
              <div className="mb-2">
                <span className="text-4xl font-bold">$399</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Billed Yearly*</p>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Best for agencies managing multiple clients and large-scale
                digital operations.
              </p>

              <button className="w-full bg-lime-400 text-gray-800 py-3 rounded-lg font-semibold hover:bg-lime-300 transition-colors">
                Connect Now
              </button>
            </div>

            {/* Features outside card */}
            <div className="space-y-3">
              <div className="flex items-center gap-3   rounded-lg p-1">
                <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gray-800" />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  Unlimited Projects
                </span>
              </div>
              <div className="flex items-center gap-3   rounded-lg p-1">
                <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gray-800" />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  Custom Web & App Design
                </span>
              </div>
              <div className="flex items-center gap-3   rounded-lg p-1">
                <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gray-800" />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  WordPress, Shopify, Webflow
                </span>
              </div>
              <div className="flex items-center gap-3   rounded-lg p-1">
                <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gray-800" />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  Advanced SEO + Analytics Reports
                </span>
              </div>
              <div className="flex items-center gap-3   rounded-lg p-1">
                <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gray-800" />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  Dedicated Account Manager
                </span>
              </div>
              <div className="flex items-center gap-3 pb-10 rounded-lg p-1">
                <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center  justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gray-800  " />
                </div>
                <span className="text-sm font-medium  text-gray-800">
                  24/7 Premium Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
