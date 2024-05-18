import React, { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='p-6 flex'>
                <h2>Login</h2>
                <form action="#">
                    <div className='flex justify-between'>
                        <label htmlFor="email">Email:</label>
                        <input
                            className='p-4 border bg-gray-100 rounded-lg' 
                            value={email}
                            type="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            className='p-4 border bg-gray-100 rounded-lg' 
                            value={password}
                            type="password" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
