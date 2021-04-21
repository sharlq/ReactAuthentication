import React, {useRef} from 'react'
import {Card,CardContent,Button,Typography,TextField} from '@material-ui/core'
import useStyles from "./materialUIStyling"


  
const SignUp = () => {  
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmRef=useRef()

    const classes = useStyles();


    return (
        <div>
        <Card variant="outlined" className={classes.root}>
      <CardContent>
       <Typography variant="h4" className={classes.title} >Sign Up</Typography>
      <form className={classes.textBox} noValidate autoComplete="off">
      <TextField 
        className={classes.input}
        id="standard-basic"
        type="  background"
        label="Email"
        variant="outlined"
        ref={emailRef} 
        />
      <TextField
        id="filled-basic"
        type="password"
        label="Password"
        variant="outlined" 
        ref={passwordRef}
        />
      <TextField
       id="outlined-basic"   
       type="password" 
       label="Password Confirmation" 
       variant="outlined" 
       ref={passwordConfirmRef}
       />
    <div>
      <Button variant="contained" color="primary" className={classes.btn}>
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
