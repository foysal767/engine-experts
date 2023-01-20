import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/firebase.config';
import { Navigate, useNavigate } from 'react-router-dom';

// export type globalContent = {
//     providerLogin: any,
//     AuthProvider: any,
//     createUser: any,
//     signIn: any,
//     updateUserProfile: any,
//     updateProfile: any,
//     googleSignIn: any,
//     setUser: any,
//     children:React.ReactNode,

// };
export interface IAuthRouteProps {
    children: React.ReactNode,
    
 };

export const AuthContext = createContext();

const AuthProvider: React.FunctionComponent<IAuthRouteProps> = (props) => {
    const { children } = props;
    const auth = getAuth(app)
    const navigate = useNavigate();
    const [users, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true);

    const providerLogin = (provider:any ) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const createUser = (email:any , password:any ) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email:any , password:any ) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile:any ) => {
        return updateProfile(auth.currentUser, profile);
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    //google sign in //
    const googleSignIn = (provider:any ) => {
        return signInWithPopup(auth, provider);
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log('user inside state change', user);
            if (user === null || user.emailVerified) {
                setUser(user);
            }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        users,
        loading,
        providerLogin,
        logOut,
        signIn,
        createUser,
        updateUserProfile,
        verifyEmail,
        googleSignIn
    };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;