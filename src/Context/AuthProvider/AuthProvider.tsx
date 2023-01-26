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
    const [loading, setLoading] = useState(true);



    const createUser = (email: string, password: string, navigate: any) => {
        setLoading(true)
       createUserWithEmailAndPassword(auth, email, password)
       .then( result => {
        const user = result.user;
           setUser(user);
           const createdUser = {
               name: user.displayName,
               email: user.email
           }
           fetch("http://localhost:5000/users", {
             method: "POST",
             headers: {
               "content-type": "application/json",
             },
             body: JSON.stringify(createdUser),
           })
             .then((res) => res.json())
               .then((data) => {
                   if (data.success) {
                       fetch("http://localhost:5000/jwt", {
                           method: "POST",
                           headers: {
                               "content-type":"application/json"
                           },
                           body:JSON.stringify({email:user.email})
                       })
                           .then(res => res.json())
                           .then(data => {
                               if (data.success) {
                                   localStorage.setItem("access-token", data.token)
                                   toast.success("successfully crated user");
                                   navigate("/");
                                   setLoading(false)
                           }
                       })
                    }
             });
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
            setLoading(false)
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
            setLoading(false)
        })
    }

    const logOut = (navigate: any) =>{
        setLoading(true)
        signOut(auth)
        .then(() => {
            toast.success("User logged out successfully")
            navigate('/')
            setLoading(false)
        })
        .catch(err => console.log(err));
    }


    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            
                setUser(()=>currentUser);
                console.log(currentUser,'state',user)
                setLoading(false)
            
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









