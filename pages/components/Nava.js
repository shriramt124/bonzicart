import React, { useState, useEffect, useRef } from 'react';
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown, Bell, Sparkles, Gift, Tag, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


import CategoryMenu from './sections/NavbarSections/CategoryMenu';
import SearchBar from './sections/NavbarSections/SearchBar';
import AccountMenu from './sections/NavbarSections/AccountMenu';


function Nava() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
    const [categoryDropdown, setCategoryDropdown] = useState(false);
    const [accountDropdown, setAccountDropdown] = useState(false);

    const searchRef = useRef(null);
    const accountRef = useRef(null);
    const categoryRef = useRef(null);

    // Popular search suggestions
    const popularSearches = ["Wireless Earbuds", "Summer Dresses", "Smart Watch", "Kitchen Gadgets"];

    // Recent searches (would typically come from local storage or user data)
    const recentSearches = ["iPhone 15", "Nike Air", "Coffee Maker"];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 150);
        };

        window.addEventListener('scroll', handleScroll);

        // Handle clicks outside dropdowns
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSearchSuggestions(false);
            }
            if (accountRef.current && !accountRef.current.contains(event.target)) {
                setAccountDropdown(false);
            }
            if (categoryRef.current && !categoryRef.current.contains(event.target)) {
                setCategoryDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const categories = [
        {
            name: "Electronics",
            featured: ["Smartphones", "Laptops", "Audio"],
            trending: "Latest Gaming Consoles",
            image: "/api/placeholder/120/120"
        },
        {
            name: "Fashion",
            featured: ["Men's Wear", "Women's Wear", "Accessories"],
            trending: "Summer Collection 2025",
            image: "/api/placeholder/120/120"
        },
        {
            name: "Home",
            featured: ["Furniture", "Decor", "Kitchen"],
            trending: "Eco-friendly Essentials",
            image: "/api/placeholder/120/120"
        },
        {
            name: "Beauty",
            featured: ["Skincare", "Makeup", "Fragrances"],
            trending: "Luxury Fragrance Sets",
            image: "/api/placeholder/120/120"
        }
    ];

    // Trending products - would come from API
    const trendingProducts = [
        { name: "Wireless Earbuds Pro", price: "$129.99", discount: "20% OFF", image: "/api/placeholder/80/80" },
        { name: "Smart Watch Series 7", price: "$249.99", discount: "15% OFF", image: "/api/placeholder/80/80" },
        { name: "Portable Blender", price: "$49.99", discount: "30% OFF", image: "/api/placeholder/80/80" }
    ];

    return (
        <>
            <header className="fixed top-0 z-50 w-full bg-white shadow-lg transition-all duration-300 transform-gpu">
                <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${scrolled ? 'py-2' : 'py-2'}`}>
                    {/* Top bar - always visible */}
                    <div className="flex items-center justify-between">
                        {/* Logo and mobile menu toggle */}
                        <div className="flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="mr-3 p-2 rounded-full lg:hidden text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200 focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                            <Link href="/" className="flex items-center">
                                <Image
                                    src="/bonzilogo.png"
                                    alt="Bonzi"
                                    width={44}
                                    height={44}
                                    className="transition-all duration-300"
                                />
                            </Link>
                        </div>

                        {/* Enhanced Search bar using SearchBar component */}
                        <SearchBar
                            searchRef={searchRef}
                            searchFocused={searchFocused}
                            searchInput={searchInput}
                            setSearchInput={setSearchInput}
                            setSearchFocused={setSearchFocused}
                            showSearchSuggestions={showSearchSuggestions}
                            setShowSearchSuggestions={setShowSearchSuggestions}
                            categoryRef={categoryRef}
                            categoryDropdown={categoryDropdown}
                            setCategoryDropdown={setCategoryDropdown}
                            categories={categories}
                            popularSearches={popularSearches}
                            recentSearches={recentSearches}
                            trendingProducts={trendingProducts}
                        />

                        {/* Right side icons */}
                        <div className="flex items-center space-x-1 sm:space-x-5">
                            <button className="hidden lg:flex items-center text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200 p-2 rounded-full hover:bg-orange-50">
                                <Heart size={22} className="mr-1.5" />
                                <span className="hidden xl:inline font-medium">Wishlist</span>
                            </button>

                            <button className="hidden sm:flex items-center text-sm text-gray-600 hover:text-orange-500 p-2 rounded-full hover:bg-orange-50 relative transition-colors duration-200">
                                <Bell size={22} />
                                <span className="absolute -top-0.5 -right-0.5 bg-orange-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">2</span>
                            </button>

                            <button className="flex items-center text-sm text-gray-600 hover:text-orange-500 relative transition-colors duration-200 p-2 rounded-full hover:bg-orange-50">
                                <ShoppingCart size={22} className="mr-1.5" />
                                <span className="hidden xl:inline font-medium">Cart</span>
                                <span className="absolute -top-0.5 -right-0.5 bg-orange-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">3</span>
                            </button>

                            {/* Account Menu Component */}
                            <AccountMenu
                                accountRef={accountRef}
                                accountDropdown={accountDropdown}
                                setAccountDropdown={setAccountDropdown}
                            />
                        </div>
                    </div>

                    {/* Mobile search - only visible on mobile */}
                    <div className="mt-4 md:hidden">
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
                            />
                            <Search size={18} className="absolute left-3 text-gray-400" />
                        </div>
                    </div>

                    {/* Navigation - hidden on mobile, shown on larger screens */}
                    <nav className="hidden lg:flex items-center justify-between mt-5 pb-2">
                        {/* Category navigation using CategoryMenu component */}
                        <CategoryMenu categories={categories} />

                        {/* Secondary navigation */}
                        <div className="flex items-center space-x-8 mt-[10px] text-sm">
                            <Link href="#" className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200 flex items-center">
                                <Tag size={16} className="mr-1.5" />
                                <span>Deals</span>
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200 flex items-center">
                                <Sparkles size={16} className="mr-1.5" />
                                <span>New Arrivals</span>
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200">Sell with Us</Link>
                            <Link href="#" className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200">Help</Link>
                        </div>
                    </nav>
                </div>

            </header>
            {/* Spacer div to prevent content from being hidden under the fixed navbar */}
            <div className={`w-full h-[72px] transition-all duration-300`}></div>
        </>
    );
}

export default Nava;