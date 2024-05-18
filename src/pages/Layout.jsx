import React from 'react';
import { NavLink } from 'react-router-dom';

const Layout = () => {
    return (
        <nav className='container flex justify-center gap-8 py-4 text-2xl font-bold'>
            <NavLink to={'/'} className={({isActive, isPanding}) =>
                isActive ? 'active': isPanding ? 'panding' : ''
            }>
                Admin
            </NavLink>
            <NavLink to={'/client'} className={({isActive, isPanding}) =>
                isActive ? 'active': isPanding ? 'panding' : ''
            }>
                Client
            </NavLink>
        </nav>
    );
}

export default Layout;
