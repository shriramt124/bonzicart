import React, { useEffect, useState } from 'react'

function Header() {

    const [scrolled, setScrolled] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 120);
        };
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1024); // Tailwind lg: 1024px
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <header className="sticky top-0 z-50 bg-white w-full transition-all duration-200">
                <div className="flex items-center justify-between px-4 lg:px-10 py-3 md:py-4 max-w-screen-2xl mx-auto">
                    {/* Left: Categories or Logo */}
                    <div className="flex items-center gap-3 w-[140px] justify-start">
                        {scrolled ? (
                            isSmallScreen ? (
                                <img src="./bonzilogo.png" alt="Logo" className="h-8 w-8 transition-all duration-200" />
                            ) : (
                                <button className="flex items-center px-4 py-2.5 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-200">
                                    <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                                    <span className="text-sm font-medium text-gray-700">Categories</span>
                                </button>
                            )
                        ) : (
                            <img src="./bonzilogo.png" alt="Logo" className="h-auto w-[100px] transition-all duration-200" />
                        )}
                    </div>

                    {/* Center: Search */}
                    <div className='flex-1 flex flex-col gap-2 max-w-3xl mx-4 lg:mx-8'>
                        <div className="hidden sm:flex w-full relative overflow-hidden transition-all duration-200">
                            <select className="border border-r-0 border-gray-300 bg-gray-50 text-gray-700 text-sm px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-orange-400 appearance-none rounded-l-md">
                                <option>All</option>
                                <option>Electronics</option>
                                <option>Fashion</option>
                                <option>Home</option>
                                <option>Beauty</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Search for products..."
                                className="flex-1 border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-orange-400"
                            />
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 transition-colors duration-200 rounded-r-md">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
                            </button>
                        </div>
                        {/* Navigation links below search bar */}
                        <div className="hidden sm:flex items-center justify-center w-full">
                            <div className={`${scrolled && "hidden"} flex flex-wrap gap-6 items-center justify-center text-sm text-gray-700`}>
                                <a href="#" className="hover:text-orange-500 transition-colors duration-200 font-medium">Gift Shop</a>
                                <a href="#" className="hover:text-orange-500 transition-colors duration-200">Become a Seller</a>
                                <a href="#" className="hover:text-orange-500 transition-colors duration-200">Deals & Special Offers</a>
                                <a href="#" className="hover:text-orange-500 transition-colors duration-200">New User Zone</a>
                                <a href="#" className="hover:text-orange-500 transition-colors duration-200">Buyer Protection</a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Icons */}
                    <div className="flex flex-col items-end w-[140px]">
                        <div className="flex items-center gap-4 md:gap-6 justify-end transition-all duration-200">
                            {/* Wishlist */}
                            <div className="relative group cursor-pointer p-1">
                                <svg className="w-6 h-6 text-gray-700 group-hover:text-orange-500 transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
                            </div>
                            {/* Cart */}
                            <div className="relative group cursor-pointer p-1">
                                <svg className="w-6 h-6 text-gray-700 group-hover:text-orange-500 transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" /></svg>
                            </div>
                            {/* User */}
                            <div className="relative group cursor-pointer p-1">
                                <svg className="w-6 h-6 text-gray-700 group-hover:text-orange-500 transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" /></svg>
                            </div>
                        </div>
                        <div className="hidden sm:flex items-center justify-end w-full pt-2">
                            <select className={`${scrolled && "hidden"} text-sm focus:outline-none focus:ring-1 focus:ring-orange-400 cursor-pointer capitalize  bg-transparent `}>
                                <option>select language</option>
                                <option>हिन्दी</option>
                                <option>Español</option>
                                <option>Français</option>
                                <option>Deutsch</option>
                            </select>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header