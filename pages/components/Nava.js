import React, { useState, useEffect, useRef } from "react";
import {
    Search,
    ShoppingCart,
    Heart,
    User,
    Menu,
    X,
    ChevronDown,
    Bell,
    Sparkles,
    Gift,
    Tag,
    Clock,
    Trending,
    ArrowRight,
    MapPin,
    Coffee,
    Bookmark,
    Star,
    Headphones,
    Phone,
    Mail,
    ShieldCheck,
    Calendar,
    Download,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { categories, trendingProducts } from "@/constants/NavbarConstants";
import TrendingProducts from "./sections/NavbarSections/TrendingProducts";
import MainNavigation from "./sections/NavbarSections/MainNavigation";

function Nava() {
    // State management
    const [scrolled, setScrolled] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
    const [categoryDropdown, setCategoryDropdown] = useState(false);
    const [accountDropdown, setAccountDropdown] = useState(false);
    const [notificationDropdown, setNotificationDropdown] = useState(false);
    const [openMegaMenu, setOpenMegaMenu] = useState(null);
    const [showLocationPicker, setShowLocationPicker] = useState(false);

    // Refs for click outside handlers
    const searchRef = useRef(null);
    const accountRef = useRef(null);
    const categoryRef = useRef(null);
    const notificationRef = useRef(null);
    const locationRef = useRef(null);

    // Dummy data for enhanced components
    const popularSearches = [
        "Wireless Earbuds",
        "Summer Dresses",
        "Smart Watch",
        "Kitchen Gadgets",
        "Gaming Laptops",
        "Fitness Trackers",
    ];
    const recentSearches = [
        "iPhone 15",
        "Nike Air",
        "Coffee Maker",
        "Smart LED Bulbs",
    ];
    const locationCities = [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Phoenix",
        "Philadelphia",
        "San Antonio",
        "San Diego",
    ];
    const notifications = [
        {
            id: 1,
            type: "order",
            title: "Order Shipped",
            message: "Your order #4528 has been shipped",
            time: "2h ago",
            isRead: false,
        },
        {
            id: 2,
            type: "promo",
            title: "Flash Sale",
            message: "50% off on all electronics today",
            time: "5h ago",
            isRead: false,
        },
        {
            id: 3,
            type: "system",
            title: "Account Security",
            message: "We noticed a new login to your account",
            time: "1d ago",
            isRead: true,
        },
        {
            id: 4,
            type: "order",
            title: "Order Delivered",
            message: "Your order #4490 has been delivered",
            time: "3d ago",
            isRead: true,
        },
        {
            id: 5,
            type: "promo",
            title: "Weekend Special",
            message: "Buy one get one free on all fashion items",
            time: "5d ago",
            isRead: true,
        },
    ];

    // Enhanced deals section
    const specialDeals = [
        {
            id: 1,
            title: "Flash Sale",
            description: "Up to 70% Off",
            badgeColor: "bg-red-500",
            icon: <Tag size={14} />,
        },
        {
            id: 2,
            title: "Free Shipping",
            description: "Orders Over $50",
            badgeColor: "bg-blue-500",
            icon: <ShoppingCart size={14} />,
        },
        {
            id: 3,
            title: "Gift Cards",
            description: "Perfect Presents",
            badgeColor: "bg-green-500",
            icon: <Gift size={14} />,
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScrolled(scrollPosition > 80);
        };

        window.addEventListener("scroll", handleScroll);

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
            if (
                notificationRef.current &&
                !notificationRef.current.contains(event.target)
            ) {
                setNotificationDropdown(false);
            }
            if (locationRef.current && !locationRef.current.contains(event.target)) {
                setShowLocationPicker(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Header animation class based on scroll
    const headerAnimationClass = scrolled
        ? "shadow-lg translate-y-0"
        : "shadow-sm -translate-y-0";

    return (
        <header
            className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${headerAnimationClass}`}
        >
            {/* Trending News Ticker */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-1.5 overflow-hidden">
                <div className="deals-ticker-wrap">
                    <div className="deals-ticker">
                        <div className="deals-ticker-item flex items-center">
                            <Tag size={14} className="flex-shrink-0 mr-1.5" />
                            <span className="text-xs font-medium whitespace-nowrap">
                                FLASH SALE: Up to 70% off on electronics!
                            </span>
                        </div>
                        <div className="deals-ticker-item flex items-center">
                            <Calendar size={14} className="flex-shrink-0 mr-1.5" />
                            <span className="text-xs font-medium whitespace-nowrap">
                                3-DAY WEEKEND SPECIAL: Extra 15% off with code WEEKEND15
                            </span>
                        </div>
                        <div className="deals-ticker-item flex items-center">
                            <Gift size={14} className="flex-shrink-0 mr-1.5" />
                            <span className="text-xs font-medium whitespace-nowrap">
                                FREE GIFT with purchases over $100
                            </span>
                        </div>
                        <div className="deals-ticker-item flex items-center">
                            <ShippingIcon size={14} className="flex-shrink-0 mr-1.5" />
                            <span className="text-xs font-medium whitespace-nowrap">
                                FREE SHIPPING on all orders over $50
                            </span>
                        </div>
                        <div className="deals-ticker-item flex items-center">
                            <ShieldCheck size={14} className="flex-shrink-0 mr-1.5" />
                            <span className="text-xs font-medium whitespace-nowrap">
                                30-DAY MONEY BACK GUARANTEE on all products
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Utility Bar - Enhanced with more options and visual improvements */}
                <div className="py-2 border-b border-gray-100 hidden lg:flex justify-between text-xs text-gray-600">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <span className="w-4 h-4 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mr-1.5">
                                <span className="text-[10px]">🚚</span>
                            </span>
                            <p>Free shipping on orders over $50</p>
                        </div>
                        <div className="flex items-center">
                            <span className="w-4 h-4 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mr-1.5">
                                <span className="text-[10px]">⏱️</span>
                            </span>
                            <p>30-day returns</p>
                        </div>
                        <div className="flex items-center">
                            <span className="w-4 h-4 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mr-1.5">
                                <span className="text-[10px]">🔄</span>
                            </span>
                            <p>Easy exchanges</p>
                        </div>
                        <div className="flex items-center">
                            <span className="w-4 h-4 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mr-1.5">
                                <span className="text-[10px]">💯</span>
                            </span>
                            <p>100% secure checkout</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        {/* Location Selector */}
                        <div className="relative" ref={locationRef}>
                            <button
                                onClick={() => setShowLocationPicker(!showLocationPicker)}
                                className="flex items-center hover:text-orange-500 transition-colors duration-200"
                            >
                                <MapPin size={12} className="mr-1" />
                                <span>Deliver to New York</span>
                                <ChevronDown
                                    size={12}
                                    className={`ml-1 transition-transform duration-200 ${showLocationPicker ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {showLocationPicker && (
                                <div className="absolute mt-2 w-56 bg-white rounded-lg shadow-xl z-50 p-3 border border-gray-100">
                                    <h3 className="font-medium text-xs mb-2 text-gray-700">
                                        Choose your location
                                    </h3>
                                    <input
                                        type="text"
                                        placeholder="Enter zip code"
                                        className="w-full px-3 py-1.5 text-xs border border-gray-200 rounded-md mb-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
                                    />
                                    <div className="max-h-40 overflow-y-auto">
                                        <h4 className="text-xs font-medium text-gray-500 mb-1.5">
                                            Popular Cities
                                        </h4>
                                        <div className="grid grid-cols-2 gap-1">
                                            {locationCities.map((city, idx) => (
                                                <button
                                                    key={idx}
                                                    className="text-left text-xs py-1.5 px-2 hover:bg-orange-50 rounded-md text-gray-700 hover:text-orange-500 transition-colors"
                                                >
                                                    {city}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <span>|</span>
                        <Link
                            href="#"
                            className="hover:text-orange-500 transition-colors duration-200 flex items-center"
                        >
                            <Phone size={12} className="mr-1" />
                            <span>+1 800-555-0123</span>
                        </Link>
                        <span>|</span>
                        <Link
                            href="#"
                            className="hover:text-orange-500 transition-colors duration-200"
                        >
                            Track Order
                        </Link>
                        <span>|</span>
                        <Link
                            href="#"
                            className="hover:text-orange-500 transition-colors duration-200"
                        >
                            Help Center
                        </Link>
                        <span>|</span>
                        <Link
                            href="#"
                            className="hover:text-orange-500 transition-colors duration-200 flex items-center"
                        >
                            <Download size={12} className="mr-1" />
                            <span>Download App</span>
                        </Link>
                    </div>
                </div>

                {/* Main Header - Improved spacing and visual hierarchy */}
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center h-10">
                            <div className="relative flex items-center justify-center">
                                <Image
                                    src="/bonzilogo.png"
                                    alt="Bonzi"
                                    width={70}
                                    height={70}
                                    className="transition-opacity duration-300"
                                    style={{
                                        objectFit: "contain",
                                        height: "auto",
                                    }}
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Enhanced Search bar with better UI/UX */}
                    <div
                        ref={searchRef}
                        className={`hidden md:flex flex-1 max-w-xl mx-4 relative ${searchFocused ? "ring-2 ring-orange-400 rounded-lg shadow-md" : ""
                            }`}
                    >
                        <div className="relative w-full flex items-center">
                            <div
                                className="relative inline-block text-left"
                                ref={categoryRef}
                            >
                                <button
                                    type="button"
                                    onClick={() => setCategoryDropdown(!categoryDropdown)}
                                    className="inline-flex justify-between items-center w-36 px-3 py-2.5 border border-r-0 border-gray-200 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-l-lg transition-colors duration-200"
                                >
                                    <span>All Categories</span>
                                    <ChevronDown
                                        size={14}
                                        className={`ml-1 transition-transform duration-200 ${categoryDropdown ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {categoryDropdown && (
                                    <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20 transition-all duration-200">
                                        <div className="py-1" role="menu" aria-orientation="vertical">
                                            <button
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                                                role="menuitem"
                                            >
                                                All Categories
                                            </button>
                                            {categories.map((cat) => (
                                                <button
                                                    key={cat.name}
                                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
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
                                    placeholder="Search for products, brands, and more..."
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
                                        onClick={() => setSearchInput("")}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        <X size={16} />
                                    </button>
                                )}
                            </div>

                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 rounded-r-lg transition-colors duration-200 flex items-center">
                                <Search size={18} />
                                <span className="ml-1 hidden xl:inline">Search</span>
                            </button>

                            {/* Enhanced Search Suggestions Dropdown */}
                            {showSearchSuggestions && (
                                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-100 z-30">
                                    <div className="p-4">
                                        {searchInput && (
                                            <div className="mb-4">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-sm font-semibold text-gray-700">
                                                        Suggestions
                                                    </h3>
                                                </div>
                                                <div className="mt-2 space-y-1">
                                                    <div className="flex items-center py-1.5 px-3 rounded-md hover:bg-orange-50 cursor-pointer">
                                                        <Search
                                                            size={16}
                                                            className="text-gray-400 mr-2"
                                                        />
                                                        <span className="text-sm">{searchInput}</span>
                                                    </div>
                                                    <div className="flex items-center py-1.5 px-3 rounded-md hover:bg-orange-50 cursor-pointer">
                                                        <Search
                                                            size={16}
                                                            className="text-gray-400 mr-2"
                                                        />
                                                        <span className="text-sm">
                                                            {searchInput} best deals
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center py-1.5 px-3 rounded-md hover:bg-orange-50 cursor-pointer">
                                                        <Search
                                                            size={16}
                                                            className="text-gray-400 mr-2"
                                                        />
                                                        <span className="text-sm">
                                                            popular {searchInput}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Recent Searches */}
                                        <div className="mb-3">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-sm font-semibold text-gray-700">
                                                    Recent Searches
                                                </h3>
                                                <button className="text-xs text-orange-500 hover:text-orange-600">
                                                    Clear All
                                                </button>
                                            </div>
                                            <div className="mt-2 flex flex-wrap gap-2">
                                                {recentSearches.map((item, index) => (
                                                    <button
                                                        key={index}
                                                        className="flex items-center bg-gray-50 hover:bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-600"
                                                    >
                                                        <Clock size={12} className="mr-1.5" />
                                                        {item}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Popular Searches */}
                                        <div>
                                            <h3 className="text-sm font-semibold text-gray-700">
                                                Popular Now
                                            </h3>
                                            <div className="mt-2 flex flex-wrap gap-2">
                                                {popularSearches.map((item, index) => (
                                                    <button
                                                        key={index}
                                                        className="flex items-center bg-orange-50 hover:bg-orange-100 rounded-full px-3 py-1 text-xs text-orange-600"
                                                    >
                                                        <Sparkles size={12} className="mr-1.5" />
                                                        {item}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Trending Products */}
                                    <TrendingProducts trendingProducts={trendingProducts} />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Enhanced Right side icons with better visual feedback */}
                    <div className="flex items-center space-x-2 md:space-x-4">
                        {/* Quick Support */}
                        <button className="hidden xl:flex items-center text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200 p-1.5 rounded-full hover:bg-orange-50">
                            <Headphones size={20} className="mr-1" />
                            <div className="flex flex-col items-start">
                                <span className="text-xs text-gray-500">Support</span>
                                <span className="font-medium text-xs">24/7 Help</span>
                            </div>
                        </button>

                        {/* Wishlist */}
                        <button className="hidden md:flex lg:flex items-center text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200 p-1.5 rounded-full hover:bg-orange-50 relative">
                            <Heart size={20} />
                            <span className="hidden xl:inline-block ml-1 font-medium">
                                Wishlist
                            </span>
                            <span className="absolute -top-0.5 -right-0.5 bg-orange-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                                5
                            </span>
                        </button>

                        {/* Notification Bell with Enhanced Dropdown */}
                        <div className="relative" ref={notificationRef}>
                            <button
                                onClick={() => {
                                    setNotificationDropdown(!notificationDropdown);
                                    setAccountDropdown(false);
                                }}
                                className="hidden sm:flex items-center text-sm text-gray-600 hover:text-orange-500 p-1.5 rounded-full hover:bg-orange-50 relative transition-colors duration-200"
                            >
                                <Bell size={20} />
                                <span className="absolute -top-0.5 -right-0.5 bg-orange-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                                    2
                                </span>
                            </button>

                            {/* Enhanced Notifications Dropdown */}
                            {notificationDropdown && (
                                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl py-3 ring-1 ring-black ring-opacity-5 focus:outline-none z-20 transition-all duration-200">
                                    <div className="px-4 py-2 border-b border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-medium text-sm">Notifications</h3>
                                            <button className="text-xs text-orange-500 hover:text-orange-600">
                                                Mark all as read
                                            </button>
                                        </div>
                                    </div>

                                    <div className="max-h-80 overflow-y-auto">
                                        {notifications.map((notification) => (
                                            <div
                                                key={notification.id}
                                                className={`px-4 py-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors duration-200 ${notification.isRead ? "opacity-70" : ""
                                                    }`}
                                            >
                                                <div className="flex">
                                                    <div
                                                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 
                            ${notification.type === "order"
                                                                ? "bg-blue-100 text-blue-500"
                                                                : notification.type === "promo"
                                                                    ? "bg-green-100 text-green-500"
                                                                    : "bg-orange-100 text-orange-500"
                                                            }`}
                                                    >
                                                        {notification.type === "order" ? (
                                                            <ShoppingCart size={16} />
                                                        ) : notification.type === "promo" ? (
                                                            <Tag size={16} />
                                                        ) : (
                                                            <Bell size={16} />
                                                        )}
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-start justify-between">
                                                            <h4 className="text-sm font-medium text-gray-900">
                                                                {notification.title}
                                                            </h4>
                                                            <span className="text-xs text-gray-500">
                                                                {notification.time}
                                                            </span>
                                                        </div>
                                                        <p className="text-xs text-gray-600 mt-0.5">
                                                            {notification.message}
                                                        </p>
                                                    </div>
                                                    {!notification.isRead && (
                                                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 ml-2"></div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="px-4 pt-3">
                                        <Link
                                            href="#"
                                            className="flex items-center justify-center text-orange-500 hover:text-orange-600 text-sm font-medium"
                                        >
                                            View All Notifications
                                            <ArrowRight size={14} className="ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Shopping Cart */}
                        <button className="flex items-center text-sm text-gray-600 hover:text-orange-500 relative transition-colors duration-200 p-1.5 rounded-full hover:bg-orange-50">
                            <ShoppingCart size={20} />
                            <div className="hidden xl:flex flex-col items-start ml-1">
                                <span className="text-xs text-gray-500">Cart</span>
                                <span className="font-medium text-xs">$149.99</span>
                            </div>
                            <span className="absolute -top-0.5 -right-0.5 bg-orange-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                                3
                            </span>
                        </button>

                        {/* Account menu with enhanced dropdown */}
                        <div className="relative" ref={accountRef}>
                            <button
                                onClick={() => {
                                    setAccountDropdown(!accountDropdown);
                                    setNotificationDropdown(false);
                                }}
                                className="flex items-center text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200 p-1.5 rounded-full hover:bg-orange-50"
                                aria-label="Account menu"
                            >
                                <User size={20} />
                                <div className="hidden xl:flex flex-col items-start ml-1">
                                    <span className="text-xs text-gray-500">Account</span>
                                    <span className="font-medium text-xs">My Profile</span>
                                </div>
                                <ChevronDown
                                    size={14}
                                    className={`ml-1 hidden xl:block transition-transform duration-200 ${accountDropdown ? "rotate-180" : ""
                                        }`}
                                />
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
                                                    <Link
                                                        href="#"
                                                        className="text-xs font-semibold text-orange-500 hover:text-orange-600"
                                                    >
                                                        Sign In
                                                    </Link>
                                                    <span className="text-xs text-gray-400">|</span>
                                                    <Link
                                                        href="#"
                                                        className="text-xs font-semibold text-orange-500 hover:text-orange-600"
                                                    >
                                                        Register
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="px-2 py-2">
                                        <Link
                                            href="#"
                                            className="flex items-center px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                                        >
                                            <User size={18} className="mr-3 text-gray-500" />
                                            <span>My Profile</span>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                                        >
                                            <ShoppingCart size={18} className="mr-3 text-gray-500" />
                                            <span>My Orders</span>
                                            <span className="ml-auto bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full">
                                                3
                                            </span>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                                        >
                                            <Heart size={18} className="mr-3 text-gray-500" />
                                            <span>My Wishlist</span>
                                            <span className="ml-auto bg-purple-100 text-purple-600 text-xs px-2 py-0.5 rounded-full">
                                                5
                                            </span>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                                        >
                                            <Gift size={18} className="mr-3 text-gray-500" />
                                            <span>My Rewards</span>
                                            <span className="ml-auto bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">
                                                $15 off
                                            </span>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                                        >
                                            <Tag size={18} className="mr-3 text-gray-500" />
                                            <span>My Coupons</span>
                                            <span className="ml-auto bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">
                                                2
                                            </span>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                                        >
                                            <Bookmark size={18} className="mr-3 text-gray-500" />
                                            <span>Saved Items</span>
                                        </Link>
                                    </div>

                                    <div className="border-t border-gray-100 mt-2 pt-2 px-4">
                                        <Link
                                            href="#"
                                            className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:text-orange-500"
                                        >
                                            <span>Account Settings</span>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:text-orange-500"
                                        >
                                            <span>Help Center</span>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center px-2 py-1.5 text-sm text-red-600 hover:text-red-700"
                                        >
                                            <span>Sign Out</span>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Main Enhanced Navigation Bar */}
                <nav className="hidden lg:flex items-center justify-between mt-2 pb-2 border-b border-gray-100">
                    {/* Category navigation with mega menu */}
                    <div className="flex space-x-5">
                        {categories.map((category) => (
                            <div key={category.name} className="relative group">
                                <button
                                    className="flex items-center text-gray-700 hover:text-orange-500 font-semibold text-sm transition-colors duration-200 pb-1 group-hover:border-b-2 group-hover:border-orange-500"
                                    onMouseEnter={() => setOpenMegaMenu(category.name)}
                                    onMouseLeave={() => setOpenMegaMenu(null)}
                                >
                                    {category.name}
                                    <ChevronDown
                                        size={14}
                                        className="ml-1 group-hover:rotate-180 transition-transform duration-200"
                                    />
                                </button>

                                {/* Enhanced Mega menu with animations */}
                                {openMegaMenu === category.name && (
                                    <div
                                        className="absolute left-0 mt-2 w-screen max-w-4xl bg-white rounded-lg shadow-xl z-20 -translate-x-1/4 animate-fadeIn transition-opacity duration-200 border border-gray-100"
                                        onMouseEnter={() => setOpenMegaMenu(category.name)}
                                        onMouseLeave={() => setOpenMegaMenu(null)}
                                    >
                                        <div className="grid grid-cols-4 gap-5 p-5">
                                            <div className="col-span-1">
                                                <h3 className="text-sm font-bold text-gray-900 tracking-wide mb-3 border-b border-gray-100 pb-2">
                                                    {category.name} Categories
                                                </h3>
                                                <ul className="space-y-2">
                                                    {category.featured.map((item) => (
                                                        <li key={item}>
                                                            <Link
                                                                href="#"
                                                                className="text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200 flex items-center"
                                                            >
                                                                <span className="w-1.5 h-1.5 bg-orange-300 rounded-full mr-2"></span>
                                                                {item}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                    <li>
                                                        <Link
                                                            href="#"
                                                            className="text-sm text-orange-500 hover:text-orange-600 transition-colors duration-200 flex items-center font-medium"
                                                        >
                                                            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></span>
                                                            View All
                                                            <ArrowRight size={12} className="ml-1" />
                                                        </Link>
                                                    </li>
                                                </ul>

                                                {/* Featured Brands Section */}
                                                <h3 className="text-sm font-bold text-gray-900 tracking-wide mb-3 mt-5 border-b border-gray-100 pb-2">
                                                    Featured Brands
                                                </h3>
                                                <div className="grid grid-cols-2 gap-2">
                                                    <Link
                                                        href="#"
                                                        className="flex items-center text-xs text-gray-600 hover:text-orange-500 transition-colors"
                                                    >
                                                        <span className="w-1 h-1 bg-gray-400 rounded-full mr-1.5"></span>
                                                        Brand 1
                                                    </Link>
                                                    <Link
                                                        href="#"
                                                        className="flex items-center text-xs text-gray-600 hover:text-orange-500 transition-colors"
                                                    >
                                                        <span className="w-1 h-1 bg-gray-400 rounded-full mr-1.5"></span>
                                                        Brand 2
                                                    </Link>
                                                    <Link
                                                        href="#"
                                                        className="flex items-center text-xs text-gray-600 hover:text-orange-500 transition-colors"
                                                    >
                                                        <span className="w-1 h-1 bg-gray-400 rounded-full mr-1.5"></span>
                                                        Brand 3
                                                    </Link>
                                                    <Link
                                                        href="#"
                                                        className="flex items-center text-xs text-gray-600 hover:text-orange-500 transition-colors"
                                                    >
                                                        <span className="w-1 h-1 bg-gray-400 rounded-full mr-1.5"></span>
                                                        Brand 4
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-span-2">
                                                <h3 className="text-sm font-bold text-gray-900 tracking-wide mb-3 border-b border-gray-100 pb-2">
                                                    Featured Collections
                                                </h3>
                                                <div className="grid grid-cols-2 gap-3">
                                                    <Link href="#" className="group block">
                                                        <div className="bg-gray-100 rounded-lg p-3 mb-2 group-hover:bg-orange-50 transition-colors duration-200 relative overflow-hidden">
                                                            <div className="absolute top-0 right-0 bg-orange-500 text-white text-[8px] px-1.5 py-0.5 font-medium">
                                                                NEW
                                                            </div>
                                                            <h4 className="font-medium text-sm mb-1 group-hover:text-orange-600">
                                                                New Arrivals
                                                            </h4>
                                                            <p className="text-xs text-gray-600">
                                                                Latest {category.name.toLowerCase()}
                                                            </p>
                                                            <div className="flex items-center mt-2">
                                                                <div className="w-6 h-6 rounded-full bg-white overflow-hidden border border-gray-200">
                                                                    <div className="w-full h-full bg-orange-200"></div>
                                                                </div>
                                                                <div className="w-6 h-6 rounded-full bg-white overflow-hidden border border-gray-200 -ml-1">
                                                                    <div className="w-full h-full bg-blue-200"></div>
                                                                </div>
                                                                <div className="w-6 h-6 rounded-full bg-white overflow-hidden border border-gray-200 -ml-1">
                                                                    <div className="w-full h-full bg-green-200"></div>
                                                                </div>
                                                                <div className="w-6 h-6 rounded-full bg-white overflow-hidden border border-gray-200 -ml-1 flex items-center justify-center text-[10px] text-gray-500 font-medium">
                                                                    +2
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link href="#" className="group block">
                                                        <div className="bg-gray-100 rounded-lg p-3 mb-2 group-hover:bg-orange-50 transition-colors duration-200 relative overflow-hidden">
                                                            <div className="absolute top-0 right-0 bg-green-500 text-white text-[8px] px-1.5 py-0.5 font-medium">
                                                                POPULAR
                                                            </div>
                                                            <h4 className="font-medium text-sm mb-1 group-hover:text-orange-600">
                                                                Best Sellers
                                                            </h4>
                                                            <p className="text-xs text-gray-600">
                                                                Top-rated products
                                                            </p>
                                                            <div className="flex items-center mt-2">
                                                                <div className="flex items-center text-orange-500 text-[10px]">
                                                                    <Star
                                                                        size={8}
                                                                        fill="currentColor"
                                                                    />
                                                                    <Star
                                                                        size={8}
                                                                        fill="currentColor"
                                                                    />
                                                                    <Star
                                                                        size={8}
                                                                        fill="currentColor"
                                                                    />
                                                                    <Star
                                                                        size={8}
                                                                        fill="currentColor"
                                                                    />
                                                                    <Star
                                                                        size={8}
                                                                        fill="currentColor"
                                                                    />
                                                                    <span className="ml-1 text-gray-600">
                                                                        (254)
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link href="#" className="group block">
                                                        <div className="bg-gray-100 rounded-lg p-3 mb-2 group-hover:bg-orange-50 transition-colors duration-200 relative overflow-hidden">
                                                            <div className="absolute top-0 right-0 bg-red-500 text-white text-[8px] px-1.5 py-0.5 font-medium">
                                                                SALE
                                                            </div>
                                                            <h4 className="font-medium text-sm mb-1 group-hover:text-orange-600">
                                                                Special Deals
                                                            </h4>
                                                            <p className="text-xs text-gray-600">
                                                                Limited-time offers
                                                            </p>
                                                            <div className="flex items-center mt-2">
                                                                <span className="text-red-500 text-xs font-medium">
                                                                    Up to 40% Off
                                                                </span>
                                                                <span className="ml-2 text-[10px] bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded">
                                                                    Ends in 2d
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <Link href="#" className="group block">
                                                        <div className="bg-gray-100 rounded-lg p-3 mb-2 group-hover:bg-orange-50 transition-colors duration-200 relative overflow-hidden">
                                                            <div className="absolute top-0 right-0 bg-purple-500 text-white text-[8px] px-1.5 py-0.5 font-medium">
                                                                HOT
                                                            </div>
                                                            <h4 className="font-medium text-sm mb-1 group-hover:text-orange-600">
                                                                Clearance
                                                            </h4>
                                                            <p className="text-xs text-gray-600">
                                                                Up to 70% off
                                                            </p>
                                                            <div className="flex items-center mt-2">
                                                                <span className="line-through text-gray-400 text-[10px]">
                                                                    $129.99
                                                                </span>
                                                                <span className="ml-2 text-red-500 text-xs font-medium">
                                                                    $39.99
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-span-1">
                                                <div className="bg-orange-50 rounded-lg p-4 h-full flex flex-col justify-between">
                                                    <div>
                                                        <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded-md mb-3">
                                                            Trending Now
                                                        </span>
                                                        <h3 className="font-semibold text-gray-900 mb-2">
                                                            {category.trending}
                                                        </h3>
                                                        <p className="text-xs text-gray-600 mb-4">
                                                            Limited time offer, shop now while supplies last!
                                                        </p>
                                                    </div>
                                                    <img
                                                        src={
                                                            category.image ||
                                                            "https://admin.bonzicart.com/image/media-storage/28/171/2024100318385943475.png?size=l"
                                                        }
                                                        alt={category.name}
                                                        className="rounded-lg w-full object-cover"
                                                    />
                                                    <Link
                                                        href="#"
                                                        className="mt-3 text-xs font-semibold text-orange-500 hover:text-orange-600 transition-colors duration-200 inline-flex items-center"
                                                    >
                                                        Shop Collection
                                                        <svg
                                                            className="w-3 h-3 ml-1"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M9 5l7 7-7 7"
                                                            ></path>
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Secondary navigation with special deals */}
                    <div className="flex items-center space-x-4 text-sm">
                        {specialDeals.map((deal) => (
                            <Link
                                href="#"
                                key={deal.id}
                                className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200 flex items-center"
                            >
                                <span
                                    className={`${deal.badgeColor} text-white p-1 rounded-full mr-1.5`}
                                >
                                    {deal.icon}
                                </span>
                                <div className="flex flex-col">
                                    <span className="text-xs font-semibold">{deal.title}</span>
                                    <span className="text-[10px] text-gray-500">
                                        {deal.description}
                                    </span>
                                </div>
                            </Link>
                        ))}
                        <Link
                            href="#"
                            className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200 flex items-center"
                        >
                            <Sparkles size={14} className="mr-1.5" />
                            <span>New Arrivals</span>
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200"
                        >
                            Sell with Us
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

// Custom ShippingIcon for the ticker
function ShippingIcon({ size, className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
    );
}

export default Nava;