import React, {useRef,useState} from 'react'
import {Card,CardContent,Button,Typography,TextField} from '@material-ui/core'
import {Alert} from '@material-ui/lab';
import useStyles from "./materialUIStyling"
import {useAuth} from "../context/authcontext"
import {Link,useHistory} from "react-router-dom";
import { DeleteForeverRounded } from '@material-ui/icons';

const UpdateUserInfo = () => {
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmRef=useRef()
    const classes = useStyles();
    const {currentUser,updatePassword,updateEmail} = useAuth();
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)
    const history = useHistory();
    const  handleSubmite = (e) => {
      e.preventDefault()
      setLoading(true)
      setError("")
      if(passwordRef.current.value!==passwordConfirmRef.current.value)
      {setError("password dosnt match")}
          const promises =[]
          if(emailRef.current.value !== currentUser.email &&emailRef.current.value){
              promises.push(updateEmail(emailRef.current.value))
          }
          if(passwordRef.current.value){
              promises.push(updatePassword(passwordRef.current.value))
          }
          Promise.all(promises).then(()=>{
              history.push("/")
          }).catch((err)=>{
              setError(`Failed to update account ${err}`)
          }).finally(()=>setLoading(false))

     
    }

    return (
        <div>
        <Card variant="outlined" className={classes.root}>
      <CardContent>
       <Typography variant="h4" className={classes.title} >Update User Info</Typography>
      <form className={classes.textBox} noValidate autoComplete="off" onSubmit={(e)=>handleSubmite(e)} >
      {error && <Alert severity="error">{error}</Alert> /*this will work since empty string returns false */}
      <TextField 
       
        className={classes.input}
        id="standard-basic"
        type="  background"
        label="Email"
        variant="outlined"
        inputRef={emailRef}
        placeholder={currentUser.email}
        />
        {/* //note here that the attributes is different from those of the normal tags you can go back to the api refferenc to check them */}
      <TextField
        error={error}
        id="filled-basic"
        type="password"
        label="Password"
        variant="outlined" 
        inputRef={passwordRef}
        placeholder="Leave empty if you dont want to change"
        />
      <TextField
       error={error}
       id="outlined-basic"   
       type="password" 
       label="Password Confirmation" 
       variant="outlined" 
       inputRef={passwordConfirmRef}
       placeholder="Leave empty if you dont want to change"
       />
    
    <div>
      <Button disable={loading} variant="contained" color="primary" className={classes.btn} type="submit" >
        Update
     </Button>
     </div>
      </form>
      <p className="log-sign-qustion">
      <Link to="/">Cancel</Link> 
      </p>
      </CardContent>
      
    </Card>
        </div>
    )
    }
export default UpdateUserInfo