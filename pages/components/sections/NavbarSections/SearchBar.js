import React from 'react';
import { Search, X, Clock, Sparkles } from 'lucide-react';
import Link from 'next/link';
import NavDropdown from './NavDropdown';

/**
 * SearchBar component with suggestions dropdown
 */
const SearchBar = ({
    searchRef,
    searchFocused,
    searchInput,
    setSearchInput,
    setSearchFocused,
    showSearchSuggestions,
    setShowSearchSuggestions,
    categoryRef,
    categoryDropdown,
    setCategoryDropdown,
    categories,
    popularSearches,
    recentSearches,
    trendingProducts
}) => {
    return (
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

                    <NavDropdown
                        isOpen={categoryDropdown}
                        className="origin-top-left left-0 mt-2 w-56 rounded-lg py-1"
                    >
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
                    </NavDropdown>
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
                <NavDropdown
                    isOpen={showSearchSuggestions}
                    className="top-full left-0 right-0 mt-1 border border-gray-100"
                >
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
                </NavDropdown>
            </div>
        </div>
    );
};

export default SearchBar;

// Import for the component
const { ChevronDown } = require('lucide-react');