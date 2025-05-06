import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

function AuthLayoutHeader() {
    const router = useRouter();
    const isSignIn = router.pathname === '/auth/login';

    return (
        <div className="bg-white p-5 sm:p-8 md:p-10 rounded-t-xl sm:rounded-t-2xl shadow-xl w-full max-w-md space-y-6 sm:space-y-8">
            {/* Logo */}
            <div className="flex flex-col items-center justify-center space-y-4">
                <img src="/bonzilogo.png" alt="BonziCart" className="h-12 sm:h-16 w-auto" />
                <h2 className="text-center text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                    Welcome to <span className="text-orange-600">BonziCart</span>
                </h2>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 bg-gray-50 rounded-t-lg overflow-hidden">
                <Link href="/auth/login" className="w-full">
                    <button
                        className={`w-full py-3 text-sm font-medium transition-colors duration-200 ${isSignIn ? 'text-orange-600 border-b-2 border-orange-600 bg-white' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                    >
                        SIGN IN
                    </button>
                </Link>

                <Link href="/auth/register" className="w-full">
                    <button
                        className={`w-full py-3 text-sm font-medium transition-colors duration-200 ${!isSignIn ? 'text-orange-600 border-b-2 border-orange-600 bg-white' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                    >
                        REGISTER
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default AuthLayoutHeader