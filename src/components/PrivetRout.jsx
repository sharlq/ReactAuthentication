import React from 'react'
import {Route,Redirect} from "react-router-dom"
import {useAuth} from "../context/authcontext"
const PrivetRout = ({ component:Component, ...rest}) => {
    const {currentUser} = useAuth()
    return (
        <Route>
           {currentUser? <Component {...rest}/> : <Redirect to="/login"/>}  
        </Route>
    )
}

export default PrivetRout
