import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  ArrowRight,
  Clock,
  Gift,
  Tag,
  ShoppingCart,
  ShoppingBag,
  User,
  Heart,
  Search,
} from "lucide-react";
import MainLayout from "./components/layouts/MainLayout";
import {
  mainCategoryGroups,
  heroSlides,
  topDeals,
  flashDeals,
  collections,
  promoCards,
  popularProducts,
  heroProducts,
  mostSearchedProducts
} from "@/constants/HomePageContants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-sans bg-gray-50`}
    >
      {/* Top Promotion Banner */}
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-5">
            <div className="flex items-center">
              <span className="mr-2">🚚</span>
              <p className="text-xs sm:text-sm">
                Free shipping{" "}
                <span className="hidden sm:inline">on orders over $50</span>
              </p>
            </div>
            <div className="hidden md:flex items-center">
              <span className="mr-2">⏱️</span>
              <p className="text-xs sm:text-sm">
                Price adjustment within 30 days
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-2">📱</span>
            <p className="text-xs sm:text-sm">Get the Bonzi App</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Scrolling Deals Strip */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg py-2.5 px-4 mb-6 overflow-hidden relative">
          <div className="deals-ticker-wrap">
            <div className="deals-ticker">
              <div className="deals-ticker-item">
                🔥 Flash Deal: 50% OFF on all Smart Home Devices for the next 24
                hours!
              </div>
              <div className="deals-ticker-item">
                🎁 Buy One Get One Free on selected Electronics - Limited time
                offer!
              </div>
              <div className="deals-ticker-item">
                💰 New Customers: Use code WELCOME15 for 15% off your first
                purchase
              </div>
              <div className="deals-ticker-item">
                🚚 Free shipping worldwide on orders over $75 - Today Only!
              </div>
              <div className="deals-ticker-item">
                ⚡ Lightning Deal: Premium Wireless Earbuds just $29.99 - Was
                $89.99
              </div>
            </div>
          </div>
        </div>

        {/* Main Layout with Category Sidebar and Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-10">
          {/* Categories Sidebar - Left Side (without Top Deals) */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full">
              <div className="bg-orange-500 text-white py-3 px-4 font-medium text-center">
                All Categories
              </div>
              <ul className="divide-y divide-gray-100">
                {mainCategoryGroups.map((category) => (
                  <li key={category.id} className="group">
                    <Link
                      href="#"
                      className="flex items-center py-2.5 px-4 hover:bg-orange-50 transition-colors duration-200"
                    >
                      <span className="mr-3">{category.icon}</span>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-orange-500">
                        {category.name}
                      </span>
                      <ChevronRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-orange-500" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content Area - Hero Section */}
          <div className="lg:col-span-4">
            {/* Hero Carousel */}
            <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
              <div className="hero-carousel relative">
                {heroSlides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`hero-slide ${slide.color} rounded-lg overflow-hidden absolute top-0 left-0 w-full h-full transition-opacity duration-500`}
                    style={{
                      opacity: `calc(1 / ${heroSlides.length})`,
                      animation: `carouselFade ${heroSlides.length * 5}s linear infinite`,
                      animationDelay: `${index * 5}s`,
                    }}
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <div className="mb-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-white text-orange-800">
                            Featured Deal
                          </span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                          {slide.title}
                        </h1>
                        <p className="text-white/90 mb-4">
                          {slide.description}
                        </p>
                        <div className="flex items-center mb-5">
                          <p className="text-2xl font-bold text-white mr-2">
                            {heroProducts[0].price}
                          </p>
                          <p className="text-sm text-white/70 line-through">
                            {heroProducts[0].originalPrice}
                          </p>
                          <span className="ml-2 bg-white text-orange-600 text-xs font-bold px-2 py-1 rounded">
                            {heroProducts[0].discount}
                          </span>
                        </div>
                        <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-orange-600 py-3 px-6 rounded-lg transition duration-300 inline-flex items-center justify-center">
                          {slide.buttonText}{" "}
                          <ArrowRight size={16} className="ml-2" />
                        </button>
                      </div>
                      <div className="relative hidden md:block">
                        <div className="h-full flex items-center justify-center p-6">
                          <Image
                            src={
                              "https://admin.bonzicart.com/image/media-storage/28/171/2024100318385943475.png?size=l"
                            }
                            alt={slide.title}
                            width={400}
                            height={300}
                            className="rounded-lg object-contain max-h-[300px]"
                            priority
                          />
                        </div>
                        <div className="absolute top-4 right-4 bg-white text-orange-600 text-xs font-bold px-2.5 py-1.5 rounded-md">
                          {index === 0
                            ? "Featured Deal"
                            : index === 1
                              ? "Best Seller"
                              : "New Arrival"}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      className="w-2 h-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition-opacity duration-300"
                      aria-label={`Go to slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Deals Widget - Moved from sidebar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center">
              <Tag className="w-5 h-5 text-orange-500 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">Top Deals</h2>
            </div>
            <Link
              href="#"
              className="text-orange-500 hover:text-orange-600 text-sm font-medium flex items-center"
            >
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {topDeals.map((deal) => (
              <div
                key={deal.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group p-4 relative"
              >
                <Link href="#">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded bg-gray-100 relative flex-shrink-0">
                      <Image
                        src={
                          "https://admin.bonzicart.com/image/media-storage/28/171/2024100318385943475.png?size=l"
                        }
                        alt={deal.name}
                        width={64}
                        height={64}
                        className="rounded object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm text-gray-700 group-hover:text-orange-500 transition-colors duration-200">
                        {deal.name}
                      </h4>
                      <div className="flex items-center mt-1">
                        <span className="text-orange-500 font-bold text-sm">
                          {deal.price}
                        </span>
                        <span className="ml-2 bg-red-100 text-red-600 text-xs px-1.5 py-0.5 rounded">
                          {deal.discount}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Product description tooltip - appears on hover */}
                <div className="absolute left-0 right-0 bottom-0 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none">
                  <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded mx-2 my-1 max-w-[200px]">
                    Top rated product with exceptional value. Limited time offer
                    with free shipping.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flash Deals Section */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-orange-500 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">Flash Deals</h2>
              <div className="ml-3 bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                Ends in 05:34:21
              </div>
            </div>
            <Link
              href="#"
              className="text-orange-500 hover:text-orange-600 text-sm font-medium flex items-center"
            >
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {flashDeals.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group relative"
              >
                <Link href="#">
                  <div className="p-2 relative">
                    <div className="aspect-square relative mb-2">
                      <Image
                        src={
                          "https://admin.bonzicart.com/image/media-storage/28/171/2024100318385943475.png?size=l"
                        }
                        alt={product.name}
                        width={180}
                        height={180}
                        className="rounded-md object-cover"
                      />
                      <span className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
                        {product.discount}
                      </span>
                    </div>
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-orange-500 transition-colors duration-200">
                      {product.name}
                    </h3>
                    <div className="mt-2 flex items-center justify-between">
                      <div>
                        <span className="text-orange-500 font-bold">
                          {product.price}
                        </span>
                        <span className="text-xs text-gray-400 line-through ml-1">
                          {product.originalPrice}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {product.sold}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Product description tooltip - appears on hover */}
                <div className="absolute left-0 right-0 bottom-0 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none">
                  <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded mx-2 my-1 max-w-[200px]">
                    Fast shipping with excellent customer satisfaction. Limited
                    time offer.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Collections */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center">
              <Gift className="w-5 h-5 text-orange-500 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">
                Popular Collections
              </h2>
            </div>
            <Link
              href="#"
              className="text-orange-500 hover:text-orange-600 text-sm font-medium flex items-center"
            >
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {collections.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group relative"
              >
                <Link href="#">
                  <div className="p-2 relative">
                    <div className="aspect-square relative mb-2">
                      <Image
                        src={
                          "https://admin.bonzicart.com/image/media-storage/1/2182/2024051017221012304.jpg?size=l"
                        }
                        alt={product.name}
                        width={180}
                        height={180}
                        className="rounded-md object-cover"
                      />
                      <span className="absolute top-1 right-1 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded">
                        {product.discount}
                      </span>
                    </div>
                    <h3 className="text-xs font-medium text-gray-800 line-clamp-2 group-hover:text-orange-500 transition-colors duration-200">
                      {product.name}
                    </h3>
                    <div className="mt-1 flex items-center">
                      <span className="text-orange-500 font-bold text-sm">
                        {product.price}
                      </span>
                      <span className="text-xs text-gray-400 line-through ml-1">
                        {product.originalPrice}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Product description tooltip - appears on hover */}
                <div className="absolute left-0 right-0 bottom-0 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none">
                  <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded mx-2 my-1 max-w-[200px]">
                    Perfect for all home and office use - easy to install and
                    adjust.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Promo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {promoCards.map((card) => (
            <div
              key={card.id}
              className={`${card.color} ${card.textColor} rounded-lg p-5 text-center flex flex-col items-center justify-center min-h-[180px]`}
            >
              <p className="text-sm font-medium mb-1">SAVE UP TO $50</p>
              <h3 className="text-3xl font-bold mb-6">{card.title}</h3>
              <button className="bg-black text-white rounded-full px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
                {card.actionText}
              </button>
            </div>
          ))}
        </div>

        {/* Popular Products */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center">
              <Tag className="w-5 h-5 text-orange-500 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">
                Popular Products
              </h2>
            </div>
            <Link
              href="#"
              className="text-orange-500 hover:text-orange-600 text-sm font-medium flex items-center"
            >
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {popularProducts?.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group relative"
              >
                <Link href="#">
                  <div className="p-3 relative">
                    <div className="aspect-square relative mb-3">
                      <Image
                        src={
                          "https://admin.bonzicart.com/image/media-storage/1/2182/2024051017221012304.jpg?size=l"
                        }
                        alt={product.name}
                        width={180}
                        height={180}
                        className="rounded-md object-cover"
                      />
                      {product.badge && (
                        <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded">
                          {product.badge}
                        </span>
                      )}
                      <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
                        {product.discount}
                      </span>
                    </div>
                    <div className="mb-2">
                      <h3 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-orange-500 transition-colors duration-200">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {product.category}
                      </p>
                    </div>
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">
                        {product.reviews}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-orange-500 font-bold">
                          {product.price}
                        </span>
                        <span className="text-xs text-gray-400 line-through ml-1">
                          {product.originalPrice}
                        </span>
                      </div>
                      <button className="w-7 h-7 flex items-center justify-center bg-orange-50 hover:bg-orange-100 text-orange-500 rounded-full transition-colors duration-200">
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </Link>

                {/* Product description tooltip - appears on hover */}
                <div className="absolute left-0 right-0 bottom-0 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none">
                  <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded mx-2 my-1 max-w-[200px]">
                    High-quality product from trusted sellers - perfect for{" "}
                    {product.category}.
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-md transition duration-200 text-sm font-medium">
              Show More
            </button>
          </div>
        </div>

        {/* Most Searched Products */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-bold text-gray-900">
              Most Searched Products
            </h2>
            <Link
              href="#"
              className="text-orange-500 hover:text-orange-600 text-sm font-medium flex items-center"
            >
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {mostSearchedProducts?.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-200 text-center relative group"
              >
                <Link href="#">
                  <div className="aspect-square relative mb-3 mx-auto w-24 h-24">
                    <Image
                      src={
                        "https://admin.bonzicart.com/image/media-storage/1/2182/2024051017221012304.jpg?size=l"
                      }
                      alt={product.name}
                      width={100}
                      height={100}
                      className="rounded-md object-contain"
                    />
                  </div>
                  <h3 className="text-xs text-gray-800 line-clamp-2 hover:text-orange-500 transition-colors duration-200">
                    {product.name}
                  </h3>
                </Link>

                {/* Product description tooltip - appears on hover */}
                <div className="absolute left-0 right-0 bottom-0 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none">
                  <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded mx-2 my-1 max-w-[200px]">
                    Trending product with high search volume. Highly rated by
                    customers.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Banner */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🚚</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">24/7 Support</h3>
                <p className="text-sm text-gray-600">
                  Get help when you need it
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">💯</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">
                  Money Back Guarantee
                </h3>
                <p className="text-sm text-gray-600">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-8 text-white mb-10">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">
              Subscribe to our newsletter
            </h2>
            <p className="text-white/90 mb-6">
              Get the latest updates, deals and exclusive offers straight to
              your inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow py-3 px-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-orange-600 hover:bg-gray-100 py-3 px-6 rounded-lg font-medium transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
