import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { toast } from "react-hot-toast";

interface User {
  user: any;
  createUser: (
    email: string,
    password: string,
    name: string,
    photoURL: string,
    role: string,
    navigate: any
  ) => any;
  signIn: (email: string, password: string, navigate: any) => any;
  googleSignIn: (navigate: any) => any;
  logOut: (navigate: any) => any;
  updateUser: (name: string, photoURL: string) => any;
  loading: boolean;
}

export const AuthContext = createContext({} as User);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

type childrenType = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: childrenType) => {
  const [user, setUser] = useState<React.SetStateAction<{}>>({});
  const [loading, setLoading] = useState(true);

  const createUser = (
    email: string,
    password: string,
    name: string,
    photoURL: string,
    role: string,
    navigate: any
  ) => {
    console.log(name, photoURL);

    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        const createdUser = {
          name: name,
          email: user.email,
          accType: role,
          image: photoURL,
        };
        fetch("https://engine-experts-server-phi.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(createdUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              fetch("https://engine-experts-server-phi.vercel.app/jwt", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({ email: user.email }),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.success) {
                    updateUser(name, photoURL);
                    localStorage.setItem("access-token", data.token);
                    toast.success("successfully crated user");
                    navigate("/");
                    setLoading(false);
                  }
                });
            }
          });
      })
      .catch((err) => console.log(err));
  };

  const signIn = (email: string, password: string, navigate: any) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        fetch("https://engine-experts-server-phi.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: user.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              localStorage.setItem("access-token", data.token);
              toast.success("successfully Login");
              navigate("/");
              setLoading(false);
            }
          });
      })
      .catch((err) => console.log(err));
  };

  const googleSignIn = (navigate: any) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider).then((res) => {
      const user = res.user;
      setUser(user);
      fetch("https://engine-experts-server-phi.vercel.app/jwt", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email: user.email }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            localStorage.setItem("access-token", data.token);
            toast.success("successfully Login");
            navigate("/");
            setLoading(false);
          }
        });
    });
  };

  const updateUser = (name: string, photoURL: string) => {
    const profile = { displayName: name, photoURL: photoURL };
    const newUser = auth.currentUser;

    if (newUser !== null) {
      updateProfile(newUser, profile)
        .then((res) => {})
        .catch((err) => console.log(err));
    }
  };

  const logOut = (navigate: any) => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        localStorage.removeItem("access-token");
        toast.success("User logged out successfully");
        navigate("/");
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(() => currentUser);
      console.log(currentUser, "state", user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const authInfo = {
    user,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUser,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
