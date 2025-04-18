import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp, Mail, Facebook, Twitter, ChevronDown, ChevronUp, Phone, MapPin } from 'lucide-react';
import { PiYoutubeLogoThin } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";

function Footer() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const footerSections = [
        {
            id: 'about',
            title: 'About Us',
            links: [
                { href: "/about", text: "About Bonzi Cart" },
                { href: "/terms", text: "Terms & Conditions" },
                { href: "/privacy", text: "Privacy Policy" },
                { href: "/career", text: "Careers" },
            ]
        },
        {
            id: 'seller',
            title: 'Seller',
            links: [
                { href: "/become-seller", text: "Become a Seller" },
                { href: "/seller-policy", text: "Seller Policy" },
                { href: "/contact", text: "Contact Us" },
                { href: "/seller-faqs", text: "Seller FAQs" },
            ]
        },
        {
            id: 'buyer',
            title: 'Buyer',
            links: [
                { href: "/buyer-terms", text: "Buyer Terms" },
                { href: "/buyer-protection", text: "Buyer Protection" },
                { href: "/shipping-return", text: "Returns & Shipping" },
                { href: "/track-order", text: "Track Your Order" },
            ]
        }
    ];

    const paymentMethods = [
        { name: "Visa", alt: "Visa Card", link: 'https://www.bonzicart.com/public/assets/images/Visa.png' },
        { name: "Amex", alt: "American Express", link: "https://www.bonzicart.com/public/assets/images/AmericanExpress.png" },
        { name: "PayPal", alt: "PayPal", link: "https://www.bonzicart.com/public/assets/images/Wallet.png" },
        { name: "Mastercard", alt: "Mastercard", link: "https://www.bonzicart.com/public/assets/images/cod.png" },
    ];

    return (
        <footer className="bg-white border-t border-gray-100 pt-6 pb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mobile Footer - Compact Accordion */}
                <div className="lg:hidden">
                    {/* Quick Contact & Subscribe Row */}
                    <div className="flex flex-col space-y-3 mb-5">
                        <div className="bg-orange-50 rounded-lg p-3 flex items-center justify-between">
                            <div className="flex items-center">
                                <Mail className="text-orange-500 mr-2" size={16} />
                                <span className="text-sm font-medium">Get Updates</span>
                            </div>
                            <div className="flex-1 mx-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full px-2 py-1 text-xs border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
                                />
                            </div>
                            <button className="bg-orange-500 text-white text-xs px-2 py-1 rounded-md">
                                Subscribe
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div className="bg-gray-50 rounded-lg p-2.5 flex items-center">
                                <Phone className="text-orange-500 mr-2" size={14} />
                                <span className="text-xs">24/7 Support</span>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-2.5 flex items-center">
                                <MapPin className="text-orange-500 mr-2" size={14} />
                                <span className="text-xs">Store Locator</span>
                            </div>
                        </div>
                    </div>

                    {/* Compact Link Sections */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                        {footerSections.map((section) => (
                            <div key={section.id} className="bg-gray-50 rounded-lg p-3">
                                <h3 className="text-xs font-semibold text-gray-800 mb-2">{section.title}</h3>
                                <ul className="space-y-1.5">
                                    {section.links.slice(0, 4).map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href} className="text-xs text-gray-600 hover:text-orange-500 transition">
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Social and App Downloads */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex space-x-3">
                            <Link href="#" className="bg-gray-50 p-2 rounded-full text-gray-500 hover:text-orange-500 transition">
                                <Facebook size={16} />
                            </Link>
                            <Link href="#" className="bg-gray-50 p-2 rounded-full text-gray-500 hover:text-orange-500 transition">
                                <CiInstagram size={16} />
                            </Link>
                            <Link href="#" className="bg-gray-50 p-2 rounded-full text-gray-500 hover:text-orange-500 transition">
                                <Twitter size={16} />
                            </Link>
                            <Link href="#" className="bg-gray-50 p-2 rounded-full text-gray-500 hover:text-orange-500 transition">
                                <PiYoutubeLogoThin size={16} />
                            </Link>
                        </div>

                        <div className="flex space-x-2">
                            <Link href="#" className="transition hover:opacity-75">
                                <Image
                                    src="https://www.bonzicart.com/public/assets/images/GooglePlay.png"
                                    alt="Google Play"
                                    width={80}
                                    height={24}
                                    className="h-7 w-auto"
                                />
                            </Link>
                            <Link href="#" className="transition hover:opacity-75">
                                <Image
                                    src="https://www.bonzicart.com/public/assets/images/AppStore.png"
                                    alt="App Store"
                                    width={80}
                                    height={24}
                                    className="h-7 w-auto"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Desktop Footer - Compact Grid */}
                <div className="hidden lg:block">
                    <div className="grid grid-cols-5 gap-6">
                        {/* Column 1-3: Quick Links */}
                        {footerSections.map((section) => (
                            <div key={section.id}>
                                <h3 className="text-xs font-semibold text-gray-900 mb-3">{section.title}</h3>
                                <ul className="space-y-2">
                                    {section.links.map((item) => (
                                        <li key={item.href}>
                                            <Link href={item.href} className="text-xs text-gray-600 hover:text-orange-500 transition">
                                                {item.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Column 4: Contact & Social */}
                        <div>
                            <h3 className="text-xs font-semibold text-gray-900 mb-3">Connect With Us</h3>
                            <div className="mb-3">
                                <div className="flex items-center mb-2">
                                    <Phone size={14} className="text-orange-500 mr-2" />
                                    <span className="text-xs text-gray-600">1-800-123-4567</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail size={14} className="text-orange-500 mr-2" />
                                    <span className="text-xs text-gray-600">support@bonzicart.com</span>
                                </div>
                            </div>

                            <div className="flex space-x-3 mb-3">
                                <Link href="#" className="text-gray-500 hover:text-orange-500 transition">
                                    <Facebook size={16} />
                                </Link>
                                <Link href="#" className="text-gray-500 hover:text-orange-500 transition">
                                    <CiInstagram size={16} />
                                </Link>
                                <Link href="#" className="text-gray-500 hover:text-orange-500 transition">
                                    <Twitter size={16} />
                                </Link>
                                <Link href="#" className="text-gray-500 hover:text-orange-500 transition">
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
                            <h3 className="text-xs font-semibold text-gray-900 mb-3">Stay Updated</h3>
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
                                <Link href="#" className="transition hover:opacity-75">
                                    <Image
                                        src="https://www.bonzicart.com/public/assets/images/GooglePlay.png"
                                        alt="Google Play"
                                        width={90}
                                        height={27}
                                        className="h-7 w-auto"
                                    />
                                </Link>
                                <Link href="#" className="transition hover:opacity-75">
                                    <Image
                                        src="https://www.bonzicart.com/public/assets/images/AppStore.png"
                                        alt="App Store"
                                        width={90}
                                        height={27}
                                        className="h-7 w-auto"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright - Sleek and Compact */}
                <div className="mt-4 pt-3 border-t border-gray-100">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-xs text-gray-500 mb-2 sm:mb-0">
                            © {new Date().getFullYear()} Bonzi Cart. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                            <Link href="/sitemap" className="text-xs text-gray-500 hover:text-orange-500 transition">Sitemap</Link>
                            <Link href="/accessibility" className="text-xs text-gray-500 hover:text-orange-500 transition">Accessibility</Link>
                            <Link href="/cookie-policy" className="text-xs text-gray-500 hover:text-orange-500 transition">Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to top button - smaller and more elegant */}
            <div className="fixed bottom-4 right-4 z-10">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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