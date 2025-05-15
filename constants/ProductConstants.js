
// Mock products for product detail page
export const featuredProducts = [
  {
    id: "1",
    name: "Efficient Eggshell Separator - Quick Peel & Extract Egg Yolks",
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
    sold: "1.2K+ sold",
    image: "/api/placeholder/500/500",
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
    returnPolicy: "7 days",
    warranty: "1 year",
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
      manufacturer: "KitchenPro",
      countryOfOrigin: "USA",
      model: "ES-2023",
    },
  },
  {
    id: "2",
    name: "Anker PD 20W Mini Ice Cube Charger, 3C Certified Flash Charger, USB-C Fast Charger",
    description: "PD 20W Mini Ice Cube Charger for Smartphones and Tablets. Compact and efficient design.",
    price: "$15.99",
    originalPrice: "$29.99",
    discount: "47% OFF",
    badge: "Best Seller",
    colors: [
      { id: 1, name: "White", value: "#ffffff" },
      { id: 2, name: "Black", value: "#000000" },
      { id: 3, name: "Blue", value: "#2196f3" },
    ],
    rating: 4.8,
    reviewCount: 256,
    stock: 25,
    sold: "5.3K+ sold",
    image: "/api/placeholder/500/500",
    images: [
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
    ],
    seller: "Anker Official Store",
    sellerRating: 4.9,
    shipping: "Free",
    delivery: "2-4 business days",
    returnPolicy: "30 days",
    warranty: "18 months",
    features: [
      "Ultra-compact design for portability",
      "20W Power Delivery for fast charging",
      "Universal compatibility with USB-C devices",
      "Advanced temperature control",
      "High-quality circuit protection",
    ],
    specifications: {
      inputVoltage: "100-240V AC",
      outputPower: "20W maximum",
      portType: "USB-C",
      dimensions: "1.2 × 1.2 × 1.2 inches",
      weight: "0.8 oz",
      certifications: "UL, CE, FCC, RoHS",
      model: "A2633",
    },
  },
  {
    id: "3",
    name: "Self Mixing Electric Auto Stirring Mug - Coffee Cup Mixed Blender",
    description: "Portable Smart Cup for hot beverages. Perfect for coffee and tea lovers.",
    price: "$34.50",
    originalPrice: "$49.99",
    discount: "31% OFF",
    badge: "Hot Item",
    colors: [
      { id: 1, name: "Silver", value: "#C0C0C0" },
      { id: 2, name: "Matte Black", value: "#28282B" },
      { id: 3, name: "Rose Gold", value: "#B76E79" },
    ],
    rating: 4.3,
    reviewCount: 189,
    stock: 15,
    sold: "2K+ sold",
    image: "/api/placeholder/500/500",
    images: [
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
    ],
    seller: "Smart Kitchen Plus",
    sellerRating: 4.6,
    shipping: "Free",
    delivery: "3-6 business days",
    returnPolicy: "14 days",
    warranty: "1 year",
    features: [
      "One-button operation for easy use",
      "Rechargeable battery with USB charging",
      "Leak-proof design with secure lid",
      "Keeps beverages hot for up to 3 hours",
      "Food-grade stainless steel interior",
      "Automatic stirring for perfectly mixed drinks",
    ],
    specifications: {
      capacity: "380ml (13oz)",
      material: "304 Stainless Steel, Food-grade plastic",
      batteryType: "Rechargeable Lithium-ion",
      batteryLife: "15-20 stirs per charge",
      dimensions: "8.3 × 3.0 × 3.0 inches",
      weight: "12.3 oz",
      temperature: "Maintains 120°F-140°F for 3 hours",
    },
  }
];

// Product reviews
export const productReviews = [
  {
    id: 1,
    userName: "Sarah J.",
    rating: 5,
    date: "2 days ago",
    title: "Perfect for my needs!",
    comment: "This product works exactly as described. I use it almost daily and it's made my tasks so much easier. The quality is excellent and the design is well thought out.",
    verified: true
  },
  {
    id: 2,
    userName: "Michael T.",
    rating: 4,
    date: "1 week ago",
    title: "Good quality, takes practice",
    comment: "The material feels durable and well-made. It took me a few tries to get the hang of using it properly, but now it works great. Would recommend watching a quick tutorial.",
    verified: true
  },
  {
    id: 3,
    userName: "Jessica R.",
    rating: 5,
    date: "2 weeks ago",
    title: "Excellent value for money",
    comment: "I was skeptical about the low price, but this has exceeded my expectations. Works perfectly and seems very durable. Will be buying more as gifts.",
    verified: true
  },
  {
    id: 4,
    userName: "David K.",
    rating: 3,
    date: "3 weeks ago",
    title: "Good but could be better",
    comment: "It does the job but there are a few design improvements that could be made. The material quality is good though and it seems like it will last.",
    verified: true
  },
  {
    id: 5,
    userName: "Emily W.",
    rating: 5,
    date: "1 month ago",
    title: "Absolutely love it!",
    comment: "This is exactly what I was looking for. Perfect size, works brilliantly, and the price was right. Highly recommend to anyone considering this purchase.",
    verified: true
  }
];

// Product seller information
export const sellerInfo = {
  name: "INNOVATIVE SHOPPING",
  rating: 4.8,
  positiveRating: "92%",
  followers: 1245,
  location: "Karnataka",
  joinDate: "2019-05-15",
  responseRate: "98%",
  responseTime: "Under 12 hours",
  returns: {
    policy: "7 Days",
    shippingFee: "Seller pays"
  },
  warranty: "1 Year Manufacturer Warranty"
};

// Shipping information
export const shippingInfo = {
  free: true,
  estimatedDelivery: "3-5 business days",
  expedited: {
    available: true,
    cost: "$4.99",
    deliveryTime: "1-2 business days"
  },
  international: {
    available: true,
    countries: ["USA", "Canada", "UK", "Australia"],
    cost: "Varies by location"
  }
};
