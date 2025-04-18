
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp, Mail, Facebook, Twitter, ChevronDown, ChevronUp } from 'lucide-react';
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
                { href: "/intellectual-property", text: "Intellectual Property Claims" },
                { href: "/terms", text: "Terms & Conditions" },
                { href: "/privacy", text: "Privacy Policy" },
                { href: "/career", text: "Careers" },
                { href: "/blog", text: "Our Blog" },
            ]
        },
        {
            id: 'seller',
            title: 'Seller',
            links: [
                { href: "/become-seller", text: "Become a Seller" },
                { href: "/eligibility", text: "Eligibility to Sell" },
                { href: "/seller-policy", text: "Seller Policy" },
                { href: "/contact", text: "Contact Us" },
                { href: "/seller-faqs", text: "Seller FAQs" },
                { href: "/seller-resources", text: "Seller Resources" },
            ]
        },
        {
            id: 'buyer',
            title: 'Buyer',
            links: [
                { href: "/buyer-terms", text: "Buyer Terms & Conditions" },
                { href: "/buyer-protection", text: "Buyer Protection" },
                { href: "/buyer-policy", text: "Buyer Policy" },
                { href: "/shipping-return", text: "Shipping & Return Policy" },
                { href: "/buyer-help", text: "Help Center" },
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
        <footer className="bg-gray-50 border-t border-gray-200 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mobile Accordion Footer */}
                <div className="lg:hidden">
                    {/* Newsletter Subscription - always visible */}
                    <div className="mb-6">
                        <div className="flex items-center space-x-2 mb-3">
                            <Mail className="text-orange-500" size={18} />
                            <h3 className="text-base font-semibold text-gray-900">Stay Updated</h3>
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter email to subscribe"
                                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                required
                            />
                            <button
                                type="button"
                                className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Collapsible Sections */}
                    {footerSections.map((section) => (
                        <div key={section.id} className="border-t border-gray-200 py-3">
                            <button 
                                onClick={() => toggleSection(section.id)}
                                className="flex items-center justify-between w-full text-left py-2"
                            >
                                <h3 className="text-base font-semibold text-gray-900">{section.title}</h3>
                                {openSection === section.id ? (
                                    <ChevronUp size={18} className="text-gray-500" />
                                ) : (
                                    <ChevronDown size={18} className="text-gray-500" />
                                )}
                            </button>
                            {openSection === section.id && (
                                <ul className="space-y-2 mt-2">
                                    {section.links.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href} className="text-sm text-gray-600 hover:text-orange-500 transition">
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}

                    {/* Social Media Links */}
                    <div className="border-t border-gray-200 py-4 mt-2">
                        <h3 className="text-base font-semibold text-gray-900 mb-3">Follow Us</h3>
                        <div className="flex space-x-5">
                            <Link href="#" className="text-gray-500 hover:text-orange-500 transition">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="text-gray-500 hover:text-orange-500 transition">
                                <CiInstagram size={20} />
                            </Link>
                            <Link href="#" className="text-gray-500 hover:text-orange-500 transition">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-gray-500 hover:text-orange-500 transition">
                                <PiYoutubeLogoThin size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* App Download - Compact */}
                    <div className="border-t border-gray-200 py-4">
                        <h3 className="text-base font-semibold text-gray-900 mb-3">Shop on the Go</h3>
                        <div className="flex space-x-3">
                            <Link href="#" className="transition hover:opacity-75">
                                <Image
                                    src="https://www.bonzicart.com/public/assets/images/GooglePlay.png"
                                    alt="Get it on Google Play"
                                    width={110}
                                    height={33}
                                    className="h-9 w-auto"
                                />
                            </Link>
                            <Link href="#" className="transition hover:opacity-75">
                                <Image
                                    src="https://www.bonzicart.com/public/assets/images/AppStore.png"
                                    alt="Download on the App Store"
                                    width={110}
                                    height={33}
                                    className="h-9 w-auto"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Desktop Footer - More Compact */}
                <div className="hidden lg:block">
                    <div className="grid grid-cols-5 gap-8">
                        {/* Column 1: About Us */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">About Us</h3>
                            <ul className="space-y-2.5">
                                {footerSections[0].links.map((item) => (
                                    <li key={item.href}>
                                        <Link href={item.href} className="text-xs text-gray-600 hover:text-orange-500 transition">
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2: Seller */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Seller</h3>
                            <ul className="space-y-2.5">
                                {footerSections[1].links.map((item) => (
                                    <li key={item.href}>
                                        <Link href={item.href} className="text-xs text-gray-600 hover:text-orange-500 transition">
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Buyer */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Buyer</h3>
                            <ul className="space-y-2.5">
                                {footerSections[2].links.map((item) => (
                                    <li key={item.href}>
                                        <Link href={item.href} className="text-xs text-gray-600 hover:text-orange-500 transition">
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Stay Connected */}
                        <div className="col-span-2">
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Stay Connected</h3>
                            
                            {/* Newsletter */}
                            <div className="mb-4">
                                <div className="flex gap-2 mb-3">
                                    <input
                                        type="email"
                                        placeholder="Enter email to subscribe"
                                        className="flex-1 px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 transition"
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="px-3 py-2 bg-orange-500 text-white text-xs font-medium rounded-lg hover:bg-orange-600 transition"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            
                            {/* App Download */}
                            <div className="flex space-x-3 mb-4">
                                <Link href="#" className="transition hover:opacity-75">
                                    <Image
                                        src="https://www.bonzicart.com/public/assets/images/GooglePlay.png"
                                        alt="Get it on Google Play"
                                        width={100}
                                        height={30}
                                        className="h-8 w-auto"
                                    />
                                </Link>
                                <Link href="#" className="transition hover:opacity-75">
                                    <Image
                                        src="https://www.bonzicart.com/public/assets/images/AppStore.png"
                                        alt="Download on the App Store"
                                        width={100}
                                        height={30}
                                        className="h-8 w-auto"
                                    />
                                </Link>
                            </div>
                            
                            {/* Social and Payments */}
                            <div className="flex justify-between items-center">
                                {/* Social Links */}
                                <div className="flex space-x-4">
                                    <Link href="#" className="text-gray-500 hover:text-orange-500 transition">
                                        <Facebook size={18} />
                                    </Link>
                                    <Link href="#" className="text-gray-500 hover:text-orange-500 transition">
                                        <CiInstagram size={18} />
                                    </Link>
                                    <Link href="#" className="text-gray-500 hover:text-orange-500 transition">
                                        <Twitter size={18} />
                                    </Link>
                                    <Link href="#" className="text-gray-500 hover:text-orange-500 transition">
                                        <PiYoutubeLogoThin size={18} />
                                    </Link>
                                </div>
                                
                                {/* Payment Methods */}
                                <div className="flex space-x-2">
                                    {paymentMethods.map((payment) => (
                                        <div
                                            key={payment.name}
                                            className="bg-white p-1 rounded border border-gray-200 h-6 w-10 flex items-center justify-center"
                                        >
                                            <Image
                                                src={payment.link}
                                                alt={payment.alt}
                                                width={24}
                                                height={16}
                                                className="max-h-4 max-w-full object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright - Compact for all */}
                <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
                    <p>
                        © {new Date().getFullYear()} Bonzi Cart. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-2 sm:mt-0">
                        <Link href="/sitemap" className="hover:text-orange-500 transition">Sitemap</Link>
                        <Link href="/accessibility" className="hover:text-orange-500 transition">Accessibility</Link>
                        <Link href="/cookie-policy" className="hover:text-orange-500 transition">Cookie Policy</Link>
                    </div>
                </div>
            </div>

            {/* Scroll to top button - smaller */}
            <div className="fixed bottom-4 right-4">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full shadow-lg transition duration-300 ease-in-out"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={18} />
                </button>
            </div>
        </footer>
    );
}

export default Footer;
