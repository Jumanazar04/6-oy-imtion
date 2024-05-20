import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';



const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // const notify = () => toast("Login yoki parol xato");
    // const getDataLclStorge = localStorage.getItem('auth-token')    
        async function fetched(){
                try {
                    const response = await axios.post(
                        'https://ecommerce-backend-fawn-eight.vercel.app/api/auth',
                        {
                            email: email,
                            password: password
                        }
                    );
                    if (response.data) {
                        navigate('/admin')
                        localStorage.setItem('auth-token', (response.data))
                    }
                } catch (error) {
                    alert('Login yoki parol xato')
                }
        }
    return (
        <div className='w-screen h-screen flex items-center justify-center bg-gray-300'>
            <div className='p-6 flex flex-col text-center bg-white rounded-lg'>
                <h2 className='pb-2 text-2xl font-bold'>Login</h2>
                <form onSubmit={fetched} className='flex flex-col gap-4 mb-3'  action="#">
                    <div className='flex justify-between items-center'>
                        <label htmlFor="email">Email:</label>
                        <input
                            className='p-3 border bg-gray-100 rounded-lg' 
                            onChange={(e) => (
                             setEmail(e.target.value)
                            )}
                            value={email}
                            type="text" />
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <label htmlFor="password">Password:</label>
                        <input
                            className='p-3 border bg-gray-100 rounded-lg' 
                            onChange={(e) => (
                                setPassword(e.target.value)
                            )}
                            value={password}
                            type="password" />
                    </div>
                    <button type='submit' className='py-2 border rounded-lg bg-blue-600 text-white font-bold'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
