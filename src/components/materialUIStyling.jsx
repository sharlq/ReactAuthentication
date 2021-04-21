import { makeStyles } from '@material-ui/core/styles';
 const useStyles = makeStyles((theme)=>({
    root: {
        margin: "0 auto 0 auto",
      minWidth: 275,
      maxWidth: 400
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
    },
    textBox: {
        '& > *': {
          justifyContent: "center",
          
          display: "flex",
          margin: theme.spacing(1),
          maxWidth: "none"
        },
      },

  }));

  export default useStyles
 