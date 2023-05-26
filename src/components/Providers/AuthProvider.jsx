import React, { createContext, useEffect, useState } from 'react';
import app from '../../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

export const AuthContext =createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);        
    const [loading, setLoader] = useState(true);  
          
    const createUser =(email,password)=>{
        setLoader()
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn =(email,password)=>{
        setLoader()
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut =()=>{
       return signOut(auth);
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
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;