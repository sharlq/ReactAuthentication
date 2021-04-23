import React, {useRef,useState} from 'react'
import {Card,CardContent,Button,Typography,TextField} from '@material-ui/core'
import {Alert} from '@material-ui/lab';
import useStyles from "./materialUIStyling";
import {useAuth} from "../context/authcontext";
import {Link} from "react-router-dom";
const PasswordReset = () => {

    const emailRef=useRef()
    const classes = useStyles();
    const {resetPassword} = useAuth();
    const [error,setError] = useState("")
    const [message,setMessage] = useState("")
   const  handleSubmite = async(e) => {
      e.preventDefault()
      try{
       setError('')
      await resetPassword(emailRef.current.value)
      setMessage("check your email for Reset message")
      }catch(err){
        setError(`failed to Reset Password
        ${err}`)
        console.log(err)
      }
    }

    
    return (
        <div>
                 <Card variant="outlined" className={classes.root}>
      <CardContent className="card">
       <Typography variant="h4" className={classes.title} >Reset Password</Typography>
      <form className={classes.textBox} noValidate autoComplete="off" onSubmit={(e)=>handleSubmite(e)} >
      {error && <Alert severity="error">{error}</Alert> }
      {message && <Alert severity="success">{message}</Alert>}
      <TextField 
        error={false}
        className={classes.input}
        id="standard-basic"
        type="  background"
        label="Email"
        variant="outlined"
        inputRef={emailRef}
        required 
        />
       
    
    
    
    <div>
      <Button  variant="contained" color="primary" className={classes.btn} type="submit" >
      Reset
     </Button>
     </div>
      </form>
      <p className="log-sign-qustion"> <Link to="/login">Log In</Link> </p>
      </CardContent>
      
    </Card>
        </div>
    )
}

export default PasswordReset
