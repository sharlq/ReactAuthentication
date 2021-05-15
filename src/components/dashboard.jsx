import React from 'react'
import {Card,CardContent,Button,Typography,TextField} from '@material-ui/core'
import useStyles from "./materialUIStyling";
import {Link} from "react-router-dom";
import {useAuth} from "../context/authcontext"

const Dashboard = () => {
    const classes = useStyles();
    const {currentUser,logout} = useAuth()
  

    
    return (
    <div>
      <Card variant="outlined" className={classes.root}>
      <CardContent className="card">
      <Typography variant="h4" className={classes.title} >Profile</Typography>
      
     
     
     
      <div className="user-info">
          <strong>Email:</strong> {currentUser.email}
      </div>
     
    
    
      <div>
      <Link to="/updateUserInfo">
      <Button  variant="contained" color="primary" className={classes.btn} type="submit" to="/updateUserInfo">
        Update Profile
      </Button>
      </Link>
      </div>
    
      <p className="log-sign-qustion" onClick={logout}><Link to="/login">Log Out</Link> </p>
      </CardContent>
      
      </Card>
    </div>
    )
}

export default Dashboard
