
// Get a single product by id
export const getProductById = (id) => {
  // In a real application, this would fetch from an API or database
  // For now we return mock data
  return {
    id,
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
      { id: 4, name: "Multi", value: "linear-gradient(to right, #e91e63, #ffc107, #ff5722)" },
    ],
    rating: 4.5,
    reviewCount: 128,
    stock: 10,
    images: [
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/500",
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
      "Suitable for both raw and cooked eggs"
    ],
    specifications: {
      material: "Food-grade silicone",
      dimensions: "3.5 × 2.8 × 1.2 inches",
      weight: "0.15 lbs",
      packageContents: "1 × Egg Separator, 1 × Instruction Manual"
    }
  };
};

// Get related products based on a product ID
export const getRelatedProducts = (productId, limit = 5) => {
  // In a real application, this would fetch related products from an API
  // For now we return mock data
  const products = [
    {
      id: "1",
      name: "Automatic Multi USB Cable Charger 3-in-1",
      image: "/api/placeholder/180/180",
      price: "$9.99",
      originalPrice: "$19.99",
      discount: "50% OFF",
      sold: "1.2K+ sold",
      rating: 4.3,
      reviewCount: 89,
      description: "Convenient charging solution for multiple devices"
    },
    {
      id: "2",
      name: "Rechargeable White Light Bedside Table Lamp",
      image: "/api/placeholder/180/180",
      price: "$24.50",
      originalPrice: "$35.00",
      discount: "30% OFF",
      sold: "985 sold",
      rating: 4.7,
      reviewCount: 152,
      description: "Energy-efficient LED lamp with touch control"
    },
    {
      id: "3",
      name: "Self Mixing Electric Auto Stirring Mug",
      image: "/api/placeholder/180/180",
      price: "$34.50",
      originalPrice: "$49.99",
      discount: "31% OFF",
      sold: "2K+ sold",
      rating: 4.5,
      reviewCount: 203,
      description: "Perfect for coffee, hot chocolate, and protein shakes"
    },
    {
      id: "4",
      name: "Luminous Crystal Ball Night Light with USB",
      image: "/api/placeholder/180/180",
      price: "$112.54",
      originalPrice: "$149.99",
      discount: "25% OFF",
      sold: "690 sold",
      rating: 4.8,
      reviewCount: 167,
      description: "Create a magical atmosphere with this stunning light"
    },
    {
      id: "5",
      name: "Moon Lamp Crystal Ball Clouds LED Night Light",
      image: "/api/placeholder/180/180",
      price: "$39.99",
      originalPrice: "$59.99",
      discount: "33% OFF",
      sold: "4.5K+ sold",
      rating: 4.9,
      reviewCount: 428,
      description: "Perfect decor item for bedroom or living room"
    },
  ];

  // Filter out the current product if it's in the list
  return products.filter(p => p.id !== productId).slice(0, limit);
};

// Get reviews for a product
export const getProductReviews = (productId, limit = 2) => {
  // Mock reviews data
  const reviews = [
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
    }
  ];

  return reviews.slice(0, limit);
};
