import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp, Mail, Facebook, Twitter } from 'lucide-react';
import { PiYoutubeLogoThin } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";

function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: App Download & Social */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-gray-900">Shop on the Go</h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href="#" className="transition hover:opacity-75">
                                <Image
                                    src="https://www.bonzicart.com/public/assets/images/GooglePlay.png"
                                    alt="Get it on Google Play"
                                    width={135}
                                    height={40}
                                    className="h-12 w-auto"
                                />
                            </Link>
                            <Link href="#" className="transition hover:opacity-75">
                                <Image
                                    src="https://www.bonzicart.com/public/assets/images/AppStore.png"
                                    alt="Download on the App Store"
                                    width={135}
                                    height={40}
                                    className="h-12 w-auto"
                                />
                            </Link>
                        </div>

                        {/* Newsletter Subscription */}
                        <div className="pt-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Stay Updated</h3>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="relative flex-1">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="email"
                                        placeholder="Enter email to subscribe"
                                        className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                        required
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="px-6 py-3 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="pt-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                            <div className="flex space-x-6">
                                <Link href="#" className="text-gray-500 hover:text-orange-500 transition">
                                    <Facebook size={24} />
                                </Link>
                                <Link href="#" className="text-gray-500 hover:text-orange-500 transition">
                                    <CiInstagram size={24} />
                                </Link>
                                <Link href="#" className="text-gray-500 hover:text-orange-500 transition">
                                    <Twitter size={24} />
                                </Link>
                                <Link href="#" className="text-gray-500 hover:text-orange-500 transition">
                                    <PiYoutubeLogoThin size={24} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: About Us */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">About Us</h3>
                        <ul className="space-y-4">
                            {[
                                { href: "/about", text: "About Bonzi Cart" },
                                { href: "/intellectual-property", text: "Intellectual Property Claims" },
                                { href: "/terms", text: "Terms & Conditions" },
                                { href: "/privacy", text: "Privacy Policy" },
                                { href: "/career", text: "Careers" },
                                { href: "/blog", text: "Our Blog" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-gray-600 hover:text-orange-500 transition text-base">
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Seller */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Seller</h3>
                        <ul className="space-y-4">
                            {[
                                { href: "/become-seller", text: "Become a Seller" },
                                { href: "/eligibility", text: "Eligibility to Sell" },
                                { href: "/seller-policy", text: "Seller Policy" },
                                { href: "/contact", text: "Contact Us" },
                                { href: "/seller-faqs", text: "Seller FAQs" },
                                { href: "/seller-resources", text: "Seller Resources" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-gray-600 hover:text-orange-500 transition text-base">
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Buyer */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Buyer</h3>
                        <ul className="space-y-4">
                            {[
                                { href: "/buyer-terms", text: "Buyer Terms & Conditions" },
                                { href: "/buyer-protection", text: "Buyer Protection" },
                                { href: "/buyer-policy", text: "Buyer Policy" },
                                { href: "/shipping-return", text: "Shipping & Return Policy" },
                                { href: "/buyer-help", text: "Help Center" },
                                { href: "/track-order", text: "Track Your Order" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-gray-600 hover:text-orange-500 transition text-base">
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-center text-xl font-semibold text-gray-900 mb-8">Accepted Payments</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { name: "Visa", alt: "Visa Card", link: 'https://www.bonzicart.com/public/assets/images/Visa.png' },
                            { name: "Amex", alt: "American Express", link: "https://www.bonzicart.com/public/assets/images/AmericanExpress.png" },
                            { name: "Bank", alt: "Bank Transfer", link: "https://www.bonzicart.com/public/assets/images/NetBanking.png" },
                            { name: "Paytm", alt: "Paytm Wallet", link: "https://www.bonzicart.com/public/assets/images/paytm.png" },
                            { name: "UPI", alt: "UPI Payment", link: "https://www.bonzicart.com/public/assets/images/upi.png" },
                            { name: "PayPal", alt: "PayPal", link: "https://www.bonzicart.com/public/assets/images/Wallet.png" },
                            { name: "Mastercard", alt: "Mastercard", link: "https://www.bonzicart.com/public/assets/images/cod.png" },
                            { name: "Maestro", alt: "Maestro Card", link: "https://www.bonzicart.com/public/assets/images/mastercard.png" },
                            { name: "Credit", alt: "Credit Card", link: "https://www.bonzicart.com/public/assets/images/Maestro.png" },
                            { name: "Debit", alt: "Debit Card", link: "https://www.bonzicart.com/public/assets/images/DebitCard.png" },
                        ].map((payment) => (
                            <div
                                key={payment.name}
                                className="bg-white p-3 rounded-lg border border-gray-200 h-12 w-20 flex items-center justify-center shadow-sm"
                            >
                                <Image
                                    src={payment.link}
                                    alt={payment.alt}
                                    width={60}
                                    height={40}
                                    className="max-h-8 max-w-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} Bonzi Cart. All rights reserved.
                        </p>
                        <div className="flex space-x-8">
                            {[
                                { href: "/sitemap", text: "Sitemap" },
                                { href: "/accessibility", text: "Accessibility" },
                                { href: "/cookie-policy", text: "Cookie Policy" },
                            ].map((item) => (
                                <Link key={item.href} href={item.href} className="text-sm text-gray-500 hover:text-orange-500 transition">
                                    {item.text}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to top button */}
            <div className="fixed bottom-6 right-6">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} />
                </button>
            </div>
        </footer>
    );
}

export default Footer;