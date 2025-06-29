
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useSession, signIn, signOut } from 'next-auth/react';

// Create the AuthContext
const AuthContext = createContext();
const url = process.env.NEXT_PUBLIC_API_URL;

// Create a provider component
export const AuthProvider = ({ children }) => {
    const { data: session } = useSession();
    const [user, setUser] = useState(null);

    // Update user state when session changes
    useEffect(() => {
        if (session?.user) {
            // If we have API data from our backend, use that
            if (session.user.apiData) {
                setUser(session.user.apiData);
            } else {
                // Otherwise use the basic session user data
                setUser(session.user);
            }
        } else {
            setUser(null);
        }
    }, [session]);

    // Login method for email/password
    const login = async (credentials) => {
        try {
            // If it's a Google login (type 1), use NextAuth signIn
            if (credentials.type === 1) {
                return await signIn('google', { callbackUrl: '/' });
            }

            // Otherwise use the regular API login
            const response = await axios.post(`${url}/api/login`, credentials, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log("response received from the backend", response.data);
            setUser(response.data);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    // Google login method
    const googleLogin = async () => {
        try {
            return await signIn('google', { callbackUrl: '/' });
        } catch (error) {
            throw error;
        }
    };

    // Register method
    const register = async (userData) => {
        try {
            const response = await axios.post(`${url}/api/register`, userData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            return response.data;
        } catch (error) {
            console.log("error received from the backend")
            throw error;
        }
    };

    // Resend OTP method
    const resendOTP = async (data) => {
        try {
            const response = await axios.post(`${url}/api/resend-otp`, data);
            return response;
        } catch (error) {
            throw error;
        }
    };

    // Verify OTP method
    const verifyOTP = async (data) => {
        try {
            const response = await axios.post(`${url}/api/otp-verify`, data);
            return response;
        } catch (error) {
            throw error;
        }
    };

    // Verify mobile OTP method
    const verifyMobileOTP = async (data) => {
        try {
            const response = await axios.post(`${url}/api/mobile-verify`, data);
            return response;
        } catch (error) {
            throw error;
        }
    };

    // Logout method
    const logout = async () => {
        await signOut({ callbackUrl: '/auth/login' });
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login,
                googleLogin,
                register,
                resendOTP,
                verifyOTP,
                verifyMobileOTP,
                logout,
                isAuthenticated: !!user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Create a hook for easy use
export const useAuth = () => useContext(AuthContext);