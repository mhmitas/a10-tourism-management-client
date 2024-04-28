import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, authLoading } = useContext(AuthContext)
    const location = useLocation()

    if (authLoading) {
        return <div className=' absolute left-1/2 top-1/2'><span className="loading loading-spinner text-primary loading-lg"></span></div>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/sign-in"></Navigate>
};

export default PrivetRoute;