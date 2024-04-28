import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.confiq";



export const AuthContex = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const[user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);

    
    const createUser =(email, password)=>{
        setLoading(true); 
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth);
    }

    const googleLogin = ()=>{
              return signInWithPopup(auth, googleProvider)
    }


    const githubLogin = ()=>{
        return signInWithPopup(auth, githubProvider)
    }
   

     useEffect(()=>{
      const unSubscribe=  onAuthStateChanged(auth , currentUser=>{
            console.log('user in auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return()=>{
            unSubscribe();
        }
     },[])


     const authInfo={user,
        loading,
        createUser,
        logOut,
        signIn,
        googleLogin,
        githubLogin 
        
        }

     return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );


  
};

export default AuthProvider;