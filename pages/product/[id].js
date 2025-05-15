import React, { useState, useEffect } from "react";
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
  Plus,
  Minus,
  Check,
  Info,
  Clock,
  Package,
  Zap,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

import ProductCard from "../components/sections/SearchSections/ProductCard";
import { featuredProducts, productReviews } from "@/constants/ProductConstants";
import { getProductById } from "@/utils/productUtils";

export default function ProductDetail({ product }) {
  // Use mock data if no product is passed from props
  const productData = product || getProductById("1");

  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("details");
  const [selectedImage, setSelectedImage] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const incrementQuantity = () => {
    if (quantity < productData.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Calculate final price and savings
  const originalPrice = parseFloat(productData.originalPrice.replace("$", ""));
  const currentPrice = parseFloat(productData.price.replace("$", ""));
  const savingsAmount = originalPrice - currentPrice;
  const savingsPercentage = Math.round((savingsAmount / originalPrice) * 100);

  // Related products
  const relatedProducts = featuredProducts.slice(0, 5).map((item) => ({
    ...item,
    rating: 4.2,
    reviewCount: 35,
    description: "High-quality product for your needs",
  }));

  // Material and construction details for the new specification tables
  const materialDetails = [
    {
      component: "Outer Material",
      material: "Genuine Leather",
      description: "High-quality, durable leather with a smooth finish",
    },
    {
      component: "Interior Lining",
      material: "Soft Fabric",
      description: "Provides a comfortable and protective layer for belongings",
    },
    {
      component: "Strap",
      material: "Adjustable Leather",
      description: "Offers a comfortable fit with custom length adjustment",
    },
    {
      component: "Zippers",
      material: "Metal",
      description: "Heavy-duty zippers for easy and secure closure",
    },
  ];

  // Technical specifications
  const technicalSpecs = [
    { spec: "Set Includes", details: "1 Leather Shoulder Bag" },
    { spec: "Material", details: "Premium Leather" },
    { spec: "Type", details: "Vertical Backpack" },
    { spec: "Adjustable Strap", details: "Yes" },
    { spec: "Main Compartment", details: "Spacious" },
    { spec: "Color", details: selectedColor.name },
    { spec: "Closure Type", details: "High-Quality Zipper" },
    { spec: "Suitable For", details: "Business & Casual Use" },
  ];

  // Pros and cons
  const prosAndCons = {
    pros: [
      "Premium quality leather for a luxurious look",
      "Spacious compartments for organization",
      "Adjustable strap for comfort",
    ],
    cons: [
      "Requires maintenance to prevent wear over time",
      "Leather may darken with age",
      "Higher price point compared to synthetic alternatives",
    ],
  };

  // Product features with icons
  const productFeatures = [
    {
      icon: "laptop",
      text: "Laptop Friendly",
      description: "Fits most laptops up to 15 inches",
    },
    {
      icon: "zipper",
      text: "Zipper + Buckle",
      description: "Secure closure system",
    },
    {
      icon: "water",
      text: "Water-Repellent",
      description: "Protects against light rain",
    },
    {
      icon: "weight",
      text: "Lightweight",
      description: "Easy to carry all day",
    },
  ];

  // General specifications with icons
  const specifications = [
    {
      name: "Capacity",
      value: "Medium Storage",
      icon: <Package size={20} className="text-blue-400" />,
    },
    {
      name: "Closure",
      value: "Zipper Closure",
      icon: <Package size={20} className="text-blue-400" />,
    },
    {
      name: "Closure Type",
      value: "Zipper + Buckle",
      icon: <Package size={20} className="text-blue-400" />,
    },
    {
      name: "Compartments",
      value: "Multi-Pocket",
      icon: <Package size={20} className="text-blue-400" />,
    },
    {
      name: "Compatibility",
      value: "Laptop Friendly",
      icon: <Package size={20} className="text-blue-400" />,
    },
    {
      name: "Design",
      value: "Retro Style",
      icon: <Package size={20} className="text-blue-400" />,
    },
    {
      name: "Features",
      value: "Sleek Design",
      icon: <Package size={20} className="text-blue-400" />,
    },
    {
      name: "Function",
      value: "Business Use",
      icon: <Package size={20} className="text-blue-400" />,
    },
    {
      name: "Ideal For",
      value: "Men",
      icon: <Package size={20} className="text-blue-400" />,
    },
    {
      name: "Interior Lining",
      value: "Soft Fabric",
      icon: <Package size={20} className="text-blue-400" />,
    },
    {
      name: "Material",
      value: "Premium Leather",
      icon: <Package size={20} className="text-blue-400" />,
    },
    {
      name: "Occasion",
      value: "Work & Casual",
      icon: <Package size={20} className="text-blue-400" />,
    },
  ];

  // Use cases
  const useCases = [
    "Commuting to work",
    "Traveling for business or leisure",
    "Carrying laptop and documents",
    "Daily office use",
    "Casual outings",
    "Organizing daily essentials",
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        {/* Breadcrumb with microinteraction */}
        <div className="flex items-center text-sm text-gray-500 mb-4 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-orange-500 transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="mx-1 flex-shrink-0" />
          <Link
            href="/search"
            className="hover:text-orange-500 transition-colors"
          >
            All Products
          </Link>
          <ChevronRight size={14} className="mx-1 flex-shrink-0" />
          <span className="text-gray-700 truncate max-w-[200px]">
            {productData.name}
          </span>
        </div>

        {/* Product Detail Main Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
          <div className="flex flex-col lg:flex-row">
            {/* Product Images Section - Enhanced with gallery style */}
            <div className="w-full lg:w-2/5 p-4 border-b lg:border-b-0 lg:border-r border-gray-100">
              {/* Main Product Image */}
              <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4 border border-gray-100">
                <Image
                  src={productData.images[selectedImage]}
                  alt={productData.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                  priority
                />
                {productData.badge && (
                  <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-md z-10">
                    {productData.badge}
                  </span>
                )}
                {productData.discount && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md z-10">
                    {productData.discount}
                  </span>
                )}
                <button className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
                  <Share2 size={18} className="text-gray-600" />
                </button>
              </div>

              {/* Thumbnail Images - Improved carousel style */}
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {productData.images.map((src, index) => (
                  <button
                    key={index}
                    className={`flex-shrink-0 border rounded-md overflow-hidden transition-all duration-200 ${
                      selectedImage === index
                        ? "border-orange-500 w-[70px] h-[70px]"
                        : "border-gray-200 w-[60px] h-[60px] opacity-70 hover:opacity-100"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={src}
                      alt={`${productData.name} view ${index + 1}`}
                      width={70}
                      height={70}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Information Section - Enhanced with modern design */}
            <div className="w-full lg:w-3/5 p-6">
              <h1 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">
                {productData.name}
              </h1>

              {/* Ratings and Stock Indicators */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < Math.floor(productData.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : i < productData.rating
                            ? "text-yellow-400 fill-yellow-400 opacity-50"
                            : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    {productData.rating}
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  ({productData.reviewCount} reviews)
                </span>
                <div className="h-4 border-r border-gray-200"></div>
                <span className="text-sm flex items-center">
                  <span className="inline-flex items-center text-green-500 font-medium">
                    <CheckCircle size={14} className="mr-1" /> In Stock
                  </span>
                  <span className="text-gray-500 ml-1">
                    ({productData.stock} available)
                  </span>
                </span>
              </div>

              {/* Seller Information */}
              <div className="flex items-center text-sm text-gray-600 mb-4 bg-gray-50 p-2 rounded-md">
                <span>Sold by: </span>
                <Link
                  href="#"
                  className="text-orange-500 hover:underline ml-1 font-medium"
                >
                  {productData.seller}
                </Link>
                <div className="flex items-center ml-2">
                  <Star size={12} className="text-yellow-400 fill-yellow-400" />
                  <span className="ml-1">{productData.sellerRating}</span>
                </div>
              </div>

              {/* Price with Savings Highlight */}
              <div className="mb-6 bg-orange-50 p-3 rounded-lg">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-orange-500">
                    {productData.price}
                  </span>
                  {productData.originalPrice && (
                    <span className="ml-2 text-base text-gray-500 line-through">
                      {productData.originalPrice}
                    </span>
                  )}
                  {savingsPercentage > 0 && (
                    <span className="ml-3 text-sm font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded">
                      Save {savingsPercentage}%
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  (Inclusive of all taxes)
                </p>
                {savingsAmount > 0 && (
                  <p className="text-sm text-green-600 mt-1">
                    You save: ${savingsAmount.toFixed(2)}
                  </p>
                )}
              </div>

              {/* Color Selection - Enhanced with better visual feedback */}
              <div className="mb-5">
                <span className="block text-sm font-medium text-gray-700 mb-2">
                  Color
                </span>
                <div className="flex space-x-3">
                  {productData.colors.map((color) => (
                    <button
                      key={color.id}
                      className={`relative rounded-full transition-all duration-200 ${
                        selectedColor.id === color.id
                          ? "transform scale-110"
                          : "hover:scale-105"
                      }`}
                      onClick={() => setSelectedColor(color)}
                    >
                      <div
                        className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                        style={{ background: color.value }}
                      ></div>
                      {selectedColor.id === color.id && (
                        <div className="absolute inset-0 border-2 border-orange-500 rounded-full"></div>
                      )}
                      <span className="sr-only">{color.name}</span>
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  {selectedColor.name}
                </p>
              </div>

              {/* Quantity Selector - Improved with better spacing and feedback */}
              <div className="mb-6">
                <span className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </span>
                <div className="flex items-center">
                  <button
                    className="w-10 h-10 bg-gray-100 rounded-l-md flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <div className="w-14 h-10 border-t border-b border-gray-200 flex items-center justify-center text-gray-700">
                    {quantity}
                  </div>
                  <button
                    className="w-10 h-10 bg-gray-100 rounded-r-md flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                    onClick={incrementQuantity}
                    disabled={quantity >= productData.stock}
                  >
                    <Plus size={16} />
                  </button>
                  <span className="ml-3 text-sm text-gray-500">
                    {productData.stock} items available
                  </span>
                </div>
              </div>

              {/* Action Buttons - Enhanced with micro-interactions */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-md flex items-center justify-center font-medium transition-all duration-200 hover:shadow-lg">
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </button>
                <button className="flex-1 bg-orange-100 hover:bg-orange-200 text-orange-500 py-3 px-4 rounded-md flex items-center justify-center font-medium transition-all duration-200 hover:shadow-md">
                  Buy Now
                </button>
                <button className="w-12 h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md flex items-center justify-center transition-colors">
                  <Heart
                    size={20}
                    className="text-gray-600 hover:text-red-500 transition-colors"
                  />
                </button>
              </div>

              {/* Delivery & Services Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
                <div className="bg-gray-50 p-3 rounded-lg flex items-start">
                  <Truck
                    size={18}
                    className="text-orange-500 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Free Shipping
                    </p>
                    <p className="text-xs text-gray-500">
                      Delivery in {productData.delivery}
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex items-start">
                  <RefreshCcw
                    size={18}
                    className="text-orange-500 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Easy Returns
                    </p>
                    <p className="text-xs text-gray-500">
                      {productData.returnPolicy}
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex items-start">
                  <Shield
                    size={18}
                    className="text-orange-500 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Warranty
                    </p>
                    <p className="text-xs text-gray-500">
                      {productData.warranty}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs - Redesigned with modern tab interface */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="border-b border-gray-100">
            <div className="flex overflow-x-auto scrollbar-hide">
              <button
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === "details"
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("details")}
              >
                Details
              </button>
              <button
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === "specifications"
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("specifications")}
              >
                Specifications
              </button>
              <button
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === "features"
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("features")}
              >
                Features
              </button>
              <button
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === "reviews"
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews ({productData.reviewCount})
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === "details" && (
              <div className="space-y-6">
                <div className="prose prose-sm max-w-none">
                  <h3 className="text-lg font-medium text-gray-800 flex items-center">
                    <Info size={20} className="text-orange-500 mr-2" />
                    Product Description
                  </h3>

                  <div
                    className={`mt-4 text-gray-600 relative ${!showFullDescription && "max-h-36 overflow-hidden"}`}
                  >
                    <p className="mb-3">
                      The Men&apos;s Leather Shoulder Bag – Retro Vertical Backpack
                      is a stylish and functional accessory designed for
                      business and casual use. Crafted from high-quality
                      leather, this bag offers a timeless look combined with
                      durability. Whether commuting to work, traveling, or
                      running errands, it seamlessly fits into any lifestyle.
                    </p>
                    <p className="mb-3">
                      With its ergonomic design and comfortable straps, this bag
                      provides a perfect balance of convenience and style. The
                      vertical structure helps keep your belongings organized,
                      while the spacious compartments accommodate laptops,
                      notebooks, and daily essentials. This bag is ideal for men
                      who appreciate classic design and superior craftsmanship.
                    </p>
                    <p>
                      From important business meetings to casual outings, this
                      versatile leather bag stands out with its sleek profile
                      and high-end finish. Its robust construction ensures it
                      withstands daily wear and tear, offering a reliable
                      companion for years to come.
                    </p>

                    {!showFullDescription && (
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
                    )}
                  </div>

                  <button
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className="mt-2 text-orange-500 hover:text-orange-600 text-sm font-medium flex items-center transition-colors"
                  >
                    {showFullDescription ? "Show Less" : "Read More"}
                    <ChevronRight
                      size={16}
                      className={`ml-1 transition-transform duration-200 ${showFullDescription ? "rotate-90" : ""}`}
                    />
                  </button>
                </div>

                {/* Key Features */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-800 flex items-center mb-4">
                    <Award size={20} className="text-orange-500 mr-2" />
                    Key Features and Benefits
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {productData.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check
                          size={18}
                          className="text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Material Details */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-800 flex items-center mb-4">
                    <Package size={20} className="text-orange-500 mr-2" />
                    Material and Construction Details
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                            Component
                          </th>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                            Material
                          </th>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {materialDetails.map((item, index) => (
                          <tr
                            key={index}
                            className={
                              index % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }
                          >
                            <td className="py-3 px-4 text-sm text-gray-700">
                              {item.component}
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-700">
                              {item.material}
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-500">
                              {item.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-800 flex items-center mb-4">
                    <Zap size={20} className="text-orange-500 mr-2" />
                    Use Cases and Applications
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {useCases.map((useCase, index) => (
                      <div key={index} className="flex items-center">
                        <Check
                          size={18}
                          className="text-green-500 mr-2 flex-shrink-0"
                        />
                        <span className="text-gray-600">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Care Information */}
                <div className="mt-8 bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-800 flex items-center mb-3">
                    <Info size={20} className="text-blue-500 mr-2" />
                    Care Information
                  </h3>
                  <p className="text-gray-600">
                    To keep your leather shoulder bag looking its best, wipe it
                    regularly with a damp cloth and use leather conditioner
                    every few months. Avoid exposing it to direct sunlight for
                    prolonged periods and store it in a cool, dry place when not
                    in use.
                  </p>
                </div>

                {/* Safety Information */}
                <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-800 flex items-center mb-3">
                    <AlertTriangle size={20} className="text-yellow-500 mr-2" />
                    Safety Information
                  </h3>
                  <p className="text-gray-600">
                    Ensure the bag is used as intended and handle the zippers
                    and straps with care to avoid damage. Keep away from sharp
                    objects that could puncture or scratch the leather.
                  </p>
                </div>

                {/* Pros and Cons */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-800 flex items-center mb-4">
                    <Info size={20} className="text-orange-500 mr-2" />
                    Pros & Cons
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                            Pros
                          </th>
                          <th className="py-3 px-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                            Cons
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {prosAndCons.pros.map((pro, i) => (
                          <tr key={i}>
                            <td className="py-3 px-4 text-sm text-gray-700 flex items-start">
                              <Check
                                size={16}
                                className="text-green-500 mr-2 mt-1 flex-shrink-0"
                              />
                              {pro}
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-700 flex items-start">
                              <AlertTriangle
                                size={16}
                                className="text-amber-500 mr-2 mt-1 flex-shrink-0"
                              />
                              {prosAndCons.cons[i] || ""}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  Specification
                </h3>

                {/* Visual specifications grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="border border-gray-100 rounded-lg p-4 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                    >
                      {spec.icon}
                      <p className="text-xs text-gray-500 mt-2">{spec.name}</p>
                      <p className="text-sm font-medium text-gray-700 mt-1">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Technical specifications table */}
                <div>
                  <h3 className="text-lg font-medium text-gray-800 flex items-center mb-4">
                    <Info size={20} className="text-orange-500 mr-2" />
                    Technical Specifications
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead className="bg-gray-800 text-white">
                        <tr>
                          <th className="py-3 px-4 text-left text-xs font-medium uppercase tracking-wider">
                            Specification
                          </th>
                          <th className="py-3 px-4 text-left text-xs font-medium uppercase tracking-wider">
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {technicalSpecs.map((item, index) => (
                          <tr
                            key={index}
                            className={
                              index % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }
                          >
                            <td className="py-3 px-4 text-sm font-medium text-gray-700">
                              {item.spec}
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-700">
                              {item.details}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "features" && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-800">
                  Key Features
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {productData.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start p-3 border border-gray-100 rounded-lg hover:border-orange-200 hover:bg-orange-50 transition-colors"
                    >
                      <Check
                        size={20}
                        className="text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      />
                      <div>
                        <p className="font-medium text-gray-800">{feature}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          {index === 0 &&
                            "Safe for all your food preparation needs"}
                          {index === 1 &&
                            "No need to worry about cleaning hassles"}
                          {index === 2 &&
                            "Fits perfectly in your kitchen drawers"}
                          {index === 3 &&
                            "Get more value from one versatile tool"}
                          {index === 4 &&
                            "Works perfectly with any type of egg"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional feature highlights */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">
                    What Makes This Product Special
                  </h3>

                  <div className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-lg border border-orange-100">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                          <Award size={24} className="text-orange-500" />
                        </div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Premium Quality
                        </h4>
                        <p className="text-sm text-gray-600">
                          Made with the finest materials for lasting durability
                        </p>
                      </div>

                      <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                          <Zap size={24} className="text-orange-500" />
                        </div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Versatile Design
                        </h4>
                        <p className="text-sm text-gray-600">
                          Perfect for multiple use cases and scenarios
                        </p>
                      </div>

                      <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                          <Shield size={24} className="text-orange-500" />
                        </div>
                        <h4 className="font-medium text-gray-800 mb-1">
                          Built to Last
                        </h4>
                        <p className="text-sm text-gray-600">
                          Engineered for years of reliable performance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      Customer Reviews
                    </h3>
                    <div className="flex items-center mt-2">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={`${
                              i < Math.floor(productData.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : i < productData.rating
                                  ? "text-yellow-400 fill-yellow-400 opacity-50"
                                  : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-2xl font-bold text-gray-800">
                        {productData.rating}
                      </span>
                      <span className="ml-2 text-sm text-gray-600">
                        Based on {productData.reviewCount} reviews
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                    Write a Review
                  </button>
                </div>

                {/* Rating Distribution */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Rating Distribution
                  </h4>

                  {[5, 4, 3, 2, 1].map((rating) => {
                    // Generate mock percentages that add up to 100%
                    const percentages = {
                      5: 65,
                      4: 20,
                      3: 10,
                      2: 3,
                      1: 2,
                    };

                    return (
                      <div key={rating} className="flex items-center mb-2">
                        <div className="flex items-center w-20">
                          <span className="text-sm text-gray-600">
                            {rating}
                          </span>
                          <Star
                            size={14}
                            className="ml-1 text-yellow-400 fill-yellow-400"
                          />
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mx-2">
                          <div
                            className="bg-orange-500 h-2.5 rounded-full"
                            style={{ width: `${percentages[rating]}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-16">
                          {percentages[rating]}%
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Sample reviews */}
                <div className="border-t border-gray-100 pt-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-4">
                    Most Recent Reviews
                  </h4>

                  <div className="space-y-6">
                    <div className="border-b border-gray-100 pb-6">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-medium mr-3">
                            S
                          </div>
                          <div>
                            <span className="font-medium text-gray-800 block">
                              Sarah J.
                            </span>
                            <span className="text-xs text-green-600 flex items-center">
                              <CheckCircle size={12} className="mr-1" />
                              Verified Purchase
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex mb-1 justify-end">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={
                                  i < 5
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                }
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">
                            2 days ago
                          </span>
                        </div>
                      </div>
                      <h4 className="text-sm font-medium text-gray-800 mb-2">
                        Perfect for my needs!
                      </h4>
                      <p className="text-sm text-gray-600">
                        This egg separator works exactly as described. I use it
                        almost daily and it&apos;s made my breakfast preparation so
                        much easier. The bottle opener is a nice bonus feature.
                      </p>
                    </div>

                    <div className="border-b border-gray-100 pb-6">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-medium mr-3">
                            M
                          </div>
                          <div>
                            <span className="font-medium text-gray-800 block">
                              Michael T.
                            </span>
                            <span className="text-xs text-green-600 flex items-center">
                              <CheckCircle size={12} className="mr-1" />
                              Verified Purchase
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex mb-1 justify-end">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={
                                  i < 4
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                }
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">
                            1 week ago
                          </span>
                        </div>
                      </div>
                      <h4 className="text-sm font-medium text-gray-800 mb-2">
                        Good quality, takes practice
                      </h4>
                      <p className="text-sm text-gray-600">
                        The material feels durable and well-made. It took me a
                        few tries to get the hang of using it properly, but now
                        it works great. Would recommend watching a quick
                        tutorial.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-500 font-medium mr-3">
                            J
                          </div>
                          <div>
                            <span className="font-medium text-gray-800 block">
                              Jessica R.
                            </span>
                            <span className="text-xs text-green-600 flex items-center">
                              <CheckCircle size={12} className="mr-1" />
                              Verified Purchase
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex mb-1 justify-end">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={
                                  i < 5
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                }
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">
                            2 weeks ago
                          </span>
                        </div>
                      </div>
                      <h4 className="text-sm font-medium text-gray-800 mb-2">
                        Excellent purchase!
                      </h4>
                      <p className="text-sm text-gray-600">
                        I&apos;m extremely pleased with this purchase. The quality
                        far exceeded my expectations, and it&apos;s made my cooking
                        routine much more efficient. I would definitely
                        recommend this to anyone who cooks regularly.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <button className="text-orange-500 hover:text-orange-600 text-sm font-medium border border-orange-200 hover:border-orange-300 rounded-md px-4 py-2 transition-colors">
                      Load More Reviews
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products - Enhanced with better spacing and hover effects */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-medium text-gray-800">
              You May Also Like
            </h2>
            <Link
              href="/search"
              className="text-orange-500 hover:text-orange-600 text-sm font-medium flex items-center"
            >
              View All <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {relatedProducts.slice(0, 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
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
    fallback: "blocking", // See NextJS docs for more info on this
  };
}

export async function getStaticProps({ params }) {
  // Fetch product data based on the ID
  const product = getProductById(params.id);

  return {
    props: {
      product,
    },
    revalidate: 60, // Revalidate the page every 60 seconds
  };
}