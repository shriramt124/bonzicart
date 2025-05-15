import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";

const ProductCard = ({ product, viewMode = "grid" }) => {
  return viewMode === "grid" ? (
    // Grid view card - enhanced with better hover effects and visual appeal
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group h-full flex flex-col relative">
      {/* Quick action buttons that appear on hover */}
      <div className="absolute right-2 top-2 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-white hover:bg-gray-100 p-1.5 rounded-full shadow-md transition-all duration-200 text-gray-600 hover:text-orange-500">
          <Heart size={16} />
        </button>
        <button className="bg-white hover:bg-gray-100 p-1.5 rounded-full shadow-md transition-all duration-200 text-gray-600 hover:text-orange-500">
          <Eye size={16} />
        </button>
      </div>

      {/* Product Badge Tags */}
      <div className="relative pt-2 px-2">
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {product?.badge && (
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-md shadow-sm">
              {product?.badge}
            </span>
          )}
        </div>
        <div className="absolute top-14 right-3 z-10 transform rotate-0 group-hover:rotate-3 transition-transform duration-300">
          {product?.discount && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-md font-medium shadow-sm">
              {product?.discount}
            </span>
          )}
        </div>

        {/* Product Image with proper aspect ratio */}
        <Link href={`/product/${product?.id}`} className="block">
          <div className="rounded-md overflow-hidden aspect-square bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
            <Image
              src={product?.image || "/api/placeholder/300/300"}
              alt={product?.name}
              width={300}
              height={300}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </Link>
      </div>

      {/* Product Information */}
      <div className="p-4 flex-grow flex flex-col">
        <Link href={`/product/${product?.id}`} className="block mb-1">
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-orange-500 transition-colors duration-200">
            {product?.name}
          </h3>
        </Link>

        <p className="text-xs text-gray-500 line-clamp-1 mb-2">
          {product?.description}
        </p>

        {/* Star Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center mr-2">
            {[...Array(5)]?.map((_, i) => (
              <Star
                key={i}
                size={12}
                className={`${i < Math.floor(product?.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                  }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product?.reviewCount})</span>
          {product?.sold && (
            <span className="text-xs text-green-600 ml-auto">{product?.sold}</span>
          )}
        </div>

        {/* Price and Add to Cart Section */}
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-baseline">
            <span className="text-base font-bold text-orange-500">
              {product?.price}
            </span>
            {product?.originalPrice && (
              <span className="ml-2 text-xs text-gray-500 line-through">
                {product?.originalPrice}
              </span>
            )}
          </div>

          <button className="bg-orange-500 text-white p-1.5 rounded-md hover:bg-orange-600 transition-all duration-200 hover:shadow-md">
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>

      {/* Overlay button for quick add to cart on hover */}
      <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <div className="absolute bottom-20 pointer-events-auto opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full shadow-lg font-medium text-sm flex items-center">
            <ShoppingCart size={16} className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ) : (
    // List view card - enhanced with better hover effects and visual appeal
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex group">
      <div className="relative w-40 sm:w-48 flex-shrink-0">
        {/* Product Badge Tags */}
        <div className="absolute top-2 left-2 z-10">
          {product?.badge && (
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-md shadow-sm">
              {product?.badge}
            </span>
          )}
        </div>
        <div className="absolute top-2 right-2 z-10 transform rotate-0 group-hover:rotate-3 transition-transform duration-300">
          {product?.discount && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-md font-medium shadow-sm">
              {product?.discount}
            </span>
          )}
        </div>

        <Link href={`/product/${product?.id}`} className="block h-full">
          <div className="h-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
            <Image
              src={product?.image}
              alt={product?.name}
              width={200}
              height={200}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </Link>
      </div>

      <div className="p-4 flex-grow">
        {/* Product Rating */}
        <div className="flex justify-between items-start mb-1">
          <div className="flex items-center">
            {[...Array(5)]?.map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : i < product?.rating
                      ? "text-yellow-400 fill-yellow-400 opacity-50"
                      : "text-gray-300"
                  }`}
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">
              ({product?.reviewCount})
            </span>
          </div>
          <span className="text-xs text-green-600 font-medium">{product?.sold}</span>
        </div>

        {/* Product Name and Description */}
        <Link href={`/product/${product?.id}`} className="block">
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-orange-500 transition-colors duration-200 mb-1">
            {product?.name}
          </h3>
        </Link>

        <p className="text-xs text-gray-500 line-clamp-2 mb-3">
          {product?.description}
        </p>

        {/* Quick action buttons */}
        <div className="flex gap-2 mb-3">
          <button className="text-gray-500 hover:text-orange-500 text-xs flex items-center transition-colors">
            <Heart size={14} className="mr-1" />
            Wishlist
          </button>
          <span className="text-gray-300">|</span>
          <button className="text-gray-500 hover:text-orange-500 text-xs flex items-center transition-colors">
            <Eye size={14} className="mr-1" />
            Quick View
          </button>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline">
            <span className="text-lg font-bold text-orange-500">
              {product?.price}
            </span>
            {product?.originalPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                {product?.originalPrice}
              </span>
            )}
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-4 py-2 rounded-full flex items-center transition-all duration-200 hover:shadow-md">
            <ShoppingCart size={14} className="mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
