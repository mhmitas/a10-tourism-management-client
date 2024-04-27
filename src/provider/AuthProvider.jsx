import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function signInUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function popUpSignIn(provider) {
        return signInWithPopup(auth, provider)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('OnAuthStageChange:', currentUser);
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const getUser = auth.currentUser;

    const authInfo = {
        user,
        setUser,
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