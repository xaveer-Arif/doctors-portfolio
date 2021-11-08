import { useEffect, useState } from "react";
import initFirebase from "../Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut , onAuthStateChanged, signInWithEmailAndPassword   } from "firebase/auth";



initFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})

    const auth = getAuth();
    // register
    const register = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user
        })
    }
    // signin
    const signIn =(email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user
        })
    }


    // auth change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            } else {
              setUser({})
            }
          });
          return() => unsubscribe
    } , [])

    // logout 
    const logOut = () => {
        signOut(auth)
        .then(() => {

        })
    }

    return{
        user, 
        signIn,
        register,
        logOut
    }
}
export default useFirebase