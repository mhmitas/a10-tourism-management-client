import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function signInUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function popUpSignIn(provider) {
        return signInWithPopup(auth, provider)
    }

    const authInfo = {
        createUser,
        signInUser,
        popUpSignIn,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;