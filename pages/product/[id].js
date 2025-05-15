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
} from "lucide-react";
import MainLayout from "../components/layouts/MainLayout";
import ProductCard from "../components/sections/SearchSections/ProductCard";
import { flashDeals } from "@/constants/HomePageContants";

// Mock product data for the example
const productData = {
  id: "1",
  name: "Efficient Eggshell Separator - Quick Peel & Extract Egg Yolks, Includes Shell Bottle Opener & Egg Whisk",
  description: "Perfect for Kitchen Use. Ideal for Uncooked & Cooked Eggs.",
  price: "$12.99",
  originalPrice: "$29.99",
  discount: "57% OFF",
  badge: "Lightning Deal",
  colors: [
    { id: 1, name: "Rose Red", value: "#e91e63" },
    { id: 2, name: "Yellow", value: "#ffc107" },
    { id: 3, name: "Orange", value: "#ff5722" },
    {
      id: 4,
      name: "Multi",
      value: "linear-gradient(to right, #e91e63, #ffc107, #ff5722)",
    },
  ],
  rating: 4.5,
  reviewCount: 128,
  stock: 10,
  images: [
    "/api/placeholder/500/500",
    "/api/placeholder/500/500",
    "/api/placeholder/500/500",
    "/api/placeholder/500/500",
    "/api/placeholder/500/500",
  ],
  seller: "Kitchen Gadgets Store",
  sellerRating: 4.8,
  shipping: "Free",
  delivery: "3-5 business days",
  returnPolicy: "7 days easy returns",
  warranty: "1 year manufacturer warranty",
  features: [
    "Food-grade safe silicone material",
    "Dishwasher safe for easy cleaning",
    "Compact design for easy storage",
    "Multifunctional: separates eggs and opens bottles",
    "Suitable for both raw and cooked eggs",
  ],
  specifications: {
    material: "Food-grade silicone",
    dimensions: "3.5 × 2.8 × 1.2 inches",
    weight: "0.15 lbs",
    packageContents: "1 × Egg Separator, 1 × Instruction Manual",
  },
};

export default function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedImage, setSelectedImage] = useState(0);

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

  // Related products - using flashDeals from your constants for example
  const relatedProducts = flashDeals.map((item) => ({
    ...item,
    rating: 4.2,
    reviewCount: 35,
    description: "High-quality product for your needs",
  }));

  return (
    <>
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-orange-500">
            Home
          </Link>
          <ChevronRight size={14} className="mx-1" />
          <Link href="/search" className="hover:text-orange-500">
            All Products
          </Link>
          <ChevronRight size={14} className="mx-1" />
          <span className="text-gray-700 truncate max-w-[200px]">
            {productData.name}
          </span>
        </div>

        {/* Product Detail Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Product Images Section */}
            <div className="w-full md:w-2/5 p-4">
              {/* Main Product Image */}
              <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden mb-3 border border-gray-100">
                <Image
                  src={productData.images[selectedImage]}
                  alt={productData.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
                {productData.badge && (
                  <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                    {productData.badge}
                  </span>
                )}
                {productData.discount && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {productData.discount}
                  </span>
                )}
                <button className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                  <Share2 size={18} className="text-gray-600" />
                </button>
              </div>

              {/* Thumbnail Images */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {productData.images.map((src, index) => (
                  <button
                    key={index}
                    className={`flex-shrink-0 w-16 h-16 border rounded-md overflow-hidden ${
                      selectedImage === index
                        ? "border-orange-500"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={src}
                      alt={`${productData.name} view ${index + 1}`}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Information Section */}
            <div className="w-full md:w-3/5 p-4 border-t md:border-t-0 md:border-l border-gray-100">
              <h1 className="text-lg md:text-xl font-medium text-gray-800 mb-2">
                {productData.name}
              </h1>

              {/* Ratings */}
              <div className="flex items-center mb-3">
                <div className="flex items-center mr-3">
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
                </div>
                <span className="text-sm text-gray-500 mr-3">
                  {productData.rating}
                </span>
                <span className="text-sm text-gray-500">
                  {productData.reviewCount} reviews
                </span>
                <div className="mx-3 h-4 border-r border-gray-200"></div>
                <span className="text-sm text-gray-500">
                  <span className="text-green-500 font-medium">In Stock</span> (
                  {productData.stock} available)
                </span>
              </div>

              {/* Seller */}
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <span>Sold by: </span>
                <Link href="#" className="text-orange-500 hover:underline ml-1">
                  {productData.seller}
                </Link>
                <span className="ml-2 flex items-center">
                  <span className="text-yellow-400">★</span>{" "}
                  {productData.sellerRating}
                </span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-orange-500">
                    {productData.price}
                  </span>
                  {productData.originalPrice && (
                    <span className="ml-2 text-base text-gray-500 line-through">
                      {productData.originalPrice}
                    </span>
                  )}
                  {productData.discount && (
                    <span className="ml-2 text-sm font-medium text-red-500">
                      {productData.discount}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  (Inclusive of all taxes)
                </p>
              </div>

              {/* Color Selection */}
              <div className="mb-4">
                <span className="block text-sm font-medium text-gray-700 mb-2">
                  Color
                </span>
                <div className="flex space-x-2">
                  {productData.colors.map((color) => (
                    <button
                      key={color.id}
                      className={`w-10 h-10 rounded-full border-2 ${
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
                      <span className="sr-only">{color.name}</span>
                    </button>
                  ))}
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  {selectedColor.name}
                </p>
              </div>

              {/* Quantity */}
              <div className="mb-5">
                <span className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </span>
                <div className="flex items-center">
                  <button
                    className="w-8 h-8 bg-gray-100 rounded-l-md flex items-center justify-center text-gray-600 hover:bg-gray-200"
                    onClick={decrementQuantity}
                  >
                    <Minus size={16} />
                  </button>
                  <input
                    type="number"
                    className="w-12 h-8 border-t border-b border-gray-200 text-center text-gray-700 text-sm"
                    value={quantity}
                    readOnly
                  />
                  <button
                    className="w-8 h-8 bg-gray-100 rounded-r-md flex items-center justify-center text-gray-600 hover:bg-gray-200"
                    onClick={incrementQuantity}
                  >
                    <Plus size={16} />
                  </button>
                  <span className="ml-3 text-sm text-gray-500">
                    {productData.stock} items available
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2.5 px-4 rounded-md flex items-center justify-center font-medium transition-colors">
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </button>
                <button className="flex-1 bg-orange-100 hover:bg-orange-200 text-orange-500 py-2.5 px-4 rounded-md flex items-center justify-center font-medium transition-colors">
                  Buy Now
                </button>
                <button className="w-12 h-10 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md flex items-center justify-center transition-colors">
                  <Heart size={18} />
                </button>
              </div>

              {/* Delivery & Services */}
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <div className="flex items-center text-sm text-gray-700 mb-2">
                  <Truck size={16} className="text-orange-500 mr-2" />
                  <span>
                    <strong>Free Shipping</strong> - Estimated delivery in{" "}
                    {productData.delivery}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-700 mb-2">
                  <RefreshCcw size={16} className="text-orange-500 mr-2" />
                  <span>
                    <strong>{productData.returnPolicy}</strong> - Money back
                    guarantee
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Shield size={16} className="text-orange-500 mr-2" />
                  <span>
                    <strong>{productData.warranty}</strong> against defects
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="border-t border-gray-100">
            <div className="flex border-b border-gray-100 overflow-x-auto">
              <button
                className={`px-4 py-3 text-sm font-medium border-b-2 ${
                  activeTab === "description"
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`px-4 py-3 text-sm font-medium border-b-2 ${
                  activeTab === "features"
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("features")}
              >
                Features
              </button>
              <button
                className={`px-4 py-3 text-sm font-medium border-b-2 ${
                  activeTab === "specifications"
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("specifications")}
              >
                Specifications
              </button>
              <button
                className={`px-4 py-3 text-sm font-medium border-b-2 ${
                  activeTab === "reviews"
                    ? "border-orange-500 text-orange-500"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews ({productData.reviewCount})
              </button>
            </div>

            <div className="p-4">
              {activeTab === "description" && (
                <div className="prose prose-sm max-w-none">
                  <p>{productData.description}</p>
                  <p>
                    This innovative egg separator is designed to make your
                    kitchen tasks easier and more efficient. The unique design
                    allows for clean separation of egg whites and yolks with
                    minimal mess. Made from high-quality food-grade silicone,
                    it's safe for use with all types of eggs.
                  </p>
                  <p>
                    The built-in bottle opener feature adds extra utility to
                    this kitchen gadget, saving you space and providing multiple
                    functions in one compact tool. Perfect for home cooks who
                    appreciate efficient, multi-purpose tools.
                  </p>
                </div>
              )}

              {activeTab === "features" && (
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-800">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {productData.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "specifications" && (
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-800">
                    Product Specifications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(productData.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex border-b border-gray-100 pb-2"
                        >
                          <span className="w-1/2 text-sm text-gray-500 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </span>
                          <span className="w-1/2 text-sm text-gray-800">
                            {value}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        Customer Reviews
                      </h3>
                      <div className="flex items-center mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={18}
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
                        <span className="ml-2 text-sm text-gray-600">
                          Based on {productData.reviewCount} reviews
                        </span>
                      </div>
                    </div>
                    <button className="mt-3 sm:mt-0 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                      Write a Review
                    </button>
                  </div>

                  {/* Sample reviews */}
                  <div className="border-t border-b border-gray-100 py-4">
                    <div className="mb-4">
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center">
                          <span className="font-medium text-gray-800 mr-2">
                            Sarah J.
                          </span>
                          <span className="text-xs text-gray-500">
                            Verified Purchase
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          2 days ago
                        </span>
                      </div>
                      <div className="flex mb-2">
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
                      <h4 className="text-sm font-medium text-gray-800 mb-1">
                        Perfect for my needs!
                      </h4>
                      <p className="text-sm text-gray-600">
                        This egg separator works exactly as described. I use it
                        almost daily and it's made my breakfast preparation so
                        much easier. The bottle opener is a nice bonus feature.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center">
                          <span className="font-medium text-gray-800 mr-2">
                            Michael T.
                          </span>
                          <span className="text-xs text-gray-500">
                            Verified Purchase
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          1 week ago
                        </span>
                      </div>
                      <div className="flex mb-2">
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
                      <h4 className="text-sm font-medium text-gray-800 mb-1">
                        Good quality, takes practice
                      </h4>
                      <p className="text-sm text-gray-600">
                        The material feels durable and well-made. It took me a
                        few tries to get the hang of using it properly, but now
                        it works great. Would recommend watching a quick
                        tutorial.
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                      Load More Reviews
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-800">
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
  // In a real application, you would fetch all product IDs here
  return {
    paths: [{ params: { id: "1" } }], // Example paths
    fallback: "blocking", // See NextJS docs for more info on this
  };
}

export async function getStaticProps({ params }) {
  // In a real application, you would fetch product data based on the ID
  // For now, we're using mock data

  return {
    props: {
      // In a real app, you'd pass the product data here
    },
    revalidate: 60, // Revalidate the page every 60 seconds
  };
}
