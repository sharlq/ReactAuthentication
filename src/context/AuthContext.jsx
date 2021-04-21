import React ,{useState,useEffect} from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()
const useAuth = () =>{
    return useContext(AuthContext)
}




const AuthProvider = ({children}) => {
const [currentUser,setCurrentUser]=useState()
const singup = (email , password)=>{
    return auth.createUserWithEmailAndPassword(email,password)
}



useEffect(() => {//because we only run once 

  const unsubscribe =  auth.onAuthStateChanged(user =>{
        setCurrentUser(user)
    })
    return unsubscribe
    // the reason why we get this un subscribe here is that this function is actually return a method that when called unsupscriped the on off changed event 
     //this is going to unsubsicribe use from the listner here when ever we unmount this component 
}, [])

const value = {
    currentUser,
    singup
}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
