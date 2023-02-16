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

import React, { createContext, useEffect, useState } from "react";

import { toast } from "react-hot-toast";
import app from "../../Firebase/firebase.config";
import useAccType from "../../hook/useAccType";
import useAdmin from "../../hook/useAdmin";

interface User {
  user: any;
  errorSignUp: any;
  createUser: (
    email: string,
    password: string,
    name: string,
    photoURL: string,
    // role: string,
    navigate: any
  ) => any;

  createSeller: (
    email: string,
    password: string,
    name: string,
    photoURL: string,
    service: string,
    navigate: any,
    phone: number,
    nid: number,
    nationality: string,
    address: any
  ) => any;
  signIn: (email: string, password: string, navigate: any, from: any) => any;
  googleSignIn: (navigate: any, from: any) => any;
  logOut: (navigate: any) => any;
  updateUser: (name: string, photoURL: string) => any;
  loading: boolean;
  isAdmin: boolean;
  accType: any;
}

export const AuthContext = createContext({} as User);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

type childrenType = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: childrenType) => {
  // const location = useLocation();

  // const from = location.state?.from?.pathname || "/";
  // const [user, setUser] = useState<React.SetStateAction<{}>>({});
  const [user, setUser] = useState<React.SetStateAction<{} | null>>({});
  const [userEmail, setUserEmail] =
    useState<React.SetStateAction<string | null>>();
  const [loading, setLoading] = useState(true);
  const [errorSignUp, setErrorSignUp] = useState();
  const [isAdmin] = useAdmin(userEmail);
  const [accType] = useAccType(userEmail);
  const createUser = (
    email: string,
    password: string,
    name: string,
    photoURL: string,
    navigate: any
  ) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        const createdUser = {
          name: name,
          email: user.email,
          accType: "User",
          image: photoURL,
          userId: user?.uid,
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
      .catch((err) => {
        console.log(err);
        setErrorSignUp(err.message);
      });
  };

  // seller/organizer

  const createSeller = (
    email: string,
    password: string,
    name: string,
    photoURL: string,
    service: string,
    navigate: any,
    phone: number,
    nid: number,
    nationality: string,
    address: any
  ) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        const createdSeller = {
          name: name,
          email: user.email,
          accType: "Seller",
          expert: service,
          image: photoURL,
          userId: user?.uid,
          navigate: navigate,
          phone: phone,
          nid: nid,
          nationality: nationality,
          address: address,
        };
        fetch("https://engine-experts-server-phi.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(createdSeller),
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
      .catch((err) => {
        console.log(err);
        setErrorSignUp(err.message);
      });
  };

  const signIn = (
    email: string,
    password: string,
    navigate: any,
    from: any
  ) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(from, { replace: true });
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
              setLoading(false);
            }
          });
      })
      .catch((err) => {
        console.log(err);
        setErrorSignUp(err.message);
      });
  };

  const googleSignIn = (navigate: any, from: any) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider).then((res) => {
      const user = res.user;
      const googleUser = {
        name: user?.displayName,
        email: user?.email,
        accType: "User",
        image: user?.photoURL,
        userId: user?.uid,
      };
      setUser(user);
      fetch("https://engine-experts-server-phi.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(googleUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            navigate(from, { replace: true });
            fetch("https://engine-experts-server-phi.vercel.app/jwt", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ email: user?.email }),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.success) {
                  localStorage.setItem("access-token", data.token);
                  setLoading(false);
                }
              });
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
        .catch((err) => console.error(err));
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
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserEmail(currentUser?.email);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const authInfo = {
    user,
    createUser,
    createSeller,
    errorSignUp,
    signIn,
    googleSignIn,
    logOut,
    updateUser,
    loading,
    isAdmin,
    accType,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
