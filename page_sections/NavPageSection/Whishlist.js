import { Heart } from "lucide-react";

export default function Whishlist() {
    return (
        <button className="hidden md:flex lg:flex items-center text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200 p-1.5 rounded-full hover:bg-orange-50 relative">
            <Heart size={20} />
            <span className="hidden xl:inline-block ml-1 font-medium">
                Wishlist
            </span>
            <span className="absolute -top-0.5 -right-0.5 bg-orange-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                5
            </span>
        </button>
    )
}