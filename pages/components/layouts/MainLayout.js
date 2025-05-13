import React from "react";
import Footer from "../Footer";
import Nava from "../Nava";
import MobileNav from "../MobileNav";

function MainLayout({ children }) {
    return (
        <>
            {/* Desktop navigation - hidden on mobile */}
            <div className="hidden lg:block sticky top-0 z-50 w-full">
                <Nava />
            </div>

            {/* Mobile navigation - hidden on desktop */}
            <div className="lg:hidden">
                <MobileNav />
            </div>

            <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
            <Footer />
        </>
    );
}

export default MainLayout;
