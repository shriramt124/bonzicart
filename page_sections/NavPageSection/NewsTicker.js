import React from 'react';
import { Tag, Calendar, Gift, ShieldCheck } from 'lucide-react';

// This component is missing the ShippingIcon which is used in the original component
// We'll create a simple ShippingIcon component inline
const ShippingIcon = ({ size, className }) => (
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

export default function NewsTicker() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-1.5 overflow-hidden">
      <div className="deals-ticker-wrap">
        <div className="deals-ticker">
          <div className="deals-ticker-item flex items-center">
            <Tag size={14} className="flex-shrink-0 mr-1.5" />
            <span className="text-xs font-medium whitespace-nowrap">
              FLASH SALE: Up to 70% off on electronics!
            </span>
          </div>
          <div className="deals-ticker-item flex items-center">
            <Calendar
              size={14}
              className="flex-shrink-0 mr-1.5"
            />
            <span className="text-xs font-medium whitespace-nowrap">
              3-DAY WEEKEND SPECIAL: Extra 15% off with code
              WEEKEND15
            </span>
          </div>
          <div className="deals-ticker-item flex items-center">
            <Gift size={14} className="flex-shrink-0 mr-1.5" />
            <span className="text-xs font-medium whitespace-nowrap">
              FREE GIFT with purchases over $100
            </span>
          </div>
          <div className="deals-ticker-item flex items-center">
            <ShippingIcon
              size={14}
              className="flex-shrink-0 mr-1.5"
            />
            <span className="text-xs font-medium whitespace-nowrap">
              FREE SHIPPING on all orders over $50
            </span>
          </div>
          <div className="deals-ticker-item flex items-center">
            <ShieldCheck
              size={14}
              className="flex-shrink-0 mr-1.5"
            />
            <span className="text-xs font-medium whitespace-nowrap">
              30-DAY MONEY BACK GUARANTEE on all products
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}