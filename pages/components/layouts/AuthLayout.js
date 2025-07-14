
import React from 'react'
import AuthLayoutHeader from '../sections/AuthSection/AuthLayoutHeader'
import { AuthProvider } from '../../../Contexts/AuthContext'
function AuthLayout({ children }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                <AuthProvider>
                    <AuthLayoutHeader />

                    {children}
                </AuthProvider>
            </div>
        </div>
    )
}

export default AuthLayout