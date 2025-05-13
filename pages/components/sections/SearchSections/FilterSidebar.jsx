
import React from 'react';
import { X, Star } from 'lucide-react';

const FilterSidebar = ({
  activeFilters,
  handleFilterChange,
  clearAllFilters,
  categories,
  priceRanges,
  ratings,
  isMobile = false
}) => {
  // Get prefix for mobile view IDs to avoid duplicate IDs
  const prefix = isMobile ? 'm-' : '';

  return (
    <div className={`bg-white rounded-lg ${!isMobile ? 'shadow-sm border border-gray-200' : ''} p-4`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        {(activeFilters?.categories?.length > 0 ||
          activeFilters.priceRange.length > 0 ||
          activeFilters.rating ||
          activeFilters.discount ||
          activeFilters.freeShipping) && (
            <button
              onClick={clearAllFilters}
              className="text-xs text-orange-500 hover:text-orange-700 font-medium"
            >
              Clear All
            </button>
          )}
      </div>

      {/* Categories Filter */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <h3 className="font-medium mb-2">Categories</h3>
        <div className="space-y-2">
          {categories?.map((category, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                id={`${prefix}category-${index}`}
                checked={activeFilters.categories.includes(category)}
                onChange={() => handleFilterChange('categories', category)}
                className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
              />
              <label htmlFor={`${prefix}category-${index}`} className="ml-2 text-sm text-gray-700">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <h3 className="font-medium mb-2">Price</h3>
        <div className="space-y-2">
          {priceRanges?.map((range, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                id={`${prefix}price-${index}`}
                checked={activeFilters.priceRange.includes(range.value)}
                onChange={() => handleFilterChange('priceRange', range.value)}
                className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
              />
              <label htmlFor={`${prefix}price-${index}`} className="ml-2 text-sm text-gray-700">
                {range.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <h3 className="font-medium mb-2">Customer Rating</h3>
        <div className="space-y-2">
          {ratings?.map((rating, index) => (
            <div key={index} className="flex items-center">
              <input
                type="radio"
                id={`${prefix}rating-${index}`}
                name={`${prefix}rating`}
                checked={activeFilters.rating === rating.value}
                onChange={() => handleFilterChange('rating', rating.value)}
                className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300"
              />
              <label htmlFor={`${prefix}rating-${index}`} className="ml-2 text-sm text-gray-700 flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={`${i < rating.value ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="ml-1">{rating.label}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Other Filters */}
      <div>
        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            id={`${prefix}discount`}
            checked={activeFilters.discount}
            onChange={() => handleFilterChange('discount', null)}
            className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
          />
          <label htmlFor={`${prefix}discount`} className="ml-2 text-sm text-gray-700">
            Discount Items
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id={`${prefix}freeShipping`}
            checked={activeFilters.freeShipping}
            onChange={() => handleFilterChange('freeShipping', null)}
            className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
          />
          <label htmlFor={`${prefix}freeShipping`} className="ml-2 text-sm text-gray-700">
            Free Shipping
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
