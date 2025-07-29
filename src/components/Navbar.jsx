import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#151515] text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-medium font-poetsen text-white">
          PixelNest
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          <a href="#" className="hover:text-gray-300 transition">
            Home
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            Services
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            About Us
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            Case Study
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            Contact Us
          </a>
        </div>

        {/* Right Side - Search + Button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Search className="text-white h-5 w-5 cursor-pointer" />
          <button className="bg-lime-400 hover:bg-lime-300 text-black text-sm font-semibold px-4 py-2 rounded-full transition">
            Connect Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <Search className="text-white h-5 w-5 cursor-pointer" />
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className="text-white h-6 w-6" />
            ) : (
              <Menu className="text-white h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1e1e1e] px-6 py-4 flex flex-col gap-4 text-white">
          <a href="#" className="hover:text-gray-300 transition">
            Home
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            Services
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            About Us
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            Case Study
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            Contact Us
          </a>

          {/* Mobile "Connect Now" Button */}
          <button className="mt-4 bg-lime-400 hover:bg-lime-300 text-black text-sm font-semibold px-4 py-2 rounded-full transition w-full">
            Connect Now
          </button>
        </div>
      )}
    </nav>
  );
}
