import React, { useState, useEffect, useRef } from "react";
import { popularSearches, recentSearches, specialDeals } from "../../utils/NavUtils"
import Link from "next/link";
import { categories, trendingProducts } from "@/constants/NavbarConstants";
import { useAuth } from "./auth/AuthContext";

// Import modular components from NavPageSection
import UtilityBar from "@/page_sections/NavPageSection/UtilityBar";
import Logo from "@/page_sections/NavPageSection/Logo";
import Whishlist from "@/page_sections/NavPageSection/Whishlist";
import Notification from "@/page_sections/NavPageSection/Notification";
import ShoppingCartIcon from "@/page_sections/NavPageSection/ShoppingCartIcon";
import SearchBar from "@/page_sections/NavPageSection/SearchBar";
import NewsTicker from "@/page_sections/NavPageSection/NewsTicker";
import AccountMenu from "@/page_sections/NavPageSection/AccountMenu";
import SupportButton from "@/page_sections/NavPageSection/SupportButton";
import MainNavigation from "@/page_sections/NavPageSection/MainNavigation";


function Nava() {
    // State management
    const [scrolled, setScrolled] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
    const [categoryDropdown, setCategoryDropdown] = useState(false);
    const [accountDropdown, setAccountDropdown] = useState(false);
    const [notificationDropdown, setNotificationDropdown] = useState(false);
    const [openMegaMenu, setOpenMegaMenu] = useState(null);
    const [showLocationPicker, setShowLocationPicker] = useState(false);
    const [currentPath, setCurrentPath] = useState("/"); // Added state for current path

    // Get authentication state from context
    const { user, loading, logout } = useAuth();

    // Refs for click outside handlers
    const searchRef = useRef(null);
    const accountRef = useRef(null);
    const categoryRef = useRef(null);
    const notificationRef = useRef(null);
    const locationRef = useRef(null);

    // Debug authentication state changes
    useEffect(() => {
        console.log("Nava - Authentication state:", { user, loading });
    }, [user, loading]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScrolled(scrollPosition > 180);
        };

        const handlePathChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("popstate", handlePathChange); // For browser navigation
        handlePathChange(); // Set initial path

        // Handle clicks outside dropdowns
        const handleClickOutside = (event) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target)
            ) {
                setShowSearchSuggestions(false);
            }
            if (
                accountRef.current &&
                !accountRef.current.contains(event.target)
            ) {
                setAccountDropdown(false);
            }
            if (
                categoryRef.current &&
                !categoryRef.current.contains(event.target)
            ) {
                setCategoryDropdown(false);
            }
            if (
                notificationRef.current &&
                !notificationRef.current.contains(event.target)
            ) {
                setNotificationDropdown(false);
            }
            if (
                locationRef.current &&
                !locationRef.current.contains(event.target)
            ) {
                setShowLocationPicker(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("popstate", handlePathChange);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Enhanced header animation class based on scroll
    const headerAnimationClass = scrolled
        ? "shadow-lg translate-y-0"
        : "shadow-sm -translate-y-0";

    return (
        <header
            className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${headerAnimationClass}`}
        >
            {/* Trending News Ticker */}
            <NewsTicker />


            <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <UtilityBar locationRef={locationRef} showLocationPicker={showLocationPicker} />

                {/* Main Header - Improved spacing and visual hierarchy */}
                <div className="flex items-center justify-between h-16">
                    <Logo />
                    {/* Enhanced Search bar with better UI/UX */}
                    <SearchBar
                        searchRef={searchRef}
                        searchFocused={searchFocused}
                        searchInput={searchInput}
                        setSearchInput={setSearchInput}
                        setSearchFocused={setSearchFocused}
                        showSearchSuggestions={showSearchSuggestions}
                        setShowSearchSuggestions={setShowSearchSuggestions}
                        categoryDropdown={categoryDropdown}
                        setCategoryDropdown={setCategoryDropdown}
                        categoryRef={categoryRef}
                        categories={categories}
                        popularSearches={popularSearches}
                        recentSearches={recentSearches}
                        trendingProducts={trendingProducts}
                    />

                    {/* Enhanced Right side icons with better visual feedback */}
                    <div className="flex items-center space-x-2 md:space-x-4">
                        {/* Quick Support */}
                        <SupportButton />

                        {/* Wishlist */}
                        {user && <Whishlist />}

                        {/* Notification Bell with Enhanced Dropdown */}
                        {user && <Notification notificationDropdown={notificationDropdown} notificationRef={notificationRef} setNotificationDropdown={setNotificationDropdown} setAccountDropdown={setAccountDropdown} />}


                        {/* Shopping Cart */}
                        {user && <ShoppingCartIcon />}


                        {/* Account menu with enhanced dropdown */}
                        <AccountMenu
                            accountRef={accountRef}
                            accountDropdown={accountDropdown}
                            setAccountDropdown={setAccountDropdown}
                            setNotificationDropdown={setNotificationDropdown}
                            user={user}
                            logout={logout}
                        />
                    </div>
                </div>

                {/* Main Enhanced Navigation Bar - Smooth transition when scrolled or not on home page */}
                <MainNavigation
                    scrolled={scrolled}
                    currentPath={currentPath}
                    openMegaMenu={openMegaMenu}
                    setOpenMegaMenu={setOpenMegaMenu}
                    categories={categories}
                    specialDeals={specialDeals}
                />
            </div>
        </header>
    );
}

// Custom ShippingIcon for the ticker
function ShippingIcon({ size, className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <rect x="1" y="3" width="15" height="13"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
    );
}

export default Nava