import React, {useRef,useState} from 'react'
import {Card,CardContent,Button,Typography,TextField} from '@material-ui/core'
import {Alert} from '@material-ui/lab';
import useStyles from "./materialUIStyling";
import {useAuth} from "../context/authcontext";
import {Link,useHistory} from "react-router-dom";

const LogIn = () => {
    const emailRef=useRef()
    const passwordRef=useRef()
    const classes = useStyles();
    const {login} = useAuth();
    const [error,setError] = useState("")
    const history = useHistory();
    const  handleSubmite = async(e) => {
      e.preventDefault()
      try{
       setError('')
      await login(emailRef.current.value,passwordRef.current.value)
      history.push("/") // history.push is not a function
      }catch(err){
        setError(`failed to Log in
         ${err}`)
        console.log(err)
      }
    }

    return (
    <div>
        <Card variant="outlined" className={classes.root}>
          <CardContent className="card">
          <Typography variant="h4" className={classes.title} >Log In</Typography>
          <form className={classes.textBox} noValidate autoComplete="off" onSubmit={(e)=>handleSubmite(e)} >
            {error && <Alert severity="error">{error}</Alert> }
     
             <TextField 
               error={error}
               className={classes.input}
               id="logInEmail"
               type="  background"
               label="Email"
               variant="outlined"
               inputRef={emailRef}
               required 
               />

             <TextField
               error={false}
               id="logInPassword"
               type="password"
               label="Password"
               variant="outlined" 
               inputRef={passwordRef}
               required
               />

    
          <div>
            <Button  variant="contained" color="primary" className={classes.btn} type="submit" >
               LOG IN
            </Button>
          </div>
        </form>

          <p className="log-sign-qustion"><Link to="/resetPassword">Forgot Password</Link></p>
          <p className="log-sign-qustion">Need an Account ? <Link to="/signup">Sign Up</Link> </p>
        </CardContent>
      
      </Card>
        </div>
    )
}

export default LogIn
