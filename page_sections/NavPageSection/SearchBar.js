import React from 'react';
import { Search, X, ChevronDown, Clock, Sparkles } from 'lucide-react';
import TrendingProducts from '../../pages/components/sections/NavbarSections/TrendingProducts';

export default function SearchBar({
  searchRef,
  searchFocused,
  searchInput,
  setSearchInput,
  setSearchFocused,
  showSearchSuggestions,
  setShowSearchSuggestions,
  categoryDropdown,
  setCategoryDropdown,
  categoryRef,
  categories,
  popularSearches,
  recentSearches,
  trendingProducts
}) {
  return (
    <div
      ref={searchRef}
      className={`hidden md:flex flex-1 max-w-xl mx-4 relative ${searchFocused
        ? "ring-2 ring-orange-400 rounded-lg shadow-md"
        : ""
        }`}
    >
      <div className="relative w-full flex items-center">
        <div
          className="relative inline-block text-left"
          ref={categoryRef}
        >
          <button
            type="button"
            onClick={() =>
              setCategoryDropdown(!categoryDropdown)
            }
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
            <div className="z-1000 origin-top-left absolute left-0 mt-2 w-56 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20 transition-all duration-200">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
              >
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
            onChange={(e) =>
              setSearchInput(e.target.value)
            }
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
          <span className="ml-1 hidden xl:inline">
            Search
          </span>
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
                      <span className="text-sm">
                        {searchInput}
                      </span>
                    </div>
                    <div className="flex items-center py-1.5 px-3 rounded-md hover:bg-orange-50 cursor-pointer">
                      <Search
                        size={16}
                        className="text-gray-400 mr-2"
                      />
                      <span className="text-sm">
                        {searchInput} best
                        deals
                      </span>
                    </div>
                    <div className="flex items-center py-1.5 px-3 rounded-md hover:bg-orange-50 cursor-pointer">
                      <Search
                        size={16}
                        className="text-gray-400 mr-2"
                      />
                      <span className="text-sm">
                        popular{" "}
                        {searchInput}
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
                  {recentSearches.map(
                    (item, index) => (
                      <button
                        key={index}
                        className="flex items-center bg-gray-50 hover:bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-600"
                      >
                        <Clock
                          size={12}
                          className="mr-1.5"
                        />
                        {item}
                      </button>
                    ),
                  )}
                </div>
              </div>

              {/* Popular Searches */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700">
                  Popular Now
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {popularSearches.map(
                    (item, index) => (
                      <button
                        key={index}
                        className="flex items-center bg-orange-50 hover:bg-orange-100 rounded-full px-3 py-1 text-xs text-orange-600"
                      >
                        <Sparkles
                          size={12}
                          className="mr-1.5"
                        />
                        {item}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Trending Products */}
            <TrendingProducts
              trendingProducts={trendingProducts}
            />
          </div>
        )}
      </div>
    </div>
  );
}