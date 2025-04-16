import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown } from 'lucide-react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);
    const [categoryDropdown, setCategoryDropdown] = useState(false);
    const [accountDropdown, setAccountDropdown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const categories = [
        { name: "Electronics", featured: ["Smartphones", "Laptops", "Audio"] },
        { name: "Fashion", featured: ["Men's Wear", "Women's Wear", "Accessories"] },
        { name: "Home", featured: ["Furniture", "Decor", "Kitchen"] },
        { name: "Beauty", featured: ["Skincare", "Makeup", "Fragrances"] }
    ];

    return (
        <header className={`sticky top-0 z-50 w-full bg-white shadow-md transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top bar - always visible */}
                <div className="flex items-center justify-between">
                    {/* Logo and mobile menu toggle */}
                    <div className="flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="mr-3 p-2 rounded-lg lg:hidden text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                        <a href="/" className="flex items-center">
                            <img
                                src="./bonzilogo.png"
                                alt="Bonzi"
                                className={`transition-all duration-300 ${scrolled ? 'h-9 w-auto' : 'h-11 w-auto'}`}
                            />
                        </a>
                    </div>

                    {/* Search bar - hidden on mobile, visible on larger screens */}
                    <div className={`hidden md:flex flex-1 max-w-xl mx-6 relative ${searchFocused ? 'ring-2 ring-orange-400 rounded-lg' : ''}`}>
                        <div
                            className="relative w-full flex items-center"
                            onFocus={() => setSearchFocused(true)}
                            onBlur={() => setSearchFocused(false)}
                        >
                            <div className="relative inline-block text-left">
                                <button
                                    type="button"
                                    onClick={() => setCategoryDropdown(!categoryDropdown)}
                                    className="inline-flex justify-between items-center w-40 px-4 py-2.5 border border-r-0 border-gray-200 bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-l-lg transition-colors duration-200"
                                >
                                    <span>All Categories</span>
                                    <ChevronDown size={16} className="ml-2" />
                                </button>

                                {categoryDropdown && (
                                    <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20 transition-all duration-200">
                                        <div className="py-1" role="menu" aria-orientation="vertical">
                                            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200" role="menuitem">All Categories</button>
                                            {categories.map(cat => (
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

                            <input
                                type="text"
                                placeholder="Search for products..."
                                className="flex-1 border-y border-gray-200 py-2.5 px-4 text-sm focus:outline-none focus:ring-0 bg-white"
                            />

                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-r-lg transition-colors duration-200">
                                <Search size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Right side icons */}
                    <div className="flex items-center space-x-5">
                        <button className="hidden lg:flex items-center text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200">
                            <Heart size={22} className="mr-1.5" />
                            <span className="hidden xl:inline font-medium">Wishlist</span>
                        </button>

                        <button className="flex items-center text-sm text-gray-600 hover:text-orange-500 relative transition-colors duration-200">
                            <ShoppingCart size={22} className="mr-1.5" />
                            <span className="hidden xl:inline font-medium">Cart</span>
                            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">3</span>
                        </button>

                        <div className="relative">
                            <button
                                onClick={() => setAccountDropdown(!accountDropdown)}
                                className="flex items-center text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200"
                            >
                                <User size={22} className="mr-1.5" />
                                <span className="hidden xl:inline font-medium">Account</span>
                                <ChevronDown size={16} className="ml-1 hidden xl:block" />
                            </button>

                            {accountDropdown && (
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-1 ring-1 ring-black ring-opacity-5 focus:outline-none z-20 transition-all duration-200">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">Sign In</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">Register</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">My Orders</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">My Profile</a>
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
                    <div className="flex space-x-10">
                        {categories.map((category) => (
                            <div key={category.name} className="relative group">
                                <button className="flex items-center text-gray-600 hover:text-orange-500 font-semibold text-sm transition-colors duration-200">
                                    {category.name}
                                    <ChevronDown size={16} className="ml-1.5" />
                                </button>

                                {/* Mega menu */}
                                <div className="absolute left-0 mt-3 w-screen max-w-lg bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 -translate-x-1/3">
                                    <div className="grid grid-cols-2 gap-6 p-6">
                                        <div>
                                            <h3 className="text-sm font-bold text-gray-900 tracking-wide mb-4">
                                                Featured {category.name}
                                            </h3>
                                            <ul className="space-y-3">
                                                {category.featured.map((item) => (
                                                    <li key={item}>
                                                        <a href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200">
                                                            {item}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-5">
                                            <p className="text-sm font-semibold text-gray-900 mb-2">Special Offers</p>
                                            <p className="text-xs text-gray-600 mb-3">Up to 50% off on {category.name.toLowerCase()}</p>
                                            <a href="#" className="text-xs font-semibold text-orange-500 hover:text-orange-600 transition-colors duration-200">
                                                Shop Now →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Secondary navigation */}
                    <div className="flex items-center space-x-8 text-sm">
                        <a href="#" className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200">Deals</a>
                        <a href="#" className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200">New Arrivals</a>
                        <a href="#" className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200">Sell with Us</a>
                        <a href="#" className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200">Help</a>
                    </div>
                </nav>
            </div>

            {/* Mobile menu, toggle on/off based on menu state */}
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
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium transition-colors duration-200">Deals</a>
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium transition-colors duration-200">New Arrivals</a>
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium transition-colors duration-200">Sell with Us</a>
                    <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium transition-colors duration-200">Help</a>
                </div>
            </div>
        </header>
    );
}

export default Header;