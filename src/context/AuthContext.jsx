import React ,{useState,useEffect,useContext} from 'react'
import { auth } from '../firebase' 


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

const resetPassword = async(email) =>{
    return await auth.sendPasswordResetEmail(email)
}
function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

 useEffect(() => { 
     const unsubscribe =  auth.onAuthStateChanged(user =>{
        setLoading(true)
        setCurrentUser(user)
       })
       return unsubscribe
      
   }, [])

const value = {
    currentUser,
    singup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}



