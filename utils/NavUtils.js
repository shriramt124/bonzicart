import { Gift, ShoppingCart, Tag } from "lucide-react";

// Dummy data for enhanced components
export const popularSearches = [
    "Wireless Earbuds",
    "Summer Dresses",
    "Smart Watch",
    "Kitchen Gadgets",
    "Gaming Laptops",
    "Fitness Trackers",
];
export const recentSearches = [
    "iPhone 15",
    "Nike Air",
    "Coffee Maker",
    "Smart LED Bulbs",
];
export const locationCities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
];
export const notifications = [
    {
        id: 1,
        type: "order",
        title: "Order Shipped",
        message: "Your order #4528 has been shipped",
        time: "2h ago",
        isRead: false,
    },
    {
        id: 2,
        type: "promo",
        title: "Flash Sale",
        message: "50% off on all electronics today",
        time: "5h ago",
        isRead: false,
    },
    {
        id: 3,
        type: "system",
        title: "Account Security",
        message: "We noticed a new login to your account",
        time: "1d ago",
        isRead: true,
    },
    {
        id: 4,
        type: "order",
        title: "Order Delivered",
        message: "Your order #4490 has been delivered",
        time: "3d ago",
        isRead: true,
    },
    {
        id: 5,
        type: "promo",
        title: "Weekend Special",
        message: "Buy one get one free on all fashion items",
        time: "5d ago",
        isRead: true,
    },
];

// Enhanced deals section
export const specialDeals = [
    {
        id: 1,
        title: "Flash Sale",
        description: "Up to 70% Off",
        badgeColor: "bg-red-500",
        icon: <Tag size={14} />,
    },
    {
        id: 2,
        title: "Free Shipping",
        description: "Orders Over $50",
        badgeColor: "bg-blue-500",
        icon: <ShoppingCart size={14} />,
    },
    {
        id: 3,
        title: "Gift Cards",
        description: "Perfect Presents",
        badgeColor: "bg-green-500",
        icon: <Gift size={14} />,
    },
];