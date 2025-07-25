import React, { useState } from 'react';
import { useAuth } from '../../../Contexts/AuthContext';
import { useRouter } from 'next/router';
import { showAlert } from './AuthAlert';
import { showSuccessAlert } from './AuthSuccessAlert';
import { SignUpSchema } from '../../../Schemas/signupSchema';

function SignUp() {
    const { register } = useAuth();
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        password: '',
    });
    const router = useRouter(); // Add this line to get the router object

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const parsedData = SignUpSchema.parse(formData);
            setErrors({});
            const formDataToSend = new FormData();
            for (const key in parsedData) {
                formDataToSend.append(key, parsedData[key]);
            }
            const response = await register(formDataToSend);
            console.log('Registration successful', response);
            showSuccessAlert('Registration successful', router, '/auth/login'); // Pass router object and redirect to login
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                // Call showAlert for any backend error message
                showAlert({ message: err.response.data.message, title: "Registration Error" });
            } else if (err.errors) {
                const mappedErrors = {};
                err.errors.forEach((error) => {
                    mappedErrors[error.path[0]] = error.message;
                });
                setErrors(mappedErrors);
            } else {
                // Use showAlert for other registration failures
                showAlert({ message: 'Registration failed. Please try again.' });
            }
        }
    };

    return (
        <div className="bg-white p-6 sm:p-8 rounded-b-xl sm:rounded-b-2xl shadow-xl w-full max-w-md">
            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Removed general error div */}
                <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="first_name" className="sr-only">First name</label>
                            <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                autoComplete="given-name"
                                required
                                className={`appearance-none block w-full px-4 py-3 text-sm border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 ease-in-out ${errors['first_name'] ? 'border-red-500' : ''
                                    }`}
                                placeholder="First name"
                                value={formData['first_name']}
                                onChange={handleChange}
                            />
                            {errors['first_name'] && (
                                <p className="text-red-500 text-xs mt-1">{errors['first_name']}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="last_name" className="sr-only">Last name</label>
                            <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                autoComplete="family-name"
                                required
                                className={`appearance-none block w-full px-4 py-3 text-sm border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 ease-in-out ${errors['last_name'] ? 'border-red-500' : ''
                                    }`}
                                placeholder="Last name"
                                value={formData['last_name']}
                                onChange={handleChange}
                            />
                            {errors['last_name'] && (
                                <p className="text-red-500 text-xs mt-1">{errors['last_name']}</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone_number" className="sr-only">phone_number_number No.</label>
                        <input
                            type="text"
                            name="phone_number"
                            id="phone_number"
                            autoComplete="tel"
                            required
                            className={`appearance-none block w-full px-4 py-3 text-sm border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 ease-in-out ${errors['phone_number'] ? 'border-red-500' : ''
                                }`}
                            placeholder="phone_number number"
                            value={formData['phone_number']}
                            onChange={handleChange}
                        />
                        {errors['phone_number'] && (
                            <p className="text-red-500 text-xs mt-1">{errors['phone_number']}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="email" className="sr-only">Email address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            required
                            className={`appearance-none block w-full px-4 py-3 text-sm border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 ease-in-out ${errors['email'] ? 'border-red-500' : ''
                                }`}
                            placeholder="Email address"
                            value={formData['email']}
                            onChange={handleChange}
                        />
                        {errors['email'] && (
                            <p className="text-red-500 text-xs mt-1">{errors['email']}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="password"
                            required
                            className={`appearance-none block w-full px-4 py-3 text-sm border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 ease-in-out ${errors['password'] ? 'border-red-500' : ''
                                }`}
                            placeholder="New Password"
                            value={formData['password']}
                            onChange={handleChange}
                        />
                        {errors['password'] && (
                            <p className="text-red-500 text-xs mt-1">{errors['password']}</p>
                        )}
                    </div>
                </div>

                <div className="space-y-5">
                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-200 ease-in-out shadow-sm"
                    >
                        Sign Up
                    </button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Sign up With</span>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-200 ease-in-out shadow-sm"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        <span>g</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;