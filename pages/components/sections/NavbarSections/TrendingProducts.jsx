import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function TrendingProducts({ trendingProducts }) {
    return (
        <div className="border-t border-gray-100 bg-gray-50 rounded-b-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Trending Products</h3>
            <div className="grid grid-cols-3 gap-3">
                {trendingProducts?.map((product, index) => (
                    <Link href="/" key={index} className="group block bg-white rounded-lg p-2 hover:shadow-md transition-all duration-200">
                        <div className="relative mb-2">
                            <Image
                                width={200}
                                height={200}
                                src={product.image} alt={product.name} className="w-full h-auto rounded" />
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
    )
}

export default TrendingProducts