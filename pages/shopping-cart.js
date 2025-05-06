import React, { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

function ShoppingCart() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Luminous Crystal Ball Night Light with USB, Solid Wood Base & 3D Inner Carving Creative Decor for Students & Boys',
            price: 180.00,
            image: '/api/placeholder/200/200',
            quantity: 1,
            color: 'Big and small elephants',
            seller: 'INNOVATIVE SHOPPING'
        }
    ]);

    const updateQuantity = (id, change) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + change) }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Column - Cart Items */}
                    <div className="flex-grow">
                        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-xl font-semibold text-gray-900">Cart</h1>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="selectAll"
                                        className="h-4 w-4 text-orange-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="selectAll" className="ml-2 text-sm text-gray-700">
                                        Select all
                                    </label>
                                </div>
                            </div>

                            {cartItems.length > 0 ? (
                                cartItems.map(item => (
                                    <div key={item.id} className="border-t border-gray-100 py-6">
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            {/* Checkbox and Image */}
                                            <div className="flex gap-4">
                                                <div className="flex items-start pt-1">
                                                    <input
                                                        type="checkbox"
                                                        className="h-4 w-4 text-orange-500 border-gray-300 rounded"
                                                        checked
                                                    />
                                                </div>
                                                <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>

                                            {/* Product Details */}
                                            <div className="flex-grow flex flex-col justify-between">
                                                <div>
                                                    <h2 className="text-sm sm:text-base font-medium text-gray-800 mb-1 line-clamp-2">
                                                        {item.name}
                                                    </h2>
                                                    <p className="text-xs text-gray-500 mb-2">
                                                        Color: {item.color}
                                                    </p>
                                                    <div className="flex items-center mb-1">
                                                        <span className="text-xs border border-gray-300 rounded px-2 py-1">
                                                            {item.seller}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex justify-between items-end mt-3">
                                                    <div className="text-orange-500 font-semibold">
                                                        ₹{item.price.toFixed(2)}
                                                        <span className="text-xs text-gray-500 ml-1">(Inclusive of all taxes)</span>
                                                    </div>

                                                    <div className="flex items-center">
                                                        <button
                                                            onClick={() => removeItem(item.id)}
                                                            className="p-1 text-gray-400 hover:text-red-500 mr-4"
                                                            aria-label="Remove item"
                                                        >
                                                            <Trash2 size={18} />
                                                        </button>

                                                        <div className="flex items-center border border-gray-300 rounded">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, -1)}
                                                                className="px-2 py-1 text-gray-500 hover:bg-gray-100"
                                                                aria-label="Decrease quantity"
                                                            >
                                                                <Minus size={16} />
                                                            </button>
                                                            <span className="w-8 text-center text-sm">
                                                                {item.quantity}
                                                            </span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, 1)}
                                                                className="px-2 py-1 text-gray-500 hover:bg-gray-100"
                                                                aria-label="Increase quantity"
                                                            >
                                                                <Plus size={16} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-12">
                                    <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
                                    <p className="text-gray-500">Your cart is empty</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="w-full lg:w-80">
                        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>

                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-600">SubTotal</span>
                                    <span className="text-gray-800 font-medium">₹{calculateSubtotal().toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                className="w-full bg-orange-500 text-white py-3 rounded font-medium hover:bg-orange-600 transition-colors"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </main>


        </div>
    );
}

export default ShoppingCart;