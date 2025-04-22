import React from 'react';
import Link from 'next/link';

/**
 * Reusable dropdown component for navigation items
 * Handles smooth transitions and proper positioning
 */
const NavDropdown = ({ isOpen, children, className, style }) => {
    if (!isOpen) return null;

    return (
        <div
            className={`absolute top-[10px] bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 
      focus:outline-none z-40 transform-gpu transition-all duration-200 ease-in-out 
      opacity-100 scale-100 ${className}`}
            style={style}
        >
            {children}
        </div>
    );
};

export default NavDropdown;