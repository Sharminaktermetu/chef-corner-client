import React, { createContext, useEffect, useState } from 'react';
import app from '../../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

export const AuthContext =createContext(null);

const auth = getAuth(app);
const provider =new GoogleAuthProvider();
const providerGit = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);        
    const [loading, setLoader] = useState(true);  
        // create new user with email  
    const createUser =(email,password,photoURL)=>{
        setLoader(true)
       return createUserWithEmailAndPassword(auth, email, password,photoURL);
    }
    // login with already created acc
    const signIn =(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // log out 
    const logOut =()=>{
       return signOut(auth);
    }
    // login with google
    const googleLogIn =()=>{
        
        return signInWithPopup(auth,provider);
    }
    const gitLogin =()=>{
        return signInWithPopup(auth,providerGit);
    }
    // wait for user lodding
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
// context info added
    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        googleLogIn,
        gitLogin,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;