import React, {useRef,useState} from 'react'
import {Card,CardContent,Button,Typography,TextField} from '@material-ui/core'
import {Alert} from '@material-ui/lab';
import useStyles from "./materialUIStyling";
import {useAuth} from "../context/authcontext";
import {Link} from "react-router-dom";

const LogIn = () => {
    const emailRef=useRef()
    const passwordRef=useRef()
    const classes = useStyles();
    const {singup} = useAuth();
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)

   const  handleSubmite = async(e) => {
      e.preventDefault()
      try{
       setError('')
       setLoading(true)
      await singup(emailRef.current.value,passwordRef.current.value)
      }catch(err){
        setError('failed to Log in')
        console.log(err)
      }
      setLoading(false)
    }

    return (
        <div>
        <Card variant="outlined" className={classes.root}>
      <CardContent className="card">
       <Typography variant="h4" className={classes.title} >Log In</Typography>
      <form className={classes.textBox} noValidate autoComplete="off" onSubmit={(e)=>handleSubmite(e)} >
      {error && <Alert severity="error">{error}</Alert> }
      
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
       
      <TextField
        error={false}
        id="filled-basic"
        type="password"
        label="Password"
        variant="outlined" 
        inputRef={passwordRef}
        required
        />
    
    
    <div>
      <Button disable={loading} variant="contained" color="primary" className={classes.btn} type="submit" >
        LOG IN
     </Button>
     </div>
      </form>
      <p>Need an Account ? <Link to="/signup">Sign Up</Link> </p>
      </CardContent>
      
    </Card>
        </div>
    )
}

export default LogIn
