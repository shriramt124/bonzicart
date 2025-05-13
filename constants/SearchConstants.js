
// Sample data - in a real app, this would come from your API
export const sampleProducts = [
  {
    id: 1,
    name: "Creative Galaxy Colorful Gradient Luminous Crystal Ball Night Light",
    description: "Perfect for bedrooms and living spaces",
    image: "/api/placeholder/300/300",
    price: "$112.54",
    originalPrice: "$149.99",
    discount: "25% OFF",
    badge: "Featured Product",
    rating: 4.5,
    reviewCount: 128,
    sold: "1.2K+ sold",
    category: "Home Decor"
  },
  {
    id: 2,
    name: "Self Mixing Electric Auto Stirring Mug Coffee Cup",
    description: "Portable Smart Cup for your daily coffee",
    image: "/api/placeholder/300/300",
    price: "$43.50",
    originalPrice: "$69.99",
    discount: "38% OFF",
    badge: "Best Seller",
    rating: 4.8,
    reviewCount: 356,
    sold: "3.5K+ sold",
    category: "Kitchen"
  },
  {
    id: 3,
    name: "Automatic Multi USB Cable Charger 3-in-1",
    description: "Fast charging for all your devices",
    image: "/api/placeholder/300/300",
    price: "$9.99",
    originalPrice: "$19.99",
    discount: "50% OFF",
    badge: "Popular",
    rating: 4.2,
    reviewCount: 420,
    sold: "5K+ sold",
    category: "Electronics"
  },
  {
    id: 4,
    name: "Rechargeable White Light Bedside Table Lamp",
    description: "Adjustable brightness for reading and ambiance",
    image: "/api/placeholder/300/300",
    price: "$24.50",
    originalPrice: "$35.00",
    discount: "30% OFF",
    badge: "",
    rating: 4.3,
    reviewCount: 89,
    sold: "985 sold",
    category: "Home Decor"
  },
  {
    id: 5,
    name: "Moon Lamp Crystal Ball Clouds LED Night Light",
    description: "Beautiful mood lighting with realistic moon surface",
    image: "/api/placeholder/300/300",
    price: "$39.99",
    originalPrice: "$59.99",
    discount: "33% OFF",
    badge: "Top Rated",
    rating: 4.9,
    reviewCount: 532,
    sold: "4.5K+ sold",
    category: "Home Decor"
  },
  {
    id: 6,
    name: "Car LED Door Warning Light - Safety First",
    description: "Automatic warning lights for vehicle doors",
    image: "/api/placeholder/300/300",
    price: "$9.99",
    originalPrice: "$19.99",
    discount: "50% OFF",
    badge: "",
    rating: 4.1,
    reviewCount: 76,
    sold: "1.8K+ sold",
    category: "Automotive"
  },
  {
    id: 7,
    name: "Mini HDMI Wireless Extender",
    description: "Stream high-quality video up to 30m away",
    image: "/api/placeholder/300/300",
    price: "$29.99",
    originalPrice: "$39.99",
    discount: "25% OFF",
    badge: "New",
    rating: 4.4,
    reviewCount: 45,
    sold: "720 sold",
    category: "Electronics"
  },
  {
    id: 8,
    name: "Memory Card Storage Bag Camera",
    description: "Waterproof and shockproof protection",
    image: "/api/placeholder/300/300",
    price: "$8.99",
    originalPrice: "$12.99",
    discount: "31% OFF",
    badge: "",
    rating: 4.6,
    reviewCount: 167,
    sold: "2.3K+ sold",
    category: "Photography"
  }
];

// Categories for filter
export const categories = [
  "Electronics",
  "Home Decor",
  "Kitchen",
  "Automotive",
  "Beauty",
  "Fashion",
  "Sports",
  "Photography",
  "Toys & Kids"
];

// Price ranges for filter
export const priceRanges = [
  { label: "Under $10", value: "0-10" },
  { label: "$10 to $25", value: "10-25" },
  { label: "$25 to $50", value: "25-50" },
  { label: "$50 to $100", value: "50-100" },
  { label: "Over $100", value: "100-999999" }
];

// Rating options for filter
export const ratings = [
  { value: 4, label: "4★ & Up" },
  { value: 3, label: "3★ & Up" },
  { value: 2, label: "2★ & Up" },
  { value: 1, label: "1★ & Up" }
];

// Sorting options
export const sortOptions = [
  { value: "relevance", label: "Relevance" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "rating", label: "Customer Rating" },
  { value: "newest", label: "Newest Arrivals" }
];

// Popular searches
export const popularSearches = [
  "phone accessories", "LED lights", "smart home", "desk accessories", "gift ideas"
];

// Suggested searches
export const suggestedSearches = [
  "crystal ball light", "LED night lamp", "moon lamp", "star projector", "ambient lighting"
];
