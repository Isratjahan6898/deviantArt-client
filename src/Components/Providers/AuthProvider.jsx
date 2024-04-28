import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.confiq";


export const AuthContex = createContext(null);
const auth = getAuth(app);

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
        signIn
        
        }

     return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );


  
};

export default AuthProvider;