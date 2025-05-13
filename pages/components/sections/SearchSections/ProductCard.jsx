
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Heart, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product, viewMode = 'grid' }) => {
  return viewMode === 'grid' ? (
    // Grid view card
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 group">
      <div className="relative">
        <Link href={`/product/${product.id}`} className="block">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-64 object-cover"
          />
        </Link>
        {product.badge && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
            {product.badge}
          </span>
        )}
        {product.discount && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {product.discount}
          </span>
        )}
        {/* Quick action buttons */}
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-2">
          <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-200">
            <Heart size={18} />
          </button>
          <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-200">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : i < product.rating
                    ? 'text-yellow-400 fill-yellow-400 opacity-50'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
          </div>
          <span className="text-xs text-gray-500">{product.sold}</span>
        </div>
        
        <Link href={`/product/${product.id}`} className="block">
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-orange-500 transition-colors duration-200 mb-1">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-xs text-gray-500 line-clamp-1 mb-2">{product.description}</p>
        
        <div className="flex items-baseline">
          <span className="text-lg font-bold text-orange-500">{product.price}</span>
          {product.originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">{product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  ) : (
    // List view card
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 flex group">
      <div className="relative w-40 sm:w-48 flex-shrink-0">
        <Link href={`/product/${product.id}`} className="block h-full">
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </Link>
        {product.badge && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
            {product.badge}
          </span>
        )}
        {product.discount && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {product.discount}
          </span>
        )}
      </div>
      
      <div className="p-4 flex-grow">
        <div className="flex justify-between items-start mb-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : i < product.rating
                    ? 'text-yellow-400 fill-yellow-400 opacity-50'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
          </div>
          <span className="text-xs text-gray-500">{product.sold}</span>
        </div>
        
        <Link href={`/product/${product.id}`} className="block">
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-orange-500 transition-colors duration-200 mb-1">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-xs text-gray-500 line-clamp-2 mb-3">{product.description}</p>
        
        <div className="flex items-baseline mb-2">
          <span className="text-lg font-bold text-orange-500">{product.price}</span>
          {product.originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">{product.originalPrice}</span>
          )}
        </div>
        
        <div className="flex space-x-2">
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1.5 rounded flex items-center transition-colors duration-200">
            <ShoppingCart size={14} className="mr-1" />
            Add to Cart
          </button>
          <button className="border border-gray-300 hover:border-gray-400 text-gray-700 text-xs px-3 py-1.5 rounded flex items-center transition-colors duration-200">
            <Heart size={14} className="mr-1" />
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
