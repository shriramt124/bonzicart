import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { signIn, signOut, useSession } from 'next-auth/react';

const AuthContext = createContext();
const url = process.env.NEXT_PUBLIC_API_URL;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state
    const { data: session, status } = useSession(); // NextAuth session status

    const savetoLocalStorage = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('access_token', user.access_token);
    };

    const removeFromLocalStorage = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('access_token');
    };

    // Initialize user from localStorage or session
    useEffect(() => {
        const restoreUserFromStorage = () => {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                try {
                    const parsedUser = JSON.parse(storedUser);
                    setUser(parsedUser);
                } catch (e) {
                    console.error("Failed to parse user from localStorage", e);
                }
            }
            setLoading(false);
        };

        // Wait for session check only if using OAuth
        if (status === 'unauthenticated' || status === 'authenticated') {
            restoreUserFromStorage();
        }
    }, [status]);

    // Login method for email/password
    const login = async (credentials) => {
        try {
            if (credentials.type === 1) {
                return await signIn('google', { callbackUrl: '/' });
            }

            const response = await axios.post(`${url}/api/login`, credentials, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data && response.data.data) {
                setUser(response.data.data);
                savetoLocalStorage(response.data.data);
            }

            return response.data;
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    };

    const googleLogin = async () => {
        try {
            return await signIn('google', { callbackUrl: '/' });
        } catch (error) {
            throw error;
        }
    };

    const register = async (userData) => {
        try {
            const response = await axios.post(`${url}/api/register`, userData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (error) {
            console.log("Error received from the backend");
            throw error;
        }
    };

    const resendOTP = async (data) => {
        try {
            const formData = new FormData();
            for (const key in data) {
                formData.append(key, data[key]);
            }
            const response = await axios.post(`${url}/api/resend-otp`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response;
        } catch (error) {
            throw error;
        }
    };

    const verifyOTP = async (data) => {
        try {
            const formData = new FormData();
            for (const key in data) {
                formData.append(key, data[key]);
            }
            const response = await axios.post(`${url}/api/verify-otp`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setUser(response.data);
            removeFromLocalStorage();
            savetoLocalStorage(response.data);
            return response;
        } catch (error) {
            throw error;
        }
    };

    const verifyMobileOTP = async (data) => {
        try {
            const response = await axios.post(`${url}/api/mobile-verify`, data);
            return response;
        } catch (error) {
            throw error;
        }
    };

    const logout = async () => {
        await signOut({ callbackUrl: '/auth/login' });
        setUser(null);
        removeFromLocalStorage();
        //redirect to the home page 

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
                loading
            }}
        >
            {!loading ? children : <div>Loading...</div>}
        </AuthContext.Provider>
    );
};

// Hook for easy access
export const useAuth = () => useContext(AuthContext);