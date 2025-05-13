import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "./components/layouts/MainLayout";
import Image from "next/image";
import Link from "next/link";
import {
  Search as SearchIcon,
  Filter,
  ChevronDown,
  ChevronRight,
  Star,
  Grid,
  List,
  Sliders,
  ShoppingCart,
  Check,
  X,
  SortAsc,
  Tag,
  Clock,
  TrendingUp,
} from "lucide-react";
import FilterSidebar from "./components/sections/SearchSections/FilterSidebar";
import ProductCard from "./components/sections/SearchSections/ProductCard";

// Import constants
import { 
  sampleProducts, 
  categories, 
  priceRanges, 
  ratings, 
  sortOptions, 
  popularSearches, 
  suggestedSearches 
} from "../constants/SearchConstants";

const SearchPage = () => {
  const router = useRouter();
  const { query } = router;

  // States for search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(sampleProducts);
  const [isLoading, setIsLoading] = useState(false);

  // States for filter and sort
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    priceRange: [],
    rating: null,
    discount: false,
    freeShipping: false,
  });
  const [sortBy, setSortBy] = useState("relevance");
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Recent searches (would be stored in localStorage in a real app)
  const [recentSearches, setRecentSearches] = useState([
    "night light",
    "USB charger",
    "kitchen gadgets",
    "wireless earbuds",
  ]);

  // Handler for search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handler for search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // In a real app, this would be an API call to get search results
      const filteredResults = sampleProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()),
      );

      setSearchResults(filteredResults);
      setIsLoading(false);

      // Add to recent searches if not already there
      if (!recentSearches.includes(searchQuery)) {
        const updatedRecentSearches = [searchQuery, ...recentSearches].slice(
          0,
          5,
        );
        setRecentSearches(updatedRecentSearches);
      }

      // Update URL with search query
      router.push(
        {
          pathname: "/search",
          query: { q: searchQuery },
        },
        undefined,
        { shallow: true },
      );
    }, 500);
  };

  // Handler for filter changes
  const handleFilterChange = (filterType, value) => {
    setActiveFilters((prev) => {
      const newFilters = { ...prev };

      if (filterType === "categories" || filterType === "priceRange") {
        // Toggle array values
        if (newFilters[filterType].includes(value)) {
          newFilters[filterType] = newFilters[filterType].filter(
            (item) => item !== value,
          );
        } else {
          newFilters[filterType] = [...newFilters[filterType], value];
        }
      } else if (filterType === "rating") {
        // Set single value
        newFilters[filterType] =
          newFilters[filterType] === value ? null : value;
      } else {
        // Toggle boolean values
        newFilters[filterType] = !newFilters[filterType];
      }

      return newFilters;
    });
  };

  // Handler for sort change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Handler for view mode change
  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  };

  // Handler for clearing all filters
  const clearAllFilters = () => {
    setActiveFilters({
      categories: [],
      priceRange: [],
      rating: null,
      discount: false,
      freeShipping: false,
    });
    setSortBy("relevance");
  };

  // Apply filters and sorting to search results
  const filteredAndSortedResults = () => {
    let results = [...searchResults];

    // Apply category filter
    if (activeFilters.categories.length > 0) {
      results = results.filter((product) =>
        activeFilters.categories.includes(product.category),
      );
    }

    // Apply price range filter
    if (activeFilters.priceRange.length > 0) {
      results = results.filter((product) => {
        const productPrice = parseFloat(product.price.replace("$", ""));
        return activeFilters.priceRange.some((range) => {
          const [min, max] = range.split("-").map(Number);
          return productPrice >= min && productPrice <= max;
        });
      });
    }

    // Apply rating filter
    if (activeFilters.rating) {
      results = results.filter(
        (product) => product.rating >= activeFilters.rating,
      );
    }

    // Apply discount filter
    if (activeFilters.discount) {
      results = results.filter((product) => product.discount);
    }

    // Apply sorting
    if (sortBy === "price_asc") {
      results.sort(
        (a, b) =>
          parseFloat(a.price.replace("$", "")) -
          parseFloat(b.price.replace("$", "")),
      );
    } else if (sortBy === "price_desc") {
      results.sort(
        (a, b) =>
          parseFloat(b.price.replace("$", "")) -
          parseFloat(a.price.replace("$", "")),
      );
    } else if (sortBy === "rating") {
      results.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "newest") {
      // In a real app, you would sort by date added
      results.sort((a, b) => b.id - a.id);
    }

    return results;
  };

  // Get counts of active filters
  const getActiveFilterCount = () => {
    return (
      activeFilters.categories.length +
      activeFilters.priceRange.length +
      (activeFilters.rating ? 1 : 0) +
      (activeFilters.discount ? 1 : 0) +
      (activeFilters.freeShipping ? 1 : 0)
    );
  };

  // Effect to handle URL query parameters
  useEffect(() => {
    if (query.q) {
      setSearchQuery(query.q);
      // In a real app, you would fetch results based on query.q
    }
  }, [query]);

  const displayResults = filteredAndSortedResults();
  const activeFilterCount = getActiveFilterCount();

  return (
    <MainLayout hideSearchInNavbar={true}>
      <div className="container mx-auto px-4 py-6">
        {/* Search Header */}
        <div className="mb-6">
          <form
            onSubmit={handleSearch}
            className="flex w-full max-w-4xl mx-auto mb-4"
          >
            <div className="relative flex-grow">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search for products, brands, and more..."
                className="w-full py-3 px-4 pr-12 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setSearchQuery("")}
                >
                  <X size={18} />
                </button>
              )}
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 rounded-r-lg flex items-center justify-center transition-colors duration-200"
            >
              <SearchIcon size={20} />
            </button>
          </form>

          {/* Suggested searches */}
          {searchQuery && !isLoading && (
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {suggestedSearches.map((suggestion, index) => (
                  <button
                    key={index}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 py-1 px-3 rounded-full flex items-center"
                    onClick={() => {
                      setSearchQuery(suggestion);
                      handleSearch({ preventDefault: () => {} });
                    }}
                  >
                    <span>{suggestion}</span>
                    <ChevronRight size={14} className="ml-1" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="w-full bg-white border border-gray-300 py-2 px-4 rounded-lg flex items-center justify-between shadow-sm"
          >
            <div className="flex items-center">
              <Filter size={18} className="mr-2 text-gray-500" />
              <span className="font-medium">Filters</span>
              {activeFilterCount > 0 && (
                <span className="ml-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </div>
            <ChevronDown size={18} className="text-gray-500" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-4">
              <FilterSidebar 
                activeFilters={activeFilters}
                handleFilterChange={handleFilterChange}
                clearAllFilters={clearAllFilters}
                categories={categories}
                priceRanges={priceRanges}
                ratings={ratings}
              />
            </div>
          </div>

          {/* Mobile Filters Sidebar */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-black opacity-50"
                onClick={() => setMobileFiltersOpen(false)}
              ></div>
              <div className="absolute right-0 top-0 h-full w-80 bg-white overflow-y-auto">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <button onClick={() => setMobileFiltersOpen(false)}>
                      <X size={20} className="text-gray-500" />
                    </button>
                  </div>

                  <FilterSidebar 
                    activeFilters={activeFilters}
                    handleFilterChange={handleFilterChange}
                    clearAllFilters={clearAllFilters}
                    categories={categories}
                    priceRanges={priceRanges}
                    ratings={ratings}
                    isMobile={true}
                  />

                  {/* Apply button */}
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg mt-4"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Search Results */}
          <div className="flex-grow">
            {/* Results Info & Controls */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                <div>
                  <h1 className="text-xl font-bold">
                    {searchQuery
                      ? `Results for "${searchQuery}"`
                      : "All Products"}
                  </h1>
                  <p className="text-sm text-gray-500">
                    {displayResults.length}{" "}
                    {displayResults.length === 1 ? "product" : "products"} found
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Sort dropdown */}
                  <div className="flex items-center">
                    <label
                      htmlFor="sort"
                      className="text-sm text-gray-600 mr-2 whitespace-nowrap"
                    >
                      Sort by:
                    </label>
                    <select
                      id="sort"
                      value={sortBy}
                      onChange={handleSortChange}
                      className="text-sm border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* View mode toggle */}
                  <div className="hidden sm:flex items-center space-x-2">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-1.5 rounded ${viewMode === "grid" ? "bg-orange-100 text-orange-500" : "text-gray-400 hover:text-gray-600"}`}
                    >
                      <Grid size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-1.5 rounded ${viewMode === "list" ? "bg-orange-100 text-orange-500" : "text-gray-400 hover:text-gray-600"}`}
                    >
                      <List size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Active Filters Display */}
              {activeFilterCount > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {activeFilters.categories.map((category) => (
                    <div
                      key={category}
                      className="bg-gray-100 text-xs text-gray-800 rounded-full px-3 py-1 flex items-center"
                    >
                      <span>{category}</span>
                      <button
                        onClick={() =>
                          handleFilterChange("categories", category)
                        }
                        className="ml-1.5 text-gray-500 hover:text-gray-700"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}

                  {activeFilters.priceRange.map((range) => {
                    const rangeLabel = priceRanges.find(
                      (r) => r.value === range,
                    )?.label;
                    return (
                      <div
                        key={range}
                        className="bg-gray-100 text-xs text-gray-800 rounded-full px-3 py-1 flex items-center"
                      >
                        <span>{rangeLabel}</span>
                        <button
                          onClick={() =>
                            handleFilterChange("priceRange", range)
                          }
                          className="ml-1.5 text-gray-500 hover:text-gray-700"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    );
                  })}

                  {activeFilters.rating && (
                    <div className="bg-gray-100 text-xs text-gray-800 rounded-full px-3 py-1 flex items-center">
                      <span>
                        {
                          ratings.find((r) => r.value === activeFilters.rating)
                            ?.label
                        }
                      </span>
                      <button
                        onClick={() =>
                          handleFilterChange("rating", activeFilters.rating)
                        }
                        className="ml-1.5 text-gray-500 hover:text-gray-700"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}

                  {activeFilters.discount && (
                    <div className="bg-gray-100 text-xs text-gray-800 rounded-full px-3 py-1 flex items-center">
                      <span>Discount Items</span>
                      <button
                        onClick={() => handleFilterChange("discount", null)}
                        className="ml-1.5 text-gray-500 hover:text-gray-700"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}

                  {activeFilters.freeShipping && (
                    <div className="bg-gray-100 text-xs text-gray-800 rounded-full px-3 py-1 flex items-center">
                      <span>Free Shipping</span>
                      <button
                        onClick={() => handleFilterChange("freeShipping", null)}
                        className="ml-1.5 text-gray-500 hover:text-gray-700"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Loading state */}
            {isLoading && (
              <div className="flex justify-center items-center h-60">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
              </div>
            )}

            {/* Empty state */}
            {!isLoading && displayResults.length === 0 && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <div className="mb-4 text-gray-400">
                  <SearchIcon size={48} className="mx-auto" />
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  No products found
                </h2>
                <p className="text-gray-500 mb-6">
                  We couldn't find any products matching your search criteria.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg inline-flex items-center"
                >
                  <X size={18} className="mr-2" />
                  Clear Filters
                </button>

                <div className="mt-8 border-t border-gray-200 pt-6">
                  <h3 className="font-medium mb-3">Popular searches:</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {popularSearches.map((term, index) => (
                      <button
                        key={index}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full"
                        onClick={() => {
                          setSearchQuery(term);
                          handleSearch({ preventDefault: () => {} });
                        }}
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Product grid */}
            {!isLoading && displayResults.length > 0 && (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                    : "space-y-4"
                }
              >
                {displayResults.map((product) => (
                  <ProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
              </div>
            )}

            {/* Recent and Popular Searches - Desktop only */}
            {!isLoading && displayResults.length > 0 && (
              <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-4 hidden md:block">
                <div className="flex justify-between mb-2">
                  <h3 className="text-sm font-medium">Recent Searches</h3>
                  <button className="text-xs text-orange-500 hover:text-orange-700">
                    Clear
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {recentSearches.map((term, index) => (
                    <button
                      key={index}
                      className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full"
                      onClick={() => {
                        setSearchQuery(term);
                        handleSearch({ preventDefault: () => {} });
                      }}
                    >
                      <Clock size={12} className="mr-1" />
                      {term}
                    </button>
                  ))}
                </div>

                <h3 className="text-sm font-medium mb-2">Popular Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term, index) => (
                    <button
                      key={index}
                      className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full"
                      onClick={() => {
                        setSearchQuery(term);
                        handleSearch({ preventDefault: () => {} });
                      }}
                    >
                      <TrendingUp size={12} className="mr-1" />
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SearchPage;