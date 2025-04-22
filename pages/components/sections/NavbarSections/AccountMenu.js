import React from 'react';
import Link from 'next/link';
import { User, ShoppingCart, Heart, Gift, Tag, ChevronDown } from 'lucide-react';
import NavDropdown from './NavDropdown';

/**
 * AccountMenu component that displays the account dropdown
 */
const AccountMenu = ({ accountRef, accountDropdown, setAccountDropdown }) => {
    return (
        <div className="relative" ref={accountRef}>
            <button
                onClick={() => setAccountDropdown(!accountDropdown)}
                className="flex items-center text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200 p-2 rounded-full hover:bg-orange-50"
                aria-label="Account menu"
            >
                <User size={22} className="mr-1.5" />
                <span className="hidden xl:inline font-medium">Account</span>
                <ChevronDown size={16} className={`ml-1 hidden xl:block transition-transform duration-200 ${accountDropdown ? 'rotate-180' : ''}`} />
            </button>

            {/* Enhanced Account Dropdown with improved positioning and transitions */}
            <NavDropdown
                isOpen={accountDropdown}
                className="right-0 mt-2 w-72 py-3"
            >
                <div className="px-4 py-2 border-b border-gray-100">
                    <div className="flex items-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mr-3">
                            <User size={24} />
                        </div>
                        <div>
                            <p className="font-medium text-sm">Welcome!</p>
                            <div className="flex space-x-2 mt-1">
                                <Link href="#" className="text-xs font-semibold text-orange-500 hover:text-orange-600">Sign In</Link>
                                <span className="text-xs text-gray-400">|</span>
                                <Link href="#" className="text-xs font-semibold text-orange-500 hover:text-orange-600">Register</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-2 py-2">
                    <Link href="#" className="flex items-center px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                        <User size={18} className="mr-3 text-gray-500" />
                        <span>My Profile</span>
                    </Link>
                    <Link href="#" className="flex items-center px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                        <ShoppingCart size={18} className="mr-3 text-gray-500" />
                        <span>My Orders</span>
                        <span className="ml-auto bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full">3</span>
                    </Link>
                    <Link href="#" className="flex items-center px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                        <Heart size={18} className="mr-3 text-gray-500" />
                        <span>My Wishlist</span>
                    </Link>
                    <Link href="#" className="flex items-center px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                        <Gift size={18} className="mr-3 text-gray-500" />
                        <span>My Rewards</span>
                        <span className="ml-auto bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">$15 off</span>
                    </Link>
                    <Link href="#" className="flex items-center px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                        <Tag size={18} className="mr-3 text-gray-500" />
                        <span>My Coupons</span>
                        <span className="ml-auto bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">2</span>
                    </Link>
                </div>

                <div className="border-t border-gray-100 mt-2 pt-2 px-4">
                    <Link href="#" className="flex items-center px-2 py-2 text-sm text-gray-600 hover:text-orange-500">
                        <span>Settings</span>
                    </Link>
                    <Link href="#" className="flex items-center px-2 py-2 text-sm text-gray-600 hover:text-orange-500">
                        <span>Help Center</span>
                    </Link>
                    <Link href="#" className="flex items-center px-2 py-2 text-sm text-red-600 hover:text-red-700">
                        <span>Sign Out</span>
                    </Link>
                </div>
            </NavDropdown>
        </div>
    );
};

export default AccountMenu;