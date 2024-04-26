import React, { createContext } from 'react';


const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    console.log(children);
    return (
        <AuthContext.Provider value={'hello this is new auth context'}>

        </AuthContext.Provider>
    );
};

export default AuthProvider;