import React, {useRef,useState} from 'react'
import {Card,CardContent,Button,Typography,TextField} from '@material-ui/core'
import {Alert} from '@material-ui/lab';
import useStyles from "./materialUIStyling"
import {useAuth} from "../context/authcontext"
import {Link,useHistory} from "react-router-dom";


  
const SignUp = () => {  
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmRef=useRef()
    const classes = useStyles();
    const {singup} = useAuth();
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)
    const history = useHistory();
    const  handleSubmite = async(e) => {
      e.preventDefault()
      if(passwordRef.current.value!==passwordConfirmRef.current.value)
      {setError("password dosnt match")}//note that the useRef has current property to reach the value instead of target on the previous input events
      try{
       setError('')
       setLoading(true)
      await singup(emailRef.current.value,passwordRef.current.value)
      history.push("/login")
    }catch(err){
        setError(`failed to create account 
                  . ${err}`)
        console.log(err)
      }
      setLoading(false)
    }

    return (
        <div>
        <Card variant="outlined" className={classes.root}>
      <CardContent>
       <Typography variant="h4" className={classes.title} >Sign Up</Typography>
      <form className={classes.textBox} noValidate autoComplete="off" onSubmit={(e)=>handleSubmite(e)} >
      {error && <Alert severity="error">{error}</Alert> /*this will work since empty string returns false */}
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
       error={error}
       id="outlined-basic"   
       type="password" 
       label="Password Confirmation" 
       variant="outlined" 
       inputRef={passwordConfirmRef}
       required
       />
    
    <div>
      <Button disable={loading} variant="contained" color="primary" className={classes.btn} type="submit" >
        Sign Up
     </Button>
     </div>
      </form>
      <p className="log-sign-qustion">
      Alredy have an Account ?<Link to="/login">Log In</Link> 
      </p>
      </CardContent>
      
    </Card>
        </div>
    )
}

export default SignUp
