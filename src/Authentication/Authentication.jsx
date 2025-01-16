import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "./init";
// import auth from "./init";
import axios from 'axios';


export const UserAuthContext = createContext(null);
const GoogleProvider=new GoogleAuthProvider()
const Authentication = ({ children }) => {
    
    const name='Harun'
    const [user,setUser]=useState(null)
    const [isLoading,setIsLoading]=useState(true)
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
      
          if (currentUser?.email) {
            const user = { email: currentUser.email };
            console.log(user);
      
            axios.post(`${import.meta.env.VITE_API}/jwt`, user, {
              withCredentials: true,
            })
              .then(res => {
                console.log(res.data);
                setIsLoading(false);
              })
              .catch(err => {
                console.error(err);
                setIsLoading(false);
              });
          } else {
            axios.post(`${import.meta.env.VITE_API}/logout`, {}, {
              withCredentials: true,
            })
              .then(res => {
                console.log('logout', res.data);
                setIsLoading(false);
              })
              .catch(err => {
                console.error(err);
                setIsLoading(false);
              });
          }
        });
      
        return () => {
          unsubscribe();
        };
      }, []);
      

    const CreateAccount=(email,password)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    const Login=(email,password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const Logout=()=>{
        return signOut(auth)
    }

    const LoginGoogle=()=>{

        setIsLoading(true)
        return signInWithPopup(auth,GoogleProvider)

    }

    const update=(name,photo)=>{
        setIsLoading(true)
        return updateProfile(auth.currentUser,{displayName:name,photoURL:photo})

    }

    const info={
        name,
        user,
        Login,
        Logout,
        CreateAccount,
        LoginGoogle,
        isLoading,
        update,
        setIsLoading,

    }
  return (
    
      <UserAuthContext.Provider value={info}>{children}</UserAuthContext.Provider>
    
  );
};

export default Authentication;
