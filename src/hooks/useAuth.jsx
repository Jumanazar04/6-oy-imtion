import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useAuth()  {

    const navigate = useNavigate();

    useEffect(() => {
        
        const token = localStorage.getItem("auth-token");

        if (!token) {
            navigate('/login')
        }
        
    }, [navigate]);

    return (
        <div>
            
        </div>
    );
}

export default useAuth;
