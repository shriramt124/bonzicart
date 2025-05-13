import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/router";
import MainLayout from "./components/layouts/MainLayout";
import Image from "next/image";
import Link from "next/link";
import FilterSidebar from "./components/sections/SearchSections/FilterSidebar";
import ProductCard from "./components/sections/SearchSections/ProductCard";
import {
  Filter,
  ChevronDown,
  Grid,
  List,
  X,
  SortAsc,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Sample data - in a real app, this would come from your API
const sampleProducts = [
  {
    id: 1,
    name: "Creative Galaxy Colorful Gradient Luminous Crystal Ball Night Light",
    description: "Perfect for bedrooms and living spaces",
    image: "/api/placeholder/300/300",
    price: "$112.54",
    originalPrice: "$149.99",
    discount: "25% OFF",
    badge: "Featured Product",
    rating: 4.5,
    reviewCount: 128,
    sold: "1.2K+ sold",
    category: "Home Decor",
  },
  {
    id: 2,
    name: "Self Mixing Electric Auto Stirring Mug Coffee Cup",
    description: "Portable Smart Cup for your daily coffee",
    image: "/api/placeholder/300/300",
    price: "$43.50",
    originalPrice: "$69.99",
    discount: "38% OFF",
    badge: "Best Seller",
    rating: 4.8,
    reviewCount: 356,
    sold: "3.5K+ sold",
    category: "Kitchen",
  },
  {
    id: 3,
    name: "Automatic Multi USB Cable Charger 3-in-1",
    description: "Fast charging for all your devices",
    image: "/api/placeholder/300/300",
    price: "$9.99",
    originalPrice: "$19.99",
    discount: "50% OFF",
    badge: "Popular",
    rating: 4.2,
    reviewCount: 420,
    sold: "5K+ sold",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Rechargeable White Light Bedside Table Lamp",
    description: "Adjustable brightness for reading and ambiance",
    image: "/api/placeholder/300/300",
    price: "$24.50",
    originalPrice: "$35.00",
    discount: "30% OFF",
    badge: "",
    rating: 4.3,
    reviewCount: 89,
    sold: "985 sold",
    category: "Home Decor",
  },
  {
    id: 5,
    name: "Moon Lamp Crystal Ball Clouds LED Night Light",
    description: "Beautiful mood lighting with realistic moon surface",
    image: "/api/placeholder/300/300",
    price: "$39.99",
    originalPrice: "$59.99",
    discount: "33% OFF",
    badge: "Top Rated",
    rating: 4.9,
    reviewCount: 532,
    sold: "4.5K+ sold",
    category: "Home Decor",
  },
  {
    id: 6,
    name: "Car LED Door Warning Light - Safety First",
    description: "Automatic warning lights for vehicle doors",
    image: "/api/placeholder/300/300",
    price: "$9.99",
    originalPrice: "$19.99",
    discount: "50% OFF",
    badge: "",
    rating: 4.1,
    reviewCount: 76,
    sold: "1.8K+ sold",
    category: "Automotive",
  },
  {
    id: 7,
    name: "Mini HDMI Wireless Extender",
    description: "Stream high-quality video up to 30m away",
    image: "/api/placeholder/300/300",
    price: "$29.99",
    originalPrice: "$39.99",
    discount: "25% OFF",
    badge: "New",
    rating: 4.4,
    reviewCount: 45,
    sold: "720 sold",
    category: "Electronics",
  },
  {
    id: 8,
    name: "Memory Card Storage Bag Camera",
    description: "Waterproof and shockproof protection",
    image: "/api/placeholder/300/300",
    price: "$8.99",
    originalPrice: "$12.99",
    discount: "31% OFF",
    badge: "",
    rating: 4.6,
    reviewCount: 167,
    sold: "2.3K+ sold",
    category: "Photography",
  },
  // Generate more products for pagination/infinite scroll demo
  ...Array.from({ length: 54 }, (_, i) => ({
    id: i + 9,
    name: `Product ${i + 9} - ${["Electronics", "Home Decor", "Kitchen", "Photography"][i % 4]} Item`,
    description: "High quality product with amazing features",
    image: "/api/placeholder/300/300",
    price: `$${(Math.random() * 100 + 10).toFixed(2)}`,
    originalPrice: `$${(Math.random() * 150 + 20).toFixed(2)}`,
    discount: `${Math.floor(Math.random() * 50 + 10)}% OFF`,
    badge: i % 5 === 0 ? "New" : "",
    rating: (Math.random() * 2 + 3).toFixed(1),
    reviewCount: Math.floor(Math.random() * 500 + 10),
    sold: `${Math.floor(Math.random() * 5000)}+ sold`,
    category: ["Electronics", "Home Decor", "Kitchen", "Photography"][i % 4],
  })),
];

// Sample categories for filter
const categories = [
  "Electronics",
  "Home Decor",
  "Kitchen",
  "Automotive",
  "Beauty",
  "Fashion",
  "Sports",
  "Photography",
  "Toys & Kids",
];

// Price ranges for filter
const priceRanges = [
  { label: "Under $10", value: "0-10" },
  { label: "$10 to $25", value: "10-25" },
  { label: "$25 to $50", value: "25-50" },
  { label: "$50 to $100", value: "50-100" },
  { label: "Over $100", value: "100-999999" },
];

// Rating options for filter
const ratings = [
  { value: 4, label: "4★ & Up" },
  { value: 3, label: "3★ & Up" },
  { value: 2, label: "2★ & Up" },
  { value: 1, label: "1★ & Up" },
];

// Sorting options
const sortOptions = [
  { value: "relevance", label: "Relevance" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "rating", label: "Customer Rating" },
  { value: "newest", label: "Newest Arrivals" },
];

const SearchPage = () => {
  const router = useRouter();
  const { q } = router.query;

  // States for search functionality
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // States for pagination
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const productsPerPage = 50;

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
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Load initial data and set up pagination
  useEffect(() => {
    if (q) {
      setIsLoading(true);

      // Simulate API call
      setTimeout(() => {
        const filtered = sampleProducts.filter(
          (product) =>
            product.name.toLowerCase().includes(q.toLowerCase()) ||
            product.description.toLowerCase().includes(q.toLowerCase()) ||
            product.category.toLowerCase().includes(q.toLowerCase()),
        );

        setSearchResults(filtered);
        setTotalPages(Math.ceil(filtered.length / productsPerPage));
        setIsLoading(false);
      }, 600);
    } else {
      setSearchResults(sampleProducts);
      setTotalPages(Math.ceil(sampleProducts.length / productsPerPage));
    }
  }, [q]);

  // Apply filters and sorting to search results
  useEffect(() => {
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
      results.sort((a, b) => b.id - a.id);
    }

    setFilteredProducts(results);
    setTotalPages(Math.ceil(results.length / productsPerPage));

    // Reset to first page and only show first 50 products
    setCurrentPage(1);
    setVisibleProducts(results.slice(0, productsPerPage));
  }, [searchResults, activeFilters, sortBy]);

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

  // Handler for loading more products
  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      setIsLoadingMore(true);

      // Simulate loading delay
      setTimeout(() => {
        const nextPage = currentPage + 1;
        const moreProducts = filteredProducts.slice(0, nextPage * productsPerPage);
        setVisibleProducts(moreProducts);
        setCurrentPage(nextPage);
        setIsLoadingMore(false);
      }, 800);
    }
  };

  const activeFilterCount = getActiveFilterCount();

  return (
    <MainLayout>
      <div className="py-6 w-full">
        {/* Search Results Info */}
        <div className="mb-4">
          <h1 className="text-xl font-bold text-gray-900">
            {q ? `Search results for "${q}"` : "All Products"}
          </h1>
          <p className="text-sm text-gray-600">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "product" : "products"} found
            {q ? ` for "${q}"` : ""}
          </p>
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
            <FilterSidebar
              activeFilters={activeFilters}
              handleFilterChange={handleFilterChange}
              clearAllFilters={clearAllFilters}
              categories={categories}
              priceRanges={priceRanges}
              ratings={ratings}
            />
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
          <div className="flex-grow" id="search-results">
            {/* Results Info & Controls */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
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
            {!isLoading && visibleProducts.length === 0 && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <div className="mb-4 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="mx-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  No products found
                </h2>
                <p className="text-gray-500 mb-6">
                  We couldn&apos;t find any products matching your search criteria.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg inline-flex items-center"
                >
                  <X size={18} className="mr-2" />
                  Clear Filters
                </button>
              </div>
            )}

            {/* Product grid */}
            {!isLoading && visibleProducts.length > 0 && (
              <>
                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                      : "space-y-5"
                  }
                >
                  {visibleProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      viewMode={viewMode}
                    />
                  ))}
                </div>

                {/* Loading more indicator */}
                {isLoadingMore && (
                  <div className="flex justify-center items-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-500"></div>
                    <span className="ml-3 text-gray-600">
                      Loading more products...
                    </span>
                  </div>
                )}

                {/* "Show More" Button */}
                {currentPage < totalPages && !isLoadingMore && (
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={handleLoadMore}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-md transition duration-200 text-sm font-medium"
                    >
                      Show More
                    </button>
                  </div>
                )}

                {/* Current page indicator */}
                <div className="text-center text-sm text-gray-500 mt-3">
                  Showing {visibleProducts.length} of {filteredProducts.length} products
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SearchPage;