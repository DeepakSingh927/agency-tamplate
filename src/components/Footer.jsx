import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function PixelNestFooter() {
return (
    <div className="bg-[#f7fdec] min-h-screen flex flex-col">
        {/* CTA Banner */}
        <div className="relative rounded-[2.5rem] mx-4 md:mx-12 mt-10 overflow-hidden">
            {/* Main dark gradient background */}
            <div className="absolute inset-0" style={{
                background: "linear-gradient(120deg, #0c1010 0%, #181f1a 60%, #101314 100%)"
            }} />
            {/* Soft radial highlight */}
            <div className="absolute inset-0 pointer-events-none" style={{
                background: "radial-gradient(ellipse 60% 40% at 35% 30%, #7e8c7c33 0%, transparent 80%)"
            }} />
            {/* Subtle vignette */}
            <div className="absolute inset-0 pointer-events-none" style={{
                background: "radial-gradient(ellipse 90% 60% at 50% 50%, transparent 70%, #000a 100%)"
            }} />
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 px-6 md:px-16 py-12">
                <h2
                    className="text-3xl md:text-5xl font-bold text-[#b8ff3c] text-center sm:text-left drop-shadow-[0_2px_16px_rgba(120,255,60,0.25)]"
                    style={{
                        textShadow: "0 2px 24px #b8ff3c66, 0 1px 0 #b8ff3c"
                    }}
                >
                    Ready to work with us ?
                </h2>
                <button className="bg-[#caff4d] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#e6ff8f] transition-colors shadow-lg text-lg">
                    Subscribe Now
                </button>
            </div>
        </div>

        {/* Footer Content */}
        <footer className="flex-1 px-4 md:px-12 py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Company Info */}
                <div>
                    <h3 className="text-3xl font-black text-gray-900 mb-4 font-[Fredoka]">PixelNest</h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed mb-7">
                        We offers a comprehensive suite of digital marketing services that cover all aspects of our online presence. From SEO and social media marketing to content creation and PPC advertising, they have the expertise and resources to handle our diverse marketing needs.
                    </p>
                    {/* Social Media Icons */}
                    <div className="flex gap-4 mt-2">
                        <a href="#" className="w-9 h-9 bg-[#caff4d] rounded-full flex items-center justify-center hover:bg-[#e6ff8f] transition-colors shadow-md">
                            <Facebook size={18} className="text-black" />
                        </a>
                        <a href="#" className="w-9 h-9 bg-[#caff4d] rounded-full flex items-center justify-center hover:bg-[#e6ff8f] transition-colors shadow-md">
                            <Twitter size={18} className="text-black" />
                        </a>
                        <a href="#" className="w-9 h-9 bg-[#caff4d] rounded-full flex items-center justify-center hover:bg-[#e6ff8f] transition-colors shadow-md">
                            <Linkedin size={18} className="text-black" />
                        </a>
                        <a href="#" className="w-9 h-9 bg-[#caff4d] rounded-full flex items-center justify-center hover:bg-[#e6ff8f] transition-colors shadow-md">
                            <Instagram size={18} className="text-black" />
                        </a>
                    </div>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-7">Navigation</h4>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-gray-600 hover:text-black transition-colors text-[15px]">Service</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-black transition-colors text-[15px]">Agency</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-black transition-colors text-[15px]">Case Study</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-black transition-colors text-[15px]">Resource</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-black transition-colors text-[15px]">Contact</a></li>
                    </ul>
                </div>

                {/* Licence */}
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-7">Licence</h4>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-gray-600 hover:text-black transition-colors text-[15px]">Privacy Policy</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-black transition-colors text-[15px]">Copyright</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-black transition-colors text-[15px]">Email Address</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-7">Contact</h4>
                    <div className="space-y-5">
                        <div className="flex items-center gap-3">
                            <Phone size={18} className="text-gray-600 flex-shrink-0" />
                            <span className="text-gray-600 text-[15px]">(406) 555-0120</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail size={18} className="text-gray-600 flex-shrink-0" />
                            <span className="text-gray-600 text-[15px]">info@pixelnest.com</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin size={18} className="text-gray-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-[15px] leading-relaxed">
                                2972 Westheimer Rd. Santa Ana, Illinois 85486
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
);
}