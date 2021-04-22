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
        width:"100%",
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow:'0 3px 5px 2px rgba(33, 203, 243, .3)'
    },
    textBox: {
        '& > *': {
          justifyContent: "center",
          outline:'rgba(33, 203, 243, .3) !important',
          display: "flex",
          margin: theme.spacing(1),
          maxWidth: "none"
        },
       
      },
    input:{
        '&:focus':{
            backgroundColor: 'rgba(33, 203, 243, .3) !important',
        }
    }

  }));

  export default useStyles
 