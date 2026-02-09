"use client";

import React, { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";




const footerLinks = [
    {
        title: "Resources",
        links: [
            { name: "Find a Store", href: "/find-a-store" },
            { name: "Nike Journal", href: "/nike-journal" },
            { name: "Become a Member", href: "/become-a-member" },
            { name: "Feedback", href: "/feedback" },
            { name: "Promo Codes", href: "/promo-codes" },
            { name: "Product Advice", href: "/product-advice" },
            { name: "Running Shoe Finder", href: "/running-shoe-finder" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "Get Help", href: "/get-help" },
            { name: "Order Status", href: "/order-status" },
            { name: "Shipping and Delivery", href: "/shipping-and-delivery" },
            { name: "Returns", href: "/returns" },
            { name: "Payment Options", href: "/payment-options" },
            { name: "Contact Us", href: "/contact-us" },
            { name: "Reviews", href: "/reviews" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About Nike", href: "/about-nike" },
            { name: "News", href: "/news" },
            { name: "Careers", href: "/careers" },
            { name: "Investors", href: "/investors" },
            { name: "Sustainability", href: "/sustainability" },
            { name: "Purpose", href: "/purpose" },
            { name: "Nike Coaching", href: "/nike-coaching" },
            { name: "Report a concern", href: "/report-a-concern" },
        ],
    },
    {
        title: "Community Discounts",
        links: [
            { name: "Student", href: "/student" },
            { name: "Teacher", href: "/teacher" },
        ],
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
                        <div key={section.title} className="border-b mt-2 mb-2 border-white text-md">
                            {/* Accordion Header */}
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center py-4"
                            >
                                {section.title}
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <ChevronDown className="w-6 h-auto" />
                                </motion.div>
                            </button>

                            {/* Accordion Content */}
                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <ul className="pl-2 pb-4 space-y-3 text-white text-sm">
                                            {section.links.map((link) => (
                                                <li key={link.name}>
                                                    <Link href={link.href} className="block hover:text-gray-300">
                                                        {link.name}
                                                    </Link>
                                                </li>
                                            ))}

                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
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
                                    <li key={link.name}>
                                        <Link href={link.href} className="block hover:text-gray-300">
                                            {link.name}
                                        </Link>
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
                            href="https://nike.com"
                            target="_blank"
                            rel="noopener noreferrer"
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
