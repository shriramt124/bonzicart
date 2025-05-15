import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Heart,
  ShoppingCart,
  Share2,
  Truck,
  Shield,
  RefreshCcw,
  Award,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  Check,
  Info,
  AlertTriangle,
  ThumbsUp,
  ThumbsDown,
  Zap,
  Package,
  Tool,
  FileText,
} from "lucide-react";
import MainLayout from "../components/layouts/MainLayout";
import ProductCard from "@/pages/components/sections/SearchSections/ProductCard";
import { featuredProducts, productReviews } from "@/constants/ProductConstants";
import { getProductById } from "@/utils/productUtils";

export default function ProductDetail({ product }) {
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || {},
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("details");
  const [selectedImage, setSelectedImage] = useState(0);

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Related products
  const relatedProducts = featuredProducts.filter(
    (item) => item.id !== product.id,
  );

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-orange-500">
            Home
          </Link>
          <ChevronRight size={14} className="mx-1" />
          <Link href="/search" className="hover:text-orange-500">
            All Products
          </Link>
          <ChevronRight size={14} className="mx-1" />
          <span className="text-gray-700 truncate max-w-[200px]">
            {product.name}
          </span>
        </div>

        {/* Product Detail Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="flex flex-col md:flex-row">
            {/* Product Images Section */}
            <div className="w-full md:w-2/5 p-6 border-r border-gray-100">
              {/* Main Product Image */}
              <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4 border border-gray-100">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                    {product.badge}
                  </span>
                )}
                {product.discount && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product.discount}
                  </span>
                )}
                <button className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                  <Share2 size={18} className="text-gray-600" />
                </button>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-5 gap-2">
                {product.images.map((src, index) => (
                  <button
                    key={index}
                    className={`aspect-square border rounded-md overflow-hidden ${
                      selectedImage === index
                        ? "border-orange-500 ring-2 ring-orange-100"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={src}
                      alt={`${product.name} view ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Information Section */}
            <div className="w-full md:w-3/5 p-6">
              <h1 className="text-xl md:text-2xl font-medium text-gray-800 mb-3">
                {product.name}
              </h1>

              {/* Ratings & Seller */}
              <div className="flex flex-wrap items-center mb-4">
                <div className="flex items-center mr-4">
                  <div className="flex items-center mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : i < product.rating
                              ? "text-yellow-400 fill-yellow-400 opacity-50"
                              : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 mr-1">
                    {product.rating}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
                <div className="h-4 border-r border-gray-200 mx-3 hidden sm:block"></div>
                <div className="text-sm text-gray-600 mt-1 sm:mt-0">
                  <span>Sold by: </span>
                  <Link href="#" className="text-orange-500 hover:underline">
                    {product.seller}
                  </Link>
                  <span className="ml-2 flex items-center">
                    <span className="text-yellow-400">★</span>{" "}
                    {product.sellerRating}
                  </span>
                </div>
              </div>

              {/* Price Section */}
              <div className="bg-orange-50 p-4 rounded-lg mb-6">
                <div className="flex items-baseline mb-1">
                  <span className="text-3xl font-bold text-orange-500">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="ml-3 text-base text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                  {product.discount && (
                    <span className="ml-3 text-sm font-medium text-red-500">
                      {product.discount}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500">
                  (Inclusive of all taxes)
                </p>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <span className="block text-sm font-medium text-gray-700 mb-2">
                  Color
                </span>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.id}
                      className={`w-12 h-12 rounded-full border-2 relative ${
                        selectedColor.id === color.id
                          ? "border-orange-500"
                          : "border-transparent"
                      }`}
                      style={{
                        background: color.value,
                        boxShadow:
                          selectedColor.id === color.id
                            ? "0 0 0 2px rgba(249, 115, 22, 0.2)"
                            : "none",
                      }}
                      onClick={() => setSelectedColor(color)}
                    >
                      {selectedColor.id === color.id && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <Check
                            size={16}
                            className="text-white drop-shadow-md"
                            style={{
                              filter:
                                "drop-shadow(0px 0px 1px rgba(0,0,0,0.5))",
                            }}
                          />
                        </span>
                      )}
                      <span className="sr-only">{color.name}</span>
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Selected:{" "}
                  <span className="font-medium">{selectedColor.name}</span>
                </p>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <span className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </span>
                <div className="flex items-center">
                  <button
                    className="w-10 h-10 bg-gray-100 rounded-l-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                    onClick={decrementQuantity}
                  >
                    <Minus size={18} />
                  </button>
                  <input
                    type="number"
                    className="w-14 h-10 border-t border-b border-gray-200 text-center text-gray-700"
                    value={quantity}
                    readOnly
                  />
                  <button
                    className="w-10 h-10 bg-gray-100 rounded-r-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                    onClick={incrementQuantity}
                  >
                    <Plus size={18} />
                  </button>
                  <span className="ml-4 text-sm text-gray-500">
                    <span className="text-green-500 font-medium">
                      {product.stock}
                    </span>{" "}
                    items available
                  </span>
                </div>
              </div>

              {/* Purchase & Shipping Info Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center justify-center text-center">
                  <Truck size={20} className="text-orange-500 mb-1" />
                  <span className="text-xs font-medium">Free Shipping</span>
                  <span className="text-xs text-gray-500">
                    {product.delivery}
                  </span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center justify-center text-center">
                  <RefreshCcw size={20} className="text-orange-500 mb-1" />
                  <span className="text-xs font-medium">Easy Returns</span>
                  <span className="text-xs text-gray-500">
                    {product.returnPolicy}
                  </span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center justify-center text-center">
                  <Shield size={20} className="text-orange-500 mb-1" />
                  <span className="text-xs font-medium">Warranty</span>
                  <span className="text-xs text-gray-500">
                    {product.warranty}
                  </span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex flex-col items-center justify-center text-center">
                  <Award size={20} className="text-orange-500 mb-1" />
                  <span className="text-xs font-medium">100% Authentic</span>
                  <span className="text-xs text-gray-500">
                    Quality products
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg flex items-center justify-center font-medium text-base transition-colors">
                  <ShoppingCart size={20} className="mr-2" />
                  Add to Cart
                </button>
                <button className="flex-1 bg-orange-100 hover:bg-orange-200 text-orange-500 py-3 px-6 rounded-lg flex items-center justify-center font-medium text-base transition-colors">
                  <Zap size={20} className="mr-2" />
                  Buy Now
                </button>
                <button className="w-12 h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg flex items-center justify-center transition-colors">
                  <Heart size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-8">
          {/* Tabs */}
          <div className="flex border-b border-gray-100 overflow-x-auto scrollbar-hide">
            <button
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                activeTab === "details"
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("details")}
            >
              <FileText size={16} className="inline mr-2" />
              Details
            </button>
            <button
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                activeTab === "features"
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("features")}
            >
              <Zap size={16} className="inline mr-2" />
              Features
            </button>
            <button
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                activeTab === "specifications"
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("specifications")}
            >
              <Tool size={16} className="inline mr-2" />
              Specifications
            </button>
            <button
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                activeTab === "reviews"
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              <Star size={16} className="inline mr-2" />
              Reviews ({product.reviewCount})
            </button>
          </div>

          <div className="p-6">
            {activeTab === "details" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                    <FileText size={18} className="text-orange-500 mr-2" />
                    Product Description
                  </h2>
                  <div className="prose prose-sm max-w-none text-gray-600">
                    <p className="mb-4">{product.description}</p>
                    <p className="mb-4">
                      This innovative egg separator is designed to make your
                      kitchen tasks easier and more efficient. The unique design
                      allows for clean separation of egg whites and yolks with
                      minimal mess. Made from high-quality food-grade silicone,
                      it's safe for use with all types of eggs.
                    </p>
                    <p>
                      The built-in bottle opener feature adds extra utility to
                      this kitchen gadget, saving you space and providing
                      multiple functions in one compact tool. Perfect for home
                      cooks who appreciate efficient, multi-purpose tools.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                    <Package size={18} className="text-orange-500 mr-2" />
                    What's in the Package
                  </h2>
                  <ul className="list-disc pl-5 text-gray-600 text-sm">
                    <li className="mb-1">1 × Egg Separator</li>
                    <li className="mb-1">1 × Instruction Manual</li>
                    <li>1 × Warranty Card</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                    <Info size={18} className="text-orange-500 mr-2" />
                    Care Information
                  </h2>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm text-gray-700">
                    <p className="mb-2">
                      To keep your product in best condition:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Clean with mild soap and warm water after each use
                      </li>
                      <li>Dry thoroughly before storing</li>
                      <li>
                        Store in a cool, dry place away from direct sunlight
                      </li>
                      <li>Avoid exposure to extreme temperatures</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "features" && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                  <Zap size={18} className="text-orange-500 mr-2" />
                  Key Features and Benefits
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start bg-gray-50 p-4 rounded-lg"
                    >
                      <div className="bg-green-500 rounded-full p-1 flex-shrink-0 mr-3">
                        <Check size={14} className="text-white" />
                      </div>
                      <div>
                        <span className="text-sm text-gray-800 font-medium">
                          {feature}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                    <ThumbsUp size={18} className="text-orange-500 mr-2" />
                    Pros & Cons
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="text-green-600 font-medium flex items-center">
                        <ThumbsUp size={16} className="mr-2" />
                        Pros
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check
                            size={16}
                            className="text-green-500 mr-2 mt-0.5"
                          />
                          <span className="text-sm text-gray-700">
                            Premium quality materials
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check
                            size={16}
                            className="text-green-500 mr-2 mt-0.5"
                          />
                          <span className="text-sm text-gray-700">
                            Multifunctional design
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check
                            size={16}
                            className="text-green-500 mr-2 mt-0.5"
                          />
                          <span className="text-sm text-gray-700">
                            Easy to clean and maintain
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Check
                            size={16}
                            className="text-green-500 mr-2 mt-0.5"
                          />
                          <span className="text-sm text-gray-700">
                            Compact storage solution
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-red-600 font-medium flex items-center">
                        <ThumbsDown size={16} className="mr-2" />
                        Cons
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <AlertTriangle
                            size={16}
                            className="text-red-500 mr-2 mt-0.5"
                          />
                          <span className="text-sm text-gray-700">
                            May not work with extra large eggs
                          </span>
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle
                            size={16}
                            className="text-red-500 mr-2 mt-0.5"
                          />
                          <span className="text-sm text-gray-700">
                            Requires hand washing for best results
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                  <Tool size={18} className="text-orange-500 mr-2" />
                  Technical Specifications
                </h2>

                <div className="overflow-hidden border border-gray-200 rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      {Object.entries(product.specifications).map(
                        ([key, value]) => (
                          <tr key={key} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700 w-1/3 bg-gray-50">
                              {key
                                .replace(/([A-Z])/g, " $1")
                                .trim()
                                .charAt(0)
                                .toUpperCase() +
                                key
                                  .replace(/([A-Z])/g, " $1")
                                  .trim()
                                  .slice(1)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {value}
                            </td>
                          </tr>
                        ),
                      )}
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700 w-1/3 bg-gray-50">
                          Color Options
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {product.colors.map((c) => c.name).join(", ")}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">
                    Product Compatibility
                  </h3>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-orange-500 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 mx-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-sm font-medium text-gray-800">
                        Dishwasher Safe
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        Top rack only
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-orange-500 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 mx-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-sm font-medium text-gray-800">
                        Food Grade
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        BPA-free silicone
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-orange-500 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 mx-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                          />
                        </svg>
                      </div>
                      <h4 className="text-sm font-medium text-gray-800">
                        Temperature
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        -20°C to 230°C
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-orange-500 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 mx-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-sm font-medium text-gray-800">
                        Warranty
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">12 months</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200">
                  <div>
                    <h2 className="text-lg font-medium text-gray-800 mb-1">
                      Customer Reviews
                    </h2>
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className={`${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : i < product.rating
                                  ? "text-yellow-400 fill-yellow-400 opacity-50"
                                  : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 mr-1">
                        {product.rating}
                      </span>
                      <span className="text-sm text-gray-500">
                        Based on {product.reviewCount} reviews
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 sm:mt-0 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                    Write a Review
                  </button>
                </div>

                {/* Rating Breakdown */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-800 mb-3">
                    Rating Breakdown
                  </h3>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((star) => {
                      const percentage = Math.round(
                        ((star === 5
                          ? 78
                          : star === 4
                            ? 15
                            : star === 3
                              ? 5
                              : star === 2
                                ? 1
                                : 1) /
                          100) *
                          100,
                      );
                      return (
                        <div key={star} className="flex items-center">
                          <div className="flex items-center w-24">
                            <span className="text-sm text-gray-600 mr-2">
                              {star}
                            </span>
                            <Star
                              size={12}
                              className="text-yellow-400 fill-yellow-400"
                            />
                          </div>
                          <div className="flex-grow h-2 mx-3 rounded-full bg-gray-200 overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500 w-10 text-right">
                            {percentage}%
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Reviews List */}
                <div className="divide-y divide-gray-100">
                  {productReviews.map((review) => (
                    <div key={review.id} className="py-5">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <span className="font-medium text-gray-800 mr-2">
                            {review.userName}
                          </span>
                          {review.verified && (
                            <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                              Verified Purchase
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">
                          {review.date}
                        </span>
                      </div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={
                              i < review.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <h4 className="text-sm font-medium text-gray-800 mb-1">
                        {review.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {review.comment}
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <button className="flex items-center hover:text-gray-700">
                          <ThumbsUp size={14} className="mr-1" />
                          Helpful
                        </button>
                        <span className="mx-2">•</span>
                        <button className="hover:text-gray-700">Report</button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-6">
                  <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium">
                    Load More Reviews
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-medium text-gray-800">
              You May Also Like
            </h2>
            <Link
              href="/search"
              className="text-orange-500 hover:text-orange-600 text-sm font-medium flex items-center"
            >
              View All <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

// This would typically fetch data from an API or database
export async function getStaticPaths() {
  // Generate paths for all products in featuredProducts
  const paths = featuredProducts.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: false, // Show 404 for any paths not returned by getStaticPaths
  };
}

export async function getStaticProps({ params }) {
  // Get product data based on the ID
  const product = getProductById(params.id);

  // If product not found, return 404
  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
    revalidate: 60, // Revalidate the page every 60 seconds
  };
}
