import React, {useRef,useState} from 'react'
import {Card,CardContent,Button,Typography,TextField} from '@material-ui/core'
import {Alert} from '@material-ui/lab';
import useStyles from "./materialUIStyling";
import {Link,useHistory} from "react-router-dom";
import {useAuth} from "../context/authcontext"

const Dashboard = () => {
    const [error,setError] = useState("");
    const classes = useStyles();
    const {currentUser,logout} = useAuth()
    const history = useHistory()


    const handleLogOut = async() =>{
        setError('')
        try{
            await logout()
            history.push("/login")
        }catch{
            setError("failed to log out")
        }
    }
    return (
        <div>
            <Card variant="outlined" className={classes.root}>
      <CardContent className="card">
       <Typography variant="h4" className={classes.title} >Profile</Typography>
      {error && <Alert severity="error">{error}</Alert> }
      <div className="user-info">
          <strong>Email:</strong> {currentUser.email}
      </div>
     
    
    
    <div>
      <Button  variant="contained" color="primary" className={classes.btn} type="submit" >
        Update Profile
     </Button>
     </div>
    
      <p className="log-sign-qustion" onClick={logout}><Link to="/login">Log Out</Link> </p>
      </CardContent>
      
    </Card>
        </div>
    )
}

export default Dashboard
