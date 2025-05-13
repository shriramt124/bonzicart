import Head from 'next/head';
import Image from 'next/image';

export default function CheckoutPage() {
    return (
        <>
            <Head>
                <title>Checkout - Your Store</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="min-h-screen bg-gray-100 py-4 sm:py-8 px-3 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                    {/* Left Column - Shipping Address */}
                    <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 col-span-2">
                        <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Shipping Address</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        required
                                        className="mt-1 block w-full px-3 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        required
                                        className="mt-1 block w-full px-3 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    className="mt-1 block w-full px-3 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="address1" className="block text-sm font-medium text-gray-700">
                                    Address Line 1 <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="address1"
                                    required
                                    className="mt-1 block w-full px-3 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="address2" className="block text-sm font-medium text-gray-700">
                                    Address Line 2 (Optional)
                                </label>
                                <input
                                    type="text"
                                    id="address2"
                                    className="mt-1 block w-full px-3 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        City <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        required
                                        className="mt-1 block w-full px-3 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                        State <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="state"
                                        required
                                        className="mt-1 block w-full px-3 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 focus:outline-none"
                                    >
                                        <option value="">Select state</option>
                                        <option value="up">Uttar Pradesh</option>
                                        <option value="mh">Maharashtra</option>
                                        <option value="dl">Delhi</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
                                        Pincode <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        id="pincode"
                                        required
                                        className="mt-1 block w-full px-3 py-2 sm:py-2.5 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center">
                                <input
                                    id="same-billing"
                                    name="same-billing"
                                    type="checkbox"
                                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                                />
                                <label htmlFor="same-billing" className="ml-2 block text-sm text-gray-700">
                                    Bill to the same address
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-4 sm:mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2.5 sm:py-3 px-4 rounded-md transition-colors text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                            >
                                Continue to Payment
                            </button>
                        </form>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                        {/* Product Preview */}
                        <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6 pb-4 border-b border-gray-200">
                            <Image
                                src="/product-image.jpg"
                                alt="Product"
                                width={80}
                                height={80}
                                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded"
                            />
                            <div>
                                <p className="font-medium text-sm">
                                    Luminous Crystal Ball Night Light with USB...
                                </p>
                                <p className="text-xs text-gray-600">Qty: 1 | Color: Elephant</p>
                                <p className="text-sm font-bold">₹180.00</p>
                            </div>
                        </div>

                        {/* Price Breakdown */}
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Subtotal:</span>
                                <span>₹152.54</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Coupon:</span>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Enter Code"
                                        className="border border-gray-300 rounded px-2 py-1.5 text-xs w-20 sm:w-24 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 focus:outline-none"
                                    />
                                    <button className="text-orange-500 text-xs">Apply</button>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <span>Total Savings:</span>
                                <span>₹846.46</span>
                            </div>
                            <div className="flex justify-between font-semibold pt-2 border-t">
                                <span>Total:</span>
                                <span>₹180.00</span>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="mt-6">
                            <h3 className="text-sm font-semibold mb-2">Payment Method</h3>
                            <div className="flex items-center">
                                <input
                                    id="debit-card"
                                    name="payment-method"
                                    type="radio"
                                    defaultChecked
                                    className="h-4 w-4 text-orange-500 focus:ring-orange-500"
                                />
                                <label htmlFor="debit-card" className="ml-2 text-sm text-gray-700">
                                    Debit/Credit Card / Netbanking
                                </label>
                            </div>
                        </div>

                        <button className="mt-4 sm:mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2.5 sm:py-3 rounded-md transition-colors text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            Pay Now ₹180.00
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}