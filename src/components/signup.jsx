import React, {useRef} from 'react'
import {Card,CardContent,Button,Typography,TextField} from '@material-ui/core'
import useStyles from "./materialUIStyling"
import {useAuth} from "../context/authcontext"


  
const SignUp = () => {  
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmRef=useRef()
    const classes = useStyles();
    const {signup} = useAuth();

   const handleSubmite = (e) => {
      e.preventDefault()
       signup(emailRef.current.value,passwordRef.current.value)
    }

    return (
        <div>
        <Card variant="outlined" className={classes.root}>
      <CardContent>
       <Typography variant="h4" className={classes.title} >Sign Up</Typography>
      <form className={classes.textBox} noValidate autoComplete="off" onSubmit={(e)=>handleSubmite(e)} >
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
        {/* //note here that the attributes is different from those of the normal tags you can go back to the api refferenc to check them */}
      <TextField
        error={false}
        id="filled-basic"
        type="password"
        label="Password"
        variant="outlined" 
        inputRef={passwordRef}
        required
        />
      <TextField
       error={false}
       id="outlined-basic"   
       type="password" 
       label="Password Confirmation" 
       variant="outlined" 
       inputRef={passwordConfirmRef}
       required
       />
    
    <div>
      <Button variant="contained" color="primary" className={classes.btn} type="submit" >
        Sign Up
     </Button>
     </div>
     
      </form>
        
      </CardContent>
    
    </Card>
        </div>
    )
}

export default SignUp
