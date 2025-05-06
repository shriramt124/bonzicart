import React from 'react'

import Link from 'next/link'
import AuthLayout from '../components/layouts/AuthLayout'
import SignUp from '../components/auth/SignUp';

function Register() {
    const isSignIn = false;
    return (
        <AuthLayout>
            <SignUp />
        </AuthLayout>
    )
}

export default Register