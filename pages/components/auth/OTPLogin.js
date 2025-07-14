import React, { useState } from 'react';
import { useAuth } from '../../../Contexts/AuthContext';
import { useRouter } from 'next/router';
import { showAlert } from './AuthAlert';
import { showSuccessAlert } from './AuthSuccessAlert';
import { OTPLoginSchema, OTPVerifySchema } from '../../../Schemas/otpLoginSchema';

function OTPLogin({ onSwitchToPassword }) {
    const { resendOTP, verifyOTP } = useAuth();
    const [errors, setErrors] = useState({});
    const [isOTPSent, setIsOTPSent] = useState(false);
    const [formData, setFormData] = useState({
        email_or_phone: '',
        type: 'email',
        via: 'sms',
        otp: ''
    });
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRequestOTP = async (e) => {
        e.preventDefault();
        try {
            // Validate the form data
            const parsedData = OTPLoginSchema.parse(formData);
            setErrors({});

            // Send OTP request
            const response = await resendOTP(parsedData);
            console.log('OTP sent successfully', response);
            showAlert({ message: 'OTP sent successfully. Please check your email/phone.', title: 'OTP Sent' });
            setIsOTPSent(true);
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                showAlert({ message: err.response.data.message, title: "OTP Error" });
            } else if (err.errors) {
                const mappedErrors = {};
                err.errors.forEach((error) => {
                    mappedErrors[error.path[0]] = error.message;
                });
                setErrors(mappedErrors);
            } else {
                showAlert({ message: 'Failed to send OTP. Please try again.' });
            }
        }
    };

    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        try {
            // Validate the OTP
            const parsedData = OTPVerifySchema.parse(formData);
            setErrors({});

            // Verify OTP
            const response = await verifyOTP(parsedData);
            console.log('OTP verified successfully', response);
            showSuccessAlert('Login successful', router, '/'); // Redirect to home page after login
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                showAlert({ message: err.response.data.message, title: "OTP Verification Error" });
            } else if (err.errors) {
                const mappedErrors = {};
                err.errors.forEach((error) => {
                    mappedErrors[error.path[0]] = error.message;
                });
                setErrors(mappedErrors);
            } else {
                showAlert({ message: 'OTP verification failed. Please try again.' });
            }
        }
    };

    return (
        <div className="bg-white p-6 sm:p-8 rounded-b-xl sm:rounded-b-2xl shadow-xl w-full max-w-md">
            {!isOTPSent ? (
                <form className="space-y-6" onSubmit={handleRequestOTP}>
                    <div className="space-y-5">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address or phone</label>
                            <input
                                id="email-address"
                                name="email_or_phone"
                                type="text"
                                required
                                className={`appearance-none block w-full px-4 py-3 text-sm border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 ease-in-out ${errors.email_or_phone ? 'border-red-500' : ''}`}
                                placeholder="Email address or phone"
                                value={formData.email_or_phone}
                                onChange={handleChange}
                            />
                            {errors.email_or_phone && (
                                <p className="text-red-500 text-xs mt-1">{errors.email_or_phone}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Type of OTP recipient</label>
                            <select
                                id="type"
                                name="type"
                                className={`appearance-none block w-full px-4 py-3 text-sm border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 ease-in-out ${errors.type ? 'border-red-500' : ''}`}
                                value={formData.type}
                                onChange={handleChange}
                            >
                                <option value="email">Email</option>
                                <option value="phone">Phone</option>
                            </select>
                            {errors.type && (
                                <p className="text-red-500 text-xs mt-1">{errors.type}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="via" className="block text-sm font-medium text-gray-700 mb-1">Delivery method (optional)</label>
                            <select
                                id="via"
                                name="via"
                                className="appearance-none block w-full px-4 py-3 text-sm border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 ease-in-out"
                                value={formData.via}
                                onChange={handleChange}
                            >
                                <option value="sms">SMS</option>
                                <option value="">Default</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-200 ease-in-out shadow-sm"
                        >
                            Send OTP
                        </button>

                        <div className="text-center">
                            <button
                                type="button"
                                onClick={onSwitchToPassword}
                                className="text-sm font-medium text-orange-600 hover:text-orange-500 transition duration-150 ease-in-out"
                            >
                                Login with Password
                            </button>
                        </div>
                    </div>
                </form>
            ) : (
                <form className="space-y-6" onSubmit={handleVerifyOTP}>
                    <div className="space-y-5">
                        <div>
                            <label htmlFor="otp" className="sr-only">Enter OTP</label>
                            <input
                                id="otp"
                                name="otp"
                                type="text"
                                required
                                className={`appearance-none block w-full px-4 py-3 text-sm border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 ease-in-out ${errors.otp ? 'border-red-500' : ''}`}
                                placeholder="Enter OTP"
                                value={formData.otp}
                                onChange={handleChange}
                            />
                            {errors.otp && (
                                <p className="text-red-500 text-xs mt-1">{errors.otp}</p>
                            )}
                        </div>
                    </div>

                    <div className="space-y-5">
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-200 ease-in-out shadow-sm"
                        >
                            Verify OTP
                        </button>

                        <div className="text-center">
                            <button
                                type="button"
                                onClick={() => setIsOTPSent(false)}
                                className="text-sm font-medium text-orange-600 hover:text-orange-500 transition duration-150 ease-in-out"
                            >
                                Resend OTP
                            </button>
                        </div>

                        <div className="text-center">
                            <button
                                type="button"
                                onClick={onSwitchToPassword}
                                className="text-sm font-medium text-orange-600 hover:text-orange-500 transition duration-150 ease-in-out"
                            >
                                Login with Password
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}

export default OTPLogin;