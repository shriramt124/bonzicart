
import { ChevronDown, Sparkles, Tag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


function MainNavigation({ categories }) {
    return (
        <>
            {/* Navigation - hidden on mobile, shown on larger screens */}
            < nav className="hidden lg:flex items-center justify-between mt-5 pb-2" >
                {/* Category navigation */}
                < div className="flex space-x-6" >
                    {
                        categories.map((category) => (
                            <div key={category.name} className="relative group">
                                <button className="flex items-center text-gray-700 hover:text-orange-500 font-semibold text-sm transition-colors duration-200 pb-1 group-hover:border-b-2 group-hover:border-orange-500">
                                    {category.name}
                                    <ChevronDown size={16} className="ml-1.5 group-hover:rotate-180 transition-transform duration-200" />
                                </button>

                                {/* Enhanced Mega menu */}
                                <div className="absolute left-0 mt-2 w-screen max-w-4xl bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20 -translate-x-1/4">
                                    <div className="grid grid-cols-4 gap-6 p-6">
                                        <div className="col-span-1">
                                            <h3 className="text-sm font-bold text-gray-900 tracking-wide mb-4">
                                                {category.name} Categories
                                            </h3>
                                            <ul className="space-y-3">
                                                {category.featured.map((item) => (
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
                                                <img
                                                    src={category.image}
                                                    alt={category.name}
                                                    className="rounded-lg w-full object-cover"
                                                />
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
                        ))
                    }
                </div >

                {/* Secondary navigation */}
                < div className="flex items-center space-x-8 text-sm" >
                    <Link href="#" className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200 flex items-center">
                        <Tag size={16} className="mr-1.5" />
                        <span>Deals</span>
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200 flex items-center">
                        <Sparkles size={16} className="mr-1.5" />
                        <span>New Arrivals</span>
                    </Link>
                    <Link href="#" className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200">Sell with Us</Link>
                    <Link href="#" className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200">Help</Link>
                </div >
            </nav >
        </>
    )
}

export default MainNavigation