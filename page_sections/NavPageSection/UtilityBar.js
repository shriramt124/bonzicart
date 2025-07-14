import { ChevronDown, Download, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function UtilityBar({ locationRef, showLocationPicker }) {
    return (
        <div>
            {/* Top Utility Bar - Enhanced with more options and visual improvements */}
            <div className="py-2 border-b border-gray-100 hidden lg:flex justify-between text-xs text-gray-600">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                        <span className="w-4 h-4 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mr-1.5">
                            <span className="text-[10px]">🚚</span>
                        </span>
                        <p>Free shipping on orders over $50</p>
                    </div>
                    <div className="flex items-center">
                        <span className="w-4 h-4 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mr-1.5">
                            <span className="text-[10px]">⏱️</span>
                        </span>
                        <p>30-day returns</p>
                    </div>
                    <div className="flex items-center">
                        <span className="w-4 h-4 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mr-1.5">
                            <span className="text-[10px]">🔄</span>
                        </span>
                        <p>Easy exchanges</p>
                    </div>
                    <div className="flex items-center">
                        <span className="w-4 h-4 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mr-1.5">
                            <span className="text-[10px]">💯</span>
                        </span>
                        <p>100% secure checkout</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    {/* Location Selector */}
                    <div className="relative" ref={locationRef}>
                        <button
                            onClick={() =>
                                setShowLocationPicker(!showLocationPicker)
                            }
                            className="flex items-center hover:text-orange-500 transition-colors duration-200"
                        >
                            <MapPin size={12} className="mr-1" />
                            <span>Deliver to New York</span>
                            <ChevronDown
                                size={12}
                                className={`ml-1 transition-transform duration-200 ${showLocationPicker ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {showLocationPicker && (
                            <div className="absolute mt-2 w-56 bg-white rounded-lg shadow-xl z-50 p-3 border border-gray-100">
                                <h3 className="font-medium text-xs mb-2 text-gray-700">
                                    Choose your location
                                </h3>
                                <input
                                    type="text"
                                    placeholder="Enter zip code"
                                    className="w-full px-3 py-1.5 text-xs border border-gray-200 rounded-md mb-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
                                />
                                <div className="max-h-40 overflow-y-auto">
                                    <h4 className="text-xs font-medium text-gray-500 mb-1.5">
                                        Popular Cities
                                    </h4>
                                    <div className="grid grid-cols-2 gap-1">
                                        {locationCities.map((city, idx) => (
                                            <button
                                                key={idx}
                                                className="text-left text-xs py-1.5 px-2 hover:bg-orange-50 rounded-md text-gray-700 hover:text-orange-500 transition-colors"
                                            >
                                                {city}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <span>|</span>
                    <Link
                        href="#"
                        className="hover:text-orange-500 transition-colors duration-200 flex items-center"
                    >
                        <Phone size={12} className="mr-1" />
                        <span>+1 800-555-0123</span>
                    </Link>
                    <span>|</span>
                    <Link
                        href="#"
                        className="hover:text-orange-500 transition-colors duration-200"
                    >
                        Track Order
                    </Link>
                    <span>|</span>
                    <Link
                        href="#"
                        className="hover:text-orange-500 transition-colors duration-200"
                    >
                        Help Center
                    </Link>
                    <span>|</span>
                    <Link
                        href="#"
                        className="hover:text-orange-500 transition-colors duration-200 flex items-center"
                    >
                        <Download size={12} className="mr-1" />
                        <span>Download App</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}