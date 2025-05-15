import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowUp,
    Mail,
    Facebook,
    Twitter,
    ChevronDown,
    ChevronUp,
    Phone,
    MapPin,
} from "lucide-react";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";

function Footer() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const footerSections = [
        {
            id: "about",
            title: "About Us",
            links: [
                { href: "/about", text: "About Bonzi Cart" },
                { href: "/terms", text: "Terms & Conditions" },
                { href: "/privacy", text: "Privacy Policy" },
                { href: "/career", text: "Careers" },
            ],
        },
        {
            id: "seller",
            title: "Seller",
            links: [
                { href: "/become-seller", text: "Become a Seller" },
                { href: "/seller-policy", text: "Seller Policy" },
                { href: "/contact", text: "Contact Us" },
                { href: "/seller-faqs", text: "Seller FAQs" },
            ],
        },
        {
            id: "buyer",
            title: "Buyer",
            links: [
                { href: "/buyer-terms", text: "Buyer Terms" },
                { href: "/buyer-protection", text: "Buyer Protection" },
                { href: "/shipping-return", text: "Returns & Shipping" },
                { href: "/track-order", text: "Track Your Order" },
            ],
        },
    ];

    const paymentMethods = [
        {
            name: "Visa",
            alt: "Visa Card",
            link: "https://www.bonzicart.com/public/assets/images/Visa.png",
        },
        {
            name: "Amex",
            alt: "American Express",
            link: "https://www.bonzicart.com/public/assets/images/AmericanExpress.png",
        },
        {
            name: "PayPal",
            alt: "PayPal",
            link: "https://www.bonzicart.com/public/assets/images/Wallet.png",
        },
        {
            name: "Mastercard",
            alt: "Mastercard",
            link: "https://www.bonzicart.com/public/assets/images/cod.png",
        },
    ];

    return (
        <footer className="bg-white border-t border-gray-100 pt-4 pb-2">
            <div className="max-w-7xl mx-auto">
                {/* Mobile Footer - Optimized Accordion */}
                <div className="lg:hidden">
                    {/* Newsletter Subscription */}
                    <div className="mb-5">
                        <h3 className="text-xs font-semibold text-gray-800 mb-2.5">
                            Stay Updated
                        </h3>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-3 py-2.5 text-xs bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all duration-200"
                            />
                            <button className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white text-xs px-3 py-1.5 rounded-md hover:bg-orange-600 transition-colors">
                                Subscribe
                            </button>
                        </div>

                        {/* Social icons with subtle background */}
                        <div className="flex justify-center mt-4 mb-5">
                            <div className="flex items-center bg-gray-50 rounded-full px-2 py-1.5 space-x-5">
                                <Link
                                    href="#"
                                    className="text-gray-500 hover:text-orange-500 transition p-1.5"
                                >
                                    <Facebook size={16} />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-500 hover:text-orange-500 transition p-1.5"
                                >
                                    <CiInstagram size={18} />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-500 hover:text-orange-500 transition p-1.5"
                                >
                                    <Twitter size={16} />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-500 hover:text-orange-500 transition p-1.5"
                                >
                                    <PiYoutubeLogoThin size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Accordion Footer Links - Borderless Modern Design */}
                    <div className="mb-4 space-y-2">
                        {footerSections.map((section) => (
                            <div
                                key={section.id}
                                className="bg-gray-50 rounded-md overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleSection(section.id)}
                                    className="flex w-full items-center justify-between p-3 text-left transition-colors hover:bg-gray-100"
                                >
                                    <span className="text-xs font-semibold text-gray-800">
                                        {section.title}
                                    </span>
                                    {openSection === section.id ? (
                                        <ChevronUp
                                            size={16}
                                            className="text-orange-500"
                                        />
                                    ) : (
                                        <ChevronDown
                                            size={16}
                                            className="text-gray-500"
                                        />
                                    )}
                                </button>
                                {openSection === section.id && (
                                    <div className="px-3 pb-3 pt-1">
                                        <div className="grid grid-cols-2 gap-2.5">
                                            {section.links.map((link) => (
                                                <Link
                                                    key={link.href}
                                                    href={link.href}
                                                    className="text-xs text-gray-600 hover:text-orange-500 py-1.5 transition-colors"
                                                >
                                                    {link.text}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Download Apps - Redesigned */}
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                        <h3 className="text-xs font-semibold text-gray-800 mb-2.5 text-center">
                            Get Our App
                        </h3>
                        <div className="flex justify-center space-x-3">
                            <Link
                                href="#"
                                className="transition hover:opacity-90 hover:scale-105 transform duration-200"
                            >
                                <Image
                                    src="https://www.bonzicart.com/public/assets/images/GooglePlay.png"
                                    alt="Google Play"
                                    width={90}
                                    height={27}
                                    className="h-auto w-auto max-h-8"
                                    style={{ height: "auto" }}
                                />
                            </Link>
                            <Link
                                href="#"
                                className="transition hover:opacity-90 hover:scale-105 transform duration-200"
                            >
                                <Image
                                    src="https://www.bonzicart.com/public/assets/images/AppStore.png"
                                    alt="App Store"
                                    width={90}
                                    height={27}
                                    className="h-auto w-auto max-h-8"
                                    style={{ height: "auto" }}
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Contact - Enhanced */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                        <Link
                            href="tel:18001234567"
                            className="flex items-center justify-center bg-gray-50 rounded-md py-2 text-xs text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                        >
                            <Phone
                                className="text-orange-500 mr-1.5"
                                size={14}
                            />
                            <span>Customer Support</span>
                        </Link>
                        <Link
                            href="/help"
                            className="flex items-center justify-center bg-gray-50 rounded-md py-2 text-xs text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                        >
                            <MapPin
                                className="text-orange-500 mr-1.5"
                                size={14}
                            />
                            <span>Store Locations</span>
                        </Link>
                    </div>
                </div>

                {/* Desktop Footer - Unchanged */}
                <div className="hidden lg:block">
                    <div className="grid grid-cols-5 gap-6">
                        {/* Column 1-3: Quick Links */}
                        {footerSections.map((section) => (
                            <div key={section.id}>
                                <h3 className="text-xs font-semibold text-gray-900 mb-3">
                                    {section.title}
                                </h3>
                                <ul className="space-y-2">
                                    {section.links.map((item) => (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className="text-xs text-gray-600 hover:text-orange-500 transition"
                                            >
                                                {item.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Column 4: Contact & Social */}
                        <div>
                            <h3 className="text-xs font-semibold text-gray-900 mb-3">
                                Connect With Us
                            </h3>
                            <div className="mb-3">
                                <div className="flex items-center mb-2">
                                    <Phone
                                        size={14}
                                        className="text-orange-500 mr-2"
                                    />
                                    <span className="text-xs text-gray-600">
                                        1-800-123-4567
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <Mail
                                        size={14}
                                        className="text-orange-500 mr-2"
                                    />
                                    <span className="text-xs text-gray-600">
                                        support@bonzicart.com
                                    </span>
                                </div>
                            </div>

                            <div className="flex space-x-3 mb-3">
                                <Link
                                    href="#"
                                    className="text-gray-500 hover:text-orange-500 transition"
                                >
                                    <Facebook size={16} />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-500 hover:text-orange-500 transition"
                                >
                                    <CiInstagram size={16} />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-500 hover:text-orange-500 transition"
                                >
                                    <Twitter size={16} />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-500 hover:text-orange-500 transition"
                                >
                                    <PiYoutubeLogoThin size={16} />
                                </Link>
                            </div>

                            {/* Payment Methods */}
                            <div className="flex flex-wrap gap-1.5 mt-3">
                                {paymentMethods.map((payment) => (
                                    <div
                                        key={payment.name}
                                        className="bg-white p-1 rounded border border-gray-200 h-6 w-8 flex items-center justify-center"
                                    >
                                        <Image
                                            src={payment.link}
                                            alt={payment.alt}
                                            width={20}
                                            height={14}
                                            className="max-h-4 max-w-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Column 5: Newsletter */}
                        <div>
                            <h3 className="text-xs font-semibold text-gray-900 mb-3">
                                Stay Updated
                            </h3>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 mb-2"
                                />
                                <button className="w-full bg-orange-500 text-white text-xs py-2 rounded-lg hover:bg-orange-600 transition">
                                    Subscribe
                                </button>
                            </div>

                            <div className="flex space-x-2 mt-3">
                                <Link
                                    href="#"
                                    className="transition hover:opacity-75"
                                >
                                    <Image
                                        src="https://www.bonzicart.com/public/assets/images/GooglePlay.png"
                                        alt="Google Play"
                                        width={90}
                                        height={27}
                                        className="h-auto w-auto max-h-7"
                                    />
                                </Link>
                                <Link
                                    href="#"
                                    className="transition hover:opacity-75"
                                >
                                    <Image
                                        src="https://www.bonzicart.com/public/assets/images/AppStore.png"
                                        alt="App Store"
                                        width={90}
                                        height={27}
                                        className="h-auto w-auto max-h-7"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright - Sleek and Compact */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-xs text-gray-500 mb-2 sm:mb-0 text-center">
                            © {new Date().getFullYear()} Bonzi Cart. All rights
                            reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                            <Link
                                href="/sitemap"
                                className="text-xs text-gray-500 hover:text-orange-500 transition"
                            >
                                Sitemap
                            </Link>
                            <Link
                                href="/accessibility"
                                className="text-xs text-gray-500 hover:text-orange-500 transition"
                            >
                                Accessibility
                            </Link>
                            <Link
                                href="/cookie-policy"
                                className="text-xs text-gray-500 hover:text-orange-500 transition"
                            >
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to top button - smaller and more elegant */}
            <div className="fixed bottom-4 right-4 z-10">
                <button
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="bg-white hover:bg-orange-500 text-orange-500 hover:text-white p-2 rounded-full shadow-md border border-orange-100 transition duration-300 ease-in-out flex items-center justify-center"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={16} />
                </button>
            </div>
        </footer>
    );
}

export default Footer;
