"use client";

import React, { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";


const footerLinks = [
    {
        title: "Resources",
        links: [
            "Find a Store",
            "Nike Journal",
            "Become a Member",
            "Feedback",
            "Promo Codes",
            "Product Advice",
            "Running Shoe Finder",
        ],
    },
    {
        title: "Help",
        links: [
            "Get Help",
            "Order Status",
            "Shipping and Delivery",
            "Returns",
            "Payment Options",
            "Contact Us",
            "Reviews",
        ],
    },
    {
        title: "Company",
        links: [
            "About Nike",
            "News",
            "Careers",
            "Investors",
            "Sustainability",
            "Purpose",
            "Nike Coaching",
            "Report a concern",
        ],
    },
    {
        title: "Community Discounts",
        links: ["Student", "Teacher"],
    },
];

export default function Footer() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <footer className="w-full h-auto bg-[#FF7334]  font-semibold text-white">
            <div className="relative max-w-8xl mx-auto px-6 border-t border-white">

                {/* ================= MOBILE (Accordion) ================= */}
                <div className="md:hidden">
                    {footerLinks.map((section, index) => (
                        <div key={section.title} className=" border-b mt-2 mb-2 border-white text-md">
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center py-4 "
                            >
                                {section.title}
                                <ChevronDown
                                    className={` w-6 h-auto transition-transform ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <ul className="pl-2 pb-4 space-y-3 text-white text-sm">
                                    {section.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="block hover:text-gray-300">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>


                {/* ================= DESKTOP (Grid) ================= */}
                <div className="hidden md:grid md:grid-cols-5 gap-8 py-12">


                    {/* Footer sections */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="mb-10">{section.title}</h4>
                            <ul className="space-y-3 text-white">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="hover:text-black">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Country */}
                    <div className="flex flex-col justify-between h-full text-white">

                        {/* Globe + country */}
                        <div className="flex items-center gap-2 ml-auto">
                            <Globe className="h-3 w-3" />
                            <span>South Africa</span>
                        </div>

                    </div>


                </div>



                {/* ================= BOTTOM BAR ================= */}
                <div className="py-6 text-sm font-medium text-gray-500 flex flex-col md:flex-row gap-1">

                   <span className="text-gray-500 pb-2 pr-4 md:whitespace-nowrap">
  © 2026 Nike, Inc. All rights reserved
</span>


                    <div className="flex flex-col md:flex-row gap-3 md:gap-5 w-full">

                        <a href="#" className="hover:text-gray-300">Guides</a>
                        <a href="#" className="hover:text-gray-300">Terms of Use</a>
                        <a href="#" className="hover:text-gray-300">Terms of Sale</a>
                        <a href="#" className="hover:text-gray-300">Company Details</a>
                        <a href="#" className="hover:text-gray-300">Privacy & Cookie Policy</a>
                        <a href="#" className="hover:text-gray-300">Privacy & Cookie Settings</a>

                        {/* Nike logo */}
                        <a
                            href="/"
                            className="flex items-center  md:ml-auto -mt-5 -ml-3 md:-mt-9"
                        >
                            <img
                                src="nike (2).png"
                                alt="Nike Logo"
                                className="w-24 h-auto"
                            />
                        </a>


                    </div>
                </div>


            </div>
        </footer>
    );
}
