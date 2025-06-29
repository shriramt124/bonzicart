import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useRouter } from 'next/router';
import { showAlert } from './AuthAlert';
import { showSuccessAlert } from './AuthSuccessAlert';
import { LoginSchema } from './Schemas/loginShema';

function SignIn() {
    const { login, googleLogin } = useAuth();
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        email_or_phone: '',
        password: '',
    });
    const router = useRouter();

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
            const parsedData = LoginSchema.parse(formData);
            setErrors({});
            // Add the 'type' field with value 0 for email/password login
            const loginData = { ...parsedData, type: 0 };
            const response = await login(loginData);
            console.log('Login successful', response);
            showSuccessAlert(response.data.message, router, '/'); // Redirect to home page after login
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                showAlert({ message: err.response.data.message, title: "Login Error" });
            } else if (err.errors) {
                const mappedErrors = {};
                err.errors.forEach((error) => {
                    mappedErrors[error.path[0]] = error.message;
                });
                setErrors(mappedErrors);
            } else {
                showAlert({ message: 'Login failed. Please try again.' });
            }
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await googleLogin();
            // The redirect will be handled by NextAuth
        } catch (error) {
            showAlert({ message: 'Google login failed. Please try again.' });
        }
    };

    return (
        <div className="bg-white p-6 sm:p-8 rounded-b-xl sm:rounded-b-2xl shadow-xl w-full max-w-md">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-5">
                    <div>
                        <label htmlFor="email-address" className="sr-only">Email address or phone</label>
                        <input
                            id="email-address"
                            name="email_or_phone"
                            type="text"
                            required
                            className={`appearance-none block w-full px-4 py-3 text-sm border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 ease-in-out ${errors.email ? 'border-red-500' : ''}`}
                            placeholder="Email address or phone"
                            value={formData.email_or_phone}
                            onChange={handleChange}
                        />
                        {errors.email_or_phone && (
                            <p className="text-red-500 text-xs mt-1">{errors.email_or_phone}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className={`appearance-none block w-full px-4 py-3 text-sm border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 ease-in-out ${errors.password ? 'border-red-500' : ''}`}
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                        )}
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-orange-600 focus:ring-2 focus:ring-orange-500 border-gray-300 rounded transition duration-200 ease-in-out cursor-pointer"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <a href="#" className="font-medium text-orange-600 hover:text-orange-500 transition duration-150 ease-in-out">
                            Forgot password?
                        </a>
                    </div>
                </div>

                <div className="space-y-5">
                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-200 ease-in-out shadow-sm"
                    >
                        Sign In
                    </button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Sign in With</span>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-200 ease-in-out shadow-sm"
                    >
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        <span>Sign in with Google</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignIn