import React from 'react'
import Footer from '../Footer'
import Nava from '../Nava'
import MobileNav from '../MobileNav'

function MainLayout({ children }) {
    return (
        <>
            {/* Desktop navigation - hidden on mobile */}
            <div className="hidden lg:block sticky top-0 z-50">
                <Nava />
            </div>

            {/* Mobile navigation - hidden on desktop */}
            <div className="lg:hidden">
                <MobileNav />
            </div>

            {children}
            <Footer />
        </>
    )
}

export default MainLayout