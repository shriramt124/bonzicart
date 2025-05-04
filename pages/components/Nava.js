import React, { useState, useEffect, useRef } from 'react';
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown, Bell, Sparkles, Gift, Tag, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { categories, trendingProducts } from '@/constants/NavbarConstants';


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
            setScrolled(window.scrollY > 80);
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



    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-lg transition-shadow duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top bar - always visible */}
                <div className="flex items-center justify-between h-16">
                    {/* Logo and mobile menu toggle */}
                    <div className="flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="mr-3 p-2 rounded-full lg:hidden text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                        <Link href="/" className="flex items-center h-10">
                            <div className="relative flex items-center justify-center">
                                <Image
                                    src="/bonzilogo.png"
                                    alt="Bonzi"
                                    width={70}
                                    height={70}
                                    className="transition-opacity duration-300"
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Enhanced Search bar - hidden on mobile, visible on larger screens */}
                    <div
                        ref={searchRef}
                        className={`hidden md:flex flex-1 max-w-xl mx-6 relative ${searchFocused ? 'ring-2 ring-orange-400 rounded-lg shadow-md' : ''}`}
                    >
                        <div className="relative w-full flex items-center">
                            <div className="relative inline-block text-left" ref={categoryRef}>
                                <button
                                    type="button"
                                    onClick={() => setCategoryDropdown(!categoryDropdown)}
                                    className="inline-flex justify-between items-center w-40 px-4 py-2.5 border border-r-0 border-gray-200 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-l-lg transition-colors duration-200"
                                >
                                    <span>All Categories</span>
                                    <ChevronDown size={16} className={`ml-2 transition-transform duration-200 ${categoryDropdown ? 'rotate-180' : ''}`} />
                                </button>

                                {categoryDropdown && (
                                    <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20 transition-all duration-200">
                                        <div className="py-1" role="menu" aria-orientation="vertical">
                                            <button className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200" role="menuitem">All Categories</button>
                                            {categories.map(cat => (
                                                <button
                                                    key={cat.name}
                                                    className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                                                    role="menuitem"
                                                >
                                                    {cat.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    placeholder="Search for products..."
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    onFocus={() => {
                                        setSearchFocused(true);
                                        setShowSearchSuggestions(true);
                                    }}
                                    className="w-full border-y border-gray-200 py-2.5 px-4 text-sm focus:outline-none focus:ring-0 bg-white"
                                />
                                {searchInput && (
                                    <button
                                        onClick={() => setSearchInput('')}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        <X size={16} />
                                    </button>
                                )}
                            </div>

                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-r-lg transition-colors duration-200">
                                <Search size={20} />
                            </button>

                            {/* Enhanced Search Suggestions Dropdown */}
                            {showSearchSuggestions && (
                                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-100 z-30">
                                    <div className="p-4">
                                        {searchInput && (
                                            <div className="mb-4">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-sm font-semibold text-gray-700">Suggestions</h3>
                                                </div>
                                                <div className="mt-2 space-y-2">
                                                    <div className="flex items-center py-1.5 px-3 rounded-md hover:bg-orange-50 cursor-pointer">
                                                        <Search size={16} className="text-gray-400 mr-2" />
                                                        <span className="text-sm">{searchInput}</span>
                                                    </div>
                                                    <div className="flex items-center py-1.5 px-3 rounded-md hover:bg-orange-50 cursor-pointer">
                                                        <Search size={16} className="text-gray-400 mr-2" />
                                                        <span className="text-sm">{searchInput} best deals</span>
                                                    </div>
                                                    <div className="flex items-center py-1.5 px-3 rounded-md hover:bg-orange-50 cursor-pointer">
                                                        <Search size={16} className="text-gray-400 mr-2" />
                                                        <span className="text-sm">popular {searchInput}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Recent Searches */}
                                        <div className="mb-4">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-sm font-semibold text-gray-700">Recent Searches</h3>
                                                <button className="text-xs text-orange-500 hover:text-orange-600">Clear All</button>
                                            </div>
                                            <div className="mt-2 flex flex-wrap gap-2">
                                                {recentSearches.map((item, index) => (
                                                    <button key={index} className="flex items-center bg-gray-50 hover:bg-gray-100 rounded-full px-3 py-1.5 text-xs text-gray-600">
                                                        <Clock size={12} className="mr-1.5" />
                                                        {item}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Popular Searches */}
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-700">Popular Now</h3>
                                            <div className="mt-2 flex flex-wrap gap-2">
                                                {popularSearches.map((item, index) => (
                                                    <button key={index} className="flex items-center bg-orange-50 hover:bg-orange-100 rounded-full px-3 py-1.5 text-xs text-orange-600">
                                                        <Sparkles size={12} className="mr-1.5" />
                                                        {item}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Trending Products */}
                                    <div className="border-t border-gray-100 bg-gray-50 rounded-b-lg p-4">
                                        <h3 className="text-sm font-semibold text-gray-700 mb-3">Trending Products</h3>
                                        <div className="grid grid-cols-3 gap-3">
                                            {trendingProducts.map((product, index) => (
                                                <Link href="/" key={index} className="group block bg-white rounded-lg p-2 hover:shadow-md transition-all duration-200">
                                                    <div className="relative mb-2">
                                                        <img src={product.image} alt={product.name} className="w-full h-auto rounded" />
                                                        <span className="absolute top-1 right-1 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded">
                                                            {product.discount}
                                                        </span>
                                                    </div>
                                                    <h4 className="text-xs font-medium text-gray-800 line-clamp-1 group-hover:text-orange-600">{product.name}</h4>
                                                    <p className="text-xs font-semibold text-orange-500 mt-1">{product.price}</p>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

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

                        <div className="relative" ref={accountRef}>
                            <button
                                onClick={() => setAccountDropdown(!accountDropdown)}
                                className="flex items-center text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200 p-2 rounded-full hover:bg-orange-50"
                                aria-label="Account menu"
                            >
                                <User size={22} className="mr-1.5" />
                                <span className="hidden xl:inline font-medium">Account</span>
                                <ChevronDown size={16} className={`ml-1 hidden xl:block transition-transform duration-200 ${accountDropdown ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Enhanced Account Dropdown */}
                            {accountDropdown && (
                                <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-3 ring-1 ring-black ring-opacity-5 focus:outline-none z-20 transition-all duration-200">
                                    <div className="px-4 py-2 border-b border-gray-100">
                                        <div className="flex items-center mb-3">
                                            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mr-3">
                                                <User size={24} />
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm">Welcome!</p>
                                                <div className="flex space-x-2 mt-1">
                                                    <Link href="#" className="text-xs font-semibold text-orange-500 hover:text-orange-600">Sign In</Link>
                                                    <span className="text-xs text-gray-400">|</span>
                                                    <Link href="#" className="text-xs font-semibold text-orange-500 hover:text-orange-600">Register</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="px-2 py-2">
                                        <Link href="#" className="flex items-center px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                                            <User size={18} className="mr-3 text-gray-500" />
                                            <span>My Profile</span>
                                        </Link>
                                        <Link href="#" className="flex items-center px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                                            <ShoppingCart size={18} className="mr-3 text-gray-500" />
                                            <span>My Orders</span>
                                            <span className="ml-auto bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full">3</span>
                                        </Link>
                                        <Link href="#" className="flex items-center px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                                            <Heart size={18} className="mr-3 text-gray-500" />
                                            <span>My Wishlist</span>
                                        </Link>
                                        <Link href="#" className="flex items-center px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                                            <Gift size={18} className="mr-3 text-gray-500" />
                                            <span>My Rewards</span>
                                            <span className="ml-auto bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">$15 off</span>
                                        </Link>
                                        <Link href="#" className="flex items-center px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                                            <Tag size={18} className="mr-3 text-gray-500" />
                                            <span>My Coupons</span>
                                            <span className="ml-auto bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">2</span>
                                        </Link>
                                    </div>

                                    <div className="border-t border-gray-100 mt-2 pt-2 px-4">
                                        <Link href="#" className="flex items-center px-2 py-2 text-sm text-gray-600 hover:text-orange-500">
                                            <span>Settings</span>
                                        </Link>
                                        <Link href="#" className="flex items-center px-2 py-2 text-sm text-gray-600 hover:text-orange-500">
                                            <span>Help Center</span>
                                        </Link>
                                        <Link href="#" className="flex items-center px-2 py-2 text-sm text-red-600 hover:text-red-700">
                                            <span>Sign Out</span>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
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
                    {/* Category navigation */}
                    <div className="flex space-x-6">
                        {categories.map((category) => (
                            <div key={category.name} className="relative group">
                                <button className="flex items-center text-gray-700 hover:text-orange-500 font-semibold text-sm transition-colors duration-200 pb-1 group-hover:border-b-2 group-hover:border-orange-500">
                                    {category.name}
                                    <ChevronDown size={16} className="ml-1.5 group-hover:rotate-180 transition-transform duration-200" />
                                </button>

                                {/* Enhanced Mega menu */}
                                <div className="absolute left-0 mt-2 w-screen max-w-4xl bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20 -translate-x-1/4">
                                    <div className="grid grid-cols-4 gap-6 p-6">
                                        <div className="col-span-1">
                                            <h3 className="text-sm font-bold text-gray-900 tracking-wide mb-4">
                                                {category.name} Categories
                                            </h3>
                                            <ul className="space-y-3">
                                                {category.featured.map((item) => (
                                                    <li key={item}>
                                                        <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200 flex items-center">
                                                            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2"></span>
                                                            {item}
                                                        </Link>
                                                    </li>
                                                ))}
                                                <li>
                                                    <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200 flex items-center">
                                                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2"></span>
                                                        View All
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-span-2">
                                            <h3 className="text-sm font-bold text-gray-900 tracking-wide mb-4">
                                                Featured Collections
                                            </h3>
                                            <div className="grid grid-cols-2 gap-4">
                                                <Link href="#" className="group block">
                                                    <div className="bg-gray-100 rounded-lg p-3 mb-2 group-hover:bg-orange-50 transition-colors duration-200">
                                                        <h4 className="font-medium text-sm mb-1 group-hover:text-orange-600">New Arrivals</h4>
                                                        <p className="text-xs text-gray-600">Latest {category.name.toLowerCase()}</p>
                                                    </div>
                                                </Link>
                                                <Link href="#" className="group block">
                                                    <div className="bg-gray-100 rounded-lg p-3 mb-2 group-hover:bg-orange-50 transition-colors duration-200">
                                                        <h4 className="font-medium text-sm mb-1 group-hover:text-orange-600">Best Sellers</h4>
                                                        <p className="text-xs text-gray-600">Top-rated products</p>
                                                    </div>
                                                </Link>
                                                <Link href="#" className="group block">
                                                    <div className="bg-gray-100 rounded-lg p-3 mb-2 group-hover:bg-orange-50 transition-colors duration-200">
                                                        <h4 className="font-medium text-sm mb-1 group-hover:text-orange-600">Special Deals</h4>
                                                        <p className="text-xs text-gray-600">Limited-time offers</p>
                                                    </div>
                                                </Link>
                                                <Link href="#" className="group block">
                                                    <div className="bg-gray-100 rounded-lg p-3 mb-2 group-hover:bg-orange-50 transition-colors duration-200">
                                                        <h4 className="font-medium text-sm mb-1 group-hover:text-orange-600">Clearance</h4>
                                                        <p className="text-xs text-gray-600">Up to 70% off</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <div className="bg-orange-50 rounded-lg p-4 h-full flex flex-col justify-between">
                                                <div>
                                                    <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded-md mb-3">Trending Now</span>
                                                    <h3 className="font-semibold text-gray-900 mb-2">{category.trending}</h3>
                                                    <p className="text-xs text-gray-600 mb-4">Limited time offer, shop now while supplies last!</p>
                                                </div>
                                                <img
                                                    src={category.image}
                                                    alt={category.name}
                                                    className="rounded-lg w-full object-cover"
                                                />
                                                <Link href="#" className="mt-3 text-xs font-semibold text-orange-500 hover:text-orange-600 transition-colors duration-200 inline-flex items-center">
                                                    Shop Collection
                                                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Secondary navigation */}
                    <div className="flex items-center space-x-8 text-sm">
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

            {/* Enhanced Mobile menu, toggle on/off based on menu state */}
            <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
                <div className="px-4 pt-3 pb-4 space-y-1 bg-white border-t border-gray-200 mt-4">
                    {categories.map((category) => (
                        <div key={category.name} className="py-1">
                            <button className="flex items-center justify-between w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors duration-200">
                                <span className="font-medium">{category.name}</span>
                                <ChevronDown size={16} />
                            </button>
                        </div>
                    ))}
                    <hr className="my-3" />
                    <Link href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium transition-colors duration-200">
                        <Tag size={16} className="mr-2" />
                        <span>Deals</span>
                    </Link>
                    <Link href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium transition-colors duration-200">
                        <Sparkles size={16} className="mr-2" />
                        <span>New Arrivals</span>
                    </Link>
                    <Link href="#" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium transition-colors duration-200">Sell with Us</Link>
                    <Link href="#" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium transition-colors duration-200">Help</Link>

                    <hr className="my-3" />

                    {/* Mobile account links */}
                    <div className="bg-gray-50 rounded-lg p-4 mt-3">
                        <div className="flex items-center mb-3">
                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mr-3">
                                <User size={20} />
                            </div>
                            <div>
                                <div className="flex space-x-2">
                                    <Link href="#" className="text-sm font-semibold text-orange-500 hover:text-orange-600">Sign In</Link>
                                    <span className="text-sm text-gray-400">|</span>
                                    <Link href="#" className="text-sm font-semibold text-orange-500 hover:text-orange-600">Register</Link>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2 mt-4">
                            <Link href="#" className="flex items-center py-2 text-sm text-gray-700">
                                <ShoppingCart size={16} className="mr-3 text-gray-500" />
                                <span>My Orders</span>
                                <span className="ml-auto bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full">3</span>
                            </Link>
                            <Link href="#" className="flex items-center py-2 text-sm text-gray-700">
                                <Heart size={16} className="mr-3 text-gray-500" />
                                <span>My Wishlist</span>
                            </Link>
                            <Link href="#" className="flex items-center py-2 text-sm text-gray-700">
                                <Gift size={16} className="mr-3 text-gray-500" />
                                <span>My Rewards</span>
                                <span className="ml-auto bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">$15 off</span>
                            </Link>
                            <Link href="#" className="flex items-center py-2 text-sm text-gray-700">
                                <Tag size={16} className="mr-3 text-gray-500" />
                                <span>My Coupons</span>
                                <span className="ml-auto bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">2</span>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile quick links */}
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        <Link href="#" className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-3 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                            <Bell size={20} className="mb-1" />
                            <span className="text-xs font-medium">Notifications</span>
                        </Link>
                        <Link href="#" className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-3 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                            <Tag size={20} className="mb-1" />
                            <span className="text-xs font-medium">Offers</span>
                        </Link>
                        <Link href="#" className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-3 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                            <Gift size={20} className="mb-1" />
                            <span className="text-xs font-medium">Gift Cards</span>
                        </Link>
                        <Link href="#" className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-3 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                            <User size={20} className="mb-1" />
                            <span className="text-xs font-medium">Account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Nava;