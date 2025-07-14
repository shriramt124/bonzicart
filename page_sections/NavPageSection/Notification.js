import { ArrowRight, Bell, ShoppingCart, Tag } from "lucide-react";
import Link from "next/link";
import { notifications } from "../../utils/NavUtils";

export default function Notification({ notificationRef, notificationDropdown, setNotificationDropdown, setAccountDropdown }) {

    return (
        <div className="relative" ref={notificationRef}>
            <button
                onClick={() => {
                    setNotificationDropdown(
                        !notificationDropdown,
                    );
                    setAccountDropdown(false);
                }}
                className="hidden sm:flex items-center text-sm text-gray-600 hover:text-orange-500 p-1.5 rounded-full hover:bg-orange-50 relative transition-colors duration-200"
            >
                <Bell size={20} />
                <span className="absolute -top-0.5 -right-0.5 bg-orange-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    2
                </span>
            </button>

            {/* Enhanced Notifications Dropdown */}
            {notificationDropdown && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl py-3 ring-1 ring-black ring-opacity-5 focus:outline-none z-20 transition-all duration-200">
                    <div className="px-4 py-2 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                            <h3 className="font-medium text-sm">
                                Notifications
                            </h3>
                            <button className="text-xs text-orange-500 hover:text-orange-600">
                                Mark all as read
                            </button>
                        </div>
                    </div>

                    <div className="max-h-80 overflow-y-auto">
                        {notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`px-4 py-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors duration-200 ${notification.isRead
                                    ? "opacity-70"
                                    : ""
                                    }`}
                            >
                                <div className="flex">
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 
        ${notification.type === "order"
                                                ? "bg-blue-100 text-blue-500"
                                                : notification.type === "promo"
                                                    ? "bg-green-100 text-green-500"
                                                    : "bg-orange-100 text-orange-500"
                                            }`}
                                    >
                                        {notification.type ===
                                            "order" ? (
                                            <ShoppingCart
                                                size={16}
                                            />
                                        ) : notification.type ===
                                            "promo" ? (
                                            <Tag size={16} />
                                        ) : (
                                            <Bell size={16} />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between">
                                            <h4 className="text-sm font-medium text-gray-900">
                                                {
                                                    notification.title
                                                }
                                            </h4>
                                            <span className="text-xs text-gray-500">
                                                {
                                                    notification.time
                                                }
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-600 mt-0.5">
                                            {
                                                notification.message
                                            }
                                        </p>
                                    </div>
                                    {!notification.isRead && (
                                        <div className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 ml-2"></div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="px-4 pt-3">
                        <Link
                            href="#"
                            className="flex items-center justify-center text-orange-500 hover:text-orange-600 text-sm font-medium"
                        >
                            View All Notifications
                            <ArrowRight
                                size={14}
                                className="ml-1"
                            />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}