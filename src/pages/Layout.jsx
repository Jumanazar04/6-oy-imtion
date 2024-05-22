import React, { useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        
        const getToken = localStorage.getItem("auth-token")
        if (!getToken) {
            navigate('/login')
        }
    }, [navigate]);
    return (
        <>
        <nav className='container mx-auto flex border justify-center gap-20 bg-gray-50 py-4 text-2xl font-bold mb-4'>
            <NavLink to={'/admin'} className={({isActive, isPanding}) =>
                isActive ? 'text-red-500': isPanding ? 'text-black' : ''
            }>
                Admin
            </NavLink>
            <NavLink to={'/client'} className={({isActive, isPanding}) =>
                isActive ? 'text-red-500': isPanding ? 'text-black' : ''
            }>
                Client
            </NavLink>
        </nav>
        <Outlet />
        </>
    );
}

export default Layout;
