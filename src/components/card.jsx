import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
    root: {
        margin: "0 auto 0 auto",
      minWidth: 275,
      maxWidth: 400
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
    width:"fit-content",
      margin: "0 auto 0 auto ",
      fontWeight:500,
      marginBottom: 10,
    },
    pos: {
      marginBottom: 12,
    },
    btn:{
        width:"100%"
    }

  });
  const textBoxStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        justifyContent: "center",
        
        display: "flex",
        margin: theme.spacing(1),
        maxWidth: "none"
      },
    },
  }));
  
const CardComponent = () => {
     
    const classes = useStyles();
    const textBoxClasses = textBoxStyles();


      const bull = <span className={classes.bullet}>•</span>;
    return (
        <div>
             <Card variant="outlined" className={classes.root}>
      <CardContent>
       <Typography variant="h4" className={classes.title} >Sign Up</Typography>
      <form className={textBoxClasses.root} noValidate autoComplete="off">
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
