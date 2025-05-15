
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
    rating: 4.5,
    reviewCount: 128,
    sold: "1.2K+ sold",
    image: "/api/placeholder/500/500",
    images: [
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
    ],
  },
  {
    id: "2",
    name: "Anker PD 20W Mini Ice Cube Charger, 3C Certified Flash Charger, USB-C Fast Charger",
    description: "PD 20W Mini Ice Cube Charger for Smartphones and Tablets. Compact and efficient design.",
    price: "$15.99",
    originalPrice: "$29.99",
    discount: "47% OFF",
    badge: "Best Seller",
    rating: 4.8,
    reviewCount: 256,
    sold: "5.3K+ sold",
    image: "/api/placeholder/500/500",
    images: [
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
    ],
  },
  {
    id: "3",
    name: "Self Mixing Electric Auto Stirring Mug - Coffee Cup Mixed Blender",
    description: "Portable Smart Cup for hot beverages. Perfect for coffee and tea lovers.",
    price: "$34.50",
    originalPrice: "$49.99",
    discount: "31% OFF",
    badge: "Hot Item",
    rating: 4.3,
    reviewCount: 189,
    sold: "2K+ sold",
    image: "/api/placeholder/500/500",
    images: [
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
    ],
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
