import React from 'react';
import { User, ChevronDown, ShoppingCart, Heart, Gift, Tag, Bookmark } from 'lucide-react';
import Link from 'next/link';

export default function AccountMenu({
  accountRef,
  accountDropdown,
  setAccountDropdown,
  setNotificationDropdown,
  user,
  logout
}) {
  return (
    <div className="relative" ref={accountRef}>
      <button
        onClick={() => {
          setAccountDropdown(!accountDropdown);
          setNotificationDropdown(false);
        }}
        className="flex items-center text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200 p-1.5 rounded-full hover:bg-orange-50"
        aria-label="Account menu"
      >
        <User size={20} />
        <div className="hidden xl:flex flex-col items-start ml-1">
          <span className="text-xs text-gray-500">
            Account
          </span>
          <span className="font-medium text-xs">
            My Profile
          </span>
        </div>
        <ChevronDown
          size={14}
          className={`ml-1 hidden xl:block transition-transform duration-200 ${accountDropdown ? "rotate-180" : ""
            }`}
        />
      </button>

      {/* Enhanced Account Dropdown */}
      {accountDropdown && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-3 ring-1 ring-black ring-opacity-5 focus:outline-none z-20 transition-all duration-200">
          <div className="px-4 py-2 border-b border-gray-100">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mr-3">
                <User size={24} />
              </div>
              <div>
                <p className="font-medium text-sm">
                  Welcome! {user?.first_name}
                </p>
                {!user && <div className="flex space-x-2 mt-1">
                  <Link
                    href="/auth/login"
                    className="text-xs font-semibold text-orange-500 hover:text-orange-600"
                  >
                    Sign In
                  </Link>
                  <span className="text-xs text-gray-400">
                    |
                  </span>
                  <Link
                    href="/auth/register"
                    className="text-xs font-semibold text-orange-500 hover:text-orange-600"
                  >
                    Register
                  </Link>
                </div>}
                {user && <button>
                  <button
                    onClick={logout}
                    className="text-xs font-semibold text-orange-500 hover:text-orange-600"
                  >
                    Signout
                  </button>
                </button>}
              </div>
            </div>
          </div>

          <div className="px-2 py-2">
            <Link
              href="#"
              className="flex items-center px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
            >
              <User
                size={18}
                className="mr-3 text-gray-500"
              />
              <span>My Profile</span>
            </Link>
            <Link
              href="#"
              className="flex items-center px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
            >
              <ShoppingCart
                size={18}
                className="mr-3 text-gray-500"
              />
              <span>My Orders</span>
              <span className="ml-auto bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full">
                3
              </span>
            </Link>
            <Link
              href="#"
              className="flex items-center px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
            >
              <Heart
                size={18}
                className="mr-3 text-gray-500"
              />
              <span>My Wishlist</span>
              <span className="ml-auto bg-purple-100 text-purple-600 text-xs px-2 py-0.5 rounded-full">
                5
              </span>
            </Link>
            <Link
              href="#"
              className="flex items-center px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
            >
              <Gift
                size={18}
                className="mr-3 text-gray-500"
              />
              <span>My Rewards</span>
              <span className="ml-auto bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">
                $15 off
              </span>
            </Link>
            <Link
              href="#"
              className="flex items-center px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
            >
              <Tag
                size={18}
                className="mr-3 text-gray-500"
              />
              <span>My Coupons</span>
              <span className="ml-auto bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">
                2
              </span>
            </Link>
            <Link
              href="#"
              className="flex items-center px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
            >
              <Bookmark
                size={18}
                className="mr-3 text-gray-500"
              />
              <span>Saved Items</span>
            </Link>
          </div>

          <div className="border-t border-gray-100 mt-2 pt-2 px-4">
            <Link
              href="#"
              className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:text-orange-500"
            >
              <span>Account Settings</span>
            </Link>
            <Link
              href="#"
              className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:text-orange-500"
            >
              <span>Help Center</span>
            </Link>
            <Link
              href="#"
              className="flex items-center px-2 py-1.5 text-sm text-red-600 hover:text-red-700"
            >
              <span>Sign Out</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}