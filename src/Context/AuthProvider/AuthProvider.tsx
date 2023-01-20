import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
import { toast } from 'react-hot-toast';

interface User {
    user: any,
    createUser: (email: string, password: string, navigate: any) => any,
    signIn: (email: string, password: string, navigate: any) => any
    googleSignIn: (navigate:any) => any,
    logOut: (navigate: any) => any,
    loading: boolean,
}

export const AuthContext = createContext({} as User);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

type childrenType = {
    children: React.ReactNode;
}

const AuthProvider = ({children}: childrenType) => {
    const [user, setUser] = useState<React.SetStateAction<{}>>({});
    const [loading, setLoading] = useState(false);

    const createUser = (email: string, password: string, navigate: any) => {
        setLoading(true)
       createUserWithEmailAndPassword(auth, email, password)
       .then( result => {
        const user = result.user;
        setUser(user);
        navigate('/')
       })
       .catch( err => console.log(err))
    }

    const signIn = (email: string, password: string, navigate: any) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then( result => {
         const user = result.user;
         setUser(user);
         navigate('/')
        })
        .catch( err => console.log(err))
     }

    const googleSignIn = (navigate:any) => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
        .then( res => {
            const user = res.user;
            setUser(user);
            navigate('/')
        })
    }

    const logOut = (navigate: any) =>{
        setLoading(true)
        signOut(auth)
        .then(() => {
            toast.success("User logged out successfully")
            navigate('/')
        })
        .catch(err => console.log(err));
    }


    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            if(currentUser !== null){
                setUser(() => currentUser);
                setLoading(false)
            }
        });

        return () => unsubscribe();
    }, [])


    const authInfo = {
        user,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        loading
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;









