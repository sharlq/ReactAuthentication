import React ,{useState,useEffect,useContext} from 'react'
import { auth } from '../firebase' // the problem is here 


const AuthContext = React.createContext()
export const useAuth = () =>{
    return useContext(AuthContext)
}




export const AuthProvider = ({children}) => {
const [currentUser,setCurrentUser]=useState()
const [loading,setLoading] = useState(false)
 const singup = (email , password)=>{  
        return auth.createUserWithEmailAndPassword(email,password)
       
 }

 const login = (email , password)=>{  
    return auth.signInWithEmailAndPassword(email,password)
   
}

const logout = ()=>{  
    return auth.signOut()  
}

 useEffect(() => {//because we only run once 

     const unsubscribe =  auth.onAuthStateChanged(user =>{
        setLoading(true)
        
           setCurrentUser(user)
       })
       return unsubscribe
        //the reason why we get this un subscribe here is that this function is actually return a method that when called unsupscriped the on off changed event 
        //this is going to unsubsicribe use from the listner here when ever we unmount this component 
   }, [])

const value = {
    currentUser,
    singup,
    login,
    logout
}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}



