import React, { createContext, useEffect, useState } from 'react';
import app from '../../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const AuthContext =createContext(null);

const auth = getAuth(app);
const provider =new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);        
    const [loading, setLoader] = useState(true);  
          
    const createUser =(email,password,photoURL)=>{
        setLoader()
       return createUserWithEmailAndPassword(auth, email, password,photoURL);
    }
    const signIn =(email,password)=>{
        setLoader()
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut =()=>{
       return signOut(auth);
    }
    const googleLogIn =()=>{
        setLoader()
        return signInWithPopup(auth,provider);
    }
    useEffect(()=>{
          const unSubscribe= onAuthStateChanged(auth,currentUser =>{
               console.log('auth state change', currentUser);
               setUser(currentUser)
                setLoader(false);
            })
            return ()=>{
                unSubscribe();
            }
    },[])

    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        googleLogIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;