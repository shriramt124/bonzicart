import { Calendar, Gift, ShieldCheck, Tag, ShippingIcon } from "lucide-react";


export default function TrendingNewsTicker() {
    return (
        <div>
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
            helo world
        </div>
    )
}

