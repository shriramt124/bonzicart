import { ShoppingCart } from "lucide-react";

export default function ShoppingCartIcon() {
    return (
        <button className="flex items-center text-sm text-gray-600 hover:text-orange-500 relative transition-colors duration-200 p-1.5 rounded-full hover:bg-orange-50">
            <ShoppingCart size={20} />
            <div className="hidden xl:flex flex-col items-start ml-1">
                <span className="text-xs text-gray-500">
                    Cart
                </span>
                <span className="font-medium text-xs">
                    $149.99
                </span>
            </div>
            <span className="absolute -top-0.5 -right-0.5 bg-orange-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                3
            </span>
        </button>
    )
}