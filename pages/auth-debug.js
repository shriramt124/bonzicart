import React, { useEffect } from 'react';
import { useAuth } from './components/auth/AuthContext';
import { useSession } from 'next-auth/react';

function AuthDebug() {
    const { user, isAuthenticated } = useAuth();
    const { data: session } = useSession();

    useEffect(() => {
        console.log('Auth Debug - User:', user);
        console.log('Auth Debug - isAuthenticated:', isAuthenticated);
        console.log('Auth Debug - Session:', session);
    }, [user, isAuthenticated, session]);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Authentication Debug</h1>
            
            <div className="mb-6 p-4 bg-gray-100 rounded">
                <h2 className="text-xl font-semibold mb-2">Auth Context</h2>
                <p><strong>isAuthenticated:</strong> {isAuthenticated ? 'true' : 'false'}</p>
                <p><strong>User:</strong> {user ? 'Present' : 'Not present'}</p>
                {user && (
                    <pre className="mt-2 p-2 bg-gray-200 rounded overflow-auto">
                        {JSON.stringify(user, null, 2)}
                    </pre>
                )}
            </div>
            
            <div className="p-4 bg-gray-100 rounded">
                <h2 className="text-xl font-semibold mb-2">NextAuth Session</h2>
                <p><strong>Session:</strong> {session ? 'Present' : 'Not present'}</p>
                {session && (
                    <pre className="mt-2 p-2 bg-gray-200 rounded overflow-auto">
                        {JSON.stringify(session, null, 2)}
                    </pre>
                )}
            </div>
        </div>
    );
}

export default AuthDebug;