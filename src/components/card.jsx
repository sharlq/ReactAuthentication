import React from 'react'
import {Card,CardContent,Button,Typography,TextField} from '@material-ui/core'
import useStyles from "./materialUIStyling"


  
const CardComponent = () => {  
    const classes = useStyles();
    return (
        <div>
             <Card variant="outlined" className={classes.root}>
      <CardContent>
       <Typography variant="h4" className={classes.title} >Sign Up</Typography>
      <form className={classes.textBox} noValidate autoComplete="off">
      <TextField id="standard-basic"   type="email" label="Email" variant="outlined" />
      <TextField id="filled-basic"   type="password" label="Password" variant="outlined" />
      <TextField id="outlined-basic"   type="password" label="Password Confirmation" variant="outlined" />
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

export default CardComponent
