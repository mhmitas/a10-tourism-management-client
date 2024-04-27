import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute2 = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (!user) {
        return <Navigate to="/"></Navigate>
    }
    return children
};

export default PrivetRoute2;