import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";

const ProductCard = ({ product, viewMode = "grid" }) => {
  return viewMode === "grid" ? (
    // Grid view card - improved layout with better spacing
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 group h-full flex flex-col">
      {/* Product Badge Tags */}
      <div className="relative pt-2 px-2">
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {product?.badge && (
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
              {product?.badge}
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3 z-10">
          {product?.discount && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              {product?.discount}
            </span>
          )}
        </div>

        {/* Product Image with proper aspect ratio */}
        <Link href={`/product/${product?.id}`} className="block">
          <div className="rounded-md overflow-hidden aspect-square bg-gray-50 flex items-center justify-center">
            <Image
              src={product?.image || "https://via.placeholder.com/300"}
              alt={product?.name}
              width={300}
              height={300}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
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

          <button className="bg-orange-500 text-white p-1.5 rounded-md hover:bg-orange-600 transition-colors duration-200">
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  ) : (
    // List view card - improved layout with better spacing
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 flex group">
      <div className="relative w-40 sm:w-48 flex-shrink-0">
        {/* Product Badge Tags */}
        <div className="absolute top-2 left-2 z-10">
          {product?.badge && (
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
              {product?.badge}
            </span>
          )}
        </div>
        <div className="absolute top-2 right-2 z-10">
          {product?.discount && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              {product?.discount}
            </span>
          )}
        </div>

        <Link href={`/product/${product?.id}`} className="block h-full">
          <div className="h-full bg-gray-50 flex items-center justify-center">
            <Image
              src={product?.image}
              alt={product?.name}
              width={200}
              height={200}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
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
          <span className="text-xs text-gray-500">{product?.sold}</span>
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

          <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1.5 rounded flex items-center transition-colors duration-200">
            <ShoppingCart size={14} className="mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
