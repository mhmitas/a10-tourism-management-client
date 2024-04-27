import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true)

    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function signInUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function popUpSignIn(provider) {
        return signInWithPopup(auth, provider)
    }
    function signOutUser() {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setAuthLoading(false)
            console.log('OnAuthStageChange:', currentUser);
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const authInfo = {
        user,
        authLoading,
        setAuthLoading,
        setUser,
        createUser,
        signInUser,
        popUpSignIn,
        signOutUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;