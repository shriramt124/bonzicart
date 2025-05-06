import React from 'react'

import AuthLayout from '../components/layouts/AuthLayout'
import Link from 'next/link';
import SignIn from '../components/auth/SignIn';

function Login() {
    const isSignIn = true;
    return (
        <AuthLayout>
            <SignIn />
        </AuthLayout>
    )
}

export default Login