import React, { useState, useRef, useEffect } from 'react';
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown, Bell, Sparkles, Gift, Tag, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

function MobileNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);

    const searchInputRef = useRef(null);

    useEffect(() => {
        if (isSearchActive && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchActive]);

    // Popular search suggestions
    const popularSearches = ["Wireless Earbuds", "Summer Dresses", "Smart Watch", "Kitchen Gadgets"];

    // Recent searches
    const recentSearches = ["iPhone 15", "Nike Air", "Coffee Maker"];

    // Categories
    const categories = [
        { name: "Electronics", icon: "🔌" },
        { name: "Fashion", icon: "👕" },
        { name: "Home", icon: "🏠" },
        { name: "Beauty", icon: "✨" },
        { name: "Sports", icon: "🏀" },
        { name: "Toys", icon: "🧸" },
        { name: "Garden", icon: "🌱" },
        { name: "Automotive", icon: "🚗" }
    ];

    // Subcategories for when a category is selected
    const subcategories = {
        "Electronics": ["Smartphones", "Laptops", "Headphones", "Smart Home", "Cameras", "Gaming"],
        "Fashion": ["Women's", "Men's", "Kid's", "Shoes", "Accessories", "Jewelry"],
        "Home": ["Furniture", "Kitchen", "Bedding", "Decor", "Storage", "Bath"],
        "Beauty": ["Skincare", "Makeup", "Haircare", "Fragrance", "Personal Care", "Tools"]
    };

    // Trending products
    const trendingProducts = [
        { name: "Wireless Earbuds Pro", price: "$129.99", discount: "20% OFF", image: "/api/placeholder/80/80" },
        { name: "Smart Watch Series 7", price: "$249.99", discount: "15% OFF", image: "/api/placeholder/80/80" },
        { name: "Portable Blender", price: "$49.99", discount: "30% OFF", image: "/api/placeholder/80/80" }
    ];

    // Handle search activation
    const activateSearch = () => {
        setIsSearchActive(true);
        setIsMenuOpen(false);
    };

    // Handle category selection
    const selectCategory = (category) => {
        setSelectedCategory(category);
    };

    // Go back from category view
    const goBackFromCategory = () => {
        setSelectedCategory(null);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-md lg:hidden">
            {/* Regular Header - Show when search is not active */}
            {!isSearchActive && (
                <div className="px-4 py-3">
                    <div className="flex items-center justify-between">
                        {/* Menu button and Logo */}
                        <div className="flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 rounded-full text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200 focus:outline-none mr-2"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                            </button>
                            <Link href="/" className="flex items-center">
                                <Image
                                    src="/bonzilogo.png"
                                    alt="Bonzi"
                                    width={36}
                                    height={36}
                                    className="transition-all duration-300"
                                />
                            </Link>
                        </div>

                        {/* Action icons */}
                        <div className="flex items-center space-x-3">
                            <button
                                onClick={activateSearch}
                                className="p-2 rounded-full text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200 focus:outline-none"
                                aria-label="Search"
                            >
                                <Search size={22} />
                            </button>
                            <button className="p-2 rounded-full text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200 focus:outline-none relative">
                                <Bell size={22} />
                                <span className="absolute -top-0.5 -right-0.5 bg-orange-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">2</span>
                            </button>
                            <button className="p-2 rounded-full text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200 focus:outline-none relative">
                                <ShoppingCart size={22} />
                                <span className="absolute -top-0.5 -right-0.5 bg-orange-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">3</span>
                            </button>
                        </div>
                    </div>

                    {/* Category pills - horizontal scrollable with custom scrollbar */}
                    <div className="mt-3 relative">
                        <div className="overflow-x-auto flex space-x-2 pb-1 scrollbar-hide">
                            {categories.map((category) => (
                                <button
                                    key={category.name}
                                    onClick={() => selectCategory(category.name)}
                                    className="flex items-center space-x-1 bg-gray-50 hover:bg-orange-50 px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors duration-200"
                                >
                                    <span>{category.icon}</span>
                                    <span>{category.name}</span>
                                </button>
                            ))}
                        </div>
                        <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 opacity-40 rounded-full"></div>
                    </div>
                </div>
            )}

            {/* Search Header - Full screen when active */}
            {isSearchActive && (
                <div className="fixed inset-0 bg-white z-50 flex flex-col">
                    <div className="px-4 py-3 border-b border-gray-100">
                        <div className="flex items-center">
                            <button
                                onClick={() => setIsSearchActive(false)}
                                className="p-2 rounded-full text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200 focus:outline-none mr-2"
                            >
                                <ArrowLeft size={22} />
                            </button>
                            <div className="flex-1 relative">
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    placeholder="Search for products..."
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    className="w-full border border-gray-200 rounded-lg pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
                                />
                                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                {searchInput && (
                                    <button
                                        onClick={() => setSearchInput('')}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        <X size={16} />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4">
                        {searchInput && (
                            <div className="mb-4">
                                <h3 className="text-sm font-semibold text-gray-700 mb-2">Suggestions</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center py-2 px-3 rounded-md hover:bg-orange-50 cursor-pointer">
                                        <Search size={16} className="text-gray-400 mr-2" />
                                        <span className="text-sm">{searchInput}</span>
                                    </div>
                                    <div className="flex items-center py-2 px-3 rounded-md hover:bg-orange-50 cursor-pointer">
                                        <Search size={16} className="text-gray-400 mr-2" />
                                        <span className="text-sm">{searchInput} best deals</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Recent Searches */}
                        <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-sm font-semibold text-gray-700">Recent Searches</h3>
                                <button className="text-xs text-orange-500 hover:text-orange-600">Clear</button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {recentSearches.map((item, index) => (
                                    <button key={index} className="flex items-center bg-gray-50 hover:bg-gray-100 rounded-full px-3 py-1.5 text-xs text-gray-600">
                                        <Clock size={12} className="mr-1.5" />
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Popular Searches */}
                        <div className="mb-4">
                            <h3 className="text-sm font-semibold text-gray-700 mb-2">Popular Now</h3>
                            <div className="flex flex-wrap gap-2">
                                {popularSearches.map((item, index) => (
                                    <button key={index} className="flex items-center bg-orange-50 hover:bg-orange-100 rounded-full px-3 py-1.5 text-xs text-orange-600">
                                        <Sparkles size={12} className="mr-1.5" />
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Trending Products - Grid Layout */}
                        <div className="mt-4">
                            <h3 className="text-sm font-semibold text-gray-700 mb-3">Trending Products</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {trendingProducts.map((product, index) => (
                                    <Link href="/" key={index} className="group block bg-white rounded-lg p-3 border border-gray-100 hover:shadow-md transition-all duration-200">
                                        <div className="relative mb-2">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                width={80}
                                                height={80}
                                                className="w-full h-auto rounded"
                                            />
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
                </div>
            )}

            {/* Mobile Menu - Sliding panel */}
            {isMenuOpen && !selectedCategory && (
                <div className="fixed inset-0 bg-white z-50 flex flex-col">
                    {/* Menu Header */}
                    <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 rounded-full text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200 focus:outline-none"
                        >
                            <X size={22} />
                        </button>
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/bonzilogo.png"
                                alt="Bonzi"
                                width={36}
                                height={36}
                            />
                        </Link>
                        <Link href="/account" className="p-2 rounded-full text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200 focus:outline-none">
                            <User size={22} />
                        </Link>
                    </div>

                    {/* Menu Content */}
                    <div className="flex-1 overflow-y-auto">
                        {/* Account Section */}
                        <div className="bg-gray-50 p-4 mb-2">
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

                            <div className="grid grid-cols-2 gap-2 mt-3">
                                <Link href="#" className="flex items-center py-2 px-3 text-sm text-gray-700 bg-white rounded-lg border border-gray-100">
                                    <ShoppingCart size={16} className="mr-2 text-orange-500" />
                                    <span>Orders</span>
                                </Link>
                                <Link href="#" className="flex items-center py-2 px-3 text-sm text-gray-700 bg-white rounded-lg border border-gray-100">
                                    <Heart size={16} className="mr-2 text-orange-500" />
                                    <span>Wishlist</span>
                                </Link>
                                <Link href="#" className="flex items-center py-2 px-3 text-sm text-gray-700 bg-white rounded-lg border border-gray-100">
                                    <Gift size={16} className="mr-2 text-orange-500" />
                                    <span>Rewards</span>
                                </Link>
                                <Link href="#" className="flex items-center py-2 px-3 text-sm text-gray-700 bg-white rounded-lg border border-gray-100">
                                    <Tag size={16} className="mr-2 text-orange-500" />
                                    <span>Coupons</span>
                                </Link>
                            </div>
                        </div>

                        {/* Shop by Category */}
                        <div className="p-4">
                            <h3 className="text-sm font-semibold text-gray-700 mb-3">Shop by Category</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {categories.map(category => (
                                    <button
                                        key={category.name}
                                        onClick={() => selectCategory(category.name)}
                                        className="flex flex-col items-center justify-center bg-gray-50 hover:bg-orange-50 rounded-lg p-3 transition-colors duration-200"
                                    >
                                        <span className="text-2xl mb-1">{category.icon}</span>
                                        <span className="text-xs font-medium">{category.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="p-4 border-t border-gray-100">
                            <h3 className="text-sm font-semibold text-gray-700 mb-3">Quick Links</h3>
                            <div className="space-y-1">
                                <Link href="#" className="flex items-center py-2.5 px-3 text-sm text-gray-700 hover:bg-orange-50 rounded-lg">
                                    <Tag size={16} className="mr-3 text-orange-500" />
                                    <span>Deals & Promotions</span>
                                </Link>
                                <Link href="#" className="flex items-center py-2.5 px-3 text-sm text-gray-700 hover:bg-orange-50 rounded-lg">
                                    <Sparkles size={16} className="mr-3 text-orange-500" />
                                    <span>New Arrivals</span>
                                </Link>
                                <Link href="#" className="flex items-center py-2.5 px-3 text-sm text-gray-700 hover:bg-orange-50 rounded-lg">
                                    <Gift size={16} className="mr-3 text-orange-500" />
                                    <span>Gift Cards</span>
                                </Link>
                                <Link href="#" className="flex items-center py-2.5 px-3 text-sm text-gray-700 hover:bg-orange-50 rounded-lg">
                                    <Bell size={16} className="mr-3 text-orange-500" />
                                    <span>Notifications</span>
                                    <span className="ml-auto bg-orange-100 text-orange-600 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">2</span>
                                </Link>
                            </div>
                        </div>

                        {/* Help & Settings */}
                        <div className="p-4 border-t border-gray-100">
                            <div className="space-y-1">
                                <Link href="#" className="block py-2.5 px-3 text-sm text-gray-700 hover:bg-orange-50 rounded-lg">Help Center</Link>
                                <Link href="#" className="block py-2.5 px-3 text-sm text-gray-700 hover:bg-orange-50 rounded-lg">Settings</Link>
                                <Link href="#" className="block py-2.5 px-3 text-sm text-red-600 hover:bg-red-50 rounded-lg">Sign Out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Category Subcategories View */}
            {isMenuOpen && selectedCategory && (
                <div className="fixed inset-0 bg-white z-50 flex flex-col">
                    {/* Category Header */}
                    <div className="px-4 py-3 border-b border-gray-100 flex items-center">
                        <button
                            onClick={goBackFromCategory}
                            className="p-2 rounded-full text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-200 focus:outline-none mr-2"
                        >
                            <ArrowLeft size={22} />
                        </button>
                        <h2 className="font-medium">{selectedCategory}</h2>
                    </div>

                    {/* Subcategories */}
                    <div className="flex-1 overflow-y-auto p-4">
                        {/* Featured grid at the top */}
                        <div className="grid grid-cols-2 gap-3 mb-5">
                            <div className="bg-orange-50 rounded-lg p-4 flex flex-col justify-between aspect-square">
                                <div>
                                    <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded-md mb-2">Featured</span>
                                    <h3 className="font-semibold text-gray-900">New Arrivals</h3>
                                    <p className="text-xs text-gray-600 mt-1 mb-3">Check out what&apos;s new in {selectedCategory.toLowerCase()}</p>
                                </div>
                                <Link href="#" className="text-xs font-semibold text-orange-500">
                                    View Collection →
                                </Link>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-4 flex flex-col justify-between aspect-square">
                                <div>
                                    <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-md mb-2">Sale</span>
                                    <h3 className="font-semibold text-gray-900">Up to 40% Off</h3>
                                    <p className="text-xs text-gray-600 mt-1 mb-3">Limited time offers on select items</p>
                                </div>
                                <Link href="#" className="text-xs font-semibold text-blue-500">
                                    Shop Now →
                                </Link>
                            </div>
                        </div>

                        {/* Subcategory listing */}
                        <h3 className="text-sm font-semibold text-gray-700 mb-3">Shop by Category</h3>
                        <div className="space-y-1">
                            {subcategories[selectedCategory]?.map((subcat, index) => (
                                <Link
                                    href="#"
                                    key={index}
                                    className="flex items-center justify-between py-3 px-4 text-sm text-gray-700 hover:bg-orange-50 rounded-lg"
                                >
                                    <span>{subcat}</span>
                                    <ChevronDown size={18} className="rotate-270" />
                                </Link>
                            ))}
                            <Link
                                href="#"
                                className="flex items-center justify-between py-3 px-4 text-sm font-medium text-orange-500 hover:bg-orange-50 rounded-lg"
                            >
                                <span>View All {selectedCategory}</span>
                                <ChevronDown size={18} className="rotate-270" />
                            </Link>
                        </div>

                        {/* Popular in this category */}
                        <h3 className="text-sm font-semibold text-gray-700 mt-6 mb-3">Popular in {selectedCategory}</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {[1, 2, 3, 4].map((item) => (
                                <Link href="#" key={item} className="group block bg-white rounded-lg p-3 border border-gray-100 hover:shadow-md transition-all duration-200">
                                    <div className="relative mb-2 aspect-square rounded-md">
                                        <Image
                                            src="/api/placeholder/120/120"
                                            alt={`Product ${item}`}
                                            width={120}
                                            height={120}
                                            className="rounded-md object-cover w-full h-full"
                                        />
                                        <span className="absolute top-1 right-1 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded">
                                            Sale
                                        </span>
                                    </div>
                                    <h4 className="text-xs font-medium text-gray-800 line-clamp-1 group-hover:text-orange-600">Product {item}</h4>
                                    <p className="text-xs font-semibold text-orange-500 mt-1">$99.99</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default MobileNav;