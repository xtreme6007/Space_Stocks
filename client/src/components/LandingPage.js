import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from "@material-ui/core/Link";
import { Link as Scroll } from 'react-scroll';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
// import FontAwesome from "./IconButton";



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    appbar: {
        background: 'none',
        fontFamily: 'Nunito',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '2rem',
        fontFamily: 'Nunito',
        marginTop: '15px',
    },
    icon: {
        color: '#fff',
        fontsize: '10rem',
    },
    colorText: {
        color: '#5AFF3D',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontFamily: 'Nunito',
        fontSize: '5.5rem',
    },
    simple: {
        color: '#fff',
        fontFamily: 'Nunito',
        fontSize: '5.5rem',
        fontStyle: 'italic',
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '7rem',
     
    },
    fas: {
        color: '#5AFF3D',
    }
}));


export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
      setChecked(true);
  }, []);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root} id='header'>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}> 
            <h1 className={classes.appbarTitle}>
              Space <span className={classes.colorText}>Stocks</span> 
            </h1>
            <div><Link href="/">

          {/* <FontAwesome>
          <div className={classes.appbarTitle}>
      <Icon className="fas fa-space-shuttle" />
          </div> 
          </FontAwesome> */}
          
          </Link>
          </div>
            </Toolbar>
      </AppBar>

      <Collapse in={checked} 
      {...(checked ? { timeout: 1000 } : {})} 
      collapsedHeight={50} >
      <div className={classes.container}>

          <h1 className={classes.title}>Welcome to <br />Stock{''}
   
          <span className={classes.colorText}>
              Trading
          </span>


          <FormControlLabel
    control={<Switch checked={checked} onChange={handleChange} />}
    label="Show"
  />
  <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
    <Paper elevation={4} className={classes.paper}>
      <svg className={classes.svg}>
      </svg>
      <span className={classes.colorText}>
              Has never been so easy
          </span>
    </Paper>
  </Slide>

          </h1>
        
          <Scroll to="place-to-visit" smooth={true}>
          <IconButton>
              <ExpandMoreIcon className={classes.goDown}/>
          </IconButton>
          </Scroll>
      </div>
      </Collapse>
    </div>
  );
}
