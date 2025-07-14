import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Sparkles, Tag } from 'lucide-react';

export default function MainNavigation({ scrolled, currentPath, openMegaMenu, setOpenMegaMenu, categories, specialDeals }) {
  return (
    <nav
      className={`hidden lg:flex items-center justify-between mt-2 pb-2 border-b border-gray-100 transition-all duration-300 ease-in-out ${scrolled || currentPath !== "/"
        ? "max-h-0 opacity-0 overflow-hidden py-0 mt-0 border-b-0"
        : "max-h-20 opacity-100"
        }`}
    >
      {/* Primary Navigation Links with Mega Menu */}
      <div className="flex items-center space-x-1">



        {/* Categories with Mega Menu */}
        {categories && categories.map((category) => (
          <div key={category.name} className="relative group">
            <Link
              href="/categories"
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${currentPath === "/categories"
                ? "text-orange-500 bg-orange-50"
                : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                }`}
            >
              {category.name}
              <ChevronDown size={16} className="ml-1.5 group-hover:rotate-180 transition-transform duration-200" />
            </Link>

            {/* Enhanced Mega menu */}
            <div className="absolute left-0 mt-2 w-screen max-w-4xl bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20 -translate-x-1/4">
              <div className="grid grid-cols-4 gap-6 p-6">
                <div className="col-span-1">
                  <h3 className="text-sm font-bold text-gray-900 tracking-wide mb-4">
                    {category.name} Categories
                  </h3>
                  <ul className="space-y-3">
                    {category.featured && category.featured.map((item) => (
                      <li key={item}>
                        <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200 flex items-center">
                          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2"></span>
                          {item}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200 flex items-center">
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2"></span>
                        View All
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-span-2">
                  <h3 className="text-sm font-bold text-gray-900 tracking-wide mb-4">
                    Featured Collections
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Link href="#" className="group block">
                      <div className="bg-gray-100 rounded-lg p-3 mb-2 group-hover:bg-orange-50 transition-colors duration-200">
                        <h4 className="font-medium text-sm mb-1 group-hover:text-orange-600">New Arrivals</h4>
                        <p className="text-xs text-gray-600">Latest {category.name.toLowerCase()}</p>
                      </div>
                    </Link>
                    <Link href="#" className="group block">
                      <div className="bg-gray-100 rounded-lg p-3 mb-2 group-hover:bg-orange-50 transition-colors duration-200">
                        <h4 className="font-medium text-sm mb-1 group-hover:text-orange-600">Best Sellers</h4>
                        <p className="text-xs text-gray-600">Top-rated products</p>
                      </div>
                    </Link>
                    <Link href="#" className="group block">
                      <div className="bg-gray-100 rounded-lg p-3 mb-2 group-hover:bg-orange-50 transition-colors duration-200">
                        <h4 className="font-medium text-sm mb-1 group-hover:text-orange-600">Special Deals</h4>
                        <p className="text-xs text-gray-600">Limited-time offers</p>
                      </div>
                    </Link>
                    <Link href="#" className="group block">
                      <div className="bg-gray-100 rounded-lg p-3 mb-2 group-hover:bg-orange-50 transition-colors duration-200">
                        <h4 className="font-medium text-sm mb-1 group-hover:text-orange-600">Clearance</h4>
                        <p className="text-xs text-gray-600">Up to 70% off</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="bg-orange-50 rounded-lg p-4 h-full flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 rounded-md mb-3">Trending Now</span>
                      <h3 className="font-semibold text-gray-900 mb-2">{category.trending}</h3>
                      <p className="text-xs text-gray-600 mb-4">Limited time offer, shop now while supplies last!</p>
                    </div>
                    {category.image && (
                      <Image
                        width={200}
                        height={200}
                        src={category.image}
                        alt={category.name}
                        className="rounded-lg w-full object-cover"
                      />
                    )}
                    <Link href="#" className="mt-3 text-xs font-semibold text-orange-500 hover:text-orange-600 transition-colors duration-200 inline-flex items-center">
                      Shop Collection
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Link
          href="/deals"
          className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${currentPath === "/deals"
            ? "text-orange-500 bg-orange-50"
            : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
            }`}
        >
          Deals
        </Link>
        <Link
          href="/new-arrivals"
          className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${currentPath === "/new-arrivals"
            ? "text-orange-500 bg-orange-50"
            : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
            }`}
        >
          New Arrivals
        </Link>
        <Link
          href="/brands"
          className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${currentPath === "/brands"
            ? "text-orange-500 bg-orange-50"
            : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
            }`}
        >
          Brands
        </Link>
      </div>

      {/* Secondary Navigation Links */}
      <div className="flex items-center space-x-1">
        <Link
          href="/blog"
          className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors duration-200"
        >
          Blog
        </Link>
        <Link
          href="/about"
          className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors duration-200"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors duration-200"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}